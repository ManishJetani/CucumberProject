package org.example;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;
import java.net.URL;

public class BrowserSelector extends BasePage
{   //creating object for LoadProperty
    LoadProperty loadProperty = new LoadProperty();

    public static final String AUTOMATE_USERNAME = "maje_lA5jZm";
    public static final String AUTOMATE_ACCESS_KEY = "FSYCpM14ExtpshJx3jsy";
    public static final String URL = "https://" + AUTOMATE_USERNAME + ":" + AUTOMATE_ACCESS_KEY + "@hub-cloud.browserstack.com/wd/hub";
    public static final boolean browserStack = true;

    //storing browser name
    String browserName = loadProperty.getProperty("browser");
    DesiredCapabilities caps = new DesiredCapabilities();

    public void openSelectedBrowser() {
        if (browserStack) {
            if (browserName.equalsIgnoreCase("chrome")) {
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "10");
                caps.setCapability("browser", "Chrome");
                caps.setCapability("browser_version", "latest");
                caps.setCapability("resolution", "1920x1200");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.5.2");
            } else if (browserName.equalsIgnoreCase("edge")) {
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "10");
                caps.setCapability("browser", "Edge");
                caps.setCapability("browser_version", "latest");
                caps.setCapability("resolution", "1920x1200");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.5.2");
            } else if (browserName.equalsIgnoreCase("safari")) {
                caps.setCapability("os", "OS X");
                caps.setCapability("os_version", "Big Sur");
                caps.setCapability("browser", "Safari");
                caps.setCapability("browser_version", "14.0");
                caps.setCapability("resolution", "1920x1080");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.141.59");
            } else if (browserName.equalsIgnoreCase("firefox"))
            {   caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "10");
                caps.setCapability("browser", "Firefox");
                caps.setCapability("browser_version", "latest");
                caps.setCapability("resolution", "1920x1200");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.141.59");
            }
            try {
                driver = new RemoteWebDriver(new URL(URL), caps);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }
        //open locally
        else {
            //applying condition to open browser
            if (browserName.equalsIgnoreCase("chrome"))
            {   //path for webdriver
                System.setProperty("webdriver.chrome.driver", "src/test/resources/BrowserDriver/chromedriver.exe");
                //initiating the object
                driver = new ChromeDriver();
            } else if (browserName.equalsIgnoreCase("firefox"))
            {   //path for webdriver
                System.setProperty("webdriver.gecko.driver", "src/test/resources/BrowserDriver/geckodriver.exe");
                //initiating the object
                driver = new FirefoxDriver();
            } else if (browserName.equalsIgnoreCase("edge"))
            {   //path for webdriver
                System.setProperty("webdriver.edge.driver", "src/test/resources/BrowserDriver/msedgedriver.exe");
                //initiating the object
                driver = new EdgeDriver();
            } else
            {
                System.out.println("Incorrect browser name entered as :" + browserName);
            }
        }
                //maximising browser window
                driver.manage().window().maximize();
                //applying implicitly wait to driver object
                driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
                //open URL
                driver.get("https://demo.nopcommerce.com/");
    }
}
