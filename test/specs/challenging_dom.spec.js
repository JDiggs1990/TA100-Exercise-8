import challengingDomPage from "../pageobjects/challenging_dom.page.js";


describe('Challenging DOM application', () => {
    it('should click link 1', async () => {
        await challengingDomPage.open()
        await browser.pause(3000)  //waits three seconds so we can read it
        await(challengingDomPage).link1.click()
        
    })

    it('should click partlink2, same link different method', async () =>{


        await challengingDomPage.open()
        await browser.pause(3000)  //waits three seconds so we can read it
        await(challengingDomPage).partlink2.click()

    })

    it('should check for element existance and hasText', async () =>{               //Create an assertion that states that the element <td>Apeirian0</td> exists, and it has the text "Apeirian0"

    await challengingDomPage.open()
        await browser.pause(3000)  //waits three seconds so we can read it
        await(challengingDomPage).TextCheck
        expect (challengingDomPage.TextCheck).toHaveTextContaining('Apeirian0')
           // copy selector:  #content > div > div > div > div.large-10.columns > table > tbody > tr:nth-child(1) > td:nth-child(2)
           // xpath //*[@id="content"]/div/div/div/div[2]/table/tbody/tr[1]/td[2]
})
})

