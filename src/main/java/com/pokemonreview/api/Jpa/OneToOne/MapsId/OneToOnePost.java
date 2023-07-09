package com.pokemonreview.api.Jpa.OneToOne.MapsId;

//https://github.com/vladmihalcea/high-performance-java-persistence/blob/master/core/src/main/java/com/vladmihalcea/hpjp/hibernate/forum/Post.java
//https://vladmihalcea.com/the-best-way-to-map-a-onetoone-relationship-with-jpa-and-hibernate/

import jakarta.persistence.*;
 

 
@Entity
 
public class OneToOnePost {


    @Id
    @GeneratedValue
    private Long id;

    private String title;

  
    @OneToOne(
        mappedBy = "post",
        fetch = FetchType.LAZY,
        optional = false
    )
    private OneToOnePostDetail detail;



	public OneToOnePost() {
		super();
	}



	public OneToOnePost(Long id, String title, OneToOnePostDetail detail) {
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



	public OneToOnePostDetail getDetail() {
		return detail;
	}



	public void setDetail(OneToOnePostDetail detail) {
		this.detail = detail;
	}

 

 
}