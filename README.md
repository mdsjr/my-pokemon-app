# My Pokémon App

Este projeto é um pequeno aplicativo desenvolvido com **Ionic e Angular** que consome a API pública **PokeAPI**. O objetivo principal é exibir uma lista de Pokémons, permitir a navegação para uma tela de detalhes e funcionalidades adicionais como paginação.

## Funcionalidades Implementadas

- **Listagem de Pokémos** : Exibe uma lista paginada de Pokémons com seus nomes e imagens.
- **Navegação Detalhada**: Permite navegar da lista para uma tela de detalhes específica de cada Pokémon.
- **Tela de Detalhes**: Apresenta informações adicionais do Pokémon selecionado, como tipos, altura, peso, habilidades e estatísticas base, além de múltiplas imagens (normal e shiny).
- **Gestão de Favoritos**: O usuário pode marcar/desmarcar Pokémons como favoritos na tela de detalhes. A lista de favoritos é persistida localmente (via localStorage).
- **Tela de Favoritos**: Uma seção dedicada exibe todos os Pokémons marcados como favoritos, com opção de remoção direta da lista.
  Paginação: Implementada para otimizar o carregamento e a usabilidade na lista principal de Pokémons.
- **Responsividade**: A interface se adapta para funcionar adequadamente em diferentes orientações de dispositivos móveis.

## Abordagem Técnica e Padrões de Design

A arquitetura do aplicativo segue os princípios do Angular e Ionic, focando em:

- **Componentes Standalone**: Utilização do modelo de componentes autônomos do Angular para uma estrutura de código mais limpa e modular.
- **Injeção de Dependência**: Emprego extensivo da Injeção de Dependência para gerenciar serviços (PokemonService) e dependências, promovendo testabilidade e reusabilidade.
- **Comunicação com API**: O HttpClient do Angular é utilizado para interagir com a PokeAPI, com a orquestração de requisições assíncronas gerenciada de forma eficiente pelo RxJS (utilizando switchMap e forkJoin).
- **Gerenciamento de Estado Local**: Para a funcionalidade de favoritos, o localStorage é empregado para persistência de dados no dispositivo, com o BehaviorSubject do RxJS notificando as mudanças em tempo real para os componentes subscritos.
- **Roteamento**: O Angular Router é configurado para navegação entre as telas principal, de detalhes e de favoritos.
- **Estilo de Codificação**: Priorizei um código limpo, legível e bem-organizado, seguindo as diretrizes do Angular e utilizando TypeScript para garantir tipagem forte e robustez.

## Como Rodar o Projeto

1.  Certifique-se de ter Node.js (com npm) e Ionic CLI instalados globalmente.
2.  Clone o repositório: `git clone https://github.com/mdsjr/my-pokemon-app.git`
3.  Navegue até a pasta do projeto: `cd my-pokemon-app`
4.  Instale as dependências: `npm install`
5.  Inicie o servidor de desenvolvimento: `ionic serve`

O aplicativo será aberto automaticamente no seu navegador em `http://localhost:8100`.

## Demonstração do Projeto

Assista a uma breve demonstração das funcionalidades do aplicativo:

<video src="./src/app/media/demonstracaoApiPokemon.mp4" controls autoplay muted loop style="width:100%; max-width:800px;"></video>
