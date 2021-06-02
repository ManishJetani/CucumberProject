package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class CheckoutPage extends Utils
{   LoadProperty loadProperty = new LoadProperty();
    private By _countrySelection = By.cssSelector("#BillingNewAddress_CountryId");
    private By _cityName = By.cssSelector("#BillingNewAddress_City");
    private By _address1 = By.cssSelector("#BillingNewAddress_Address1");
    private By _postalCode = By.cssSelector("#BillingNewAddress_ZipPostalCode");
    private By _phoneNumber = By.cssSelector("#BillingNewAddress_PhoneNumber");
    private By _continueBillingAddress = By.cssSelector("div#billing-buttons-container .button-1.new-address-next-step-button");
    private By _shippingMethod = By.cssSelector("#shippingoption_1");
    private By _continueShippingMethod = By.cssSelector("#shipping-method-buttons-container>button");
    private By _creditCardOption = By.cssSelector("#paymentmethod_1");
    private By _continuePaymentMethod = By.cssSelector("#payment-method-buttons-container>button");
    private By _creditCardType = By.cssSelector("#CreditCardType");
    private By _cardHolderName = By.cssSelector("#CardholderName");
    private By _cardNumber = By.cssSelector("#CardNumber");
    private By _monthExpiryField = By.cssSelector("#ExpireMonth");
    private By _yearExpiryField = By.cssSelector("#ExpireYear");
    private By _cardCode = By.cssSelector("#CardCode");
    private By _continuePaymentInformation = By.cssSelector("#payment-info-buttons-container>button");
    private By _confirmButton = By.cssSelector("#confirm-order-buttons-container>button");
    private By _waitForClickable = By.cssSelector("button#newsletter-subscribe-button");

    public void verifyCheckoutPageURL()
    {   //test data
        String actualURL = driver.getCurrentUrl();
        String expectedURL = "https://demo.nopcommerce.com/onepagecheckout#opc-billing";
        //verify actual url
        Assert.assertTrue(actualURL.equals(expectedURL),"current url is not matching");
    }
    public void checkoutDetails()
    {   //select country
        selectFromDropdownByVisibleText(_countrySelection,loadProperty.getProperty("country"));
        //type city name
        enterText(_cityName,loadProperty.getProperty("city"));
        //type address
        enterText(_address1,loadProperty.getProperty("address1"));
        //type postal code
        enterText(_postalCode,loadProperty.getProperty("postalCode"));
        //type phone number
        enterText(_phoneNumber,loadProperty.getProperty("phoneNumber"));
        //click on continue button
        clickOnElement(_continueBillingAddress);
        //click on shipping method
        clickOnElement(_shippingMethod);
        //click on continue button
        clickOnElement(_continueShippingMethod);
        //click on credit card option
        clickOnElement(_creditCardOption);
        //click on continue button
        clickOnElement(_continuePaymentMethod);
        waitForClickable(_waitForClickable,100);
        //select credit card type
        selectFromDropdownByVisibleText(_creditCardType,loadProperty.getProperty("creditCardType"));
        //type cardholder name
        enterText(_cardHolderName,loadProperty.getProperty("name"));
        //type cardholder surname
        enterText(_cardHolderName,loadProperty.getProperty("surname"));
        //type card number
        enterText(_cardNumber,loadProperty.getProperty("creditCardNumber"));
        //select expiry month of card
        selectFromDropdownByValue(_monthExpiryField,loadProperty.getProperty("creditCardExpiryMonth"));
        //select expiry year of card
        selectFromDropdownByValue(_yearExpiryField,loadProperty.getProperty("creditCardExpiryYear"));
        //type card security code
        enterText(_cardCode,loadProperty.getProperty("cardCode"));
        //click continue button
        clickOnElement(_continuePaymentInformation);
        //click on confirm button
        clickOnElement(_confirmButton);

    }
}
