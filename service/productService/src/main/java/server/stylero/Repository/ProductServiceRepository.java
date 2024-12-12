package server.stylero.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import server.stylero.Entity.ProductServiceEntity;

@Repository
public interface ProductServiceRepository extends JpaRepository<ProductServiceEntity, Long> {
    
}
