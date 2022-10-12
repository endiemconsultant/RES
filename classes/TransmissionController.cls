global with sharing class  TransmissionController {
	@RemoteAction   
    global static Opportunity[] loadOpps() {
    	return [select Id, Name, COD_Date__c, StageName, PnL__c, Priority__c, ExpectedRevenue, Amount from Opportunity order by COD_Date__c DESC limit 50];
    }    
}