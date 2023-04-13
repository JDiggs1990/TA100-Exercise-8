

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ARElementsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btn1 () {
        return $('//*[@id="content"]/script/text()') 
    }

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //}

    /**
     * overwrite specific options to adapt it to page object
     */
   async open () {
        return super.open('AddRemoveElements');
    }
}

export default new add_remove_elements();
