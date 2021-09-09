package fi.vamk.e1800927.finalproject.product;

import fi.vamk.e1800927.finalproject.comment.Comment;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

@Entity
@NamedQuery(name = "Product.findAll", query = "SELECT p FROM Product p")
public class Product implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String description;
    private String phone;
    private double price;
    private String location;

    @Column(columnDefinition="CLOB")
    @Lob
    private String images;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Comment> comments;

    public Product() {}

    public Product(String title, String description, String phone, double price, String location, String images) {
        this.title = title;
        this.description = description;
        this.phone = phone;
        this.price = price;
        this.location = location;
        this.images = images;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }
}
