@isTest
private class ActivityTimeline_Controller_Test {
    
    static testMethod void validategetActivityTimeline(){
        
       	Opportunity o = new Opportunity(Name='Test Opportunity',StageName='Qualified',CloseDate=Date.today());

       	insert o; 

        //initialise timline, should be 0 lenght
       	List<ActivityTimeline_Model> testTimeline = ActivityTimeline_Controller.getActivityTimeline(o.Id);
        System.assertEquals(testTimeline.size(),0);
        
        //add a call and assert 1
        Task call = new Task(Type='Call', WhatId = o.Id, ActivityDate=Date.today());
        insert call;
        ActivityTimeline_controller.addCalls(testTimeline,o.Id) ;
       	System.assertEquals(testTimeline.size(),1);
        
        //add a meeting and assert 2
        Task meeting = new Task(Type='Client Meeting', WhatId = o.Id, ActivityDate=Date.today());
        insert meeting;
		ActivityTimeline_controller.addMeetings(testTimeline,o.Id) ;
       	System.assertEquals(testTimeline.size(),2);
        
        //add an email and assert 3
        Task email = new Task(Type='Email', WhatId = o.Id, ActivityDate=Date.today());
        insert email;
        ActivityTimeline_controller.addEmails(testTimeline,o.Id) ;
       	System.assertEquals(testTimeline.size(),3);

    }
    
    

}