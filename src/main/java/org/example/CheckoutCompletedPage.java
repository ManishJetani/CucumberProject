package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class CheckoutCompletedPage extends Utils
{   LoadProperty loadProperty = new LoadProperty();
    private By _actualCompletionMessage = By.cssSelector(".section.order-completed .title>strong");

    String expectedCompletionMessage = loadProperty.getProperty("expectedCompletionMessage");

    public void verifyCheckoutCompleteMessage()
    {   //verify actual confirmation message
        Assert.assertTrue(getTextFromElement(_actualCompletionMessage).equals(expectedCompletionMessage),"Order has not been processed");
        System.out.println(expectedCompletionMessage);
    }
}
