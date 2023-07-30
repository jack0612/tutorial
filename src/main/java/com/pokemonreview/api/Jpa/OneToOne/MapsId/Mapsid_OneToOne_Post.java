package com.pokemonreview.api.Jpa.OneToOne.MapsId;

 
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

//https://github.com/vladmihalcea/high-performance-java-persistence/blob/master/core/src/main/java/com/vladmihalcea/hpjp/hibernate/forum/Post.java
//https://vladmihalcea.com/the-best-way-to-map-a-onetoone-relationship-with-jpa-and-hibernate/

import jakarta.persistence.*;
import lombok.Builder;
import lombok.ToString;
 

 
@Entity
@Builder
 
public class Mapsid_OneToOne_Post {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    //using @GeneratedValue(strategy = GenerationType.IDENTITY) will cause runtime exception
    private Long id;

    private String title;

  
    @OneToOne(
        mappedBy = "post",
        fetch = FetchType.LAZY, cascade = CascadeType.ALL,
        optional = false
    )
    @PrimaryKeyJoinColumn
	@Fetch(FetchMode.JOIN)
    private Mapsid_OneToOne_PostDetail detail;



	public Mapsid_OneToOne_Post() {
		super();
	}



	public Mapsid_OneToOne_Post(Long id, String title, Mapsid_OneToOne_PostDetail detail) {
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
		return "Mapsid_OneToOne_Post [id=" + id + ", title=" + title + ", detail=" + detail + "]";
	}

 

 
}