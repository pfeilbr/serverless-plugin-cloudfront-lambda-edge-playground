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

## Lambda@Edge Request

```json
{
    "event": {
        "Records": [
            {
                "cf": {
                    "config": {
                        "distributionDomainName": "d13ydba49ilc9v.cloudfront.net",
                        "distributionId": "E20V9SS2N0VT6P",
                        "eventType": "viewer-request",
                        "requestId": "NcxNfOh2NaptKOLBlSimVF7AAlRp10OM-F1-CMZsJOGSMEkHUVd25A=="
                    },
                    "request": {
                        "clientIp": "100.11.96.70",
                        "headers": {
                            "host": [
                                {
                                    "key": "Host",
                                    "value": "d13ydba49ilc9v.cloudfront.net"
                                }
                            ],
                            "user-agent": [
                                {
                                    "key": "User-Agent",
                                    "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
                                }
                            ],
                            "authorization": [
                                {
                                    "key": "authorization",
                                    "value": "Basic dXNlcjpwYXNz"
                                }
                            ],
                            "upgrade-insecure-requests": [
                                {
                                    "key": "upgrade-insecure-requests",
                                    "value": "1"
                                }
                            ],
                            "sec-fetch-mode": [
                                {
                                    "key": "sec-fetch-mode",
                                    "value": "navigate"
                                }
                            ],
                            "sec-fetch-user": [
                                {
                                    "key": "sec-fetch-user",
                                    "value": "?1"
                                }
                            ],
                            "accept": [
                                {
                                    "key": "accept",
                                    "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3"
                                }
                            ],
                            "sec-fetch-site": [
                                {
                                    "key": "sec-fetch-site",
                                    "value": "none"
                                }
                            ],
                            "accept-encoding": [
                                {
                                    "key": "accept-encoding",
                                    "value": "gzip, deflate, br"
                                }
                            ],
                            "accept-language": [
                                {
                                    "key": "accept-language",
                                    "value": "en-US,en;q=0.9,nb;q=0.8,fr;q=0.7"
                                }
                            ],
                            "if-none-match": [
                                {
                                    "key": "if-none-match",
                                    "value": "\"2cad58ac06c32be3c6384050881bc507\""
                                }
                            ],
                            "if-modified-since": [
                                {
                                    "key": "if-modified-since",
                                    "value": "Tue, 10 Sep 2019 21:32:57 GMT"
                                }
                            ]
                        },
                        "method": "GET",
                        "querystring": "",
                        "uri": "/"
                    }
                }
            }
        ]
    }
}
```
