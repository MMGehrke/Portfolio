const AWS = require('aws-sdk');
const sharp = require('sharp');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        // Get the bucket and key from the S3 event
        const bucket = event.Records[0].s3.bucket.name;
        const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
        
        // Get the image from S3
        const s3Object = await s3.getObject({
            Bucket: bucket,
            Key: key
        }).promise();
        
        // Resize the image using Sharp
        const resizedImage = await sharp(s3Object.Body)
            .resize(800, 800, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .toBuffer();
            
        // Create the new key for the resized image
        const resizedKey = `resized/${key}`;
        
        // Upload the resized image back to S3
        await s3.putObject({
            Bucket: bucket,
            Key: resizedKey,
            Body: resizedImage,
            ContentType: s3Object.ContentType
        }).promise();
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Image resized successfully',
                originalKey: key,
                resizedKey: resizedKey
            })
        };
        
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}; 