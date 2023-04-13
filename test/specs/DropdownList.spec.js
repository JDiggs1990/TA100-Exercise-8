//copy-pasta'd from example.e2e.js


import DropdownListPage from '../pageobjects/DropdownListPage.js'

describe('My DropdownList application', () => {
    xit('should select option 1', async () => {
        await DropdownListPage.open()
        await browser.pause(3000)  //waits three seconds so we can read it    
        await(DropdownListPage).option1.click()
        //setAttribute('selected');
        await browser.pause(3000)

    })

    xit('should select 2', async () => {
        await DropdownListPage.open()
        await browser.pause(3000)
        await(DropdownListPage).option2.click()
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




