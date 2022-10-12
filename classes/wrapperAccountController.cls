public class wrapperAccountController {
	
	private final Market_Policy_Issue__c issue {get; set;}
	
	public wrapperAccountController(ApexPages.StandardController controller){
		this.issue =[Select Id, Name, Status__c, Summary__c From Market_Policy_Issue__c Where Id= :controller.getId()];
	}
//Our collection of the class/wrapper objects cAccount 
	public List<cAccount> accountList {get; set;}

	//This method uses a simple SOQL query to return a List of Accounts
	public List<cAccount> getAccounts() {
		if(accountList == null) {
			accountList = new List<cAccount>();
			for(Account a: [select Id, Name  from Account WHERE RecordTypeId = '012i0000000tujM']) {
				// As each Account is processed we create a new cAccount object and add it to the AccountList
				accountList.add(new cAccount(a));
			}
		}
		return accountList;
	}
	
	public PageReference processSelected() {
	
	    //New list of Accounts that we be populated only with Accounts if they are selected
		List<Account> selectedAccounts = new List<Account>();

		//We will cycle through our list of cAccounts and will check to see if the selected property is set to true, if it is we add the Account to the selectedAccounts list
		for(cAccount AccObj: getAccounts()) {
			if(AccObj.selected == true) {
				selectedAccounts.add(AccObj.acc);
			}
		}
		
		// This is where I am having issues
		System.debug('These are the selected Accounts...');
		List<Issue_Summary__c> summToInsert = new List<Issue_Summary__c>();
		for(Account acc: selectedAccounts) { 
			Issue_Summary__c summ = new Issue_Summary__c();
	    		summ.Name = issue.Name +' Summary';
	    		summ.Market_Policy_Issue__c = issue.Id;
	    		summ.Region_Market__c = acc.Id;
	    		summ.Status__c = issue.Status__c;
	    		summ.Issue_Summary__c = issue.Summary__c;

    		summToInsert.add(summ);
		}
		
		insert summToInsert;
				
		accountList=null; // we need this line if we performed a write operation  because getAccounts gets a fresh list now
		return null;
	}
	// This is our wrapper/container class. A container class is a class, a data structure, or an abstract data type whose instances are collections of other objects. 
	//In this example a wrapper class contains both the standard salesforce object Account and a Boolean value
    public class cAccount {
		public Account acc {get; set;}
		public Boolean selected {get; set;}

		//This is the contructor method. When we create a new cAccount object we pass a Account that is set to the con property. We also set the selected value to false
		public cAccount(Account a) {
			acc = a;
			selected = false;
		}
	}
}