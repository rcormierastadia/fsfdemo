Feature: Parallel Validation of Rules 1008 and 1002
  validation should be quick and easy to maintain and run.

  Background: 
    Given that I loaded the Marketing Email Rule Order JSON file
    And that I loaded the Rules JSON file
    And there are no orphan Rules
    Then I connect to the Data File Under Test
    And there are data available
    And all Rules are correct

  @REGRESSION
  Scenario: Validate Policy Rule 1008
		When I enter the First Rule number "1008"
    
  @REGRESSION
  Scenario: Validate Policy Rule 1002
    When I enter the Second Rule number "1002"
   

 
