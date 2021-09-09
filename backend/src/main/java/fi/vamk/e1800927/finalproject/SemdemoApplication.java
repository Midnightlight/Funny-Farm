package fi.vamk.e1800927.finalproject;

import fi.vamk.e1800927.finalproject.comment.Comment;
import fi.vamk.e1800927.finalproject.comment.CommentRepository;
import fi.vamk.e1800927.finalproject.product.Product;
import fi.vamk.e1800927.finalproject.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@SpringBootApplication
public class SemdemoApplication {
	@Autowired
	private ProductRepository productRepo;
	@Autowired
	private CommentRepository commentRepo;

	public static void main(String[] args) {
		SpringApplication.run(SemdemoApplication.class, args);
	}

	@Bean
	public void initData() throws IOException {
		Product att = new Product("Rice", "Super quality", "0123456789", 2.99, "Vaasa", new String(Files.readAllBytes(Paths.get("src/main/resources/static/rice.txt"))));
		Product att2 = new Product("Watermelon", "Fresh and always fresh!", "0123456788", 1.99, "Helsinki", new String(Files.readAllBytes(Paths.get("src/main/resources/static/watermelon.txt"))));
		Product att3 = new Product("Strawberry", "Sweet and juicy, eat me!!!", "0123456787", 4.99, "Tampere", new String(Files.readAllBytes(Paths.get("src/main/resources/static/strawberry.txt"))));
		productRepo.save(att);
		productRepo.save(att2);
		productRepo.save(att3);
		Product p1 = productRepo.findById(1).get();
		Comment c1 = new Comment("Anonymous", "I want to buy 1kg of this delicious rice.", 1, "01222222123", "a@b.c", "1A Wallstreet", p1);
		Comment c2 = new Comment("Giang", "Export to Japan, 100 tons.", 100000, "01222222148", "x@y.z", "2C Vuori", p1);
		Product p2 = productRepo.findById(2).get();
		Comment c3 = new Comment("Tom", "Two watermelons please.", 2,"0123321324", "e@d.z", "3Z Voyrin", p2);
		commentRepo.save(c1);
		commentRepo.save(c2);
		commentRepo.save(c3);
	}

}
