# AWS SAM - Expressjs Application

This project is an Express application deployed using AWS Serverless Application Model (SAM). It leverages AWS Lambda and API Gateway to create a serverless REST API.

## Overview

This template deploys an Express application on AWS using AWS SAM, which simplifies building and deploying serverless applications.

### Key Components

- **AWS Lambda**: Runs the Express application as a serverless function.
- **API Gateway**: Manages HTTP requests and invokes the Lambda function.
- **SAM Template**: Defines infrastructure, including API Gateway and Lambda function configuration.

## Getting Started

### Prerequisites

- **Node.js** (v18.x or newer recommended)
- **AWS SAM CLI**: To install, follow the [AWS SAM CLI Installation Guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html).
- **AWS CLI**: For managing AWS configurations. Install using the [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).

### Project Structure

- **template.yaml**: The main SAM template file containing definitions for the Lambda function and API Gateway.
- **express/**: Directory containing the Express application code.
- **src/server.js**: Main file for the Express application, handling routing and server logic.

### Template Breakdown

The SAM template (`template.yaml`) includes:

- **Globals**: Configures default timeout for all Lambda functions.
- **Resources**:
  - **MyCustomApi**: An API Gateway resource.
  - **GetUserFunction**: Lambda function that runs the Express application.

## Deployment

### Step 1: Build the Application

Use the SAM CLI to build the application:

```bash
sam build
```

### Step 2: Validate the SAM Template

Use the SAM CLI to build the application:

```bash
sam validate
```

### Step 3: Deploy the Application

Use the SAM CLI to build the application:

```bash
sam deploy --guided
```
