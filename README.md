# Squad-9 Aceleração React - Team

Tiago Almeida, Janio Miara, José Mário, Jairo and Vagnerlandio Nunes

#

A aplicação consiste em uma página inicial onde o usuário ira se deparar com dois inputs.

O primeiro input, do tipo toggle, alterna a pesquisa entre usuários e repositorios. O valor padrão desse input é pesquisar por nome de usuário, caso o usuário enviar a procura, será renderizada uma página com informações sobre o usuário cadastrado.
Ao clicar, o usuário estará alterando o valor desse input para pesquisa de repositórios no GitHub, onde uma página diferente será exibida caso o usuário confirme o envio da pesquisa.

O segundo input, do tipo text, é uma caixa de texto na qual o usuário poderá pesquisar por um username do GitHub, ou pelo nome de uma linguagem (dependendo do valor atual do primeiro input).

Quando a pesquisa for feita por nome de usuário, caso ele exista, será exibida uma página com o seu avatar, nome, login, quantidade de reposítorios publicos, seguidores, quantidade de pessoas que o usuário segue. Também será exibida uma lista com seus repositórios organizada por ano. Todas essas informações são puxadas da API do GitHub.

Quando a pesquisa for feita por nome de linguagem, será exibida uma página mostrando cards com os repositórios encontrados que utilizaram a linguagem pesquisada. O usuário poderá usar paginação para navegar entre esses repositórios.

A aplicação também conta com uma barra de navegação lateral, possuindo 3 botões. O primeiro irá expandir a barra de navegação, o segundo trará o usuário para a home page, caso ele esteja em outra página. O terceiro botão limpa a lista de usuários que foram cadastrados no localStorage logo após as pesquisas. A barra também conta com miniaturas dos avatares dos usuários que fazem parte desse localStorage, que quando clicadas, trarão as informações do usuário diretamente, sem que seja preciso pesquisar novamente pelo nome.

,
