# AWS CDK Lambda Layer for Node.js with newer version of aws-sdk package

## Current packed version: `2.501.0`

### How to use?

```ts
import NodeAwsSdkLayer from '@cdk-lambda-layers/node-aws-sdk';

// .. inside stack ...

const lambdaFn = new Function(this, 'LambdaFunction', {
  code: new AssetCode(__dirname),
  handler: 'index.handler',
  runtime: Runtime.NODEJS_10_X,
  layers: [new NodeAwsSdkLayer('OptionalIdentifier')],
});

// ...
```
