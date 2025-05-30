pipeline {
    agent any

    stages{
        stage ('Checkout') {
            steps {
                git 'https://github.com/SafuraZohareen/LumosLink.git'
            }
        }

        stage ('Build angular') {
            steps {
                sh 'npm install'
                sh 'npm run build --prod'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t safurazohareen/lumos-link:latest .'
            }
        }
        stage('Push docker Image'){
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                sh 'docker push safurazohareen/lumos-link:latest'
            }
        }
    }
    }
}