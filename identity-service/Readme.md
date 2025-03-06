# 🔐 Identity Service Microservice

> A secure authentication and user management microservice built with Node.js, Express, and MongoDB, designed to work seamlessly with the API Gateway.

## 🎯 Overview

The Identity Service handles user authentication, registration, and token management as part of a microservices architecture. It communicates with the API Gateway to provide secure authentication services across the platform.

## 🛠️ Tech Stack

- **🟢 Node.js**
- **⚡ Express.js**
- **🍃 MongoDB**
- **📦 Redis** (Rate Limiting)
- **🔑 Argon2** (Password Hashing)
- **📝 Winston** (Logging)
- **✅ Joi** (Validation)

## 🗂️ Project Structure

```
identity-service/
├── 🐳 Dockerfile
├── 📦 package.json
└── 📁 src/
    ├── 🎯 server.js
    ├── 📁 controllers/
    │   └── 🔐 identity-controller.js
    ├── 📁 middleware/
    │   └── ❌ errorHandler.js
    ├── 📁 models/
    │   ├── 👤 User.js
    │   └── 🎟️ RefreshToken.js
    ├── 📁 routes/
    │   └── 🛣️ identity-routes.js
    └── 📁 utils/
        ├── 🔑 generateToken.js
        ├── 📝 logger.js
        └── ✅ validation.js
```

## 🔌 API Gateway Integration

This service integrates with the API Gateway through:

- **🔒 Authentication Endpoints**: `/auth/*`
- **🤝 Service Discovery**: Auto-registration with API Gateway
- **🔄 Health Checks**: Regular status reporting
- **📊 Load Balancing**: Multiple instance support

## 🛣️ API Endpoints

| Endpoint | Method | Description | Access |
|----------|--------|-------------|---------|
| `/auth/register` | POST | User registration | Public |
| `/auth/login` | POST | User authentication | Public |
| `/auth/refresh-token` | POST | Token refresh | Private |
| `/auth/logout` | POST | User logout | Private |

## 🚀 Quick Start

1. **Environment Setup**
```bash
cp .env.example .env
```

2. **Configure Environment Variables**
```env
PORT = 3001
MONGODB_URI = "your_mongodb_connection_string" 
JWT_SECRET = "your_jwt_secret"
NODE_ENV = development
REDIS_URL = redis://localhost:6379
```

3. **Start with Docker**
```bash
docker-compose up
```

## 🔐 Security Features

- **🔒 Password Hashing**: Argon2 implementation
- **⚡ Rate Limiting**: Redis-based request throttling
- **🎟️ JWT Authentication**: Secure token management
- **🔄 Refresh Token Rotation**: Enhanced security
- **🛡️ Input Validation**: Joi schema validation

## 📊 Monitoring & Logging

- **📝 Request Logging**: Detailed access logs
- **❌ Error Tracking**: Centralized error logging
- **🔍 Audit Trail**: User authentication events


## 🔄 Service Dependencies

- **API Gateway**: Service discovery and routing
- **MongoDB**: User data storage
- **Redis**: Rate limiting and caching
- **Message Queue**: Event publishing (optional)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Your Team Name
