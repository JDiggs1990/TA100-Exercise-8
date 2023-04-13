//copy-pasta'd from example.e2e.js


import ARElementsPage from '../pageobjects/ARElementsPage.js'


describe('My Add/Remove Elements application', () => {
    it('should Add Element', async () => {
        await ARElementsPage.open()
        await browser.pause(3000)  //waits three seconds so we can read it    
        await ARElementsPage.btn1.click() //adds element?
        //setAttribute('selected');
        await browser.pause(3000)

    })

    it('should Delete Element', async () => {
        await ARElementsPage.open()
        await browser.pause(3000)
        await ARElementsPage.btn2.click() //deletes element?
        await browser.pause(3000)

    })

})




/*

Alternate solution

import  dropdown page

describe 
it



it 

*/




