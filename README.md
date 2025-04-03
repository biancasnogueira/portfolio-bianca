# 🧑‍💻 Meu Portfólio

<div align="center">

<img src="./.gitassets/capa.png" width="350px">

<div data-badges>
    <img src="https://img.shields.io/github/stars/portfolio-projetos-dev/portfoleo?style=for-the-badge" alt="GitHub stars" />
    <img src="https://img.shields.io/github/forks/portfolio-projetos-dev/portfoleo?style=for-the-badge" alt="GitHub forks" />
    <img src="https://img.shields.io/github/issues/portfolio-projetos-dev/portfoleo?style=for-the-badge" alt="GitHub issues" />
</div>

<div data-badges>
    <img src="https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/prisma-%232D3748.svg?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
    <img src="https://img.shields.io/badge/n8n-%2300C4B4.svg?style=for-the-badge&logo=n8n&logoColor=white" alt="n8n" />
    <img src="https://img.shields.io/badge/supabase-%233ECF8E.svg?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
</div>
</div>

---

## ✨ Sobre o Projeto

O **Portfólio** é uma aplicação full stack que integra tecnologias populares do mercado para criar uma vitrine digital das habilidades e projetos de um desenvolvedor. Esta plataforma vai além da simples exibição de trabalhos anteriores, funcionando como uma demonstração prática das capacidades técnicas do profissional, evidenciando seu domínio em desenvolvimento web moderno.

Além de apresentar os projetos do desenvolvedor, a aplicação incorpora agentes de IA inteligentes que acessam o currículo, repositórios do GitHub e histórico profissional. Com isso, recrutadores e potenciais clientes podem explorar, via chat interativo, aspectos específicos das competências técnicas do desenvolvedor, tornando o processo de avaliação mais dinâmico e informativo.

---

## 🚀 Como Rodar o Projeto

### 📌 Requisitos:
- [Node.js](https://nodejs.org/) instalado

### 📥 Passo a Passo:

1. Clone este repositório:
    ```sh
    git clone https://github.com/biancasnogueira/portfolio-bianca.git
    ```
2. Acesse o diretório do projeto:
    ```sh
    cd portfolio-bianca
    ```
3. Configure o **Supabase**:
   - Acesse sua conta no [Supabase](https://supabase.com) ou crie uma nova.
   - Navegue até o projeto no Supabase e clique no botão `connect`.
   - Selecione o ORM **Prisma**.
   - Copie as variáveis de ambiente e crie um arquivo `.env` na pasta `backend` com:
    ```sh
    DATABASE_URL=
    DIRECT_URL=
    PORT= # (Padrão: 4000 se não definido)
    ```

4. Configure o **n8n**:
   - Crie uma conta no [n8n](https://n8n.io).
   - Importe o fluxo definido no arquivo `assistente-pessoal` na pasta `assets`.
   - No primeiro nó do workflow, acesse `Webhooks URL`, clique em `Production URL` e copie a URL.
   - **Ative o workflow no n8n.**

5. Crie um arquivo `.env` na pasta `web` com:
    ```sh
    NEXT_PUBLIC_API_URL= # URL do backend
    NEXT_PUBLIC_CHAT_WEBHOOK= # URL extraída do n8n
    ```

6. Instale as dependências dos projetos `web` e `backend`:
    ```sh
    npm install
    ```

7. Execute o projeto:
    - Abra dois terminais separados.
    - No diretório `backend`, rode:
        ```sh
        npm run dev
        ```
    - No diretório `web`, rode:
        ```sh
        npm run dev
        ```

---

## 📌 Funcionalidades

✔ Exibição de Projetos  
✔ Integração com Agentes de IA via Chat  
✔ Repositórios GitHub Integrados  
✔ Lista de Tecnologias Destacadas  
✔ Filtragem de Projetos por Tecnologias  
✔ Busca de Projetos por ID com Tecnologias Associadas  

![Demonstração](./.gitassets/2.png)

---

## 📚 Links Úteis

- [Next.js](https://nextjs.org/docs)
- [NestJS](https://docs.nestjs.com/)
- [Prisma](https://www.prisma.io/docs)
- [Supabase](https://supabase.com)
- [n8n](https://n8n.io/docs)

---

Feito com 💜 por [Bianca Nogueira](https://github.com/biancasnogueira) 🚀
