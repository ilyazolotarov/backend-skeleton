# Install the AWS CLI
AWS CLI needs Python 2 version 2.6.5+ or Python 3 version 3.3+ and Pip. Use the following if you need help installing Python or Pip.

1. [Installing Python](https://www.python.org/downloads/)
2. [Installing Pip](https://pip.pypa.io/en/stable/installation/)

Now using Pip you can install the AWS CLI (on Linux, macOS, or Unix) by running:

```bash
$ sudo pip install awscli
```

[Or download and run the AWS CLI MSI installer for Windows (64-bit)](https://awscli.amazonaws.com/AWSCLIV2.msi)

# Add Your Access Key to AWS CLI

```bash
$ aws configure
```

You can leave the Default region name and Default output format the way they are.

# Getting Started with Serverless Stack (SST)

Start by installing the dependencies.

```bash
$ npm install
```

## Commands

### `npm run start`

Starts the local Lambda development environment.

### `npm run build`

Build your app and synthesize your stacks.

Generates a `.build/` directory with the compiled files and a `.build/cdk.out/` directory with the synthesized CloudFormation stacks.

### `npm run deploy [stack]`

Deploy all your stacks to AWS. Or optionally deploy, a specific stack.

### `npm run remove [stack]`

Remove all your stacks and all of their resources from AWS. Or optionally removes, a specific stack.

### `npm run test`

Runs your tests using Jest. Takes all the [Jest CLI options](https://jestjs.io/docs/en/cli).

## Documentation

Learn more about the Serverless Stack.
- [Docs](https://docs.serverless-stack.com)
- [@serverless-stack/cli](https://docs.serverless-stack.com/packages/cli)
- [@serverless-stack/resources](https://docs.serverless-stack.com/packages/resources)

## Community

[Follow us on Twitter](https://twitter.com/ServerlessStack) or [post on our forums](https://discourse.serverless-stack.com).
