$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/centos/ron-demo/test-fsf/fsf/src/test/resources/FSF-Rules-1008-1002.feature");
formatter.feature({
  "line": 1,
  "name": "Automate validation",
  "description": "validation should be quick and easy to maintain and run.",
  "id": "automate-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 98882,
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
  "duration": 98873194,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.that_i_loaded_the_rules_json_file()"
});
formatter.result({
  "duration": 14297,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.there_are_no_orphan_rules()"
});
formatter.result({
  "duration": 13881,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.i_connect_to_the_data_file_under_test()"
});
formatter.result({
  "duration": 13357,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.there_are_data_available()"
});
formatter.result({
  "duration": 12780,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.all_rules_are_correct()"
});
formatter.result({
  "duration": 15197,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate Policy Rule 1008",
  "description": "",
  "id": "automate-validation;validate-policy-rule-1008",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@REGRESSION"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I enter the First Rule number \"1008\"",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "1008",
      "offset": 31
    }
  ],
  "location": "AppTestSteps.i_enter_the_first_rule_number_something(String)"
});
formatter.result({
  "duration": 30800437,
  "error_message": "java.lang.Exception: Policy Rule:1008  is not matching in row numbers: 453,\n\tat demo.web.test.fr.RuleManager.verifyRule(RuleManager.java:79)\n\tat demo.web.test.fr.AppTestSteps.i_enter_the_first_rule_number_something(AppTestSteps.java:51)\n\tat ✽.When I enter the First Rule number \"1008\"(/home/centos/ron-demo/test-fsf/fsf/src/test/resources/FSF-Rules-1008-1002.feature:14)\n",
  "status": "failed"
});
formatter.after({
  "duration": 17717,
  "status": "passed"
});
});