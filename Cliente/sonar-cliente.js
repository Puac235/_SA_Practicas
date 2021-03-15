const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9000',
        token : "3d06f471bbf1939901042692967a4f7b8704793c",
        options : {
            'sonar.sources':  'src',
            'sonar.tests':  'src/test',
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'
        }
    }, () => {});