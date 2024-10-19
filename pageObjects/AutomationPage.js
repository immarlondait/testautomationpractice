// pageObjects/AutomationPage.js
// https://testautomationpractice.blogspot.com/

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

      //below button changes state when clicked into the other
      this.dynamicButtonStartCSS = "button[name='start']"
      this.dynamicButtonStopCSS = "button[name='stop']"

      this.newTabButtonXPath = "//button[normalize-space()='New Tab']"

      this.alertBtnCSS = "button[onclick='myFunctionAlert()']"
      this.confirmBtnCSS = "button[onclick='myFunctionConfirm()']"
      this.promptBtnCSS = "button[onclick='myFunctionPrompt()']"

      this.popupWindowID = "#PopUp"

      this.field1ID = "#field1"
      this.field2ID = "#field2"
      this.copyTextBtnXPath = "//button[normalize-space()='Copy Text']"

      this.dragAndDropXPath = "//p[normalize-space()='Drag me to my target']"

      this.genderMaleRadioId = '#RESULT_RadioButton-1_0'
      this.genderFemaleRadioId = '#RESULT_RadioButton-1_1'

      this.XPathAxesSection1TextCSS = "#section1"
      this.XPathAxesSection1BtnCSS = "#btn1"

      this.XPathAxesSection2TextCSS = "#section2"
      this.XPathAxesSection2BtnCSS = "#btn2"

      this.XPathAxesSection3TextCSS = "#section3"
      this.XPathAxesSection3BtnCSS = "#btn3"

      this.MobilesID = "#mobiles"


      this.mobileSamsung = "#samsung"
      this.mobileRealMe = "#realme"
      this.mobileMoto = "#moto"

      this.LaptopsAppleID = "#apple"
      this.LaptopsLenovoID = "#lenovo"
      this.LaptopsDellID = "#dell"

      this.DynamicWebTableID = "#taskTable"
      


    }
    // endregion
  
    // region Text Input Fields
    async enterName(name) {
      await this.page.fill(this.nameField, name);
    }
  
    async enterPassword(email) {
      await this.page.fill(this.emailField, email);
    }


    async enterPhoned(phone) {
      await this.page.fill(this.phoneField, phone);
    }


    async enterAddress(address) {
      await this.page.fill(this.addressField, address);
    }


    async enterFieldText(text) {
      await this.page.fill(this.field1ID, text);
    }




    // endregion
    

  

  }
  
  module.exports = AutomationPage;