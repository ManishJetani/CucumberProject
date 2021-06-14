$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/comment.feature");
formatter.feature({
  "line": 1,
  "name": "Comment Present",
  "description": "",
  "id": "comment-present",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12427122300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to add comment and that comment should be present at last",
  "description": "",
  "id": "comment-present;user-should-be-able-to-add-comment-and-that-comment-should-be-present-at-last",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@comment"
    },
    {
      "line": 2,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is already on comment page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter comment title and comment and click on new comment",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to see comment present and should be last in comments field",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_already_on_comment_page()"
});
formatter.result({
  "duration": 1816898801,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_enter_comment_title_and_comment_and_click_on_new_comment()"
});
formatter.result({
  "duration": 3269553000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_be_able_to_see_comment_present_and_should_be_last_in_comments_field()"
});
formatter.result({
  "duration": 674218200,
  "status": "passed"
});
formatter.after({
  "duration": 811567600,
  "status": "passed"
});
formatter.uri("src/test/resources/features/currencyChange.feature");
formatter.feature({
  "line": 1,
  "name": "Change currency",
  "description": "",
  "id": "change-currency",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9356374999,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to see prices of products as per selected currency",
  "description": "",
  "id": "change-currency;user-should-be-able-to-see-prices-of-products-as-per-selected-currency",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@currency"
    },
    {
      "line": 2,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on homepage and see prices of products as per default currency",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user select another currency",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to see prices of products as per another selected currency",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage_and_see_prices_of_products_as_per_default_currency()"
});
formatter.result({
  "duration": 635945000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_select_another_currency()"
});
formatter.result({
  "duration": 3369435300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_be_able_to_see_prices_of_products_as_per_another_selected_currency()"
});
formatter.result({
  "duration": 630782700,
  "status": "passed"
});
formatter.after({
  "duration": 725466300,
  "status": "passed"
});
formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login fail when user enter invalid credentials",
  "description": "If user enter invalid credentials, user should not be able to login successfully",
  "id": "login-fail-when-user-enter-invalid-credentials",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "If user enters invalid credentials, user should not be able to login successfully",
  "description": "",
  "id": "login-fail-when-user-enter-invalid-credentials;if-user-enters-invalid-credentials,-user-should-not-be-able-to-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user type invalid \"\u003cEmail\u003e\" or invalid \"\u003cpassWord\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should not be able to login successfully and should see \"\u003cerror_message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-fail-when-user-enter-invalid-credentials;if-user-enters-invalid-credentials,-user-should-not-be-able-to-login-successfully;",
  "rows": [
    {
      "cells": [
        "Email",
        "passWord",
        "error_message"
      ],
      "line": 13,
      "id": "login-fail-when-user-enter-invalid-credentials;if-user-enters-invalid-credentials,-user-should-not-be-able-to-login-successfully;;1"
    },
    {
      "cells": [
        "",
        "password1",
        "Please enter your email"
      ],
      "line": 14,
      "id": "login-fail-when-user-enter-invalid-credentials;if-user-enters-invalid-credentials,-user-should-not-be-able-to-login-successfully;;2"
    },
    {
      "cells": [
        "davidcameron@yahoo.com",
        "",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 15,
      "id": "login-fail-when-user-enter-invalid-credentials;if-user-enters-invalid-credentials,-user-should-not-be-able-to-login-successfully;;3"
    },
    {
      "cells": [
        "",
        "",
        "Please enter your email"
      ],
      "line": 16,
      "id": "login-fail-when-user-enter-invalid-credentials;if-user-enters-invalid-credentials,-user-should-not-be-able-to-login-successfully;;4"
    },
    {
      "cells": [
        "davidcameran@yahoo.com",
        "test123",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 17,
      "id": "login-fail-when-user-enter-invalid-credentials;if-user-enters-invalid-credentials,-user-should-not-be-able-to-login-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9059092800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is already registered and on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsAlreadyRegisteredAndOnLoginPage()"
});
formatter.result({
  "duration": 711866700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "If user enters invalid credentials, user should not be able to login successfully",
  "description": "",
  "id": "login-fail-when-user-enter-invalid-credentials;if-user-enters-invalid-credentials,-user-should-not-be-able-to-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user type invalid \"\" or invalid \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should not be able to login successfully and should see \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "password1",
      "offset": 33
    }
  ],
  "location": "MyStepsDefs.userTypeInvalidOrInvalid(String,String)"
});
formatter.result({
  "duration": 902064300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 62
    }
  ],
  "location": "MyStepsDefs.userShouldNotBeAbleToLoginSuccessfullyAndShouldSee(String)"
});
formatter.result({
  "duration": 143618299,
  "status": "passed"
});
formatter.after({
  "duration": 753991600,
  "status": "passed"
});
formatter.before({
  "duration": 7473961400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is already registered and on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsAlreadyRegisteredAndOnLoginPage()"
});
formatter.result({
  "duration": 848962300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "If user enters invalid credentials, user should not be able to login successfully",
  "description": "",
  "id": "login-fail-when-user-enter-invalid-credentials;if-user-enters-invalid-credentials,-user-should-not-be-able-to-login-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user type invalid \"davidcameron@yahoo.com\" or invalid \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should not be able to login successfully and should see \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "davidcameron@yahoo.com",
      "offset": 19
    },
    {
      "val": "",
      "offset": 55
    }
  ],
  "location": "MyStepsDefs.userTypeInvalidOrInvalid(String,String)"
});
formatter.result({
  "duration": 2186671101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 62
    }
  ],
  "location": "MyStepsDefs.userShouldNotBeAbleToLoginSuccessfullyAndShouldSee(String)"
});
formatter.result({
  "duration": 165255500,
  "status": "passed"
});
formatter.after({
  "duration": 832593400,
  "status": "passed"
});
formatter.before({
  "duration": 10749685100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is already registered and on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsAlreadyRegisteredAndOnLoginPage()"
});
formatter.result({
  "duration": 1719787300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "If user enters invalid credentials, user should not be able to login successfully",
  "description": "",
  "id": "login-fail-when-user-enter-invalid-credentials;if-user-enters-invalid-credentials,-user-should-not-be-able-to-login-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user type invalid \"\" or invalid \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should not be able to login successfully and should see \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "MyStepsDefs.userTypeInvalidOrInvalid(String,String)"
});
formatter.result({
  "duration": 942069400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 62
    }
  ],
  "location": "MyStepsDefs.userShouldNotBeAbleToLoginSuccessfullyAndShouldSee(String)"
});
formatter.result({
  "duration": 288477400,
  "status": "passed"
});
formatter.after({
  "duration": 862471700,
  "status": "passed"
});
formatter.before({
  "duration": 13449772201,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is already registered and on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsAlreadyRegisteredAndOnLoginPage()"
});
formatter.result({
  "duration": 1751223000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "If user enters invalid credentials, user should not be able to login successfully",
  "description": "",
  "id": "login-fail-when-user-enter-invalid-credentials;if-user-enters-invalid-credentials,-user-should-not-be-able-to-login-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user type invalid \"davidcameran@yahoo.com\" or invalid \"test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should not be able to login successfully and should see \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "davidcameran@yahoo.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 55
    }
  ],
  "location": "MyStepsDefs.userTypeInvalidOrInvalid(String,String)"
});
formatter.result({
  "duration": 1838518600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 62
    }
  ],
  "location": "MyStepsDefs.userShouldNotBeAbleToLoginSuccessfullyAndShouldSee(String)"
});
formatter.result({
  "duration": 227984500,
  "status": "passed"
});
formatter.after({
  "duration": 875617400,
  "status": "passed"
});
formatter.uri("src/test/resources/features/registration.feature");
formatter.feature({
  "line": 1,
  "name": "registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9027533201,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "user should be able to register successfully",
  "description": "",
  "id": "registration;user-should-be-able-to-register-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@registration"
    },
    {
      "line": 2,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user entered all required details and click register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to see registration successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_registration_page()"
});
formatter.result({
  "duration": 1736724301,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_entered_all_required_details_and_click_register_button()"
});
formatter.result({
  "duration": 5733747800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_be_able_to_see_registration_successful_message()"
});
formatter.result({
  "duration": 174414599,
  "status": "passed"
});
formatter.after({
  "duration": 808014001,
  "status": "passed"
});
});