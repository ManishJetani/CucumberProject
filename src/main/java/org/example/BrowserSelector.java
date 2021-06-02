package org.example;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class BrowserSelector extends BasePage
{   //creating object for LoadProperty
    LoadProperty loadProperty = new LoadProperty();
    //storing browser name
    String browserName = loadProperty.getProperty("browser");

    public void openSelectedBrowser()
    {   //applying condition to open browser
        if (browserName.equalsIgnoreCase("chrome"))
        {   //path for webdriver
            System.setProperty("webdriver.chrome.driver","src/test/resources/BrowserDriver/chromedriver.exe");
            //initiating the object
            driver = new ChromeDriver();
        }
        else if (browserName.equalsIgnoreCase("firefox"))
        {   //path for webdriver
            System.setProperty("webdriver.gecko.driver","src/test/resources/BrowserDriver/geckodriver.exe");
            //initiating the object
            driver = new FirefoxDriver();
        }
        else if (browserName.equalsIgnoreCase("edge"))
        {   //path for webdriver
            System.setProperty("webdriver.edge.driver","src/test/resources/BrowserDriver/msedgedriver.exe");
            //initiating the object
            driver = new EdgeDriver();
        }
        else
        {
            System.out.println("Incorrect browser name entered as :"+browserName);
        }
        //maximising browser window
        driver.manage().window().maximize();
        //applying implicitly wait to driver object
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        //open URL
        driver.get("https://demo.nopcommerce.com/");

    }
}
