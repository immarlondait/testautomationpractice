// pageObjects/AutomationPage.js
class AutomationPage {

    // region Constructor
    constructor(page) {
      this.page = page;

      this.nameField = '#name'                    // Locator for name input field
      this.emailField = '#email'                  // Locator for email field
      this.phoneField = '#phone'                  // Locator for phone field
      this.addressField = '#textarea'             // Locator for Addresse field

      this.maleRadioId = '#male'                    // Male Radio button
      this.femaleRadioId = '#female'                //Female Radio button

      this.sundayCheckboxId = '#sunday'             // Days of the week checkbox
      this.mondayCheckboxId = '#monday'
      this.tuesdayCheckboxId = '#tuesday'
      this.wednesdayCheckboxId = '#wednesday'
      this.thursdayCheckboxId = '#thursday'
      this.fridayCheckboxId = '#friday'
      this.saturdayCheckboxId = '#saturday'

      this.countryDropdownId = '#country'           // Country dropdown

      this.colorRedCSS = "option[value='red']"       // Color - Red
      this.colorBlueCSS = "option[value='blue']"     // Color - Blue
      this.colorGreenCSS = "option[value='green']"   // Color - Green
      this.colorYellowCSS = "option[value='yellow']" // Color - Yellow

      this.opencartLinkXPath = "//a[normalize-space()='open cart']"    //open cart link
      this.orangehrmLinkXPath = "//a[normalize-space()='orange HRM']"  //orange HRM link
      this.homeLinkXPath = "//a[normalize-space()='Home']"             //home page link

      this.webTableCSS = "table[name='BookTable']"

      this.paginationTableID = '#productTable'

      this.submitBtnID = '#FSsubmit'

      this.newBrowserWindowBtnCSS = "button[onclick='myFunction()']"

      this.alertBtnCSS = "button[onclick='myFunctionAlert()']"
      this.confirmBtnCSS = "button[onclick='myFunctionConfirm()']"
      this.promptBtnCSS = "button[onclick='myFunctionPrompt()']"

      this.field1ID = "#field1"
      this.field2ID = "#field2"

      this.genderMaleRadioId = '#RESULT_RadioButton-1_0'
      this.genderFemaleRadioId = '#RESULT_RadioButton-1_1'

    }
    // endregion
  
    // region Text Input Fields
    // Action to fill in name
    async enterName(name) {
      await this.page.fill(this.nameField, name);
    }
  
    // Action to fill in email
    async enterPassword(email) {
      await this.page.fill(this.emailField, email);
    }

    // Action to fill in phone
    async enterPhoned(phone) {
      await this.page.fill(this.phoneField, phone);
    }

    // Action to fill in address
    async enterPassword(address) {
      await this.page.fill(this.addressField, address);
    }
    // endregion


    // Action to fill in address
    async enterFieldText(text) {
      await this.page.fill(this.field1ID, text);
    }
    // endregion
    

  

  }
  
  module.exports = AutomationPage;