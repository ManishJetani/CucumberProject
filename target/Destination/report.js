$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/comment.feature");
formatter.feature({
  "line": 1,
  "name": "Comment Present",
  "description": "",
  "id": "comment-present",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5462429499,
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
      "name": "@test"
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
  "duration": 1509644500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_enter_comment_title_and_comment_and_click_on_new_comment()"
});
formatter.result({
  "duration": 1279702500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_be_able_to_see_comment_present_and_should_be_last_in_comments_field()"
});
formatter.result({
  "duration": 169002799,
  "status": "passed"
});
formatter.after({
  "duration": 564001,
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
  "duration": 6905916200,
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
      "name": "@test"
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
  "duration": 295331000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_select_another_currency()"
});
formatter.result({
  "duration": 1967469700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_be_able_to_see_prices_of_products_as_per_another_selected_currency()"
});
formatter.result({
  "duration": 247116399,
  "status": "passed"
});
formatter.after({
  "duration": 494200,
  "status": "passed"
});
formatter.uri("src/test/resources/features/registerAndBuyProduct.feature");
formatter.feature({
  "line": 1,
  "name": "Registration and Buy Product",
  "description": "",
  "id": "registration-and-buy-product",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10988925500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to register and buy product successfully",
  "description": "",
  "id": "registration-and-buy-product;user-should-be-able-to-register-and-buy-product-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@test"
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
  "name": "user entered all required fields and click register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to see registration is successful message",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click continue",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "select electronic category and select sub category cell phone",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user add product into basket and click on terms and condition and check out button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user entered all required details of payment and shipping",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should be able to buy product successfully with thank you message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_registration_page()"
});
formatter.result({
  "duration": 1564362901,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_entered_all_required_fields_and_click_register_button()"
});
formatter.result({
  "duration": 8975693600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_be_able_to_see_registration_is_successful_message()"
});
formatter.result({
  "duration": 58461000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_continue()"
});
formatter.result({
  "duration": 3394813401,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.select_electronic_category_and_select_sub_category_cell_phone()"
});
formatter.result({
  "duration": 4069663199,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_add_product_into_basket_and_click_on_terms_and_condition_and_check_out_button()"
});
formatter.result({
  "duration": 6287237200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_entered_all_required_details_of_payment_and_shipping()"
});
formatter.result({
  "duration": 4362186700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_be_able_to_buy_product_successfully_with_thank_you_message()"
});
formatter.result({
  "duration": 1418904700,
  "status": "passed"
});
formatter.after({
  "duration": 384699,
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
  "duration": 6301160600,
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
      "name": "@test"
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
  "duration": 1630895900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_entered_all_required_details_and_click_register_button()"
});
formatter.result({
  "duration": 4070069800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_be_able_to_see_registration_successful_message()"
});
formatter.result({
  "duration": 48412999,
  "status": "passed"
});
formatter.after({
  "duration": 285200,
  "status": "passed"
});
});