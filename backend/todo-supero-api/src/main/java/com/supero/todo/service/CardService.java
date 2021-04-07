package com.supero.todo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.supero.todo.model.Card;
import com.supero.todo.repository.CardRepository;

@Service
public class CardService {
	
	public CardService() {		
	}
	
	@Autowired
	private CardRepository cardRepository;
	
	public List<Card> listCards() {
		return cardRepository.findAll();
	}
	
	public Card saveCard(Card card) {
		return cardRepository.save(card);
	}
	
	public Optional<Card> updateCard(Card card, Long id){
		return cardRepository.findById(id)
		.map(record -> {
			record.setTitle(card.getTitle());
			record.setContent(card.getContent());
			record.setFinished(card.getFinished());
			record.setDateAlt(card.getDateAlt());
			Card updated = cardRepository.save(record);
			return updated;
		});		
	}
	
	public void deleteCard(Long id){
		if(cardRepository.findById(id) != null) {
			cardRepository.deleteById(id);			
		}
	}
}
