var login = require("C:/Users/swamynarayan/Desktop/demo_wedriverio/test/demo/loginPage.js")
// const {exceldata} = require("C:/Users/swamynarayan/Desktop/demo_wedriverio/testData/exceldata1.js")
var data = require("C:/Users/swamynarayan/Desktop/demo_wedriverio/testData/data1.json")

describe('loging to application',  () => {
    // it('login', async () => {
    //    await login.navigateUrl("https://sso.teachable.com/secure/9521/users/sign_in?clean_login=true&reset_purchase_session=1")
       
    //    await login.entervalue(login.emailadd, "nishasinghcud@gmail.com")
    //    await login.entervalue(login.password, "kumari@singh//k#")
    //    await login.clickOnElement(login.loginBtn)

    // it('login by excel data', async () => {
    // await browser.maximizeWindow()
    // await login.navigateUrl(exceldata[0].URL)
       
    // await login.entervalue(login.emailadd, exceldata[0].EMAILADD)
    // await login.entervalue(login.password, exceldata[0].PASSWORD)
    // await login.clickOnElement(login.loginBtn)
    // await browser.pause(2000)

    it('login by json data ', async () => {
               await browser.maximizeWindow()
               await login.navigateUrl(data.url)
               await login.entervalue(login.emailadd, data.emailadd)
               await login.entervalue(login.password, data.password)
               await login.clickOnElement(login.loginBtn)
               await browser.pause(2000)
    
    });

});