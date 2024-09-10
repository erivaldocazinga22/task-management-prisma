# 🚀 Task Management

**Task Management** é uma aplicação de gerenciamento de tarefas para uso individual ou em grupo. Desenvolvida com **Node.js** e **Prisma** no backend e **React.js** no frontend, oferece uma interface intuitiva para criação, edição e monitoramento de tarefas, facilitando a organização e colaboração.

## ✨ Funcionalidades

- 📝 **Criação de Tarefas**: Crie, edite e exclua suas tarefas facilmente.
- 👥 **Organização de Grupos**: Suporte para trabalho em equipe com tarefas compartilhadas.
- 📊 **Monitoramento de Progresso**: Acompanhe o status das tarefas em tempo real.
- 💻 **Interface Intuitiva**: Frontend moderno e responsivo.
- 🤝 **Colaboração em Equipe**: Facilita a colaboração com designações de tarefas.

## 🛠️ Tecnologias Utilizadas

### Backend

- 🟢 **Node.js**
- 📦 **Express**
- 🌐 **Prisma**
- 🗄️ **SQLite/PostgreSQL**

### Frontend

- ⚛️ **React.js**
- 🎨 **Tailwind CSS**: Para uma estilização responsiva e moderna.
- ⚡ **React Query**: Gerenciamento eficiente de estado e dados.
- 📋 **React Hook Form**: Facilita a manipulação de formulários.
- 🖼️ **Shadcn UI**: Conjunto de componentes estilizados para uma interface clean.

## 🗂️ Estrutura do Projeto

Este projeto segue um modelo **monorepo**, facilitando a integração e organização do código.

```bash
root/
├── packages/
│   ├── server/    # Código do servidor Node.js com Prisma
│   └── web/   # Aplicação React.js com Tailwind CSS
└── README.md
```

## 🚀 Como Instalar e Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/erivaldocazinga22/task-management-prisma.git
   ```

2. Instale as dependências:
   ```bash
   cd task-management-prisma/server
   npm install
   
   cd task-management-prisma/web
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na pasta `server` com as configurações necessárias para o Prisma.
   ```bash
        DATABASE_URL="file:./" # ex: se for sqlite file:./nome-da-base-de-dados.db
        
        # HTTP Envaroment
        PORT="" # ex: "3000"
        SESSION_HOST="" # ex: "127.0.0.1"
        PROTOCOL="" # ex: "http" ou "https"

        # Cryptografy Envaroment
        JWT_EXPIRATION_AMOUNT="" # number ex: "7"
        JWT_EXPIRATION_UNIT="" # "days" | "weeks" | "months" | "years"
        JWT_SECRET="" # hash string. ex: "dsd23-233fd-234d-43554"
   ```
   - Crie um arquivo `.env.local` na pasta `web` com as configurações do servidor.
    ```bash
        VITE_BASE_URL="" # ex: "127.0.0.1"
        VITE_GOOGLE_CLIENT_ID="" # hash do google[string]. ex: "dsd23-233fd-234d-43554"
    ```

4. Execute o backend:
   ```bash
   cd packages/server
   npm run dev
   ```

5. Execute o frontend:
   ```bash
   cd packages/web
   npm run dev
   ```

## 🤝 Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature: 
   ```bash
   git checkout -b feature/nova-feature
   ```
3. Commit suas mudanças: 
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. Envie sua branch: 
   ```bash
   git push origin feature/nova-feature
   ```
5. Abra um Pull Request.

## 📄 Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.