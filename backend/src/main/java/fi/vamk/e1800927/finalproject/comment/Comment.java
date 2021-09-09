package fi.vamk.e1800927.finalproject.comment;

import fi.vamk.e1800927.finalproject.product.Product;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NamedQuery(name = "Comment.findAll", query = "SELECT p FROM Comment p")
public class Comment implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String writter;
    private String text;
    private double quantity;
    private String phone;
    private String email;
    private String address;

    @ManyToOne
    @JoinColumn(name="product_comment_fk")
    private Product product;

    public Comment() {}

    public Comment(String writter, String text, double quantity, String phone, String email, String address, Product product) {
        this.writter = writter;
        this.text = text;
        this.quantity = quantity;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.product = product;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getWritter() {
        return writter;
    }

    public void setWritter(String writter) {
        this.writter = writter;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}