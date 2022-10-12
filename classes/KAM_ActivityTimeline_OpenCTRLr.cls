public class KAM_ActivityTimeline_OpenCTRLr {

    @AuraEnabled(cacheable=true)
    public static List<ActivityTimeline_Model> getActivityTimeline(Id recordId)
    {
               
        List<ActivityTimeline_Model> returnList = new List<ActivityTimeline_Model>();

        addTasks(returnList, recordId);
        
        addCalls(returnList, recordId);
    
        addMeetings(returnList, recordId);
    
        addEvents(returnList, recordId);
              
        returnList.sort();
        
        for (integer i= returnList.size(); i > 5; i-- )
        {returnList.remove(returnList.size()-1);}
        
        return returnList; 
        
    }
    
    @AuraEnabled(cacheable=true)
    public static void addTasks(List<ActivityTimeline_Model> returnList, Id recordId)
    {
        
        List<Task> taskList = [SELECT   Id, Type, Owner.Name, Status, Who.Name, Subject, Description, ActivityDate, Attendees_List__c, WhatId, What.Name, What.Type
                               FROM     Task 
                               WHERE    AccountId =:recordId AND 
                               (Type = Null OR Type = 'Conference' OR Type = 'Other' OR Type = 'Site Visit' OR Type = 'Social Event' OR Type = 'Vendor/Supplier Visit') 
                               AND (Status!='Completed/closed' OR ActivityDate >= Today)];
        
        //SortSobs.descending(taskList, Task.ActivityDate);
         
        system.Debug('tasklist = '+taskList.size());
        
        if(taskList.size() > 0)
        {
            for(Task t: taskList)
            {
                System.debug('entering first task');
                
                ActivityTimeline_Model taskItem = new ActivityTimeline_Model();
                
                taskItem.RecordId = t.Id;
                taskItem.ActivityTimelineType = 'Task';
                taskItem.Subject = t.Subject;
                taskItem.Detail = t.Description;
                taskItem.ActualDate = t.ActivityDate;
                taskItem.ShortDate = t.ActivityDate.format();
                taskItem.Recipients = t.Who.Name;
                taskItem.Attendees = t.Attendees_List__c;
                taskItem.WhoId = t.WhoId;
                taskItem.Assigned = t.Owner.Name;
                taskItem.AssignedId = t.OwnerId;
                taskItem.RelatedTo = t.What.Name;
                taskItem.RelatedToId = t.WhatId;
                               
                if(t.Status=='Completed'){    
                    taskItem.Complete = true;
                }
                else{
                    taskItem.Complete = false;
                }      
               if(String.valueOf(t.WhatId).StartsWith('001')){    
                    taskItem.RenderRelated = false;
                }
                else{
                    taskItem.RenderRelated = true;
                } 
                
                returnList.add(taskItem);                
  
            }
        }
    }
    
    @AuraEnabled(cacheable=true)
    public static void addCalls(List<ActivityTimeline_Model> returnList, Id recordId)
    {
       
        List<Task> taskList = [select   Id, Type, Owner.Name, Status, Who.Name, Subject, Description, ActivityDate, OwnerId, WhoId, Attendees_List__c, WhatId, What.Name
                               from     Task 
                               where    AccountId =:recordId and (Type= 'Call' OR Type = 'Video Call') AND (Status!='Completed/closed' OR ActivityDate > Today)];
               
        if(taskList.size() > 0)
        {
            for(Task t: taskList)
            {
                ActivityTimeline_Model taskItem = new ActivityTimeline_Model();
                
                taskItem.RecordId = t.Id;
                taskItem.ActivityTimelineType = 'Call';
                taskItem.Subject = t.Subject;
                taskItem.Detail = t.Description;
                taskItem.ActualDate = t.ActivityDate;
                taskItem.ShortDate = t.ActivityDate.format();
                taskItem.Recipients = t.Who.Name;
                taskItem.Attendees = t.Attendees_List__c;
                taskItem.WhoId = t.WhoId;
                taskItem.Assigned = t.Owner.Name;
                taskItem.AssignedId = t.OwnerId;
                taskItem.RelatedTo = t.What.Name;
                taskItem.RelatedToId = t.WhatId;
                
                if(t.Status=='Completed'){    
                    taskItem.Complete = true;
                }
                else{
                    taskItem.Complete = false;
    
                }
                if(String.valueOf(t.WhatId).StartsWith('001')){    
                    taskItem.RenderRelated = false;
                }
                else{
                    taskItem.RenderRelated = true;
                } 
                
                returnList.add(taskItem);
            }
        }
    }
    
    @AuraEnabled(cacheable=true)
    public static void addMeetings(List<ActivityTimeline_Model> returnList, Id recordId)
    {
        List<Task> taskList = [select   Id, Type, Owner.Name, Status, Who.Name, Subject, Description, ActivityDate, OwnerId, WhoId, Attendees_List__c, WhatId, What.Name
                               from     Task 
                               where    AccountId =:recordId and (Type = 'Client In-Person Meeting') AND (Status!='Completed/closed' OR ActivityDate > Today)];
        
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
                taskItem.Attendees = t.Attendees_List__c;
                taskItem.WhoId = t.WhoId;
                taskItem.Assigned = t.Owner.Name;
                taskItem.AssignedId = t.OwnerId;
                taskItem.RelatedTo = t.What.Name;
                taskItem.RelatedToId = t.WhatId;
                
                if(t.Status=='Completed'){    
                    taskItem.Complete = true;
                }
                else{
                    taskItem.Complete = false;
    
                }
                if(String.valueOf(t.WhatId).StartsWith('001')){    
                    taskItem.RenderRelated = false;
                }
                else{
                    taskItem.RenderRelated = true;
                } 
                
                returnList.add(taskItem);
            }
        }
    }
    
    @AuraEnabled(cacheable=true)
    public static void addEvents(List<ActivityTimeline_Model> returnList, Id recordId)
    {
        List<Event> eventList = [select  Id, Type, Owner.Name, Who.Name, Subject, Description, ActivityDate, ActivityDateTime,
        							 IsAllDayEvent, StartDateTime, EndDateTime, OwnerId, WhoId, Attendees_List__c, Location
                               from     Event 
                               where    AccountId =:recordId 
                               AND ActivityDate >= Today
                               AND Type NOT IN ('Internal Meeting', 'Email', 'Task Reminder')];
        
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