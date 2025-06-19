# My Pokémon App

Este projeto é um pequeno aplicativo desenvolvido com **Ionic e Angular** que consome a API pública **PokeAPI**. O objetivo principal é exibir uma lista de Pokémons, permitir a navegação para uma tela de detalhes e funcionalidades adicionais como paginação.

## Abordagem e Padrões de Design

A arquitetura do projeto segue o padrão **Component-Service** do Angular, separando a lógica de negócio da apresentação da UI. Utilize-se **Injeção de Dependência** para gerenciar os serviços (ex: `PokemonService`), garantindo modularidade e testabilidade. A comunicação com a PokeAPI é feita via `HttpClient` e gerenciada com **RxJS**, aplicando operadores como `switchMap` e `forkJoin` para lidar com requisições assíncronas.

## Estilo de Codificação

Adotei um estilo de codificação limpo e legível, com nomes descritivos para variáveis, funções e componentes, visando a clareza e a manutenção futura. O uso de **TypeScript** é prioritário para tipagem forte, reduzindo erros em tempo de desenvolvimento. As convenções de código do Angular são seguidas para manter a consistência.

## Funcionalidades Implementadas (até o momento)

* Listagem paginada de Pokémons com nome e imagem.

## Como Rodar o Projeto

1.  Certifique-se de ter Node.js (com npm) e Ionic CLI instalados globalmente.
2.  Clone o repositório: `git clone https://github.com/mdsjr/my-pokemon-app.git`
3.  Navegue até a pasta do projeto: `cd my-pokemon-app`
4.  Instale as dependências: `npm install`
5.  Inicie o servidor de desenvolvimento: `ionic serve`

O aplicativo será aberto automaticamente no seu navegador em `http://localhost:8100`.
