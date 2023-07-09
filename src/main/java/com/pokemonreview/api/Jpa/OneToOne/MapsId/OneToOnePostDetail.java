package com.pokemonreview.api.Jpa.OneToOne.MapsId;
//https://github.com/vladmihalcea/high-performance-java-persistence/blob/master/core/src/main/java/com/vladmihalcea/hpjp/hibernate/forum/Post.java
//https://vladmihalcea.com/the-best-way-to-map-a-onetoone-relationship-with-jpa-and-hibernate/
//The best way to map a @OneToOne relationship is to use @MapsId.
//This way, the id property serves as both Primary Key and Foreign Key.
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity()
public class OneToOnePostDetail {
 
    @Id
    private Long id;
 
    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    private OneToOnePost post;
 
    public OneToOnePostDetail() {}
 
 
}
