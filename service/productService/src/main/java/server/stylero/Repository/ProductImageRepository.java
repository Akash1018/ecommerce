package server.stylero.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import server.stylero.Entity.ProductImageEntity;

@Repository
public interface ProductImageRepository extends JpaRepository<ProductImageEntity, Long> {
    List<ProductImageEntity> findByProductId(Long productId);
}
