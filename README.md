# teste-keepSimple


## O que é?
    Criei um pequeno gerenciador de dados do usuário, com telas de login, cadastro e detalhes do usuário,
    com a possibilidade de edição de cadastro, exclusão do perfil e sair da página de detalhes.

## O que foi usado
    Foi usado o AngularJS na versão 1.6, respeitando o StyleGuide do john papa, Sass como pré-processador, Gulp como Task Runner e o Json-Server como API

## Como usar?
- Instale as dependencias

    Execute o package.json que está dentro da pasta raiz

    ```bash
        $ npm install
    ```
- Json-Server

    Instale o json-serve

    ```bash
        $ npm install -g json-server
    ```
    Execute o seguinte comando no terminal na pasta raiz

    ```bash
        $ json-server --watch ./src/db/db.json
    ```
- Gulp

    Execute o seguinte comando no terminal na pasta raiz

    ```bash
        $ gulp
    ```
- Live-Server

    Execute o seguinte comando no terminal, lembrando que é necessário ter o node instalado

    ```bash
        $ npm install -g live-server
    ```

    Em seguida execute o comando, na pasta raiz do projeto

    ```bash
        $ live-server
    ```
