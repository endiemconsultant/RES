@istest
private class testCSVStream{
static testMethod void testItemsUsed2(){
CSVStream csvs = new CSVStream ();

rptobj__c ro = new rptobj__c (Name = 'ThisReport', reporttrigger__c=1);
insert ro;


IncrementReport abc = new IncrementReport();
String s = '1 1 06 1-31 1-12 ? ';
system.schedule('Report Job1', s, abc);
} //
}