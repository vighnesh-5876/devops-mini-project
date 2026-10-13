# DevOps Mini Project

**Title:** Design and Implementation of an End-to-End DevOps Pipeline Using GitHub Actions and Docker.

A small static website used to demonstrate development, Git/GitHub, CI, automated testing, Docker containerization, CD, a running application, and monitoring/feedback.

## Tools

- HTML, CSS and JavaScript
- Git and GitHub
- GitHub Actions
- Node.js built-in test runner
- Docker and Nginx
- GitHub Container Registry (GHCR)
- Optional: Render deploy hook for deployment after image publishing

## Run locally without Docker

Install Node.js 22 or newer, then from the project directory run:

```powershell
npm test
```

Open `index.html` in a browser to preview the site.

## Run with Docker

Make sure Docker Desktop is installed and its engine is running.

```powershell
docker build -t devops-mini-project .
docker run --rm -p 8080:80 devops-mini-project
```

Open http://localhost:8080. Stop the container with `Ctrl+C`.

## GitHub setup

1. Create a GitHub repository named `devops-mini-project`.
2. Push this project to the repository's `main` branch.
3. Open the repository's **Actions** tab and inspect the workflow run.
4. The workflow runs tests, builds the Docker image and publishes it to GHCR on pushes to `main`.
5. The image is published to `ghcr.io/OWNER/REPOSITORY:latest` and a commit-specific tag. GitHub may require the package visibility to be changed to public before an external host can pull it anonymously.

Example initial commands (run in this folder):

```powershell
git init
git add .
git commit -m "Initial DevOps mini project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/devops-mini-project.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If the folder is already a Git repository or already has a remote, inspect `git status` and `git remote -v` before running `git init` or adding a remote.

## Optional continuous deployment to Render

The workflow supports a Render deploy hook secret, `RENDER_DEPLOY_HOOK_URL`. To use it:

1. Create a Docker-based web service on Render using the published GHCR image, or configure a supported image-based deployment method.
2. Ensure the image is publicly pullable or configure registry credentials if supported by your chosen setup.
3. Configure the service to deploy the image tag `latest`, and configure its port as `80` if the platform requires an explicit port.
4. Create/copy the service's deploy hook URL.
5. In GitHub repository settings, open **Secrets and variables → Actions → New repository secret**.
6. Add `RENDER_DEPLOY_HOOK_URL` with the deploy hook URL.
7. Push a new commit to `main` and check Actions logs and the live URL.

Important: Render's current support for external-image auto-deploy, private registry authentication, plan limits and deploy-hook behavior can vary. Verify these details in Render's current documentation before relying on this optional step. If this exact arrangement is not supported, use a Render service connected to the GitHub repository and configured to build from the included Dockerfile; enable its supported automatic deployment mechanism. In that fallback, the host builds/deploys the Dockerfile and the workflow still tests and builds/publishes an image, but the deploy action may be managed by the hosting service rather than triggered by the workflow.

## Monitoring and feedback

For this educational project, monitoring consists of:
- GitHub Actions job status and logs
- Docker image build status
- Hosting provider deployment logs
- Opening the public website to check availability and behavior
- Pushing a small change and confirming the new version appears

This is basic operational verification, not production-grade metrics or alerting.

## Pipeline

`Developer → GitHub → CI tests → Docker image build/publish → CD → Running website → Logs and feedback`

See `FLOWCHART.md` and `PROJECT_REPORT.md`.

## Troubleshooting

- `docker` not recognized: install Docker Desktop, open it, wait for the engine to start, then open a new terminal.
- Docker engine unavailable: check Docker Desktop and WSL 2 setup.
- Git push rejected: check repository URL, authentication and whether the remote contains an initial commit.
- GitHub Actions package permission failure: confirm workflow permissions allow package writes and inspect the Actions logs.
- Website returns an error: inspect hosting logs, image availability, and configured port.
- Never commit passwords, personal access tokens or deploy-hook URLs to source files.
