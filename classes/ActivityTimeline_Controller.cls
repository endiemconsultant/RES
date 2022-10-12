public class ActivityTimeline_Controller {

    @AuraEnabled
    public static List<ActivityTimeline_Model> getActivityTimeline(Id recordId)
    {
               
        List<ActivityTimeline_Model> returnList = new List<ActivityTimeline_Model>();

        addTasks(returnList, recordId);

        addCalls(returnList, recordId);
    
        addMeetings(returnList, recordId);
    
        addEmails(returnList, recordId);
              
        returnList.sort();

        return returnList; 
        
    }
    
    @AuraEnabled
    public static void addTasks(List<ActivityTimeline_Model> returnList, Id recordId)
    {
        
        List<Task> taskList = [select   Id, Type, Owner.Name, Status, Who.Name, Subject, Description, ActivityDate  
                               from     Task 
                               where    WhatId =:recordId and (Type = 'Other' OR Type = Null) and ActivityDate != null ];
        
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
                taskItem.Assigned = t.Owner.Name;
                
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
    
    @AuraEnabled
    public static void addCalls(List<ActivityTimeline_Model> returnList, Id recordId)
    {
       
        List<Task> taskList = [select   Id, Type, Owner.Name, Status, Who.Name, Subject, Description, ActivityDate  
                               from     Task 
                               where    WhatId =:recordId and Type= 'Call' and ActivityDate != null];
               
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
                taskItem.Assigned = t.Owner.Name;
                
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
    
    @AuraEnabled
    public static void addMeetings(List<ActivityTimeline_Model> returnList, Id recordId)
    {
        List<Task> taskList = [select   Id, Type, Owner.Name, Status, Who.Name, Subject, Description, ActivityDate  
                               from     Task 
                               where    WhatId =:recordId and Type= 'Client Meeting'];
        
        if(taskList.size() > 0)
        {
            for(Task t: taskList)
            {
                ActivityTimeline_Model taskItem = new ActivityTimeline_Model();
                
                taskItem.RecordId = t.Id;
                taskItem.ActivityTimelineType = 'Client Meeting';
                taskItem.Subject = t.Subject;
                taskItem.Detail = t.Description;
                taskItem.ActualDate = t.ActivityDate;
                taskItem.ShortDate = t.ActivityDate.format();
                taskItem.Recipients = t.Who.Name;
                taskItem.Assigned = t.Owner.Name;
                
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
    
    @AuraEnabled
    public static void addEmails(List<ActivityTimeline_Model> returnList, Id recordId)
    {
        List<Task> taskList = [select   Id, Type, Owner.Name, Status, Who.Name, Subject, Description, ActivityDate  
                               from     Task 
                               where    WhatId =:recordId and Type= 'Email' and ActivityDate != null];
        
        if(taskList.size() > 0)
        {
        
            for(Task t: taskList)
            {
                ActivityTimeline_Model taskItem = new ActivityTimeline_Model();
                
                taskItem.RecordId = t.Id;
                taskItem.ActivityTimelineType = 'Email';
                taskItem.Subject = t.Subject;
                taskItem.Detail = t.Description;
                taskItem.ActualDate = t.ActivityDate;
                taskItem.ShortDate = t.ActivityDate.format();
                taskItem.Recipients = t.Who.Name;
                taskItem.Assigned = t.Owner.Name;
                
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
    
    
    
    

}