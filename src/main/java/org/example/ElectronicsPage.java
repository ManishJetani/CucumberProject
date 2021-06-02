package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class ElectronicsPage extends Utils
{   private By _clickElectronics = By.cssSelector(".top-menu.notmobile>li:nth-of-type(2)>a");
    private By _clickCellPhone = By.cssSelector(".listbox .list .active.last .sublist .inactive:nth-of-type(2)>a");
    private By _waitForClickable = By.cssSelector("button#newsletter-subscribe-button");

    public void cellPhoneSubCategory()
    {   //test data
        String actualURL = driver.getCurrentUrl();
        String expectedURL = "https://demo.nopcommerce.com/";
        //verify actual URL
        Assert.assertTrue(actualURL.equals(expectedURL),"current url is not matching");
        //click on electronics category
        sleep(2000);
        //waitForClickable(_waitForClickable,100);
        clickOnElement(_clickElectronics);
        //click on cell phones
        clickOnElement(_clickCellPhone);
    }

}
