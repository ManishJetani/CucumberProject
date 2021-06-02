package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class RegistrationVerificationPage extends Utils
{   LoadProperty loadProperty = new LoadProperty();
    private By _actualResult = By.xpath("//div[text()='Your registration completed']");
    private By _clickOnContinue = By.cssSelector("a.button-1.register-continue-button");

    public void verifyRegistrationMessage()
    {   //verify user has registered successfully
        Assert.assertEquals(getTextFromElement(_actualResult),"Your registration completed","Registration is not successful");
        //message print
        System.out.println(loadProperty.getProperty("registrationMessage"));
    }
    public void clickOnContinueButton()
    {    sleep(2000);
        //click on continue button
        clickOnElement(_clickOnContinue);

    }
}
