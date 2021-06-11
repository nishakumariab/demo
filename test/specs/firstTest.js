var expect = require('chai').expect 
describe('first test suite', () => {
    it('navigating to url and validating the page', () => {

         browser.url("https://webdriver.io/docs/api/browser/url")
        console.log(browser.getUrl()); // geturl()  this is only method we get the url // we can see on the console 
       // browser.pause(3000) // this much code only consider as script it has not consider as test script because i am not validating anything over here i need to add some assertion 
    
       browser.pause(5000)
    //    browser.saveScreenshot("C:/Users/swamynarayan/Desktop/demo_wedriverio/screenshorts/sc_01.png")
       console.log("size of the window is : "+browser.getWindowSize()); 

/////  above code is written in shynchronous mode  // which is not support webdriverio latest verstion above  v6
//now i am going to write code on asychronous mode , how i will write 
// i will write using await and asyn function before calling  any api.
//await is use before every protocal and async is use to  before every method 


    //     // console.log("size of the window is : "+browser.getWindowSize()); 
    //     console.log("the url of the page is : " +await browser.getUrl());

    //     await expect(browser).toHaveUrl('https://webdriver.io/docs/api/browser/url/')
    //     await expect(browser).toHaveTitle('url | WebdriverIO $$$$')
    // });

        // how add assertion in webdriverio 
        //how to validate 
        //

        // validating url
        // var url = browser.getUrl() 
        // await   expect(browser).toHaveUrl(url)  // tohaveUrl  method going to check the url and this is how we validate the url 
      

 // validating title 
//  var title = browser.getTitle()
//  await expect(browser).toHaveTitle(title)

//  browser.pause(3000)
 //assertoin library is used to validate the think 
 //validating element and browser 
    });
});

//$ repersent findElement no need to use browser.findelement() like previously 
//here using $ we can tell $(findelement)  .click()