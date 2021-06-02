package org.example;


import org.openqa.selenium.By;
import org.testng.Assert;

public class RegisterPageDavid extends Utils
{   private By _radioButton = By.cssSelector("input#gender-male");
    private By _firstName = By.xpath("//input[contains(@id,'FirstName')]");
    private By _lastName = By.xpath("//input[contains(@id,'LastName')]");
    private By _dateOfBirth = By.xpath("//select[contains(@name,'DateOfBirthDay')]");
    private By _monthOfBirth = By.xpath("//select[contains(@name,'DateOfBirthMonth')]");
    private By _yearOfBirth = By.xpath("//select[contains(@name,'DateOfBirthYear')]");
    private By _email = By.cssSelector("input#Email");
    private By _companyName = By.xpath("//input[starts-with(@name,'Company')]");
    private By _password = By.cssSelector("input#Password");
    private By _confirmPassword = By.cssSelector("input#ConfirmPassword");
    private By _clickOnRegister = By.xpath("//button[text()='Register']");
    private By _waitForClickable = By.cssSelector("button#newsletter-subscribe-button");
    LoadProperty loadProperty = new LoadProperty();

    public void verifyRegisterButtonLink()
    {   //test data
        String actualURL = driver.getCurrentUrl();
        String expectedURL = "https://demo.nopcommerce.com/register?returnUrl=%2F";
        //verify right url after clicking on register button
        Assert.assertTrue(expectedURL.equals(actualURL),"Current URL is not matching");
    }
    public void enterRegistrationDetails()
    {   //wait for clickable element
        waitForClickable(_waitForClickable,100);
        //click on Male or Female button
        clickOnElement(_radioButton);
        //Type FirstName
        enterText(_firstName,loadProperty.getProperty("firstName"));
        //Type LastName
        enterText(_lastName,loadProperty.getProperty("lastName"));
        //Select day of date of birth
        selectFromDropdownByValue(_dateOfBirth,loadProperty.getProperty("dateOfBirth"));
        //select month of birth
        selectFromDropdownByVisibleText(_monthOfBirth,loadProperty.getProperty("monthOfBirth"));
        //select year of birth
        selectFromDropdownByValue(_yearOfBirth,loadProperty.getProperty("yearOfBirth"));
        //type email address
        enterText(_email,loadProperty.getProperty("email")+dateStamp()+"@yahoo.com");
        //type company name
        enterText(_companyName,loadProperty.getProperty("companyName"));
        //type password
        enterText(_password,loadProperty.getProperty("password"));
        //confirm password
        enterText(_confirmPassword,loadProperty.getProperty("confirmPassword"));
        //click on register
        clickOnElement(_clickOnRegister);
    }
}
