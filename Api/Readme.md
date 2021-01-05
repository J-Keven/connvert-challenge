<h3 align="center">
  <span>
  <img alt="challenge-logo.png" src="c"  width='300px'/>
  </span>
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/J-Keven/connvert-challenge?color=blue">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

  <a href="https://github.com/J-keven/connvert-challenge/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/J-Keven/connvert-challenge?style=social">
  </a>

  <a href="https://github.com/J-Keven/connvert-challenge/network/members">
    <img alt="Stargazers" src="https://img.shields.io/github/forks/J-keven/connvert-challenge?style=social">
  </a>
</p>

<p align="center">
  <a href="https://github.com/J-Keven/connvert-challenge/#fire-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/J-Keven/connvert-challenge/#techs">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/J-Keven/connvert-challenge/#-executando-o-projeto">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/J-Keven/connvert-challenge/blob/main/Api/Readme.md#rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/J-Keven/connvert-challenge/#-como-contribuir">Como Contribuir</a>&nbsp;&nbsp;&nbsp;
  <!-- <a href="#memo-licença">Licença</a> -->
</p>


### :rocket: Executando a API

Para execultar o frontend da aplicação é necessário que voçe possua o nodejs V 12x, um gerencaidor de pacotes como por exemplo o Yarn e um banco mongodb rodando na sua maquina ou um cluster no mongodb Atlas.

Para inicializarmos precisamos antes instalar as depedências e adicionar a nossa configuração para que a aplicaçaõ se conect ao banco mongodb.

Promeiro vamos istalara as depedncias, e podemos fazer isso da seguinte forma:

1 - Abra o seu terminal e navegue até a pasta na qual você clonou o projeto.

2 - Após isso entre na pasta do frontend:

```ssh
  cd ConvertChallenge/api
```

3 - instale as dependências com um gerenciador de pacotes da sua preferência( Yarn ou npm) otilizaodo um dos seguites comandos:

```ssh
  yarn
```
ou 

```ssh
  npm i
```

Bom, enquanto instala as depedencias podemos ir adicionado nossas configurações para o mongodb.

#### Mongodb Local
certifique-se de que voce teha um banco mongodb rodando na sua maquina ou em um container.

1 - abra o arquivo [ormconfig.json](./ormconfig.json) e adicione nos locais que estão em vazio as suas credencias. No fim deve ficar parecido com esse:

```js
  {
    "type": "mongodb",
    "host": localhost,
    "port": 21017,
    "database": "minhaAplicação",
    "useUnifiedTopology": true, 
    "entities": [ "./src/modules/**/infra/typeorm/schemas/*.ts" ]
  }
```
#### Mongodb Atlas

1 - abra o arquivo [ormconfig.json](./ormconfig.json) e delete os campos que estão vazios e adicione o campo "url", nesse campo deve conter a url de conexão do cluster. Para obter essa url você tara  que ir até a pagina do mongodb. Colo a url. No fim, seu arquivo deve tar parecido com esse:

```js
  {
    "type": "mongodb",
    "url": "mongodb+srv://<username>:<password>@cluster0.vvpyt.mongodb.net/<dbName>?retryWrites=true&w=majority",
    "useUnifiedTopology": true, 
    "entities": [ "./src/modules/**/infra/typeorm/schemas/*.ts" ]
  }
```
Apos concluir todas as etapas de configurações podedo inicializar a plicação com um dos seguintes comandos:

```ssh
  yarn server:start
```

ou

```ssh
  npm i server:start
```

### Rotas

A aplicação possue rotas para cadastrar, atualiza, listar e deletar dividas e listar usuários. Sendo elas:

- GET  /user 
  Busca tosdos os usuários existentes no Jsonplaceholder e os devolve como resposta.

  Ex de url:
  

  ```js
  "http://localhost:3333/user"
  ```

- GET  /users-in-debt

  Lista somente os usuário que possuem pelo menos uma divida.

  Ex de url:
  
  ```js
  "http://localhost:3333/users-in-debt"
  ```
  
- GET /user
  Exibe as infomações de um unico usuário.
  
  Recebe um parametro obrigatório com o valor do id do usuário.

  Parâmetro| type |Descrição
  ----     |--| -------
  id    | number | Id do usuário que deseja listar os dados.
  
  Ex de url:

  ```js
  "http://localhost:3333/debts/1"
  ```

- GET /debts
  Lista todos os dividas do usuáio, caso ele n teha divida a resposta será um array vazio.
  
  Recebe um parametro obrigatório com o valor do id do usuário.

  Parâmetro| type |Descrição
  ----     |--| -------
  id    | number |Id do usuário que deseja listar dividas. 

  Ex de url:

  ```js
  "http://localhost:3333/debts/1"
  ```
  

- POST  /debts 
  Cadastra uma nova divida para um usuário e devolve como resposta a divida cadastrada.
  
  Recebe no corpo da requisição os seguintes parametro obrigatórios:

  Parâmetro|  type  |Descrição
  ----     |----|-----
  user_id  | number |Deve conter o id do usuário que cotraiu a divida.
  value    | number | Deve conter um valor decimal que representa o valor da divida.
  description| string |uma descrição da divida

- PATCH  /debts 

  Atualiza um as infomações de uma divida já cadastrada.
  
  Recebe no corpo da requisição os seguintes parametro não obrigatórios ( Só será atualizado o canpo informado):

  Parâmetro| type |Descrição
  ----     |---|------
  value    |  number |Deve conter um valor decimal que representa o valor da divida.
  description| string |uma descrição da dívida

- DELETE  /debts 

  Deleta uma divida.
  
  Recebe no parametro da requisição os seguintes parametro obrigatórios:

  Parâmetro| type |Descrição
  ----     |--| -------
  id    | string |Id da dívida que deseja deletar.
 
---
<h4 align="center">
    Feito com 💜 by <a href="https://www.linkedin.com/in/jhonnas-keven-884a97159/" target="_blank">J-keven</a>
</h4>
