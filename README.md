# Supero-Task-List

### Descrição

Teste para vaga Supero, Task-List.

## Tecnologias

* Front-end - React, Masonry, MaterialUI
* Back-end - Java 11, Spring Boot, Spring JPA, Lombok
* Database - MySQL em container Docker

## Instruções de execução

* Executar o `docker-compose.yaml` que está localizado em `backend/todo-supero-api/src/main/resources/docker/mysql/`
* Em `localhost:8080` acesse o ***Adminer***, que vem junto da execução do banco no container, com o usuário `root` e senha `example`
* Crie o banco `db_supero_todo`
* Import o conteúdo da pasta `backend`, como Maven Project, para sua IDE de preferência e execute a rotina padrão para baixar as dependências do projeto.
* A classe main é a `TodoSuperoApiApplication.java`, basta executá-la para rodar o projeto


* Para execução do front-end basta rodar `npm install` e em seguida `npm start`

Obs: Deve-se ter o Lombok instalado no Eclipse, caso escolha essa IDE como principal.
