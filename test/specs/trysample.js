
describe('element methods' , () => {

    it('scrolling to particular element', async () => {

       await browser.maximizeWindow()
        await browser.url("https://skillrary.com/")
        var HoveElemnt = await $("//span[text()='GEARS']")
        await HoveElemnt.waitForDisplayed()
        await HoveElemnt.moveTo()
        await browser.pause(2000)
        var reloadElement = await $("//a[text()=' SkillRary Whiteboard ']")
        await reloadElement.waitForDisplayed()
        await browser.pause(2000)
        await reloadElement.click()
        await browser.pause(7000)


    });
});
