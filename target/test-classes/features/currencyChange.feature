Feature: Change currency
  @currency
  Scenario: User should be able to see prices of products as per selected currency
    Given user is on homepage and see prices of products as per default currency
    When user select another currency
    Then user should be able to see prices of products as per another selected currency
