# todo-test-kubernets
using flask assignment
# Flask Frontend & Express Backend Deployment on Kubernetes using Minikube

## 📌 Project Overview

This project demonstrates how to containerize and deploy a frontend and backend application on a local Kubernetes cluster using **Minikube**.

The application consists of:

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Express.js (Node.js)
* **Containerization:** Docker
* **Orchestration:** Kubernetes
* **Local Cluster:** Minikube

---

## 📂 Project Structure

```
flask-assignment-main/
│
├── frontend/
│   ├── todo.html
│   ├── todo.js
│   ├── Dockerfile
│   ├── deployment.yaml
│   ├── service.yaml
│   └── nginx.conf
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   ├── deployment.yaml
│   └── service.yaml
│
└── README.md
```

---

## 🛠 Technologies Used

* HTML5
* JavaScript
* Express.js
* Node.js
* Docker
* Kubernetes
* Minikube

---

## 📦 Prerequisites

Install the following software before running the project:

* Docker Desktop
* Minikube
* kubectl
* Node.js (optional for local development)

---

## 🚀 Step 1: Start Minikube

```bash
minikube start --driver=docker
```

Verify the cluster:

```bash
kubectl get nodes
```

---

## 🚀 Step 2: Configure Docker

### Windows PowerShell

```powershell
& minikube -p minikube docker-env --shell powershell | Invoke-Expression
```

### Linux/macOS

```bash
eval $(minikube docker-env)
```

---

## 🚀 Step 3: Build Docker Images

### Backend

```bash
cd backend
docker build -t express-backend:v1 .
```

### Frontend

```bash
cd ../frontend
docker build -t todo-frontend:v1 .
```

Verify:

```bash
docker images
```

---

## 🚀 Step 4: Deploy to Kubernetes

### Backend

```bash
kubectl apply -f backend/deployment.yaml
kubectl apply -f backend/service.yaml
```

### Frontend

```bash
kubectl apply -f frontend/deployment.yaml
kubectl apply -f frontend/service.yaml
```

---

## 🚀 Step 5: Verify Deployment

View deployments:

```bash
kubectl get deployments
```

View pods:

```bash
kubectl get pods
```

View services:

```bash
kubectl get svc
```

---

## 🚀 Step 6: Access the Application

Frontend:

```bash
minikube service frontend-service
```

Backend:

```bash
minikube service express-service
```

Or list all services:

```bash
minikube service list
```

---

## 📷 Screenshots Included

The following screenshots are included in the submission:

* Minikube cluster started
* Docker image build
* Kubernetes deployments
* Running pods
* Running services
* Frontend running in browser
* Backend API running
* GitHub repository

---

## 📖 Useful Commands

```bash
minikube start --driver=docker

kubectl get nodes

kubectl get deployments

kubectl get pods

kubectl get svc

kubectl describe pod <pod-name>

kubectl logs <pod-name>

minikube service frontend-service

minikube service express-service
```

---

## 👨‍💻 Author

**Sanjay Sutar**

B.Tech Computer Science Engineering (Microsoft IEP)

Parul University

---

## ✅ Assignment Objective

Successfully containerize and deploy the frontend and backend applications on a local Kubernetes cluster using Minikube, verify the deployments, and expose the services for access through the browser.

<img width="1682" height="842" alt="image" src="https://github.com/user-attachments/assets/0e9071ea-ccde-4e99-aed9-ae48fa93708a" />
<img width="1401" height="695" alt="image" src="https://github.com/user-attachments/assets/ec2c33e0-25b3-45f0-a550-6659ea2c677e" />
<img width="1205" height="241" alt="image" src="https://github.com/user-attachments/assets/46a5bba3-6980-4a8c-afec-ebd0d6cd3fa2" />

