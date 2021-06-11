// here we import the basePage  class
var basePage = require("./basePage")
//here can create class and declare all data member in login class
class login  extends basePage{

    get emailadd(){
        return  $("#user_email")
    }
    

    get password(){
        return  $("#user_password")
    }
    
    get loginBtn(){
        return   $("//input[@value='Log In']")
    }

}

module.exports = new login()   
