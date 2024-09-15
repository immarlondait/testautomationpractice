// pageObjects/AutomationPage.js
class AutomationPage {
    constructor(page) {
      this.page = page;

      this.nameField = '#name'  // Locator for name input field
      this.emailField = '#email' // Locator for email field
      this.phoneField = '#phone' // Locator for phone field
      this.addressField = '#textarea' // Locator for Addresse field

      this.maleRadio = '#male' // Male Radio button
      this.femaleRadio = '#female' //Female Radio button

      this.sundayCheckbox = '#sunday'
      this.mondayCheckbox = '#monday'
      this.tuesdayCheckbox = '#tuesday'
      this.wednesdayCheckbox = '#wednesday'
      this.thursdayCheckbox = '#thursday'
      this.fridayCheckbox = '#friday'
      this.saturdayCheckbox = '#saturday'

      

    }
  
    // Action to fill in name
    async enterName(name) {
      await this.page.fill(this.nameField, name);
    }
  
    // Action to fill in email
    async enterPassword(email) {
      await this.page.fill(this.emailField, email);
    }
  

  }
  
  module.exports = AutomationPage;