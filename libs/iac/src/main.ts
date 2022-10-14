import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioStack } from './portfolio.stack';

const app = new cdk.App();
new PortfolioStack(app, 'PortfolioStack', {
  env: {
    region: 'ap-southeast-1',
    account: '275832434559',
  },
  description: 'The stacks for the portfolio website',
});
