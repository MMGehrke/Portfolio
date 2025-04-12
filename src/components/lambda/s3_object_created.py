import json
import logging

# Configure logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    """
    Lambda function triggered by S3 object creation events.
    Prints the object key to CloudWatch logs.
    
    Args:
        event (dict): The S3 event data
        context (object): Lambda context object
    """
    try:
        # Log the incoming event for debugging
        logger.info(f"Received event: {json.dumps(event)}")
        
        # Extract the S3 event record
        s3_event = event['Records'][0]
        
        # Get the bucket name and object key
        bucket_name = s3_event['s3']['bucket']['name']
        object_key = s3_event['s3']['object']['key']
        
        # Log the object details
        logger.info(f"New object created in bucket: {bucket_name}")
        logger.info(f"Object key: {object_key}")
        
        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': f'Successfully processed S3 object: {object_key}',
                'bucket': bucket_name,
                'key': object_key
            })
        }
        
    except Exception as e:
        logger.error(f"Error processing S3 event: {str(e)}")
        raise 