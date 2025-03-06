# 🚀 API Gateway Microservice

> A powerful API Gateway implementation using Node.js and Express.js that serves as the central entry point for your microservices architecture.

## 🎯 Overview

This API Gateway acts as a smart reverse proxy, routing client requests to various microservices while handling cross-cutting concerns like authentication, logging, and rate limiting.

## 🛠️ Tech Stack

- **🟢 Node.js**
- **⚡ Express.js** 
- **🐳 Docker**
- **📦 Redis** (Rate Limiting)
- **📝 Winston** (Logging)
- **🔑 JWT** (Authentication)

## 🗂️ Project Structure

```
api-gateway/
├── 🐳 Dockerfile
├── 📦 package.json
└── 📁 src/
    ├── 🎯 server.js
    ├── 📁 middleware/
    │   ├── 🔒 authMiddleware.js
    │   └── ❌ errorHandler.js
    └── 📁 utils/
        └── 📝 logger.js
```

## 🔧 Core Components

### 1. Gateway Server (`server.js`)
- 🎯 Main application entry point
- 🔄 Service proxy configuration
- 🚦 Middleware integration

### 2. Middleware
- 🔒 **Authentication**: JWT validation
- ⚡ **Rate Limiting**: Request throttling
- ❌ **Error Handling**: Centralized error management

### 3. Service Proxies
- 👤 Identity Service
- 📝 Post Service
- 🖼️ Media Service
- 🔍 Search Service

## 🚀 Quick Start

1. **Clone the Repository**
```bash
git clone <repository-url>
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment**
```bash
cp .env.example .env
# Edit .env with your service URLs
```

4. **Run with Docker**
```bash
docker-compose up
```

## 🔌 Service Integration

The API Gateway proxies requests to various microservices:

| Service | Purpose | Endpoint |
|---------|---------|----------|
| 👤 Identity | User management | `/auth/*` |
| 📝 Post | Content management | `/posts/*` |
| 🖼️ Media | File handling | `/media/*` |
| 🔍 Search | Content search | `/search/*` |

## 🛡️ Security Features

- 🔒 JWT-based authentication
- 🚦 Rate limiting with Redis
- 🔐 Request validation
- 📝 Comprehensive logging

## 🌐 Environment Variables

```env
PORT=3000
NODE_ENV=development
REDIS_URL=redis://redis:6379
IDENTITY_SERVICE_URL=http://identity-service:4001
POST_SERVICE_URL=http://post-service:4002
MEDIA_SERVICE_URL=http://media-service:4003
SEARCH_SERVICE_URL=http://search-service:4004
JWT_SECRET=your-secret-key
```

## 📚 API Documentation

Detailed API documentation is available at `/api-docs` when running in development mode.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by Your Team Name
