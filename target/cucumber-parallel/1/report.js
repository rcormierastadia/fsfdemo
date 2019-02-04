$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/centos/ron-demo/test-fsf/fsf/src/test/resources/FSF-Rules-1008-1002-scenario-outline.feature");
formatter.feature({
  "line": 3,
  "name": "Title of your feature",
  "description": "I want to test the rules in the scenario outline",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Validate Policy Rules for both 1008 and 1002",
  "description": "",
  "id": "title-of-your-feature;validate-policy-rules-for-both-1008-and-1002",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@REGRESSION"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter the Rule number \u003cruleno\u003e",
  "keyword": "When "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;validate-policy-rules-for-both-1008-and-1002;",
  "rows": [
    {
      "cells": [
        "ruleno"
      ],
      "line": 17,
      "id": "title-of-your-feature;validate-policy-rules-for-both-1008-and-1002;;1"
    },
    {
      "cells": [
        "1008"
      ],
      "line": 18,
      "id": "title-of-your-feature;validate-policy-rules-for-both-1008-and-1002;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 97955,
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
  "name": "that I loaded the Marketing Email Rule Order JSON file",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "that I loaded the Rules JSON file",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "there are no orphan Rules",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I connect to the Data File Under Test",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "there are data available",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "all Rules are correct",
  "keyword": "And "
});
formatter.match({
  "location": "AppTestSteps.that_i_loaded_the_marketing_email_rule_order_json_file()"
});
formatter.result({
  "duration": 84400060,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.that_i_loaded_the_rules_json_file()"
});
formatter.result({
  "duration": 36085,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.there_are_no_orphan_rules()"
});
formatter.result({
  "duration": 13371,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.i_connect_to_the_data_file_under_test()"
});
formatter.result({
  "duration": 15634,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.there_are_data_available()"
});
formatter.result({
  "duration": 14162,
  "status": "passed"
});
formatter.match({
  "location": "AppTestSteps.all_rules_are_correct()"
});
formatter.result({
  "duration": 15351,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate Policy Rules for both 1008 and 1002",
  "description": "",
  "id": "title-of-your-feature;validate-policy-rules-for-both-1008-and-1002;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@REGRESSION"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter the Rule number 1008",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "1008",
      "offset": 24
    }
  ],
  "location": "AppTestSteps.i_enter_the_rule_number(String)"
});
formatter.result({
  "duration": 20045397,
  "error_message": "java.lang.Exception: Policy Rule:1008  is not matching in row numbers: 453,\n\tat demo.web.test.fr.RuleManager.verifyRule(RuleManager.java:79)\n\tat demo.web.test.fr.AppTestSteps.i_enter_the_rule_number(AppTestSteps.java:85)\n\tat ✽.When I enter the Rule number 1008(/home/centos/ron-demo/test-fsf/fsf/src/test/resources/FSF-Rules-1008-1002-scenario-outline.feature:15)\n",
  "status": "failed"
});
formatter.after({
  "duration": 19237,
  "status": "passed"
});
});