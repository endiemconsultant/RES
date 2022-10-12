public with sharing class KAMController {
  	
 	private Account acc;
    private List <Contact> kdmContacts;
    private List <Account_Team__c> accMembers;
    private List <Opportunity> openOpps;
    private List <Opportunity> closedOpps;
    private List <Opportunity> closedBrokerOpps;
    private List <Opportunity> openBrokerOpps;
    private List <KA_Strategic_Objective__c> kasos;
    private List <KA_Strategic_Objective__c> archivedKasos;
    
    public KAMController(ApexPages.StandardController controller) {
        this.acc = (Account)controller.getRecord();
        //String accName = acc.Name;
        //String fileName = 'KAM:' + accName + '.pdf'; Apexpages.currentPage().getHeaders().put('content-disposition', 'attachment; filename=' + fileName);
    }

    public List <Contact> getKDMContacts() {
        kdmContacts = [Select id, AccountId, Name, Title, Key_Decision_Maker__c, ReportsTo.Name, Owner.Name, Relationship_Owner__c,Primary_Contact_Owner__c,
        				Contact_Activity_Status__c, Contact_Frequency__c, Last_Client_Meeting__c, LastActivityDate,View_of_RES__c,Influence__c
        from Contact where AccountId = :acc.id AND Key_Decision_Maker__c=True 
        ORDER BY Influence__c DESC, Name DESC Nulls Last];
        return kdmContacts;
    }
    
    public List <Account_Team__c> getAccMembers () {
        accMembers = [Select id, Account__c, Team_Member__c,Role__c
        from Account_Team__c where Account__c = :acc.id 
        ORDER BY Role__c DESC];
        return accMembers;
    }
    
    public List <Opportunity> getOpenOpps() {
        openOpps = [Select id, AccountId, Name, StageName, CloseDate, Size__c, OwnerId,COD_Date__c,State_Province__c,
        				Priority__c, Contract_Type__c, Business_Line__c
        from Opportunity where AccountId = :acc.id AND IsClosed=False AND StageName<>'Tabled' AND (Priority__c = 'Priority 1' OR Priority__c = 'Priority 2')
        ORDER BY CloseDate ASC];
        return openOpps;
    }
    
    public List <Opportunity> getClosedOpps() {
        closedOpps = [Select id, AccountId, Name, StageName, CloseDate, Size__c, OwnerId,COD_Date__c,State_Province__c,
        				Closed_Reason_Notes__c, Outcome_Reason__c, Contract_Type__c, Business_Line__c,Broker_Account__r.Name,Broker_Account__c
        from Opportunity where (AccountId = :acc.id OR Broker_Account__r.Id = :acc.id) AND IsClosed=True AND CloseDate >= LAST_N_FISCAL_QUARTERS:2
        Order BY CloseDate ASC];
        return closedOpps;
    }
    
    public List <Opportunity> getBrokerOpps() {
        openBrokerOpps = [Select id, AccountId, Name, StageName, CloseDate, Size__c, OwnerId,COD_Date__c,State_Province__c,
        				Priority__c, Contract_Type__c, Business_Line__c,Broker_Account__r.Name,Broker_Account__c
        from Opportunity where Broker_Account__r.Id = :acc.id AND IsClosed=False AND StageName<>'Tabled' AND (Priority__c = 'Priority 1' OR Priority__c = 'Priority 2')
        ORDER BY CloseDate ASC];
        return openBrokerOpps;
    }
    
     public List <Opportunity> getClosedBrokerOpps() {
        closedBrokerOpps = [Select id, AccountId, Name, StageName, CloseDate, Size__c, OwnerId,COD_Date__c,State_Province__c,
        				Priority__c, Contract_Type__c, Business_Line__c,Broker_Account__r.Name,Broker_Account__c
        from Opportunity where Broker_Account__r.Id = :acc.id AND IsClosed=True AND CloseDate >= LAST_N_FISCAL_YEARS:1
        Order BY CloseDate ASC];
        return closedBrokerOpps;
    }
    
    public List <KA_Strategic_Objective__c> getKASOs() {
        kasos = [Select id, Account__c, Name, Objective_Owner__c, Category__c, Completed__c, Date_for_Closure__c, Objective_Title__c, Objective_Description__c,	Update__c
        from KA_Strategic_Objective__c where Account__c = :acc.id AND ( Completed__c = false OR Date_for_Closure__c >= TODAY )
        ORDER BY Date_for_Closure__c ASC];
        return kasos;
    }
    
    public List <KA_Strategic_Objective__c> getArchivedKASOs() {
        archivedKasos = [Select id, Account__c, Name, Objective_Owner__c, Category__c, Completed__c, Date_for_Closure__c, Objective_Title__c, Objective_Description__c,	Update__c
        		 FROM KA_Strategic_Objective__c 
                 WHERE Account__c = :acc.id 
                 AND (Completed__c = true OR (Date_for_Closure__c < TODAY AND Date_for_Closure__c >= LAST_N_MONTHS:24))                
                 ORDER BY Date_for_Closure__c ASC];
        return archivedKasos;
    }
    
}