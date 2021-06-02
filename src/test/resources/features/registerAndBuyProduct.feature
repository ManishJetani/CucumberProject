Feature: Registration and Buy Product
  @test
  Scenario: User should be able to register and buy product successfully
    Given user is on registration page
    When user entered all required fields and click register button
    Then user should be able to see registration is successful message
    When user click continue
    And select electronic category and select sub category cell phone
    And user add product into basket and click on terms and condition and check out button
    And user entered all required details of payment and shipping
    Then user should be able to buy product successfully with thank you message