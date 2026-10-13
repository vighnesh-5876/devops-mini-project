FROM nginx:1.27-alpine
LABEL org.opencontainers.image.title="DevOps Mini Project"
LABEL org.opencontainers.image.description="Static website deployed through a beginner-friendly DevOps pipeline"
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -q --spider http://127.0.0.1/ || exit 1
