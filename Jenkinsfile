pipeline {
    agent any

    parameters {
        string(name: "SPEC", defaultValue: "cypress/integration/**/**", description: "ok")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choice the browser")
    }

    options {
        ansiColor('xterm')
    }


    stages {
        stage('Build') {
            steps {
                 echo "Building the application"
            }
        }
        stage('Test') {
            steps {
                bat "npm i"
                bat "npx cypress run -browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploy the application"
            }
        }
    }

    post {
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
    }


}