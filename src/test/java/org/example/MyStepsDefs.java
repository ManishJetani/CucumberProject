package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepsDefs
{   //calling class and creating object
    HomePage homePage = new HomePage();
    RegisterPageDavid registerPageDavid = new RegisterPageDavid();
    RegistrationVerificationPage registrationVerificationPage = new RegistrationVerificationPage();
    NewOnlineStorePage newOnlineStorePage = new NewOnlineStorePage();
    RegisterPageRishi registerPageRishi = new RegisterPageRishi();
    ElectronicsPage electronicsPage = new ElectronicsPage();
    CellPhonePage cellPhonePage = new CellPhonePage();
    ShoppingCartPage shoppingCartPage = new ShoppingCartPage();
    CheckoutPage checkoutPage = new CheckoutPage();
    CheckoutCompletedPage checkoutCompletedPage = new CheckoutCompletedPage();

    @Given("^user is on registration page$")
    public void user_is_on_registration_page()
    {
        homePage.clickOnRegisterButton();
    }

    @When("^user entered all required details and click register button$")
    public void user_entered_all_required_details_and_click_register_button()
    {
        registerPageDavid.verifyRegisterButtonLink();
        registerPageDavid.enterRegistrationDetails();
    }

    @Then("^user should be able to see registration successful message$")
    public void user_should_be_able_to_see_registration_successful_message()
    {
        registrationVerificationPage.verifyRegistrationMessage();
    }
    @Given("^user is already on comment page$")
    public void user_is_already_on_comment_page()
    {
        homePage.clickOnNewOnlineStore();
    }

    @When("^user enter comment title and comment and click on new comment$")
    public void user_enter_comment_title_and_comment_and_click_on_new_comment()
    {
        newOnlineStorePage.verifyNewOnlineStorePageIsOpen();
        newOnlineStorePage.typeCommentTitleAndComment();
    }

    @Then("^user should be able to see comment present and should be last in comments field$")
    public void user_should_be_able_to_see_comment_present_and_should_be_last_in_comments_field()
    {
        newOnlineStorePage.verifyCommentAddedSuccessfully();
        newOnlineStorePage.verifyCommentAndTitlePresentInComments();
        newOnlineStorePage.verifyNewCommentAddedIsPresentAtLastInList();
    }
    @Given("^user is on homepage and see prices of products as per default currency$")
    public void user_is_on_homepage_and_see_prices_of_products_as_per_default_currency()
    {
        homePage.verifyCurrencySymbolForEachSelectedCurrency();
    }

    @When("^user select another currency$")
    public void user_select_another_currency()
    {
        homePage.selectAnotherCurrency();
    }

    @Then("^user should be able to see prices of products as per another selected currency$")
    public void user_should_be_able_to_see_prices_of_products_as_per_another_selected_currency()
    {
        homePage.verifyCurrencySymbolForEachSelectedCurrency();
    }
    @When("^user entered all required fields and click register button$")
    public void user_entered_all_required_fields_and_click_register_button()
    {
        registerPageRishi.verifyRegisterButtonLink();
        registerPageRishi.enterPersonalDetails();
    }

    @Then("^user should be able to see registration is successful message$")
    public void user_should_be_able_to_see_registration_is_successful_message()
    {
        registrationVerificationPage.verifyRegistrationMessage();
    }

    @When("^user click continue$")
    public void user_click_continue()
    {
        registrationVerificationPage.clickOnContinueButton();
    }

    @When("^select electronic category and select sub category cell phone$")
    public void select_electronic_category_and_select_sub_category_cell_phone()
    {
        electronicsPage.cellPhoneSubCategory();
        cellPhonePage.verifyingCellPhoneURL();

    }

    @When("^user add product into basket and click on terms and condition and check out button$")
    public void user_add_product_into_basket_and_click_on_terms_and_condition_and_check_out_button()
    {
         cellPhonePage.buyProduct();
         shoppingCartPage.verifyShoppingCartURL();
         shoppingCartPage.checkoutButton();
    }

    @When("^user entered all required details of payment and shipping$")
    public void user_entered_all_required_details_of_payment_and_shipping()
    {
        checkoutPage.verifyCheckoutPageURL();
        checkoutPage.checkoutDetails();
    }

    @Then("^user should be able to buy product successfully with thank you message$")
    public void user_should_be_able_to_buy_product_successfully_with_thank_you_message()
    {
        checkoutCompletedPage.verifyCheckoutCompleteMessage();
    }



}
