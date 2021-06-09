@login
Feature: Login fail when user enter invalid credentials
  If user enter invalid credentials, user should not be able to login successfully

  Background:
    Given user is already registered and on login page

  Scenario Outline: If user enters invalid credentials, user should not be able to login successfully

    When user type invalid "<Email>" or invalid "<passWord>"
    Then user should not be able to login successfully and should see "<error_message>"
    Examples:
      | Email                  | passWord  | error_message                                                                              |
      |                        | password1 | Please enter your email                                                                    |
      | davidcameron@yahoo.com |           | Login was unsuccessful. Please correct the errors and try again. No customer account found |
      |                        |           | Please enter your email                                                                    |
      | davidcameran@yahoo.com | test123   | Login was unsuccessful. Please correct the errors and try again. No customer account found |
