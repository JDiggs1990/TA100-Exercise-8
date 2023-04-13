
/*
check box 1 and uncheck box 2


getElementByID('checkboxes')  // no specific ID, can't target this way
setAttribute("checked" OR "") 
)
removeAttribute("checked")

$selector.click


*/

/*
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckBoxes extends Page {
    /**
     * define selectors using getter methods
     */
    
get div class="exampl"
    get checkbox_1 () {

        //return $('button[type="submit"]');
            #checkbox

        setAttribute("checked") && isSelected() == "true"
      
    }

    get checkbox_2 () {
        

        removeAttribute  isSelectd() == "false"  OR 

    

    open () {
        return super.open('checkboxes');  // URL
    }
}

    export default new CheckBoxPage();   //checkboxes instead?
*/

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    
    /*async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    */ //commented out because unneeded

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}


/*
someone else's solution 

target input type checkbox   but they are same "input" with same type, target individually
no id's for them, cant use that strategey

no ID, no unique tag name, no partial link, 

can use xPath: parent element with input inside //parent/child[#] 
can r-click Copy on input type checkbox to copy selector or xpath
"//form/input[2]"


get checkbox1 () {}
return $('checkboxes > //form/input[2]
}

get checkbox2
return $('#checkboxes > input [type= checkbox]:nth-child(3)');


*/










import Page from './page.js';
