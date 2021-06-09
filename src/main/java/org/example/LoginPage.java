package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;



public class LoginPage extends Utils
{
    private By _email = By.cssSelector("#Email");
    private By _password = By.cssSelector("input.password");
    private By _loginButton = By.cssSelector(".button-1.login-button");


    public void verifyCurrentURL()
    {   //expected url
        String url = "https://demo.nopcommerce.com/login?returnUrl=%2F";
        //verifying url
        assertCurrentURL(url);
    }

    public void enterLoginDetails(String Email, String passWord)
    {
        //enter email address
        enterText(_email,Email);
        //enter password
        enterText(_password,passWord);
        //click on login button
        clickOnElement(_loginButton);
    }
    public void verifyErrorMessage(String error_message)
    {   //verify error message
        WebElement loginVerificationField= driver.findElement(By.cssSelector(".returning-wrapper.fieldset"));
        //store data
        String actualErrorMessage=loginVerificationField.getText();
        //apply condition
        if(error_message.equals(actualErrorMessage))
        {
            System.out.println("Actual And Expected message are Same and It is:"+actualErrorMessage);
        }
        else
        {
            System.out.println("Actual is:"+actualErrorMessage);
            System.out.println("Expected is:"+error_message);
        }
    }

}
