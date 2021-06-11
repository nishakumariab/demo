var login = require("C:/Users/swamynarayan/Desktop/demo_wedriverio/test/assypageobjects/loginPage.js")
//var home  = require("C:/Users/swamynarayan/Desktop/demo_wedriverio/test/assypageobjects/singup.js")
// var logout = require("C:/Users/swamynarayan/Desktop/demo_wedriverio/test/assypageobjects/logoutPage.js")
// var data = require("C:/Users//swamynarayan/Desktop/demo_wedriverio/testData/data.json")

// const {exceldata} = require("C:/Users/swamynarayan/Desktop/demo_wedriverio/testData/excelData.js")
// var obj_exceldata = require("C:/Users/swamynarayan/Desktop/demo_wedriverio/testData/excelData.js")
// var exceldata = obj_exceldata.exceldata


describe('loging to application',  () => {
    it('login', async () => {
       await login.navigateUrl("https://www.udemy.com/join/login-popup/?locale=en_US&response_type=html&next=https%3A%2F%2Fwww.udemy.com%2Fjoin%2Flogin-popup%2F%3Flocale%3Den_US%26next%3Dhttps%253A%252F%252Fwww.udemy.com%252Fjoin%252Flogin-popup%252F%253Flocale%253Den_US%2526next%253Dhttps%25253A%25252F%25252Fwww.udemy.com%25252Fjoin%25252Flogin-popup%25252F%25253Flocale%25253Den_US%252526response_type%25253Dhtml%252526next%25253Dhttps%2525253A%2525252F%2525252Fwww.udemy.com%2525252Fjoin%2525252Flogin-popup%2525252F%2525253Fnext%2525253D%2525252Fcourse%2525252Fselenium-real-time-examplesinterview-questions%2525252Flearn%2525252Flecture%2525252F4753216%25252523questions%2526response_type%253Dhtml%26response_type%3Dhtml")
       
       await login.entervalue(login.emailadd, "hhnnhn@gmail.com")
       await login.entervalue(login.password, "123456")
       await login.clickOnElement(login.loginBtn)
       await login.validatingResultText()
    });

// // describe('loging to application',  () => {   async function ()
//   describe.skip('loging to application',  async function () { 
//   this.retries(3)
//     it.skip('login by json data ', async () => {
      
//        await login.navigateUrl(data.url)
   
//        await login.entervalue(login.emailadd, data.emailadd)
   
//        await login.entervalue(login.password, data.password)
//        await login.clickOnElement(login.loginBtn)
//        await login.validatingResultText()
//     });


//     // it('login by excel data', async () => {
//       it.skip('login by excel data', async function () {
//       this.retries(2)   
//       await login.navigateUrl(exceldata[0].URL)
  
//       await login.entervalue(login.emailadd, exceldata[0].EMAILADD)
  
//       await login.entervalue(login.password, exceldata[0].PASSWORD)

//       await login.clickOnElement(login.loginBtn)
//       await login.validatingResultText()
//    });


    //  it('home', async () => {
    //    await home.navigateUrl("https://sso.teachable.com/secure/9521/users/sign_up?reset_purchase_session=1")
       
    //    await home.entervalue(home.fullname, "nisha kumari")
    //    await home.entervalue(home.emailadd, "nishasinghcud@gmail.com")
    //    await home.entervalue(home.password, "nisha@singh")
    //    await home.entervalue(home.confirmpass, "nisha@singh")
    //    await home.clickOnElement(home.checkbox)
    //    await home.clickOnElement(home.signupbtn)

    //    await logout.clickOnElement(logout.dropdown)
    //    await logout.dropdownElement(logout.selectelement)
    //    await logout.clickOnElement(logout.selectelement)
 
   
    // });
});

// https://sso.teachable.com/secure/9521/users/sign_up?reset_purchase_session=1