public with sharing class Opportunity_Summary {
		
    private Opportunity opp;
    //private List <RES_Team__c> resTeam;
    
    public Opportunity_Summary(ApexPages.StandardController controller){
        this.opp = (Opportunity)controller.getRecord();
    }
    
    /* This is for the "Bid Coordinator"
     public List <RES_Team__c> getResTeam() {
        resTeam = [SELECT Employee_Name__c
                   FROM RES_Team__c
                   WHERE Role__c = 'Bid Coordinator' AND RES_Opportunity__c = :opp.id];
        return resTeam;
    }*/ 
    
}