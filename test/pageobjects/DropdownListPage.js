// id "dropdown"
//tag name "option"
//setAttribute('selected');
// option1 xpath  //*[@id="content"]/script/text()




import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DropdownListPage extends Page {
    /**
     * define selectors using getter methods
     */

    get option1 () {
        //return $('#option1 > input[type=option]:nth-child(2)') //element not found
        return $('//*[@id="dropdown"]/option[2]')
    
    }

    get option2(){
        return $('//*[@id="dropdown"]/option[3]')     //xpath not formatted properly?; selector with xpath invalid
        //full xpath  /html/body/div[2]/div/script/text()
        //xpath  *[@id="checkboxes"]/input[2] does not work
        //  //*[@id="dropdown"]/option[2]
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    }

//automate check for selected option



    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dropdown');
    }
}

export default new DropdownListPage();










