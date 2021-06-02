Feature: registration
  @test
  Scenario: user should be able to register successfully
    Given user is on registration page
    When user entered all required details and click register button
    Then user should be able to see registration successful message