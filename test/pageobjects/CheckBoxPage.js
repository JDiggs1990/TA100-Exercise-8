

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckBoxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkbox1 () {
        return $('#checkboxes > input[type=checkbox]:nth-child(1)') 
    }

    get checkbox2(){
        return $('//form/input[2]')     //xpath not formatted properly;
        //full xpath  /html/body/div[2]/div/div/form/input[2]
        //xpath  *[@id="checkboxes"]/input[2]
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkboxes');
    }
}

export default new CheckBoxPage();
