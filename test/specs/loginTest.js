// here we are using login() object  here var login  using as an object 
//importing the loginpage
var login = require("C:/Users/swamynarayan/Desktop/demo_wedriverio/test/pageobjects/loginpage.js")
var data = require("C:\Users\swamynarayan\Desktop\demo_wedriverio\testData\data.json")
//i am telling import loginpage that export from the particular logintest.js 
//here i am performing the login class action // loginpage action into this loginTest page 

describe('loging to application',  () => {
    it('login', async () => {
       await login.navigateTOUrl("http://www.testyou.in/Login.aspx")
       await login.entervalue(login.username, "pradeep")
       await login.entervalue(login.password, "1234")
       await login.clickOnElement(login.loginBtn)
       await login.validatingResultText()
    });
});

// browser.isElementSelected(elementId)

//inside async function we can't create anothe async function 
//inside await we can not create  async function
//https://sso.teachable.com/secure/9521/users/sign_up?reset_purchase_session=1
