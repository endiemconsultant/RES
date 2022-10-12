@isTest
public class OpportunityDuplicateHandlerTest {
    
    public static testmethod void myOpportunityDuplicateHandler(){
        
        Test.startTest();
        Account acc=new Account();
        acc.Name='Xyz';
        acc.Website='www.acc.com';
        acc.CurrencyIsoCode='USD';
        insert acc;
        
        Opportunity op=new Opportunity();
        op.Name='Test1234';
        op.AccountId=acc.Id;
        op.StageName='Prospecting';
        op.RES_Technology_Type__c='Solar';
        op.CloseDate=system.today();
        insert op;
        Test.stopTest();
    }

}