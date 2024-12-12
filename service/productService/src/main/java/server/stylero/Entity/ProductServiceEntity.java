package server.stylero.Entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product_details")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductServiceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "item_name")
    private String name;
    @Column(name = "description")
    private String desc;
    private int price;
    private int rating;
    private boolean refurnished;

    // @OneToMany(mappedBy = "item", cascade = CascadeType.ALL, orphanRemoval = true)
    // private List<ProductImageEntity> images;
    // private int user_id;
    // also add for image
}
