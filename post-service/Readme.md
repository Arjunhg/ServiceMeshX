# 📝 Post Service Microservice

> A scalable post management microservice built with Node.js, Express, and MongoDB, featuring Redis caching and RabbitMQ event integration.

## 🎯 Overview

The Post Service handles all post-related operations within the microservices architecture, managing creation, retrieval, and deletion of posts while implementing caching, rate limiting, and event publishing.

## 🛠️ Tech Stack

- **🟢 Node.js**
- **⚡ Express.js**
- **🍃 MongoDB**
- **📦 Redis** (Caching & Rate Limiting)
- **🐰 RabbitMQ** (Event Bus)
- **📝 Winston** (Logging)
- **✅ Joi** (Validation)

## 🗂️ Project Structure

```
post-service/
├── 🐳 Dockerfile
├── 📦 package.json
└── 📁 src/
    ├── 🎯 server.js
    ├── 📁 controllers/
    │   └── 📝 post-controller.js
    ├── 📁 middleware/
    │   ├── 🔒 authMiddleware.js
    │   └── ❌ errorHandler.js
    ├── 📁 models/
    │   └── 📄 Post.js
    ├── 📁 routes/
    │   └── 🛣️ post-route.js
    └── 📁 utils/
        ├── 🗑️ invalidateCache.js
        ├── 📝 logger.js
        ├── 🐰 rabbitmq.js
        └── ✅ validation.js
```

## 🔌 API Endpoints

| Endpoint | Method | Description | Access |
|----------|--------|-------------|---------|
| `/api/post/create-post` | POST | Create new post | Private |
| `/api/post/all-posts` | GET | Get paginated posts | Private |
| `/api/post/:id` | GET | Get single post | Private |
| `/api/post/:id` | DELETE | Delete post | Private |

## 🎯 Features

### 📦 Caching Strategy
- Redis caching for posts
- Automatic cache invalidation
- Configurable cache TTL

### 🔄 Event Publishing
```javascript
// Post creation event
post.created: {
    postId: string,
    userId: string,
    content: string,
    createdAt: Date
}

// Post deletion event
post.deleted: {
    postId: string,
    userId: string,
    mediaIds: string[]
}
```

### ⚡ Rate Limiting
- Create post: 100 requests per 15 minutes
- Get posts: 100 requests per 15 minutes
- Redis-based rate limiting store

## 🚀 Quick Start

1. **Environment Setup**
```bash
cp .env.example .env
```

2. **Configure Environment Variables**
```env
PORT = 3002
MONGODB_URI = "your-mongodb-uri"
JWT_SECRET = "your-secret-key"
NODE_ENV = development
REDIS_URL = redis://localhost:6379
RABBITMQ_URL=amqp://localhost:5672
```

3. **Start with Docker**
```bash
docker-compose up
```

## 🔐 Security Features

- **🔒 JWT Authentication**
- **⚡ Rate Limiting**
- **✅ Input Validation**
- **🛡️ Helmet Security**

## 📊 Data Model

```javascript
Post {
    user: ObjectId,
    content: String,
    mediaIds: [String],
    createdAt: Date,
    updatedAt: Date
}
```

## 🔄 Service Dependencies

- **API Gateway**: Authentication & routing
- **Media Service**: Media file handling
- **MongoDB**: Post storage
- **Redis**: Caching & rate limiting
- **RabbitMQ**: Event messaging

## 📊 Monitoring

- **📝 Request Logging**
- **❌ Error Tracking**
- **⚡ Rate Limit Monitoring**
- **🔍 Cache Performance**


Made with ❤️ 
