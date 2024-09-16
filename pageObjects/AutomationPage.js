// pageObjects/AutomationPage.js
class AutomationPage {
    constructor(page) {
      this.page = page;

      this.nameField = '#name'                    // Locator for name input field
      this.emailField = '#email'                  // Locator for email field
      this.phoneField = '#phone'                  // Locator for phone field
      this.addressField = '#textarea'             // Locator for Addresse field

      this.maleRadio = '#male'                    // Male Radio button
      this.femaleRadio = '#female'                //Female Radio button

      this.sundayCheckbox = '#sunday'             // Days of the week checkbox
      this.mondayCheckbox = '#monday'
      this.tuesdayCheckbox = '#tuesday'
      this.wednesdayCheckbox = '#wednesday'
      this.thursdayCheckbox = '#thursday'
      this.fridayCheckbox = '#friday'
      this.saturdayCheckbox = '#saturday'

      this.countryDropdown = '#country'           // Country dropdown

      this.colorRed = "option[value='red']"       // Color - Red
      this.colorBlue = "option[value='blue']"     // Color - Blue
      this.colorGreen = "option[value='green']"   // Color - Green
      this.colorYellow = "option[value='yellow']" // Color - Yellow

      this.opencartLink = "//a[normalize-space()='open cart']"    //open cart link
      this.orangehrmLink = "//a[normalize-space()='orange HRM']"  //orange HRM link
      this.homeLink = "//a[normalize-space()='Home']"             //home page link

    }
  
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

  

  }
  
  module.exports = AutomationPage;