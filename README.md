# Calculadora com Autenticação e Autorização

Este projeto é composto por uma API desenvolvida em **.NET 8** e um frontend em **Angular 19**. O sistema realiza operações matemáticas (soma, subtração, multiplicação e divisão), protegendo os endpoints com autenticação e autorização JWT.

## Tecnologias Utilizadas

### Backend
- **Linguagem:** C# (.NET 8)
- **Autenticação:** JWT (Bearer Token)

### Frontend
- **Framework:** Angular 19
- **Gerenciador de Pacotes:** Node.js 20

### Docker
- **Orquestração:** Docker Compose
- **Imagens Utilizadas:** 
  - `mcr.microsoft.com/dotnet/aspnet:8.0-nanoserver-1809` para backend
  - `node:20-alpine` e `nginx:alpine` para frontend

---

## Requisitos

1. **Docker** instalado:
   - [Guia de instalação do Docker](https://docs.docker.com/get-docker/)
   - 
2. **Node.js 20** instalado:  
   - [Download do Node.js](https://nodejs.org/)  

3. **Angular CLI 19** instalado:  
   - Instalar com o comando:  
     ```bash
     npm install -g @angular/cli@19
     ``` 
4. **.NET 8 SDK** instalado:  
   - [Download do .NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)  
   - Verifique a instalação com o comando:  
     ```bash
     dotnet --version
     ```
5. **Portas disponíveis:**
   - 8080
     8081 (API)
   - 80 (Frontend)

---

## Como Executar o Projeto

### Clonar o Repositório
```bash
git clone https://github.com/gustavoortizcamargo/vaga-threeo.git
```
### Subir os Contêineres com Docker Compose

Para iniciar o projeto, execute o seguinte comando:

```bash
docker-compose up --build
```

### Funcionalidades do Frontend

#### Tela de Login
- Permite ao usuário inserir credenciais e obter o token JWT.

#### Tela de Cálculos
- Possui dois campos para entrada de valores e botões para as operações matemáticas.
- Após o cálculo, exibe o resultado na interface.

---

### Usuários para Teste da Aplicação

Os usuários estão definidos no documento `Users.json`:

- **Visitante**
  - **Email:** visitante@example.com  
  - **Password:** senha123  

- **Aluno**
  - **Email:** aluno@example.com  
  - **Password:** senha456  

- **Administrador**
  - **Email:** admin@example.com  
  - **Password:** senha789  

---

### Próximos Passos

- Implementar **Identity** e **Entity Framework** para controle e gerenciamento de usuários.





