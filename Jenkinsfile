pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/cjcnkolhe/jenkinsweb_repo.git'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                echo "Deploying application..."

               sudo rm -rf /var/www/html/*
                 sudo cp -r * /var/www/html/
                 '''
            }
        }

    }
}
