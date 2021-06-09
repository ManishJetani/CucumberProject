$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login.feature");
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
  "duration": 10064745400,
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
  "duration": 1750246500,
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
  "duration": 939379100,
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
  "duration": 222905400,
  "status": "passed"
});
formatter.after({
  "duration": 340300,
  "status": "passed"
});
formatter.before({
  "duration": 11526248400,
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
  "duration": 1819367700,
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
  "duration": 2574489900,
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
  "duration": 186146200,
  "status": "passed"
});
formatter.after({
  "duration": 159100,
  "status": "passed"
});
formatter.before({
  "duration": 9674320700,
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
  "duration": 1672869300,
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
  "duration": 3616207100,
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
  "duration": 192668500,
  "status": "passed"
});
formatter.after({
  "duration": 332000,
  "status": "passed"
});
formatter.before({
  "duration": 8745700600,
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
  "duration": 1686491900,
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
  "duration": 1302334900,
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
  "duration": 171064300,
  "status": "passed"
});
formatter.after({
  "duration": 186500,
  "status": "passed"
});
});