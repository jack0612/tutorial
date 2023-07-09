package com.pokemonreview.api.Jpa.Auditing;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.*;
//@MappedSuperclass annotation is used to specify that the class itself is not an entity.
//but each class that extends the abstract Auditable class will contain its attributes.
//@EntityListeners annotation is used to configure AuditingEntityListener which contains 
//the @PrePersist and @PreUpdate methods  to capture auditing information
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable {

	@CreatedBy
	@Column(updatable = false)
	protected Long createdBy;

	@CreatedDate
	@Column(updatable = false)
	protected LocalDateTime createdDate;

	@LastModifiedBy
	protected Long lastModifiedBy;

	@LastModifiedDate
	protected LocalDateTime lastModifiedDate;

	public Long getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public Long getLastModifiedBy() {
		return lastModifiedBy;
	}

	public void setLastModifiedBy(Long lastModifiedBy) {
		this.lastModifiedBy = lastModifiedBy;
	}

	public LocalDateTime getLastModifiedDate() {
		return lastModifiedDate;
	}

	public void setLastModifiedDate(LocalDateTime lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}
}