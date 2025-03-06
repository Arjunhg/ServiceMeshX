# 🖼️ Media Service Microservice

> A robust media handling microservice built with Node.js, Express, and MongoDB, featuring Cloudinary integration for cloud storage and RabbitMQ for event handling.

## 🎯 Overview

The Media Service manages media file operations within the microservices architecture, handling uploads, storage, and retrieval while integrating with Cloudinary for cloud storage and communicating with other services through RabbitMQ.

## 🛠️ Tech Stack

- **🟢 Node.js** 
- **⚡ Express.js**
- **🍃 MongoDB**
- **☁️ Cloudinary**
- **🐰 RabbitMQ**
- **📦 Redis** (Rate Limiting)
- **📝 Winston** (Logging)
- **📤 Multer** (File Upload)

## 🗂️ Project Structure

```
media-service/
├── 🐳 Dockerfile
├── 📦 package.json
└── 📁 src/
    ├── 🎯 server.js
    ├── 📁 controllers/
    │   └── 🖼️ media-controller.js
    ├── 📁 eventHandlers/
    │   └── 📡 media-event-handlers.js
    ├── 📁 middleware/
    │   ├── 🔒 authMiddleware.js
    │   └── ❌ errorHandler.js
    ├── 📁 models/
    │   └── 📄 media.js
    ├── 📁 routes/
    │   └── 🛣️ media-routes.js
    └── 📁 utils/
        ├── ☁️ cloudinary.js
        ├── 📝 logger.js
        └── 🐰 rabbitmq.js
```

## 🔌 Service Integration

### API Gateway Integration
- **📤 Upload Endpoint**: `/api/media/upload`
- **📥 Get Endpoint**: `/api/media/getAllMedia`

### Event Handling
- **📨 Consumes Events**:
  - `post.deleted`: Cleanup associated media
- **📡 Publishes Events**:
  - `media.uploaded`: New media creation
  - `media.deleted`: Media deletion

## 🛣️ API Endpoints

| Endpoint | Method | Description | Access |
|----------|--------|-------------|---------|
| `/api/media/upload` | POST | Upload media files | Private |
| `/api/media/getAllMedia` | POST | get media files | Private |

## 🚀 Quick Start

1. **Environment Setup**
```bash
cp .env.example .env
```

2. **Configure Environment Variables**
```env
PORT=4003
MONGODB_URI=mongodb://localhost:27017/media-service
REDIS_URL=redis://localhost:6379
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
RABBITMQ_URL=amqp://localhost:5672
```

3. **Start with Docker**
```bash
docker-compose up
```

## 🔐 Security Features

- **🔒 Authentication**: JWT verification
- **⚡ Rate Limiting**: Upload restrictions
- **🛡️ File Validation**: Type & size checks
- **🔐 Secure URLs**: Signed Cloudinary URLs

## 📦 Media Storage

### Cloudinary Integration
```javascript
const uploadToCloudinary = async (file) => {
    const result = await cloudinary.uploader.upload(file.path, {
        folder: 'my-uploads',
        resource_type: 'auto'
    });
    return result;
};
```

## 📊 Monitoring

- **📝 Upload Tracking**: File size and type metrics
- **❌ Error Logging**: Failed uploads and deletions
- **🔍 Performance Monitoring**: Response times
- **📈 Storage Analytics**: Usage statistics

## 🔄 Service Dependencies

- **API Gateway**: Routing & authentication
- **MongoDB**: Media metadata storage
- **Cloudinary**: File storage
- **Redis**: Rate limiting
- **RabbitMQ**: Event communication



