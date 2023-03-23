# Projeto Pokédex

Projeto de uma pokédex para a disciplina de Banco de Dados I.

Grupo: 
- Bernardo Lucas de Araújo Dias - 20.1.8011 
- Vinícius Correa Nobre Borges - 20.1.8002

---

### Passo-a-passo para executar o servidor

OBS:<br />
1- Como estamos utilizamos o SGBD Postgres, é necessário tê-lo instalado em sua máquina.<br />
2- Após a instalação é preciso criar um usuário e um banco de dados para utilizar na aplicação.<br />
3- Nosso projeto é executado em Node, por isso é necessário tê-lo instalado em sua máquina também. Recomendamos a instalação do pacote NPM (contém o Node) para que facilite a instalação das dependências.

Sobre o servidor (importante estar na pasta raiz do servidor pokedex/poke-service/~):

1- Após os passo anteriores, você deve ir até a pasta raiz do servidor (pokedex/poke-service/~) e criar um arquivo chamado .env. Nele deverá colocar todas as configurações necessárias para a conexão com o banco de dados neste modelo:<br />
DB_HOST=<br />
DB_PORT=<br />
DB_USERNAME=<br />
DB_PASSWORD=<br />
DB_DATABASE=<br />
Caso o seu banco de dados tenha sido criado na sua própria máquina, utilizar 'localhost' no campo HOST, verificar a porta na qual o servidor é hospedado na sua máquina (geralmente 5432). Inserir o usuário criado no Postgres, a senha e o nome do banco criado.

2- No terminal, execute o comando `npm install`. Este comando instalará todas as dependências, libs, frameworks e quaisquer ferramentas externas utilizadas.

3- Agora, antes de executar o servidor de vez, é preciso executar o script criado para a criação das tabelas. Estas tabelas só são criadas caso não exista alguma tabela de mesmo nome existente no banco de dados, então é importante que o banco escolhido esteja vazio. O script é `npm run create-tables`.

4- Agora é só executar o servidor e usufruir da aplicação com o comando `npm run start:dev`. Importante lembrar que para a aplicação funcionar precisa estar tanto com o front-end executando quanto o servidor executando, então abra duas janelas do seu terminal para a execução dupla.


### Execução do front-end

Estando na raíz do front (pokedex/projeto-pokedex/~), basta rodar o comando `npm install` para instalar todas as dependências, libs e frameworks e, após isso, rodar o comando `npm run dev`.

