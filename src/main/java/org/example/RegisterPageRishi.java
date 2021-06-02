package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

public class RegisterPageRishi extends Utils
{
    LoadProperty loadProperty = new LoadProperty();
    private By _radioButton = By.cssSelector("#gender-male");
    private By _name = By.xpath("//input[contains(@id,'FirstName')]");
    private By _surname = By.xpath("//input[contains(@id,'LastName')]");
    private By _birthDate = By.xpath("//select[contains(@name,'DateOfBirthDay')]");
    private By _birthMonth = By.xpath("//select[contains(@name,'DateOfBirthMonth')]");
    private By _birthYear = By.xpath("//select[contains(@name,'DateOfBirthYear')]");
    private By _emailAddress = By.cssSelector("input#Email");
    private By _companyName = By.xpath("//input[starts-with(@name,'Company')]");
    private By _password1 = By.cssSelector("input#Password");
    private By _confirmPassword1 = By.cssSelector("input#ConfirmPassword");
    private By _clickOnRegister = By.xpath("//button[text()='Register']");
    private By _waitForClickable = By.cssSelector("button#newsletter-subscribe-button");

    public void verifyRegisterButtonLink()
    {   //test data
        String actualURL = driver.getCurrentUrl();
        String expectedURL = "https://demo.nopcommerce.com/register?returnUrl=%2F";
        //verify right URL after clicking on register button
        Assert.assertTrue(actualURL.equals(expectedURL),"Current URL is not matching");
    }
    public void enterPersonalDetails()
    {   //wait for driver to load
//        waitForClickable(_waitForClickable,120);
        sleep(5000);
        //click on Male button
        clickOnElement(_radioButton);
        //type first name
        enterText(_name,loadProperty.getProperty("name"));
        //type last name
        enterText(_surname,loadProperty.getProperty("surname"));
        //select date of birth
        selectFromDropdownByValue(_birthDate,loadProperty.getProperty("birthDate"));
        //select month of birth
        selectFromDropdownByVisibleText(_birthMonth,loadProperty.getProperty("birthMonth"));
        //select year of birth
        selectFromDropdownByValue(_birthYear,loadProperty.getProperty("birthYear"));
        //type email address
        enterText(_emailAddress,loadProperty.getProperty("emailAddress")+dateStamp()+"@yahoo.com");
        //type company name
        enterText(_companyName,loadProperty.getProperty("companyName"));
        //type password
        enterText(_password1,loadProperty.getProperty("password1"));
        //type confirm password
        enterText(_confirmPassword1,loadProperty.getProperty("confirmPassword1"));
        //click on register button
        clickOnElement(_clickOnRegister);
    }







}
