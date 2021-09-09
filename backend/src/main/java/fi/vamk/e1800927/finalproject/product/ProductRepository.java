package fi.vamk.e1800927.finalproject.product;

import fi.vamk.e1800927.finalproject.product.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {
}
