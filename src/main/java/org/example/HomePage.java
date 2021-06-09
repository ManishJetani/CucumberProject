package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;

public class HomePage extends Utils
{   LoadProperty loadProperty = new LoadProperty();
    private By _clickOnRegister =  By.cssSelector(".ico-register");
    private By _clickOnNewOnlieStoreTitle = By.cssSelector(".news-head:first-of-type>a");
    private By _currencyName = By.cssSelector("select#customerCurrency");
    private By _listOfPrice = By.xpath("//span[contains(@class,'price actual-price')]");
    private By _clickOnLoginButton = By.cssSelector(".ico-login");

    public void clickOnRegisterButton()
    {   //click on register button
        clickOnElement(_clickOnRegister);
    }
    public void clickOnNewOnlineStore()
    {   //click on new online store title
        clickOnElement(_clickOnNewOnlieStoreTitle);
    }
    public static String getCurrencySymbol(String currencyName)
    {   //test data
        String currencySymbol = null;
        //apply condition
        switch (currencyName){
            case "US Dollar":
                currencySymbol = "$";
                break;
            case "Euro":
                currencySymbol = "€";
                break;
            default:
                System.out.println("Currency is not recognised");
        }
        return currencySymbol;

    }
    public void verifyCurrencySymbolForEachSelectedCurrency()
    {   //getting name of currency selected
        String currencyNameSelected = getSelectedTextFromDropdown(_currencyName);
        //getting currency symbol
        String expectedCurrencySymbol = getCurrencySymbol(currencyNameSelected);
        //list of product prices
        List<WebElement> priceList = driver.findElements(_listOfPrice);
        //item list
        for (WebElement element : priceList)
        {
            String actualCurrencySymbol = element.getText().substring(0,1);
            //verifying actual currency symbol with expected currency symbol
            Assert.assertEquals(actualCurrencySymbol,expectedCurrencySymbol,"Currency symbol not matched with expected symbol");
        }
        System.out.println("Currency verified successfully: "+currencyNameSelected+" as "+expectedCurrencySymbol);
    }
    public void selectAnotherCurrency()
    {   //select Euro currency
        selectFromDropdownByVisibleText(_currencyName,loadProperty.getProperty("currency"));
    }
    public void clickOnLoginButton()
    {   //click on login button
        clickOnElement(_clickOnLoginButton);
    }


}
