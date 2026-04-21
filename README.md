# 📦 Lost & Found App

Aplicação completa para registo e recuperação de objetos perdidos e encontrados.

---

# 🚀 Tecnologias

## Backend

- Node.js
- Express
- Sequelize
- MySQL
- JWT (Autenticação)
- bcrypt (hash de passwords)

## Frontend Admin

- React

## Mobile

- React Native (Expo)

---

# 🧭 Visão Geral

A aplicação permite:

- Registar objetos perdidos
- Registar objetos encontrados
- Encontrar correspondências (matching)
- Comunicar entre utilizadores
- Gerir o sistema via painel admin

---

# 🗄️ Base de Dados

## Tabelas principais:

- users
- categorias
- items
- imagens
- messages
- notificacoes
- reviews
- reports

---

# 📡 API Endpoints

## 👤 Users

- `POST /api/users/register`
- `POST /api/users/login`
- `GET /api/users/profile`
- `GET /api/users` (admin)
- `PATCH /api/users/:id/block`

---

## 📦 Items

- `POST /api/items`
- `GET /api/items`
- `GET /api/items/:id`
- `PUT /api/items/:id`
- `DELETE /api/items/:id`

---

## 📷 Imagens

- `POST /api/items/:id/images`
- `GET /api/items/:id/images`

---

## 💬 Messages

- `POST /api/messages`
- `GET /api/messages/:userId`

---

## 🔔 Notificações

- `GET /api/notifications`
- `PATCH /api/notifications/:id/read`

---

## ⭐ Reviews

- `POST /api/reviews`
- `GET /api/users/:id/reviews`

---

## 🚨 Reports

- `POST /api/reports`
- `GET /api/reports`
- `PATCH /api/reports/:id`

---

# 🧱 Estrutura do Projeto

```bash
backend/
├── config/
├── models/
├── controllers/
├── services/
├── routes/
├── middleware/
├── utils/
└── app.js
```

---

# 🛠️ Setup do Projeto

## 1. Clonar repositório

```bash
git clone <repo-url>
cd backend
```

## 2. Instalar dependências

```bash
npm install
```

## 3. Configurar variáveis de ambiente

Criar ficheiro `.env`:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=lostfound
JWT_SECRET=supersecret
```

## 4. Executar servidor

```bash
node app.js
```

---

# 🔐 Autenticação

- JWT (access token)
- Middleware de proteção de rotas
- Roles: user / admin

---

# 🔁 Fluxo da Aplicação

```text
User perde item
↓
Regista na app
↓
Outro user encontra item
↓
Sistema faz matching
↓
Notificação enviada
↓
Chat entre utilizadores
↓
Item resolvido
↓
Avaliação
```

---

# 📋 Roadmap de Desenvolvimento

## 🥇 Fase 1 — Base

- Setup Node.js
- Configuração Sequelize
- Estrutura do projeto

## 🥈 Fase 2 — Users

- Registo
- Login
- Autenticação JWT

## 🥉 Fase 3 — Items

- CRUD completo
- Filtros

## 🏅 Fase 4 — Imagens

- Upload com Multer

## 🏅 Fase 5 — Chat

- Mensagens entre utilizadores

## 🏅 Fase 6 — Notificações

- Sistema interno

## 🏅 Fase 7 — Matching

- Sugestões por localização

## 🏅 Fase 8 — Reviews

- Avaliações entre utilizadores

## 🏅 Fase 9 — Reports

- Sistema de denúncias

## 🏅 Fase 10 — Admin Panel

- Dashboard
- Gestão de utilizadores e itens

## 🏅 Fase 11 — Mobile App

- React Native
- Integração com API

## 🏅 Fase 12 — Push Notifications

- Firebase Cloud Messaging

---

# 📊 Funcionalidades Principais

- Autenticação segura
- Gestão de objetos perdidos/encontrados
- Upload de imagens
- Chat em tempo real
- Sistema de notificações
- Avaliações de utilizadores
- Painel administrativo
- Matching automático

---

# 🔒 Segurança

- Passwords encriptadas (bcrypt)
- JWT
- Middleware de autorização
- Validação de dados

---

# 🚀 Melhorias Futuras

- Geolocalização avançada
- IA para matching de imagens
- Notificações em tempo real (WebSockets)
- Dashboard com gráficos
- Deploy em cloud

---

# 🏁 Conclusão

Este projeto representa uma aplicação completa com arquitetura moderna, adequada para:

- Projeto académico
- Portfólio
- Base para startup

---
