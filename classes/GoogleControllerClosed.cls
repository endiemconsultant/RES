global with sharing class GoogleControllerClosed {
	
	public String accountId { get; set; }
	public GoogleControllerClosed() {
    }
     
    @RemoteAction   
    global static List<Issue_Summary__c>loadIssues(Id accountId) {
        return [Select Id, Name, Status__c, Region_Market__c, Market_Policy_Issue__c, Issue_Summary__c, Created_Date__c 
        from Issue_Summary__c Where Region_Market__c = :accountId and Status__c = 'Closed' order by CreatedDate DESC limit 10];
    }   
}