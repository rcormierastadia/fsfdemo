package demo.web.test.fr;

import org.testng.annotations.*;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


//public class AppTestSteps extends BaseTestSteps{
	
	public class AppTestSteps {
	
	RuleManager rmgr = new RuleManager();
	@Before
    public void setUp(){
		//this.base_launch();
	}
	
	@After
    public void cleanUp(){
    	//this.base_cleanUp();
    }
    
	
	//############################## steps starts here ###############################
	
	 @Given("^that I loaded the Marketing Email Rule Order JSON file$")
	    public void that_i_loaded_the_marketing_email_rule_order_json_file() throws Throwable {
	        //throw new PendingException();
	    }

	    @When("^I enter the First Rule number \"([^\"]*)\"$")
	    public void i_enter_the_first_rule_number_something(String strArg1) throws Throwable {
	        //throw new PendingException();
	    	rmgr.verifyRule(strArg1);
	    }

	    @When("^I enter the Second Rule number \"([^\"]*)\"$")
	    public void i_enter_the_second_rule_number_something(String strArg1) throws Throwable {
	    	rmgr.verifyRule(strArg1);
	    }

	    @Then("^I connect to the Data File Under Test$")
	    public void i_connect_to_the_data_file_under_test() throws Throwable {
	        //throw new PendingException();
	    }

	    @And("^that I loaded the Rules JSON file$")
	    public void that_i_loaded_the_rules_json_file() throws Throwable {
	        //throw new PendingException();
	    }

	    @And("^there are no orphan Rules$")
	    public void there_are_no_orphan_rules() throws Throwable {
	        //throw new PendingException();
	    }

	    @And("^there are data available$")
	    public void there_are_data_available() throws Throwable {
	        //throw new PendingException();
	    }

	    @And("^all Rules are correct$")
	    public void all_rules_are_correct() throws Throwable {
	        //throw new PendingException();
	    }
	    @When("^I enter the Rule number (.+)$")
	    public void i_enter_the_rule_number(String ruleno) throws Throwable {
	    	rmgr.verifyRule(ruleno);
	    }

	
	/*@Given("^that I loaded the Marketing Email Rule Order JSON file$")

    public void that_i_loaded_the_marketing_email_rule_order_json_file() throws Throwable {

        //throw new PendingException();

    }

    @When("^I enter the Rule number \"([^\"]*)\"$")

    public void i_enter_the_rule_number_something(String strArg1) throws Throwable {

        


    }

 

    @Then("^I connect to the Data File Under Test$")

    public void i_connect_to_the_data_file_under_test() throws Throwable {

        //throw new PendingException();

    }


    @Then("^I should see credit declines that are questionable related to the data file$")

    public void i_should_see_credit_declines_that_are_questionable_related_to_the_data_file() throws Throwable {

        //throw new PendingException();

    }

 
    @Then("^I should see credit declines that are questionable in relation to the data file provided$")

    public void i_should_see_credit_declines_that_are_questionable_in_relation_to_the_data_file_provided() throws Throwable {

        //throw new PendingException();

    }



    @And("^that I loaded the Rules JSON file$")

    public void that_i_loaded_the_rules_json_file() throws Throwable {

        //throw new PendingException();

    }


    @And("^there are no orphan Rules$")

    public void there_are_no_orphan_rules() throws Throwable {

        ///throw new PendingException();

    }


    @And("^there are data available$")

    public void there_are_data_available() throws Throwable {

        //throw new PendingException();

    }



    @And("^all Rules are correct$")

    public void all_rules_are_correct() throws Throwable {

        //throw new PendingException();

    }

 
    @And("^I have a Overlay with CM 4 equal to True$")

    public void i_have_a_overlay_with_cm_4_equal_to_true() throws Throwable {

        //throw new PendingException();

    }

 
    @And("^I have a Overlay with TempTargeting Segment equal to PBK OR TempTargeting Segment equal to UNP$")

    public void i_have_a_overlay_with_temptargeting_segment_equal_to_pbk_or_temptargeting_segment_equal_to_unp() throws Throwable {

        //throw new PendingException();

    }

 

    @And("^I have a RISK_SCORE_2 equal to 1 or 2$")

    public void i_have_a_riskscore2_equal_to_1_or_2() throws Throwable {

        //throw new PendingException();

    }

 

    @And("^I have a CUST_MOD_3_FIN_SCR_DEC equal to 3$")

    public void i_have_a_custmod3finscrdec_equal_to_3() throws Throwable {

        //throw new PendingException();

    }*/
	    
}
