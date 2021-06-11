var basePage = require("./basePage")

class logout extends basePage {

get dropdown() {
return $("//a[@class='fedora-navbar-link navbar-link dropdown-toggle open-my-profile-dropdown']")
}

get selectelement() {
    return $("//li[@class='user-signout']")
}
module.exports = new logout()  