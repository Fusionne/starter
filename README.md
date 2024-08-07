# Ultimate ToDo App Starter Template

Built this template as a usable AWS and NextJS starter template in the form of the simplest possible app, uses Server Actions, AWS Amplify, React Server Components, and React's new Form Action APIs (basically, useFormAction).

## Features

- **Server Actions**: Leveraging server-side logic for enhanced performance and security.
- **AWS Amplify**: Integrated with AWS Amplify for authentication, data storage, and deployment.
- **React Server Components**: Utilizing the latest in React's server-side rendering for improved SEO and load times.
- **Form Action APIs**: Making form handling more intuitive and efficient with React's new APIs.

## Tech Stack

- **Frontend**: React, React Server Components, TailwindCSS
- **Backend**: Node.js, AWS Amplify
- **Database**: DynamoDB (via AWS Amplify DataStore)
- **Deployment**: AWS Amplify Hosting

## Getting Started

### Prerequisites

- [Node.js](nodejs.org)
- [AWS Account](aws.amazon.com)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

### Installation

1. **Clone the repository**

   ```
   git clone https://github.com/Fusionne/starter.git
   cd start
   ```

2. **Install dependencies**

   ```
   yarn install
   ```

3. **Configure AWS Amplify**

   Initialize the Amplify project and configure the necessary resources:

   ```
   aws configure sso //for first time use

   aws sso login
   ```

4. **Start the development server and sandbox**
    ```
      yarn ampx sandbox
    ```
    in a new terminal
   
   ```
   yarn dev
   ```

   The app will be available at `http://localhost:3000`.

## Usage

1. **Authentication**: Sign up or log in to start managing your tasks.
2. **Create Tasks**: Use the form to add new tasks.
3. **Manage Tasks**: Edit or delete tasks as needed.
4. **Server-Side Logic**: Leverage server actions for performance-critical features.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### Steps to Contribute

1. **Fork the repository**
2. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
4. **Commit your changes**

   ```bash
   git commit -m 'Add some feature'
   ```

5. **Push to the branch**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a pull request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [AWS Amplify](https://aws.amazon.com/amplify/)
- [NextJS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
