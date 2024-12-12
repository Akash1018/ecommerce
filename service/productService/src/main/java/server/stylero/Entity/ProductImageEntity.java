package server.stylero.Entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name = "product_image")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductImageEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Lob
    @Column(name = "image_data", nullable = false, length = 1000)
    private byte[] imageData;

    @Column(name = "priority", nullable = false)
    private int priority;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "item_id", nullable = false, referencedColumnName = "id")
    private ProductServiceEntity product;
}
