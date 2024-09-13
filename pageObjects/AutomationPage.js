// pageObjects/AutomationPage.js
class AutomationPage {
    constructor(page) {
      this.page = page;
      this.nameField = '#name'  // Locator for name input field
      this.emailField = '#email' // Locator for email field

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