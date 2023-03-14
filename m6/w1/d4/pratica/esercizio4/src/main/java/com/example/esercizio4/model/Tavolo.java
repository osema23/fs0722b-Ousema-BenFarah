package com.example.esercizio4.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Tavoli")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class Tavolo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer numero;
	private int numeroMassimoCoperti;
	private Boolean occupato;
}
