public class OwnerId {

	public String currentRecordId {get;set;}
	public String parameterValue {get;set;}
	public String parameterValue2 {get;set;}
	public String parameterValue3 {get;set;}
	public String test2 {get;set;}
	public String test3 {get;set;}
	public Milestone1_Milestone__c stone {get; set;}
	public String test4 {get;set;}
	public String test5 {get;set;}
	public Milestone1_Milestone__c mile{get;set;}
 
    public OwnerId(ApexPages.StandardController controller) {
        currentRecordId  = ApexPages.CurrentPage().getparameters().get('id');
        mile = [select id ,ownerId, Owner__c from Milestone1_Milestone__c where id =: 'a1Li0000005IkbPEAS' ];
        parameterValue = ApexPages.CurrentPage().getparameters().get('ownerId');
        parameterValue2 = ApexPages.CurrentPage().getparameters().get('OwnerId');
        parameterValue3 = ApexPages.CurrentPage().getparameters().get('Owner__c');
        mile.ownerId= test2;
        mile.Owner__c = test3;
        
        this.stone = (Milestone1_Milestone__c )controller.getRecord();
        this.stone.OwnerId = test4;
        this.stone.Owner__c = test5;
        
    }
    public string newname = Apexpages.currentpage().getparameters().get('ownerId');
    
}