public class KAM_ActivityTimeline_Controller {

    @AuraEnabled(cacheable=true)
    public static List<ActivityTimeline_Model> getActivityTimeline(Id recordId)
    {
               
        List<ActivityTimeline_Model> returnList = new List<ActivityTimeline_Model>();

//        addCalls(returnList, recordId);
    
        addMeetings(returnList, recordId);
    
        addEvents(returnList, recordId);
        
        returnList.sort();              

        return returnList; 
        
    }
    
//    @AuraEnabled(cacheable=true)
//     public static void addCalls(List<ActivityTimeline_Model> returnList, Id recordId)
//     {
   //     
      //   List<Task> taskList = [select   Id, Type, Owner.Name, Status, Who.Name, Subject, Description, ActivityDate, OwnerId, WhoId, Attendees_List__c 
         //                       from     Task 
            //                    where    WhatId =:recordId and Type= 'Call' and ActivityDate =LAST_N_DAYS:90 AND ActivityDate <= Today];
               // 
//         if(taskList.size() > 0)
   //     {
     //        for(Task t: taskList)
        //     {
           //      ActivityTimeline_Model taskItem = new ActivityTimeline_Model();
                
//                 taskItem.RecordId = t.Id;
   //              taskItem.ActivityTimelineType = 'Call';
      //           taskItem.Subject = t.Subject;
         //        taskItem.Detail = t.Description;
            //     taskItem.ActualDate = t.ActivityDate;
               //  taskItem.ShortDate = t.ActivityDate.format();
//                 taskItem.Recipients = t.Who.Name;
   //              taskItem.WhoId = t.WhoId;
      //           taskItem.Attendees = t.Attendees_List__c;
         //        taskItem.Assigned = t.Owner.Name;
            //     taskItem.AssignedId = t.OwnerId;
                
              //   if(t.Status=='Complete'){    
                 //    taskItem.Complete = true;
                // }
              //   else{
              //       taskItem.Complete = false;
    
            //     }
           //      returnList.add(taskItem);
         //    }
      //   }
   //  }
    
    @AuraEnabled(cacheable=true)
    public static void addMeetings(List<ActivityTimeline_Model> returnList, Id recordId)
    {
        List<Task> taskList = [SELECT   Id, Type, Owner.Name, Status, Who.Name, Subject, Description, ActivityDate, OwnerId, WhoId, Attendees_List__c
                               FROM     Task 
                               WHERE    AccountId =:recordId 
                               AND (Type != 'Task Reminder' AND Type != 'Internal Meeting' AND Type != 'Email') 
                               AND ActivityDate =LAST_N_DAYS:90 AND ActivityDate <= Today];
        
        if(taskList.size() > 0)
        {
            for(Task t: taskList)
            {
                ActivityTimeline_Model taskItem = new ActivityTimeline_Model();
                
                taskItem.RecordId = t.Id;
                taskItem.ActivityTimelineType = 'Meeting';
                taskItem.Subject = t.Subject;
                taskItem.Detail = t.Description;
                taskItem.ActualDate = t.ActivityDate;
                taskItem.ShortDate = t.ActivityDate.format();
                taskItem.Recipients = t.Who.Name;
                taskItem.WhoId = t.WhoId;
                taskItem.Attendees = t.Attendees_List__c;
                taskItem.Assigned = t.Owner.Name;
                taskItem.AssignedId = t.OwnerId;
                
                if(t.Status=='Complete'){    
                    taskItem.Complete = true;
                }
                else{
                    taskItem.Complete = false;
    
                }
                returnList.add(taskItem);
            }
        }
    }
    
    @AuraEnabled(cacheable=true)
    public static void addEvents(List<ActivityTimeline_Model> returnList, Id recordId)
    {
        List<Event> eventList = [SELECT  Id, Type, Owner.Name, Who.Name, Subject, Description, ActivityDate, ActivityDateTime, 
        							IsAllDayEvent, StartDateTime, EndDateTime, OwnerId, WhoId, Attendees_List__c, Location 
                               	 FROM     Event 
                                 WHERE    AccountId =:recordId 
                                 AND ActivityDate =LAST_N_DAYS:90 
                                 AND ActivityDate <= Today
                                 AND Type != 'Internal Meeting'];
        
        if(eventList.size() > 0)
        {
        
            for(Event e : eventList)
            {
                ActivityTimeline_Model eventItem = new ActivityTimeline_Model();
                
                eventItem.RecordId = e.Id;
                eventItem.ActivityTimelineType = 'Event';
                eventItem.Subject = e.Subject;
                eventItem.Detail = e.Description;
                eventItem.ActualDate = e.ActivityDate;
                eventItem.ShortDate = e.ActivityDate.format();
                eventItem.Recipients = e.Who.Name;
                eventItem.WhoId = e.WhoId;
                eventItem.Attendees = e.Attendees_List__c;
                eventItem.Assigned = e.Owner.Name;
                eventItem.AssignedId = e.OwnerId;
                eventItem.Location = e.Location;
                
                if(e.IsAllDayEvent == true)
	            {
	                eventItem.EventTime = 'All Day Event';
	            }else{
	            	eventItem.EventTime = e.ActivityDateTime.format();
	            }                
                
                returnList.add(eventItem);
            }
        }
    }
    
    
    
    

}