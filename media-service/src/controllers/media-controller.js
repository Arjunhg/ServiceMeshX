const Media = require('../models/media');
const logger = require('../utils/logger');
const {uploadMediaToCloudinary} = require('../utils/cloudinary');

const uploadMedia = async(req, res) => {

    logger.info(`Uploading media for user: ${req.user.userId}`);
    logger.info('Starting media upload')

    try {
        
        if(!req.file){
            logger.error('No file found in request');
            return res.status(400).json({
                success: false,
                message: 'No file found in request'
            });
        }

        const { originalname, mimetype, buffer } = req.file;
        const userId = req.user.userId;

        logger.info(`File details: name=${originalname}, type=${mimetype}`);
        logger.info('Uploading file to cloudinary starting...');

        const cloudinaryUploadResult = await uploadMediaToCloudinary(req.file);
        logger.info(`File uploaded to cloudinary successfully. Public Id: -${cloudinaryUploadResult.public_id}`);

        const newlyCreatedMedia = new Media({
            publicId: cloudinaryUploadResult.public_id,
            orignalName: originalname,
            mimeType: mimetype,
            url: cloudinaryUploadResult.secure_url,
            userId
        })

        await newlyCreatedMedia.save();

        res.status(200).json({
            success: true,
            message: 'Media uploaded successfully',
            mediaId: newlyCreatedMedia._id,
            url: newlyCreatedMedia.url
        })
    } catch (error) {
        logger.error(`Error uploading media: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Error uploading media'
        })
    }
}


const getAllMedia = async(req, res) => {

    try {
        
        const results = await Media.find({});
        res.json({results});
    } catch (error) {
        logger.error(`Error fetching media: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Error fetching media'
        })
    }
}

module.exports = {uploadMedia, getAllMedia};