package server.stylero.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.transaction.Transactional;
import server.stylero.DTO.ProductItemDTO;
import server.stylero.Entity.ProductImageEntity;
import server.stylero.Entity.ProductServiceEntity;
import server.stylero.Repository.ProductImageRepository;
import server.stylero.Repository.ProductServiceRepository;

@Service
public class ProductService {
    @Autowired
    private ProductServiceRepository repo;
    @Autowired
    private ProductImageRepository imageRepo;

    @Transactional
    public ProductServiceEntity getItemById(Long product_id) {
       Optional<ProductServiceEntity> res =  repo.findById(product_id);
       return res.get();
    }

    @Transactional
    public List<ProductServiceEntity> getAllProducts() {
        return repo.findAll();
    }

    @Transactional
    public String postItem(ProductItemDTO product, MultipartFile[] imageFiles) throws IOException {
        ProductServiceEntity item = new ProductServiceEntity();
        item.setDesc(product.getDesc());
        item.setName(product.getName());
        item.setPrice(product.getPrice());
        item.setRating(product.getRating());
        item.setRefurnished(product.isRefurnished());
        repo.save(item);

        if(imageFiles != null) {
            int priority = 1;
            for(MultipartFile image : imageFiles) {
        
                ProductImageEntity imageToSave = ProductImageEntity.builder()
                        .priority(priority)
                        .imageData(ImageHandling.compressImage(image.getBytes()))
                        .product(item)
                        .build();
                priority++;
                imageRepo.save(imageToSave);
            }
        }
        return "Uploaded Successfully";
    }
    
    @Transactional
    public String deleteItem(Long product_id) {
        Optional<ProductServiceEntity> res = repo.findById(product_id);
        if(res.isPresent()) {
            repo.deleteById(product_id);
            return "Item Deleted";
        }
        return "Item Not present";
    }
    
    @Transactional
    public ProductServiceEntity editItem(Long product_id, ProductServiceEntity product) {
        ProductServiceEntity item = getItemById(product_id);
        item.setDesc(product.getDesc());
        item.setName(product.getName());
        item.setPrice(product.getPrice());
        item.setRefurnished(product.isRefurnished());
        repo.save(item);
        return product;
    }

    @Transactional
    public List<byte[]> getImage(Long id) throws DataFormatException, IOException {
        List<ProductImageEntity> dbImages = imageRepo.findByProductId(id);
        if(dbImages == null) return null;
        List<byte[]> product_images = new ArrayList<>(); 
        for(ProductImageEntity image : dbImages) {
            byte[] val = ImageHandling.decompressImage(image.getImageData());
            product_images.add(val);
        }
        return product_images;
    }
}
