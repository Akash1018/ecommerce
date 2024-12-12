package server.stylero.DTO;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductItemDTO {
    private String name;
    private String desc;
    private int price;
    private int rating;
    private boolean refurnished;
}
