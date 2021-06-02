package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class ShoppingCartPage extends Utils
{   private By _termsAndCondition = By.cssSelector("input#termsofservice");
    private By _checkoutButton = By.cssSelector("button#checkout");
    private By _waitForClickable = By.cssSelector("button#newsletter-subscribe-button");
    public void verifyShoppingCartURL()
    {   //test data
        String actualURL = driver.getCurrentUrl();
        String expectedURL = "https://demo.nopcommerce.com/cart";
        //verify actual url
        Assert.assertTrue(actualURL.equals(expectedURL),"current url is not matching");
    }
    public void checkoutButton ()
    {    sleep(2000);
//        waitForClickable(_waitForClickable,100);
        //click on agreeing terms and condition
        clickOnElement(_termsAndCondition);
        //click on checkout button
        clickOnElement(_checkoutButton);
    }
}
