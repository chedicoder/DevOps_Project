# Project Overview

This repository contains a multi-faceted project with various components including frontend and backend applications, infrastructure management, and deployment configurations. The project is structured to facilitate development and deployment using modern tools and practices.

## Project Structure

- **ArgoCD/**: Directory for Argo CD configurations and manifests.
- **angular/**: Directory containing the Angular frontend application.
- **ansible/**: Ansible playbooks and configurations for provisioning infrastructure.
- **docker-compose.yml**: Docker Compose file for defining and running multi-container Docker applications.
- **my-charts/**: Helm charts directory for Kubernetes deployment.
- **nestjs/**: Directory containing the NestJS backend application.
- **terraform/**: Terraform configurations for infrastructure provisioning.

## Getting Started

### Prerequisites

- **Docker**: For containerizing applications.
- **Docker Compose**: For managing multi-container Docker applications.
- **Helm**: For managing Kubernetes applications.
- **Kubernetes**: For container orchestration.
- **Argo CD**: For continuous delivery on Kubernetes.
- **Terraform**: For infrastructure as code.
- **Ansible**: For configuration management and automation.

## Development

To work on the Angular or NestJS applications:

- **Angular**: Navigate to the `angular` directory and run `npm ci` followed by `npm start`. The Angular application provides a user-friendly interface to add, remove, and modify users in the database.
- **NestJS**: Navigate to the `nestjs` directory and run `npm ci` followed by `npm run start`. The NestJS application serves as the backend API and supports operations for adding, removing, and updating users in the database.

### Setup and Installation

#### Docker Compose

1. Navigate to the project directory.
2. Run `docker compose up -d --build` to start the micro-services defined in `docker-compose.yml`.

#### Helm Charts

1. Navigate to the `my-charts` directory.
2. Use `helm install <release-name> .` to deploy your sub-charts to Kubernetes.
3. Don' forget to point the domain name of the backend application `nestjs.app` to the ingress IP. This can be done by updating your DNS records or local `/etc/hosts` file. 

#### Argo CD

1. Ensure Argo CD is installed and running on your Kubernetes cluster.
2. Create the application and the project of ArgoCD by running `kubectl apply -f ArgoCD/app.yaml` and `kubectl apply -f ArgoCD/project.yaml`.

#### Terraform

1. Navigate to the `terraform` directory.
2. Initialize Terraform with `terraform init`.
3. Apply the configuration with `terraform apply`.

#### Ansible

1. Navigate to the `ansible` directory.
2. Run `ansible-playbook -i inventory.yml install-docker.yml` to install the Docker packages.
3. Run `ansible-playbook -i inventory.yml project.yml` to run the project.

## Contributing

Feel free to contribute to the project by submitting issues, feature requests, or pull requests. Ensure that you follow the project's coding standards and best practices.

## Contact

For any questions or feedback, please contact me at [chedi.ghribi@outlook.com](mailto:chedi.ghribi@outlook.com).
