import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as origins from '@aws-cdk/aws-cloudfront-origins';

export class AlpackedTaskStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    let bucketName = 'alpacked-test-assignment-master'
    const alpackedBucket = new s3.Bucket(this, bucketName, {
      versioned: true
    });
    new cloudfront.Distribution(this, 'alpackedTestAssignment', {
      defaultBehavior: { origin: new origins.S3Origin(alpackedBucket) },
  });
  }
}
