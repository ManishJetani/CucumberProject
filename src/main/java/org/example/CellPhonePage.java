package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class CellPhonePage extends Utils
{   private By _clickOnAddToCart = By.cssSelector(".item-box:nth-of-type(3) .button-2.product-box-add-to-cart-button");
    private By _clickOnShoppingCart = By.cssSelector(".content>a");
    private By _waitForClickable = By.cssSelector("button#newsletter-subscribe-button");

    public void verifyingCellPhoneURL()
    {   //test data
        String actualURL = driver.getCurrentUrl();
        String expectedURL = "https://demo.nopcommerce.com/cell-phones";
        //verify current url
        Assert.assertTrue(actualURL.equals(expectedURL),"current url is not matching");
    }
    public void buyProduct()
    {   //click on add to cart button
        clickOnElement(_clickOnAddToCart);
        waitForClickable(_waitForClickable,60);
        //click on shopping cart button
        clickOnElement(_clickOnShoppingCart);
    }
}
