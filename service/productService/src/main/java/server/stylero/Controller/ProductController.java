package server.stylero.Controller;

import java.io.IOException;
import java.util.List;
import java.util.zip.DataFormatException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import server.stylero.DTO.ProductItemDTO;
import server.stylero.Entity.ProductServiceEntity;
import server.stylero.Service.ProductService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
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

    @GetMapping("/image/{id}")
    public ResponseEntity<List<byte[]>>  getImageByID(@PathVariable Long id) throws DataFormatException, IOException{
            return ResponseEntity.status(HttpStatus.OK)
                    .body(service.getImage(id));
    }

    @GetMapping("{id}")
    public ProductServiceEntity getItem(@PathVariable Long id) {
        return service.getItemById(id);
    }

    @PostMapping(path = "/add", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<String> postItem(@ModelAttribute ProductItemDTO entity, @RequestParam("image") MultipartFile[] files) {
        try {
            System.out.println("multiple files" + files);
            String res = service.postItem(entity, files); 
            return ResponseEntity.ok().body(res);
        } catch (Exception e) {
            return ResponseEntity.ok().body("Failed to add item: " + e);
        }
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
