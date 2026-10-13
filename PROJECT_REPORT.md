# Project Report

## Title
Design and Implementation of an End-to-End DevOps Pipeline Using GitHub Actions and Docker

## Abstract
This mini project demonstrates a simplified end-to-end DevOps pipeline for a static website. The website is maintained using Git and GitHub. GitHub Actions automates testing, Docker builds and publishes a container image, and an optional hosting integration supports deployment. Workflow logs, hosting logs and manual availability checks are used for basic monitoring and feedback.

## Problem Statement
Manual software checks and deployment steps can be repetitive and may lead to inconsistent releases. This project demonstrates how a small web application can use automation to make checks and packaging repeatable.

## Objectives
- Create a simple static website.
- Store and track source code with Git and GitHub.
- Run automated checks on code changes.
- Package the website using Docker and Nginx.
- Publish a container image automatically.
- Demonstrate deployment and basic monitoring.
- Understand how feedback leads to further improvements.

## Tools and Technologies
HTML, CSS, JavaScript, Git, GitHub, GitHub Actions, Node.js test runner, Docker, Nginx, GitHub Container Registry and an optional container hosting provider.

## Methodology
1. Develop the static website.
2. Commit and push the code to GitHub.
3. Trigger a GitHub Actions workflow.
4. Run automated tests.
5. Build a Docker image only after tests pass.
6. Publish the image to GitHub Container Registry.
7. Configure a compatible hosting service and optional deploy hook.
8. Check workflow logs, deployment logs and the running website.
9. Correct issues and push improvements.

## Testing Plan
- Verify the main heading and linked assets exist.
- Verify the welcome-message function returns the expected text.
- Verify the Dockerfile and workflow files exist.
- Confirm `npm test` succeeds.
- Confirm `docker build` succeeds.
- Confirm the container serves the website at `http://localhost:8080`.
- Confirm GitHub Actions completes successfully.
- If deployment is configured, confirm the public URL loads and a new change is reflected.

## Results and Evidence
Fill in this section only after executing the project:
- GitHub repository URL: [add URL]
- Successful Actions run: [add screenshot]
- Test results: [add screenshot/output]
- Docker build and local container evidence: [add screenshot]
- Published image: [add GHCR URL]
- Live website URL: [add URL if deployed]
- Deployment log: [add screenshot]

## Monitoring and Feedback
For this mini project, monitoring is limited to GitHub Actions results, Docker build logs, hosting logs and a manual availability check. Failures are investigated, corrected and tested again.

## Limitations
This is a small educational demonstration. It does not include production-grade monitoring dashboards, alerting, high availability, a database or security scanning. A public image and hosting deployment must be configured according to the provider's current settings and account limits.

## Conclusion
The project demonstrates how source control, automated testing, containerization, image publishing and deployment can be connected into a repeatable DevOps workflow. It illustrates the feedback cycle from monitoring back to development.

## Future Scope
Add browser-based end-to-end tests, security scanning, automated uptime monitoring, deployment approvals and a production monitoring dashboard.
