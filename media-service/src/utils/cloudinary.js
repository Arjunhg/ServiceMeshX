const cloudinary = require('cloudinary').v2;
const logger = require('./logger');

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.apiKey,
    api_secret: process.env.api_secret
})

const uploadMediaToCloudinary = (file) => {

    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                resource_type: 'auto',
            },
            (error, result) => {
                if(error){
                    logger.error(`Error uploading file to cloudinary: ${error.message}`);
                    reject(error);
                }
                resolve(result);
            }
        )
        uploadStream.end(file.buffer);
    })
}


const deleteMediaFromCloudinary = async(publicId)=>{

    try {
        
        const result = await cloudinary.uploader.destroy(publicId);
        logger.info(`successfully deleted file from cloudinary cloud storage: ${publicId}`);
        return result;

    } catch (error) {
        logger.error(`Error deleting file from cloudinary: ${error.message}`);
        throw error;
    }
}

module.exports = {uploadMediaToCloudinary, deleteMediaFromCloudinary};