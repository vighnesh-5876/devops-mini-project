# DevOps pipeline flowchart

```mermaid
flowchart TD
    A[Development: HTML, CSS, JavaScript] --> B[Git commit and push]
    B --> C[GitHub repository]
    C --> D[GitHub Actions CI]
    D --> E[Automated tests]
    E -->|Pass| F[Build Docker image]
    E -->|Fail| G[Inspect logs and fix code]
    G --> A
    F --> H[Publish image to GHCR]
    H --> I[Continuous Deployment]
    I --> J[Running website]
    J --> K[Monitoring: workflow logs, deploy logs, availability]
    K --> L[Feedback and improvements]
    L --> A
```

## Stage descriptions

1. **Development:** create and update the website.
2. **Version control:** Git records changes and GitHub hosts the repository.
3. **CI:** GitHub Actions starts automatically on a push or pull request.
4. **Automated testing:** Node.js test runner checks required files and expected behavior.
5. **Containerization:** Docker packages the static files with Nginx.
6. **CD:** the Docker image is published; optional deploy-hook integration triggers hosting deployment.
7. **Running application:** users open the deployed website URL.
8. **Monitoring and feedback:** inspect workflow/deployment logs, check availability, fix problems and improve the application.
