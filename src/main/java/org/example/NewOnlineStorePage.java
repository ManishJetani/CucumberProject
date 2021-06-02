package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;

public class NewOnlineStorePage extends Utils
{   LoadProperty loadProperty = new LoadProperty();
    private By _typeCommentTitle = By.cssSelector("input#AddNewComment_CommentTitle");
    private By _typeComment = By.cssSelector("#AddNewComment_CommentText");
    private By _clickNewOnCommentButton = By.xpath("//button[contains(@class,'item-add')]");
    private By _actualCommentAddedMessage = By.cssSelector("div.result");
    private By _commentsBox = By.cssSelector("div.comments");
    private By _totalComments = By.cssSelector("div.comment.news-comment");
    private By _waitForClickable = By.cssSelector("button#newsletter-subscribe-button");

    //test data
    String commentTitle = loadProperty.getProperty("commentTitle")+ dateStamp();
    String commentText = loadProperty.getProperty("comment")+dateStamp();

    public void verifyNewOnlineStorePageIsOpen()
    {   //test data
        String actualURL = driver.getCurrentUrl();
        String expectedURL = "https://demo.nopcommerce.com/new-online-store-is-open";
        //verify URL
        Assert.assertTrue(expectedURL.equals(actualURL),"URL is not matching");
    }
    public void typeCommentTitleAndComment()
    {   //wait for clickable element
        waitForClickable(_waitForClickable,60);
        //typing comment title
        enterText(_typeCommentTitle,commentTitle);
        //typing comment
        enterText(_typeComment,commentText);
        //click on new comment button
        clickOnElement(_clickNewOnCommentButton);
    }
    public void verifyCommentAddedSuccessfully()
    {   //verify comment added successfully
        Assert.assertEquals(getTextFromElement(_actualCommentAddedMessage),"News comment is successfully added.","Comment is not added");
        System.out.println(loadProperty.getProperty("commentAddedMessage"));
    }
    public void verifyCommentAndTitlePresentInComments()
    {   //verify comment is present in comment list
        Assert.assertTrue(getTextFromElement(_commentsBox).contains(commentText),"New comment is not added");
        System.out.println(loadProperty.getProperty("commentPresent"));
    }
    public void verifyNewCommentAddedIsPresentAtLastInList()
    {   //find total comments list
        List<WebElement> commentsList = driver.findElements(_totalComments);
        //find last comment index from total comments
        int lastComments = commentsList.size()-1;
        //get whole text of last comment
        String textOfLastComment = commentsList.get(lastComments).getText();
        //verifying recent comment is present at last
        Assert.assertTrue(textOfLastComment.contains(commentText),"Recent added comment is not present at last");
        System.out.println(loadProperty.getProperty("commentPresentAtLast"));
    }


}
