Feature: Comment Present
  @test
  Scenario: User should be able to add comment and that comment should be present at last
    Given user is already on comment page
    When user enter comment title and comment and click on new comment
    Then user should be able to see comment present and should be last in comments field