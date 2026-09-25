# AI Content Studio

> **Intelligent content creation and marketing workspace built for modern digital teams.**

AI Content Studio is a full-stack SaaS application that brings writing, optimization, publishing, and distribution into a unified workspace. It helps users transform ideas into polished, search-ready material and channel-specific campaigns through AI-assisted workflows.

The application combines large language models with practical marketing tools for article creation, rich-text editing, SEO evaluation, social media copy, email campaigns, scheduling, AI detection, and workspace management.

---

## ✨ What You Can Do

### 📝 Create

Turn a simple idea or topic into structured, high-quality articles and marketing material with AI assistance.

### ✨ Refine

Edit generated drafts in a rich editor and improve clarity, tone, structure, and overall quality.

### 🔍 Optimize

Evaluate articles using SEO-focused checks covering keywords, headings, content length, readability, and structure.

### 📱 Repurpose

Transform existing articles into tailored social media posts and promotional material for different channels.

### 📧 Communicate

Create professional newsletters, email campaigns, and promotional copy from existing ideas or articles.

### 📅 Plan

Organize upcoming work and schedule publishing activities to maintain a consistent content pipeline.

### 🧠 Analyze

Use the AI detection module to analyze submitted material and gain additional insights into the writing.

### 👥 Organize

Manage projects and resources through dedicated workspaces while keeping content structured and accessible.

---

# 🏗️ System Architecture

AI Content Studio follows a modular full-stack architecture that separates the presentation layer, application services, data persistence, and AI integrations.

```text
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                        │
│                                                             │
│                    React + Vite + MUI                       │
│                                                             │
│ Dashboard │ AI Writer │ Editor │ SEO │ Social │ Email     │
│ Workspace │ Chatbot   │ Detector │ Settings │ Auth        │
└────────────────────────────┬────────────────────────────────┘
                             │
                         HTTP / REST
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                      APPLICATION LAYER                      │
│                                                             │
│                       Spring Boot                           │
│                                                             │
│ Controllers → Services → Business Logic → Integrations     │
│                                                             │
│ Authentication │ Content │ SEO │ Scheduling │ Workspace    │
│ Social │ Email │ AI Services │ Notifications               │
└───────────────┬──────────────────────┬──────────────────────┘
                │                      │
                ▼                      ▼
┌────────────────────────┐    ┌───────────────────────────────┐
│       DATA LAYER       │    │           AI LAYER            │
│                        │    │                               │
│     JPA / Hibernate    │    │        Groq API              │
│            │           │    │        Llama Models          │
│            ▼           │    │                               │
│          MySQL         │    │        Ollama                 │
│                        │    │        Local Models           │
└────────────────────────┘    └───────────────────────────────┘
```

## Architecture Flow

```text
User
  │
  ▼
React Frontend
  │
  │ REST API
  ▼
Spring Boot Backend
  │
  ├──────────────► Authentication & Authorization
  │
  ├──────────────► Content Services
  │
  ├──────────────► SEO Analysis
  │
  ├──────────────► Scheduling
  │
  ├──────────────► Social & Email Services
  │
  ├──────────────► AI Integration
  │                    │
  │                    ├──► Groq / Llama
  │                    └──► Ollama
  │
  └──────────────► JPA / Hibernate
                       │
                       ▼
                     MySQL
```

## Architectural Principles

- **Separation of concerns** between frontend, backend, persistence, and AI services.
- **REST-based communication** between the client and backend.
- **Service-oriented backend structure** for reusable business logic.
- **Repository-based persistence** through JPA/Hibernate.
- **Protected application routes** with authentication and authorization.
- **Environment-based configuration** for sensitive credentials.
- **Provider-based AI integration** allowing different model providers.
- **Modular feature organization** so individual capabilities can evolve independently.

---

# 🚀 Why AI Content Studio?

Creating digital content often requires switching between multiple tools for writing, editing, SEO, repurposing, scheduling, and distribution.

AI Content Studio brings these activities together in one workspace:

```text
Idea
  ↓
Create
  ↓
Edit
  ↓
Optimize
  ↓
Repurpose
  ↓
Schedule
  ↓
Publish
```

This creates a connected experience throughout the content lifecycle.

---

# 🖥️ Application Experience

The application is designed around a focused dark SaaS interface with:

- Clean navigation
- Responsive layouts
- Consistent visual components
- Focused content creation screens
- Interactive dashboards
- Workspace-based organization
- Streamlined AI interactions
- Clear actions and feedback
- Consistent dark-only visual experience

---

# 🔐 Authentication & Workspaces

The application includes secure account access and protected application areas.

Users can work within dedicated workspaces to keep projects and resources organized.

### Application Areas

