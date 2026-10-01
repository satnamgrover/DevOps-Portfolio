# Satnam — DevOps Portfolio

A static GitHub Pages portfolio for a Fresher DevOps Engineer, built with HTML, CSS and JavaScript.

## Projects

The portfolio is based on the three projects listed in the current resume:

1. **Flask Application — Jenkins CI/CD Pipeline**
   - Python, Flask, Jenkins, Docker, Docker Hub
   - Automated testing, image creation, publishing and deployment.

2. **Deployed Full Stack Chat Application**
   - Docker, Kubernetes, Jenkins, Minikube
   - Separate frontend/backend Deployments, database StatefulSet, PV/PVC and Services.

3. **Python Application Deployment on AWS EKS**
   - AWS, Docker, Jenkins, ECR, EKS
   - Containerized Python application, Jenkins automation, ECR publishing and EKS deployment.

## Project thumbnails and screenshots

Each project has a permanent **thumbnail/architecture visual** used on the home page, project hub and project detail page.

The detail pages also include screenshot slots. When real screenshots are available, replace the placeholder files inside `assets/projects/` while keeping their filenames, or update the image paths in the corresponding HTML page.

## GitHub repository URLs

Each project detail page currently contains a clearly marked placeholder for its exact GitHub repository URL. Replace it when the project repository links are provided.

## Resume

`assets/resume.pdf` contains the current uploaded resume used as the source for the project list.

## Pages

- `index.html` — main portfolio
- `projects.html` — all three projects
- `projects/flask-jenkins-cicd.html` — Project 01 case study
- `projects/full-stack-chat-kubernetes.html` — Project 02 case study
- `projects/python-aws-eks.html` — Project 03 case study

## GitHub Pages

1. Push the complete folder to a GitHub repository.
2. Open repository **Settings → Pages**.
3. Select the branch containing the portfolio and the `/root` folder.
4. Save and open the generated GitHub Pages URL.
5. If using `satnamgrover.in`, keep the existing custom-domain configuration.


## Screenshot slots
Each project page has four gallery slots prepared for real evidence:
- Flask CI/CD: live app, completed Jenkins pipeline, Docker Hub image, additional deployment/pipeline screenshot.
- Full Stack Chat: live app, Kubernetes/Minikube deployment, Jenkins pipeline, Docker/workload details.
- Python on AWS EKS: live app, Jenkins pipeline, Grafana monitoring dashboard, ECR/EKS deployment evidence.

Project thumbnails are kept separately from the screenshot gallery, so replacing screenshots will not change the project cards.
