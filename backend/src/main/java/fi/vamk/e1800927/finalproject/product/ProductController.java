package fi.vamk.e1800927.finalproject.product;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class ProductController {
    @Autowired
    private ProductRepository repository;

    @GetMapping("/products")
    public Iterable<Product> list() {
        return repository.findAll();
    }

    @GetMapping("/product/{id}")
    public Optional<Product> get(@PathVariable("id") int id) {
        return repository.findById(id);
    }

    @PostMapping("/product")
    public @ResponseBody
    Product create(@RequestBody Product item) {
        return repository.save(item);
    }

    @PutMapping("/product")
    public @ResponseBody
    Product update(@RequestBody Product item) {
        return repository.save(item);
    }

    @DeleteMapping("/product")
    public void delete(@RequestBody Product item) {
        repository.delete(item);
    }
}

