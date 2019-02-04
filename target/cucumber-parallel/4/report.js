$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/centos/ron-demo/test-fsf/fsf/src/test/resources/FSF-Rules-1008-1002.feature");
formatter.feature({
  "line": 1,
  "name": "Automate validation",
  "description": "validation should be quick and easy to maintain and run.",
  "id": "automate-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 103556,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "that I loaded the Marketing Email Rule Order JSON file",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "that I loaded the Rules JSON file",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "there are no orphan Rules",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I connect to the Data File Under Test",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "there are data available",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "all Rules are correct",
  "keyword": "And "
});
formatter.match({
  "location": "AppTestSteps.that_i_loaded_the_marketing_email_rule_order_json_file()"
});
formatter.result({
  "duration": 103138863,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.that_i_loaded_the_rules_json_file()"
});
formatter.result({
  "duration": 36438,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.there_are_no_orphan_rules()"
});
formatter.result({
  "duration": 13058,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.i_connect_to_the_data_file_under_test()"
});
formatter.result({
  "duration": 13128,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.there_are_data_available()"
});
formatter.result({
  "duration": 13234,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.all_rules_are_correct()"
});
formatter.result({
  "duration": 14646,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate Policy Rule 1002",
  "description": "",
  "id": "automate-validation;validate-policy-rule-1002",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@REGRESSION"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I enter the Second Rule number \"1002\"",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "1002",
      "offset": 32
    }
  ],
  "location": "AppTestSteps.i_enter_the_second_rule_number_something(String)"
});
formatter.result({
  "duration": 30614115,
  "status": "passed"
});
formatter.after({
  "duration": 17499,
  "status": "passed"
});
});