```text
Dashboard
AI Writer
Content Editor
Social Media
Email
Chatbot
Ad Copy
SEO Analyzer
AI Detector
Workspace
Settings
```

Protected application areas require authentication.

---

# 🤖 AI Capabilities

AI Content Studio supports AI-assisted functionality through:

- **Groq-powered Llama models**
- **Ollama**
- Configurable model-based workflows

AI capabilities are integrated throughout the application rather than being limited to a single chat interface.

---

# 📁 Project Structure

```text
AI_Content_Studio-main/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   └── test/
│   ├── pom.xml
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── docker-compose.yml
└── README.md
```

---

# 🛠️ Getting Started

## Prerequisites

Make sure the following are installed:

- Java
- Maven
- Node.js
- npm
- MySQL or Docker
- Groq API key for Groq-powered features
- Ollama if using the local model integration

---

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd AI_Content_Studio-main
```

---

## 2. Database Setup

Start the configured Docker services:

```bash
docker-compose up -d
```

Alternatively, configure a local MySQL instance according to the backend configuration.

Make sure the required database exists before starting the backend.

---

## 3. Environment Configuration

**Never commit real API keys or credentials to GitHub.**

Move into the backend directory:

```bash
cd backend
```

Create your local environment file:

```bash
cp .env.example .env
```

Add your credentials:

```env
GROQ_API_KEY=your_groq_api_key_here
```

The backend configuration should reference the environment variable:

```yaml
groq:
  api-key: ${GROQ_API_KEY:}
```

Keep your local `.env` file out of Git:

```gitignore
.env
.env.*
!frontend/.env.example
```

For deployment services such as Railway or Render, configure secrets through their environment-variable settings instead of committing them to the repository.

---

# ▶️ Running the Backend

From the `backend` directory:

```bash
mvn clean install
```

Start the Spring Boot application:

```bash
mvn spring-boot:run
```

The backend port is determined by the application configuration.

---

# 🎨 Running the Frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local development URL, typically:

```text
http://localhost:5173
```

---

# 🔗 Application Routes

```text
/
├── /login
├── /register
├── /dashboard
├── /write
├── /editor/:id
├── /social
├── /email
├── /chatbot
├── /ad-copy
├── /seo-analyzer
├── /ai-detector
├── /workspace
└── /settings
```

Protected application routes require authentication.

---

# 📊 API Documentation

When Swagger/OpenAPI is enabled, documentation is available at:

```text
http://localhost:8080/swagger-ui.html
```

The exact address may vary depending on the backend configuration.

---

# 🔒 Security

Sensitive information should never be committed to the repository.

Keep the following outside source control:

```text
API Keys
Database Credentials
JWT Secrets
OAuth Credentials
Email Credentials
Private Tokens
.env Files
```

Use environment variables for local development and deployment.

If a credential is accidentally exposed through Git history, **revoke or rotate it immediately** and remove the exposed value from the repository history before pushing again.

---

# 🎨 Design Philosophy

AI Content Studio follows a dark-first SaaS design focused on clarity, productivity, and minimal visual distraction.

### Interface Principles

- Dark visual foundation
- Purple primary accent
- Green secondary accent
- Responsive layouts
- Consistent cards and controls
- Clear navigation
- Focused content creation
- Subtle interactions and animations
- Consistent experience across application modules

---

# 🔄 Content Lifecycle

```text
             ┌─────────────┐
             │    Idea     │
             └──────┬──────┘
                    ↓
             ┌─────────────┐
             │    Create   │
             └──────┬──────┘
                    ↓
             ┌─────────────┐
             │     Edit    │
             └──────┬──────┘
                    ↓
             ┌─────────────┐
             │   Optimize  │
             └──────┬──────┘
                    ↓
             ┌─────────────┐
             │  Repurpose  │
             └──────┬──────┘
                    ↓
             ┌─────────────┐
             │   Schedule  │
             └──────┬──────┘
                    ↓
             ┌─────────────┐
             │   Publish   │
             └─────────────┘
```

---

# 🔮 Future Direction

Potential areas for further development include:

- Advanced team collaboration
- Additional AI providers
- More publishing integrations
- Content performance analytics
- Campaign tracking
- Expanded workspace permissions
- Advanced scheduling
- Additional social integrations

---

# 🚀 Built With Purpose

AI Content Studio is more than an AI writing tool. It is designed as a complete workspace for turning ideas into publish-ready campaigns.

From the first draft to the final distribution, every stage is connected through a single, streamlined experience.

> **Think less about the tools. Focus more on the ideas.**

---

## 👨‍💻 Creator

**Devashish Mahajan**

**AI • Product Engineering • Modern Web Experiences**

---

## 📄 License

Add the appropriate license if the project is released under an open-source license.
