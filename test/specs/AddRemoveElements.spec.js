//copy-pasta'd from example.e2e.js


import ARElementsPage from '../pageobjects/ARElementsPage.js'


describe('My Add/Remove Elements application', () => {
    xit('should Add Element, check that 5 exist', async () => {
        await ARElementsPage.open()
        await browser.pause(3000)  //waits three seconds so we can read it    
        await ARElementsPage.btn1.click() //adds element once
        await browser.pause(3000)

        await browser.pause(3000)
        await ARElementsPage.btn1.click() // array of size i, for loop, or do while size is less than
        await browser.pause(500)
        await ARElementsPage.btn1.click() 
        await ARElementsPage.btn1.click() 
        await ARElementsPage.btn1.click() 
        //await ARElementsPage.btn1.click() 
        await browser.pause(500)

        
    })

    xit('should Delete Element 2, check that 3 exist', async () => {
        //await ARElementsPage.open()    will reopen and effectively referesh page, causing added elements to be reomved
        await browser.pause(3000)
        await ARElementsPage.btn2.click() //deletes element?
        await browser.pause(3000)
        await ARElementsPage.btn2.click() //deletes element?
        await browser.pause(3000)
        //CHECK FOR NUMBER OF ELEMENTS or array size
    })

})




/*

Alternate solution

import  dropdown page

describe 
it



it 

*/




