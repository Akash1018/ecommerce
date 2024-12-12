package server.stylero.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.stylero.Entity.ProductServiceEntity;
import server.stylero.Repository.ProductServiceRepository;

@Service
public class ProductService {
    @Autowired
    private ProductServiceRepository repo;

    public ProductServiceEntity getItemById(Long product_id) {
       Optional<ProductServiceEntity> res =  repo.findById(product_id);
       return res.get();
    }

    public List<ProductServiceEntity> getAllProducts() {
        return repo.findAll();
    }

    public String postItem(ProductServiceEntity product) {
        try {
            System.out.println(product);
            repo.save(product);
            return "Uploaded Successfully";
        } catch (Exception e) {
            System.out.println("Failed: " + product);
            return "Upload failed";
        }
    }
    
    public String deleteItem(Long product_id) {
        Optional<ProductServiceEntity> res = repo.findById(product_id);
        if(res.isPresent()) {
            repo.deleteById(product_id);
            return "Item Deleted";
        }
        return "Item Not present";
    }
    
    public ProductServiceEntity editItem(Long product_id, ProductServiceEntity product) {
        ProductServiceEntity item = getItemById(product_id);
        item.setDesc(product.getDesc());
        item.setName(product.getName());
        item.setPrice(product.getPrice());
        item.setRefurnished(product.isRefurnished());
        repo.save(item);
        return product;
    }
}
