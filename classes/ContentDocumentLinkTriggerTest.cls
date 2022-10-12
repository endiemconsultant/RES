@isTest
private class ContentDocumentLinkTriggerTest
{
    @isTest
    static void itShould()
    {
        Account acc = new Account(recordtypeId='012i0000001AwFvAAK',name='test acc',Website='www.test.com');
        insert acc;
        //Contact con = new Contact(lastname='test cont',accountid=acc.id);
        //insert con;
        Opportunity opp = new Opportunity(recordtypeId='012i0000001B24kAAC',name='testoppty',AccountId=acc.id,stageName='Prospecting', Contract_Type__c='EPC', RES_Technology_Type__c='Onshore - Wind', closedate=system.today());
        insert opp;

        ContentVersion content=new ContentVersion(); 
            content.Title='Header_Picture1'; 
            content.PathOnClient='/' + content.Title + '.jpg'; 
            Blob bodyBlob=Blob.valueOf('Unit Test ContentVersion Body'); 
            content.VersionData=bodyBlob; 
            //content.LinkedEntityId=sub.id;
            content.origin = 'H';
        insert content;
        ContentDocumentLink contentlink=new ContentDocumentLink();
            contentlink.LinkedEntityId=opp.id;
            contentlink.contentdocumentid=[select contentdocumentid from contentversion where id =: content.id].contentdocumentid;
            contentlink.ShareType = 'V';
            test.starttest();
        insert contentlink;
test.stoptest();

    }
}