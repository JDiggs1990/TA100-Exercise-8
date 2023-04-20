import Page from './page.js';

class challengingDomPage extends Page {            ///change nomenclature to not match, for better practices

get link1() {//Link Text strategy
    return $('=Elemental Selenium')

    //<a href="https://webdriver.io">WebdriverIO</a>
    //$('=Elemental Selenium')
}

get partlink2() {//Partial Link Text strategy
    return $('*=ntal Sel')

    //const link = await $('*=driver')
    //await expect(link).toHaveText('Elemental Selenium')
    //await expect(link).toHaveAttribute('href', 'http://elementalselenium.com/')

}
get TextCheck() {
    return $('//*[@id="content"]/div/div/div/div[2]/table/tbody/tr[1]/td[2]')       //xpath


    // selector #content > div > div > div > div.large-10.columns > table > tbody > tr:nth-child(1) > td:nth-child(2)
    // shortened selector 
    //  xpath  //*[@id="content"]/div/div/div/div[2]/table/tbody/tr[1]/td[2]


}




open () {
    return super.open('challenging_dom');       //copied from html address
}



}



export default new challengingDomPage();