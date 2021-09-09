package fi.vamk.e1800927.finalproject.comment;

import fi.vamk.e1800927.finalproject.product.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends CrudRepository<Comment, Integer> {
}
