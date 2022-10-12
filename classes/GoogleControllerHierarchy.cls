global with sharing class GoogleControllerHierarchy {
	
	public GoogleControllerHierarchy(ApexPages.StandardController controller){
		this.acc =[Select Id, Name From Account Where Id= :controller.getId()];
	}
	public Account acc { get; set; }
	public String accountId { get; set; }
	public GoogleControllerHierarchy() {
    }
     
    @RemoteAction   
    global static List<Contact>loadContacts(Id accountId) {
        return [Select Id, Name, Email, Title, Key_Decision_Maker__c, OwnerId, Department, ReportsToId, Relationship_Owner__c 
        from Contact Where AccountId = :accountId order by Name DESC];
    }   
}