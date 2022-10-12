@isTest
private class KAM_ActivityTimeline_OpenCTRLr_TEST {
    
    static testMethod void validategetActivityTimeline(){
        
       	Account a = new Account(Name='Test Account',Website='www.test.com',Account_Type__c='IPP',CurrencyIsoCode='USD',RecordTypeId='012i0000001AwFv');

       	insert a; 

        //initialise timline, should be 0 length
       	List<ActivityTimeline_Model> testTimeline = KAM_ActivityTimeline_OpenCTRLr.getActivityTimeline(a.Id);
        System.assertEquals(testTimeline.size(),0);
        
         
        //add a task and assert 1
        Task task = new Task(Type='Conference', WhatId = a.Id, ActivityDate=Date.Today().addDays(5));
        insert task;
        KAM_ActivityTimeline_OpenCTRLr.addTasks(testTimeline,a.Id) ;
       	System.assertEquals(testTimeline.size(),1);
       	
       	//add a call and assert 2
        Task call = new Task(Type='Video Call', WhatId = a.Id, ActivityDate=Date.Today().addDays(5));
        insert call;
        KAM_ActivityTimeline_OpenCTRLr.addCalls(testTimeline,a.Id) ;
       	System.assertEquals(testTimeline.size(),2);
        
        //add a meeting and assert 3
        Task meeting = new Task(Type='Client In-Person Meeting', WhatId = a.Id, ActivityDate=Date.Today().addDays(5));
        insert meeting;
		KAM_ActivityTimeline_OpenCTRLr.addMeetings(testTimeline,a.Id) ;
       	System.assertEquals(testTimeline.size(),3);
        
        //add an event and assert 4
        Event event = new Event(Type='Site Visit', WhatId = a.Id, StartDateTime=Datetime.now().addDays(5),EndDateTime=Datetime.now().addDays(5));
        insert event;
        KAM_ActivityTimeline_OpenCTRLr.addEvents(testTimeline,a.Id) ;
       	System.assertEquals(testTimeline.size(),4);
        

    }
    
    

}