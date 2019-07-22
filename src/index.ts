import { LayerVersion, AssetCode, Runtime } from '@aws-cdk/aws-lambda';
import { Construct } from '@aws-cdk/core';

export class NodeAwsSdkLayer extends LayerVersion {
  constructor(scope: Construct, id: string = 'NodeAwsSdkLayer') {
    super(scope, id, {
      code: new AssetCode(__dirname + '/nodejs.zip'),
      compatibleRuntimes: [Runtime.NODEJS_8_10, Runtime.NODEJS_10_X],
      license: 'MIT',
      description:
        'Lambda Layer for Node.js with newer version of aws-sdk package',
    });
  }
}

export default NodeAwsSdkLayer;
