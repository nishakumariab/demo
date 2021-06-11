var basePage = require("./basePage")

class home extends basePage {

    get fullname(){
        return  $("#user_name")
    }
    
    get emailadd(){
        return $("#user_email")
    }

    get password(){
        return  $("#user_password")
    }

    get confirmpass(){
        return $("#user_password_confirmation")
    }

     get checkbox(){
        return $("#user_agreed_to_terms")
    }

     get signupbtn(){
        return $("//input[@class='btn btn-primary btn-md signup-button']")
    }
    //a[@class='fedora-navbar-link navbar-link dropdown-toggle open-my-profile-dropdown']
    //input[@class='btn btn-primary btn-md signup-button']
}

module.exports = new home()