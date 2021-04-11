package com.supero.todo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.supero.todo.model.Card;
import com.supero.todo.service.CardService;

@RestController
@RequestMapping("/card")
public class CardController{
	
	private final CardService cardService;
	
	public CardController(CardService cardService) {
		this.cardService = cardService;
	}

	@CrossOrigin
	@GetMapping
	public List<Card> list() {
		return cardService.listCards();
	}
	@CrossOrigin
	@PostMapping	
	public Card save(@RequestBody Card card) {
		return cardService.saveCard(card);
	}
	@CrossOrigin
	@PutMapping("/{cardId}")
	public Optional<Card> update(@PathVariable("cardId") Long cardId,
					   @RequestBody Card card) {
		return cardService.updateCard(card, cardId);	
	}
	@CrossOrigin
	@PostMapping("/{cardId}")
	public void delete(@PathVariable("cardId") Long cardId) {
		cardService.deleteCard(cardId);
	}
}
