# Projeto Escola - Frontend e Backend
> Status: Desenvolvendo.

## Descrição

O Projeto Escola é uma aplicação composta por dois componentes principais:
1. **Backend**: Uma API desenvolvida em .NET que fornece endpoints para gerenciar informações sobre alunos, professores, cursos e usuários.
2. **Frontend**: Uma aplicação React usando Next.js que consome a API e fornece uma interface para interagir com os dados.

## Estrutura do Projeto

- **Backend**: Localizado na pasta `backend`
- **Frontend**: Localizado na pasta `frontend`

## Requisitos

### Backend

- [.NET 6.0](https://dotnet.microsoft.com/download/dotnet/6.0)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (ou outro banco de dados compatível com o Entity Framework Core)

### Frontend

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (gerenciadores de pacotes)

## Instalação e Configuração

### Backend

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/usuario/projeto-escola.git
    ```

2. **Navegue até o diretório do backend:**

    ```bash
    cd projeto-escola/backend
    ```

3. **Restaure as dependências:**

    ```bash
    dotnet restore
    ```

4. **Configure a string de conexão no arquivo `appsettings.json`:**

    ```json
    "ConnectionStrings": {
      "StringConexaoSQLServer": "Server=SEU_SERVIDOR;Database=SEU_BANCO_DE_DADOS;User Id=SEU_USUARIO;Password=SUA_SENHA;"
    }
    ```

5. **Crie e aplique as migrações do banco de dados:**

    ```bash
    dotnet ef migrations add InitialCreate
    dotnet ef database update
    ```

6. **Execute a API:**

    ```bash
    dotnet run
    ```

7. **A API estará disponível em** `http://localhost:5000`

### Frontend

1. **Navegue até o diretório do frontend:**

    ```bash
    cd projeto-escola/frontend
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

   ou, se estiver usando Yarn:

    ```bash
    yarn install
    ```

3. **Configure a URL da API no arquivo `.env.local`:**

    ```
    NEXT_PUBLIC_API_URL=http://localhost:5000
    ```

4. **Execute a aplicação:**

    ```bash
    npm run dev
    ```

   ou, se estiver usando Yarn:

    ```bash
    yarn dev
    ```

5. **O frontend estará disponível em** `http://localhost:3000`

## Uso

- **Frontend**: A aplicação frontend permite que você visualize e interaja com os dados de alunos, professores, cursos e usuários. A interface é construída com Next.js e consome a API do backend.

- **Backend**: A API fornece endpoints REST para CRUD (Create, Read, Update, Delete) nas entidades `Alunos`, `Professores`, `Cursos`, e `Usuários`. Consulte a documentação da API para mais detalhes sobre os endpoints.


## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

