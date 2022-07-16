#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TypeSampleStack } from '../lib/type_sample-stack';

const app = new cdk.App();
new TypeSampleStack(app, 'TypeSampleStack');
