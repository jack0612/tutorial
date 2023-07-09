package com.pokemonreview.api.Jpa.Auditing;

//https://turkogluc.com/spring-data-jpa-auditing/
import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

@Component
public class AuditAwareImpl implements AuditorAware<Long> {

	@Override
	public Optional<Long> getCurrentAuditor() {
//        ApplicationUser principal = (ApplicationUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        return Optional.of(principal.getId());
		return Optional.of(1L);
	}
}