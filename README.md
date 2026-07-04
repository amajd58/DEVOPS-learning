# DevOps Learning Project

A hands-on project to learn DevOps practices including CI/CD pipelines, Docker containerization, and automated testing.

## 🚀 What You'll Learn

- **Git**: Version control and branching strategies
- **Docker**: Containerization and deployment
- **CI/CD**: Automated testing and deployment pipelines
- **GitHub Actions**: Workflow automation
- **Monitoring**: Application health tracking

## 📁 Project Structure

```
devops-project/
├── index.html          # Main website
├── styles.css          # Styling
├── app.js              # JavaScript functionality
├── package.json        # Project configuration
├── Dockerfile          # Docker container setup
├── docker-compose.yml  # Docker Compose configuration
├── .github/
│   └── workflows/
│       └── ci-cd.yml   # CI/CD pipeline
└── README.md           # This file
```

## 🛠️ Quick Start

### Local Development
```bash
# Start local server
npm start

# Open browser
open http://localhost:8000
```

### Docker
```bash
# Build and run with Docker Compose
docker-compose up --build

# Access at http://localhost:8080
```

## 🔄 CI/CD Pipeline

The GitHub Actions workflow automatically:

1. **Tests**: Runs unit tests and linting
2. **Build**: Creates Docker image
3. **Deploy**: Deploys to staging (on main branch)

## 📚 Learning Path

1. **Phase 1**: Git basics and version control
2. **Phase 2**: Docker fundamentals
3. **Phase 3**: CI/CD with GitHub Actions
4. **Phase 4**: Deployment strategies
5. **Phase 5**: Monitoring and logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

MIT License - feel free to use this project for learning!