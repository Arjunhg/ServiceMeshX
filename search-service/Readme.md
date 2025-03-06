# 🔍 Search Service Microservice

> A powerful search microservice built with Node.js, Express, and MongoDB, featuring text search capabilities and event-driven updates.

## 🎯 Overview

The Search Service provides real-time search functionality across posts within the microservices architecture. It maintains a searchable index through event-driven updates and offers fast text-based search capabilities.

## 🛠️ Tech Stack

- **🟢 Node.js** 
- **⚡ Express.js**
- **🍃 MongoDB** (Text Search)
- **📦 Redis** (Rate Limiting)
- **🐰 RabbitMQ** (Event Processing)
- **📝 Winston** (Logging)

## 🗂️ Project Structure

```
search-service/
├── 🐳 Dockerfile
├── 📦 package.json
└── 📁 src/
    ├── 🎯 server.js
    ├── 📁 controllers/
    │   └── 🔍 search-controller.js
    ├── 📁 eventHandlers/
    │   └── 📡 search-event-handlers.js
    ├── 📁 middleware/
    │   ├── 🔒 authMiddleware.js
    │   └── ❌ errorHandler.js
    ├── 📁 models/
    │   └── 📄 Search.js
    ├── 📁 routes/
    │   └── 🛣️ search-routes.js
    └── 📁 utils/
        ├── 📝 logger.js
        └── 🐰 rabbitmq.js
```

## 🔌 Event Integration

### Consumed Events
```javascript
post.created: {
    postId: string,
    userId: string,
    content: string,
    createdAt: Date
}

post.deleted: {
    postId: string,
    userId: string
}
```

## 🛣️ API Endpoints

| Endpoint | Method | Description | Access |
|----------|--------|-------------|---------|
| `/api/search/search` | GET | Search posts | Private |

### Search Query Parameters
```javascript
{
    query: string,    // Search term
    limit?: number,   // Optional, defaults to 10
    page?: number     // Optional, defaults to 1
}
```

## 🚀 Quick Start

1. **Environment Setup**
```bash
cp .env.example .env
```

2. **Configure Environment Variables**
```env
PORT=3004
MONGODB_URI="your_mongodb_uri"
REDIS_URL=redis://localhost:6379
NODE_ENV = development
RABBITMQ_URL=amqp://localhost:5672
```

3. **Start with Docker**
```bash
docker-compose up
```

## 🔍 Search Features

### Text Search Implementation
```javascript
// MongoDB text index
{
    content: 'text'
}

// Search query with text score
db.posts.find(
    { $text: { $search: query } },
    { score: { $meta: 'textScore' } }
)
```

### Event Processing
```javascript
// Post creation handler
handlePostCreated(event) {
    // Index new content
}

// Post deletion handler
handlePostDeleted(event) {
    // Remove from index
}
```

## 🔐 Security Features

- **🔒 Authentication**: Header-based auth
- **⚡ Rate Limiting**: Redis-based
- **🛡️ Input Validation**: Query sanitization
- **📝 Request Logging**: Detailed tracking

## 📊 Monitoring

- **📝 Search Metrics**: Query performance
- **❌ Error Tracking**: Failed searches
- **🔍 Index Stats**: Coverage & efficiency

## 🔄 Service Dependencies

- **API Gateway**: Authentication & routing
- **Post Service**: Content updates
- **MongoDB**: Search index storage
- **Redis**: Rate limiting
- **RabbitMQ**: Event processing


## 📚 API Documentation

Example search request:
```bash
curl -X GET \
  'http://localhost:4004/api/search/search?query=typescript' \
  -H 'x-user-id: user123'
```

Example response:
```json
{
    "results": [
        {
            "postId": "123",
            "content": "TypeScript tutorial",
            "score": 1.5
        }
    ],
    "total": 1,
    "page": 1
}
```
---

Made with ❤️ 
