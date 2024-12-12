package server.stylero.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import server.stylero.Entity.ProductServiceEntity;
import server.stylero.Service.ProductService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/product")
public class ProductController {
    
    @Autowired
    private ProductService service;

    @GetMapping
    public List<ProductServiceEntity> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping("{id}")
    public ProductServiceEntity getItem(@PathVariable Long id) {
        return service.getItemById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<String> postItem(@RequestBody ProductServiceEntity entity) {
        String res = service.postItem(entity); 
        return ResponseEntity.ok().body(res);
    }
    
    @DeleteMapping("remove/{id}")
    public String deleteItem(@PathVariable("id") Long product_id) {
        return service.deleteItem(product_id);
    }
    
    @PutMapping("update/{id}")
    public ProductServiceEntity putMethodName(@PathVariable Long id, @RequestBody ProductServiceEntity product) {
        return service.editItem(id, product);
    }

}
