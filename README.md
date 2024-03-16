# Web Automation Testing Project using WebdriverIO, Cucumber framework, and Allure reporter
## for [OrangeHRM-Live website](https://opensource-demo.orangehrmlive.com)



### How to Run This Web Automation Testing Project
1. Run ---> `npm init wdio .`.
2. Choose **Cucumber** and **Allure** on WebdriverIO configuration setting. And also, please kindly choose **Chrome** and **Firefox** for the browsers selection setting. Other configuration settings have been provided in details on the snip below.
<img width="1153" alt="Screenshot 2024-03-17 at 00 18 58" src="https://github.com/riandinia/WebDriverIO_Automation_Testing/assets/159536290/034ce043-c437-45c1-9d13-cd808410f0f2">

3. Run ---> `npm install dotenv --save-dev`.
4. Run ---> `npm install allure-commandline --save-dev`.
5. In **package.json** file, please edit the Script part at the end of the file, as shown below.
<img width="685" alt="Screenshot 2024-03-17 at 00 23 22" src="https://github.com/riandinia/WebDriverIO_Automation_Testing/assets/159536290/73953c3c-1554-4124-a2f4-b669c5fbdde2">

Code has been attached in **package.json** file within this repository. 

6. If you are using Windows environment, please kindly run VS Code / terminal as administrator. 
7. Please run `npm run wdio "@leave"` (Test cases for Leave feature) and `npm run wdio "@recruitment"` (Test cases for Recruitment feature), not simultaneously,

   or run `npm run wdio ""` for all test cases in this testing project. 




### Allure Report
1. Generated automated testing results and report shall be restored in **allure-results** and **allure-report** folder.
2. Run `npm run open-allure` to open the report.

*) Note
If you want to generate another Allure results, you can run `npm run generate-allure`. 

This snip below is shown as a reference for the results of this web automation testing project. 
<img width="1440" alt="Screenshot 2024-03-16 at 23 25 04" src="https://github.com/riandinia/WebDriverIO_Automation_Testing/assets/159536290/63086f76-8c49-4575-88cc-a8c58bf03589">
