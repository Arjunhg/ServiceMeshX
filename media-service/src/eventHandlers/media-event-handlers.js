
const Media = require("../models/media");
const { deleteMediaFromCloudinary } = require("../utils/cloudinary");

const handlePostDeleted = async(event) => {
    console.log("eventeventevent", event);

    const { postId, mediaIds } = event;

    try {
        
        const mediaToDelete = await Media.find({ _id: { $in: mediaIds } });

        for(const media of mediaToDelete){
            await deleteMediaFromCloudinary(media.publicId);
            await Media.findByIdAndDelete(media._id); 

            logger.info(`Media with id ${media._id} deleted successfully associated with post ${postId}`);
        }
        logger.info(`Processed deletion of media for post id ${postId}`);
    } catch (error) {
        logger.error("Error while deleting media", error);
    }
}

module.exports = { handlePostDeleted };