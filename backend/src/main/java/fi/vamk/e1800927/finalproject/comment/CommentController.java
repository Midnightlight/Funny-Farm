package fi.vamk.e1800927.finalproject.comment;

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
public class CommentController {
    @Autowired
    private CommentRepository repository;

    @GetMapping("/comments")
    public Iterable<Comment> list() {
        return repository.findAll();
    }

    @GetMapping("/comment/{id}")
    public Optional<Comment> get(@PathVariable("id") int id) {
        return repository.findById(id);
    }

    @PostMapping("/comment")
    public @ResponseBody
    Comment create(@RequestBody Comment item) {
        return repository.save(item);
    }

    @PutMapping("/comment")
    public @ResponseBody
    Comment update(@RequestBody Comment item) {
        return repository.save(item);
    }

    @DeleteMapping("/comment")
    public void date(@RequestBody Comment item) {
        repository.delete(item);
    }
}

