package com.pokemonreview.api.Jpa.OneToOne.MapsId;
//https://github.com/vladmihalcea/high-performance-java-persistence/blob/master/core/src/main/java/com/vladmihalcea/hpjp/hibernate/forum/Post.java
//https://vladmihalcea.com/the-best-way-to-map-a-onetoone-relationship-with-jpa-and-hibernate/
//The best way to map a @OneToOne relationship is to use @MapsId.
//This way, the id property serves as both Primary Key and Foreign Key.
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;


 
@Entity()
@Builder
public class Mapsid_OneToOne_PostDetail {
 
    public Mapsid_OneToOne_PostDetail(Long id, String detail, Mapsid_OneToOne_Post post) {
		super();
		this.detail_id = id;
		this.detail = detail;
		this.post = post;
	}
    //detail_id is a pk and fk, whose value is equal to id of post table
	@Id
    private Long detail_id;
    
    String detail;
 
    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    //@JoinColumn(name = "detail_id")
    //the column name must be the same as the field name: detail_id
    private Mapsid_OneToOne_Post post;
 
    public Mapsid_OneToOne_PostDetail() {}

	public Long getId() {
		return detail_id;
	}

	public void setId(Long id) {
		this.detail_id = id;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public Mapsid_OneToOne_Post getPost() {
		return post;
	}

	public void setPost(Mapsid_OneToOne_Post post) {
		this.post = post;
	}

	@Override
	public String toString() {
		return "Mapsid_OneToOne_PostDetail [detail_id=" + detail_id + ", detail=" + detail + " ]";
	}
 
 
}
