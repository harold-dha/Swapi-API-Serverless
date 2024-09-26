const AWS = require('aws-sdk')
jest.mock('aws-sdk')

exports.mockSpyDocumentClientScan = (data) => {
  const awsMock = jest.spyOn(AWS.DynamoDB, 'DocumentClient');
  awsMock.mockImplementationOnce(() => {
    return {
      scan: jest.fn(() => {
        return {
          promise() {
            return Promise.resolve({ Items: data });
          }
        };
      })
    }
  });
}

exports.mockSpyDynamoDBPutItem = (data) => {
  try {
    const awsMock = jest.spyOn(AWS.DynamoDB, 'DocumentClient')
    awsMock.mockImplementationOnce(() => {
      return {
        put: jest.fn(() => {
          return {
            promise() {
              return Promise.resolve(data);
            }
          };
        })
      }
    });
  } catch (error) {
    console.log(error)
  }
}

