// here we import the basePage  class
 var basePage = require("./basePage")
//here can create class and declare all data member in login class
class login  extends basePage{

    get emailadd(){
        return  $("#email--1")
    }
    

    get password(){
        return  $("#id_password")
    }
    
    get loginBtn(){
        return   $("#submit-id-submit")
    }
 

    get resultText(){
          return $("//div[text()='There was a problem logging in. Check your email and password or create an account.']")
     
    }
    async validatingResultText(){
        await (await this.resultText).waitForDisplayed()
        console.log("======================"+await (await this.resultText).getText());
        await expect(this.resultText).toHaveText('There was a problem logging in. Check your email and password or create an account.')
        await browser.pause(3000)
    }

}
// i am creaitng object for login class so that will exports
module.exports = new login()   

  //div[text()='There was a problem logging in. Check your email and password or create an account.']
       // return $("//div[contains(@class,'alert alert-danger')]")
        ////div[@class='alert alert-danger']