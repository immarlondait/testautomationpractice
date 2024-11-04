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
      this.dragToHereID = "//div[@id='droppable']"

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

      this.priceRangeSliderLeftXPath = "//div[@id='slider-range']//span[1]"
      this.priceRangeSliderRightXPath = "//div[@id='slider-range']//span[2]"

      this.SVGElementCircleCSS = "circle[cx='15']"
      this.SVGElementRectCSS = "rect[x='3']"
      this.SVGElementTriXPath = "polygon[points='15,3 3,27 27,27']"

      this.BrokenLinkErrorcode400XPath = "//a[normalize-space()='Errorcode 400']"
      this.BrokenLinkErrorcode401XPath = "//a[normalize-space()='Errorcode 401']"
      this.BrokenLinkErrorcode403XPath = "//a[normalize-space()='Errorcode 403']"
      this.BrokenLinkErrorcode404XPath = "//a[normalize-space()='Errorcode 404']"
      // more to add

      this.FormSection1InputID = "#input1"
      this.FormSection1SubmitID = "#btn1"
      this.FormSection2InputID = "#input2"
      this.FormSection2SubmitID = "#btn2"
      this.FormSection3InputID = "#input3"
      this.FormSection3SubmitID = "#btn3"

      this.FooterLinksHomeXPath = "//a[@href='http://testautomationpractice.blogspot.com/']"
      this.FooterLinksHiddenElementsAndAJAXXPath = "//a[normalize-space()='Hidden Elements & AJAX']"
      this.FooterLinksDownloadFilesXPath = "//a[normalize-space()='Download Files']"

      this.CPULoadXPath = "//strong[@class='chrome-cpu']"

      


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