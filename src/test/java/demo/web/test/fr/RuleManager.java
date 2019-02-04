package demo.web.test.fr;
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
import demo.web.test.fr.Rule;;
public class RuleManager {
	   
	public void verifyRule(String ruleno)throws Throwable {
		   
		        String csvFile = "files/Astadia_FSF_1008_1002_Pass.csv";
		        String line = "";
		        String cvsSplitBy = ",";
		        Rule x = new Rule();
		        ArrayList<Rule> rulelist = new ArrayList<Rule>();

		        //try {
		        	BufferedReader br = new BufferedReader(new FileReader(csvFile));
		        	   while ((line = br.readLine()) != null) {
			                // use comma as separator
			                String[] rules = line.split(cvsSplitBy);
			                Rule trule = new Rule();
			                trule.UNDRWRTE_STRAT_IN = rules[15];
			                trule.POLICY_RULES_USED = rules[46];
			                trule.BANK_ACCT_CD = rules[28];
			                
			                trule.DECEASED_IN = rules[26];
			                trule.FICO_SCORE = rules[17];
			                trule.TU_VANTAGE_3 = rules[68];
			                trule.RISK_SCORE_1  = rules[20];
			                trule.CUST_MOD_3_FIN_SCR = rules[77]; 
			                trule.CUST_MOD_4_FIN_SCR = rules[80];
			                trule.CUST_MOD_6_FIN_SCR = rules[84];
			                trule.CUST_MOD_7_FIN_SCR = rules[88];
			               
			                rulelist.add(trule);
			            }

		        //} catch (IOException e) {
		         //   e.printStackTrace();
		        //}
		       
		        rulelist.remove(0);
		       // System.out.println("listsize=" + rulelist.size() + " ruleno="+ ruleno);
		        int linenumber = 1;
		        String tmp ="";		        
		        String strmsg="Policy Rule: " + ruleno + " is not matching in row numbers: ";
		        Boolean iserror = false;
		        for (Rule item : rulelist) {
		        	if (ruleno.equals("1008")){
		        		//System.out.println("ruleno=" + 1008 + ",UNDRWRTE_STRAT_IN" + item.UNDRWRTE_STRAT_IN + ",BANK_ACCT_CD" + item.BANK_ACCT_CD);
			        	if (item.UNDRWRTE_STRAT_IN.equals("6") && item.POLICY_RULES_USED.equals(ruleno) && !item.BANK_ACCT_CD.equals("4")){
			        		strmsg = strmsg + (linenumber + 1) + ",";
			        		iserror=true;
			        	}
		        	}
		        	if (ruleno.equals("1002")){
			        	if (item.UNDRWRTE_STRAT_IN.equals("6") && item.POLICY_RULES_USED.equals(ruleno) && !item.DECEASED_IN.equals("Y") && !item.FICO_SCORE.equals("9001") && !item.TU_VANTAGE_3.equals("1") && !item.RISK_SCORE_1.equals("1") && !item.CUST_MOD_3_FIN_SCR.equals("101") && !item.CUST_MOD_4_FIN_SCR.equals("101") && !item.CUST_MOD_6_FIN_SCR.equals("101") && !item.CUST_MOD_7_FIN_SCR.equals("101")) {
		        		//if (item.UNDRWRTE_STRAT_IN.equals("6") && item.POLICY_RULES_USED.equals(ruleno) && !item.DECEASED_IN.equals("Y") && !item.FICO_SCORE.equals("9001") && !item.TU_VANTAGE_3.equals("1") && !item.RISK_SCORE_1.equals("1") && !item.CUST_MOD_3_FIN_SCR.equals("101") && !item.CUST_MOD_4_FIN_SCR.equals("101") && !item.CUST_MOD_6_FIN_SCR.equals("101") && !item.CUST_MOD_7_FIN_SCR.equals("101")){
		        		strmsg = strmsg + (linenumber + 1) + ",";
			        		iserror=true;
			        	}
		        	}
		        	linenumber++;
				
				}
		        //System.out.println("iserror=" + iserror);
		        if (iserror){
		        	throw new Exception(strmsg);
		        }
		       

	   }

}
		        
		  
		       

		  



