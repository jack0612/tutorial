package com.pokemonreview.api.Jpa.OneToOne.MapsId;

//https://github.com/vladmihalcea/high-performance-java-persistence/blob/master/core/src/main/java/com/vladmihalcea/hpjp/hibernate/forum/Post.java
//https://vladmihalcea.com/the-best-way-to-map-a-onetoone-relationship-with-jpa-and-hibernate/

import jakarta.persistence.*;
import lombok.Builder;
import lombok.ToString;
 

 
@Entity
@Builder
 
public class MapSid_OneToOne_Post {


    @Id
    @GeneratedValue
    private Long id;

    private String title;

  
    @OneToOne(
        mappedBy = "post",
        fetch = FetchType.LAZY, cascade = CascadeType.ALL,
        optional = false
    )
    @PrimaryKeyJoinColumn
    private Mapsid_OneToOne_PostDetail detail;



	public MapSid_OneToOne_Post() {
		super();
	}



	public MapSid_OneToOne_Post(Long id, String title, Mapsid_OneToOne_PostDetail detail) {
		super();
		this.id = id;
		this.title = title;
		this.detail = detail;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getTitle() {
		return title;
	}



	public void setTitle(String title) {
		this.title = title;
	}



	public Mapsid_OneToOne_PostDetail getDetail() {
		return detail;
	}



	public void setDetail(Mapsid_OneToOne_PostDetail detail) {
		this.detail = detail;
	}



	@Override
	public String toString() {
		return "MapSid_OneToOne_Post [id=" + id + ", title=" + title + ", detail=" + detail + "]";
	}

 

 
}