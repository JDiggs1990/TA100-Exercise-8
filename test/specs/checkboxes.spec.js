//run tests here 





import CheckBoxPage from '../pageobjects/CheckBoxPage.js' //however named in export CheckBoxPage.js

describe('Checkbox application', () => {
    xit('should check box 2 after unchecking box 1', async () => {
        await CheckBoxPage.open()
        await browser.pause(3000)  //waits three seconds so we can read it
        await(CheckBoxPage).checkbox1.click()
        await browser.pause(3000)
        await(CheckBoxPage).checkbox2.click()
        await browser.pause(3000)
       
    })
})