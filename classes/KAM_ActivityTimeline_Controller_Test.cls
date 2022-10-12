@isTest
private class KAM_ActivityTimeline_Controller_Test {
    
    static testMethod void validategetActivityTimeline(){
        
       	Account a = new Account(Name='Test Account',Website='www.test.com',Account_Type__c='IPP',CurrencyIsoCode='USD',RecordTypeId='012i0000001AwFv');

       	insert a; 

        //initialise timline, should be 0 lenght
       	List<ActivityTimeline_Model> testTimeline = KAM_ActivityTimeline_Controller.getActivityTimeline(a.Id);
        System.assertEquals(testTimeline.size(),0);
        
        //add a call and assert 1
        //Task call = new Task(Type='Call', WhatId = a.Id, ActivityDate=Date.today());
        //insert call;
        //KAM_ActivityTimeline_controller.addCalls(testTimeline,a.Id) ;
       	//System.assertEquals(testTimeline.size(),1);
        
        //add a meeting and assert 2
        Task meeting = new Task(Type='Client In-Person Meeting', WhatId = a.Id, ActivityDate=Date.today());
        insert meeting;
		KAM_ActivityTimeline_controller.addMeetings(testTimeline,a.Id) ;
       	System.assertEquals(testTimeline.size(),1);
        
        //add an event and assert 3
        Event event = new Event(Type='Site Visit', WhatId = a.Id, StartDateTime=Datetime.now(),EndDateTime=Datetime.now());
        insert event;
        KAM_ActivityTimeline_controller.addEvents(testTimeline,a.Id) ;
       	System.assertEquals(testTimeline.size(),2);

    }
    
    

}