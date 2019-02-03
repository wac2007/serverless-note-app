import aws from 'aws-sdk';

export function call(action, params) {
  const dynamoDb = new aws.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}

