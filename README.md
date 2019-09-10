# serverless-plugin-cloudfront-lambda-edge-playground

learn [silvermine/serverless-plugin-cloudfront-lambda-edge](https://github.com/silvermine/serverless-plugin-cloudfront-lambda-edge)

## Usage

```sh
# deploy
./node_modules/.bin/sls deploy

# copy static assets to bucket
aws s3 cp public s3://pfeil-static-site-pfeilbr/ --recursive

# for public access
# aws s3 cp public s3://pfeil-static-site-pfeilbr/ --recursive --acl public-read

# bucket
open http://pfeil-static-site-pfeilbr.s3-website-us-east-1.amazonaws.com/index.html

# cloudfront url
open https://d13ydba49ilc9v.cloudfront.net
```

## TODO

* add origin access identity
    * see the following for cfn markup <https://github.com/lroguet/amzn-cloudformation/blob/master/storage-content-delivery/static-website-with-cloudfront.yml>
    * [Restricting Access to Amazon S3 Content by Using an Origin Access Identity](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)
* S3 Bucket | [Granting Permission to an Amazon CloudFront Origin Identity](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html#example-bucket-policies-use-case-6)
