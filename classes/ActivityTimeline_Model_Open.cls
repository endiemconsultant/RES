global class ActivityTimeline_Model_Open implements Comparable {
     
    @AuraEnabled
    public Id RecordId {get;set;}
    
    @AuraEnabled
    public String ActivityTimelineType {get;set;}
    
    @AuraEnabled
    public String Subject {get;set;}
    
    @AuraEnabled
    public String Detail {get;set;}
    
    // Short event
    @AuraEnabled
    public String ShortDate {get;set;}
    
    // Text form of event duration
    @AuraEnabled
    public String EventTime {get;set;}
    
	@AuraEnabled   
    public String Location {get;set;}
    
    // Task related to, Email "to", or list of attendees for events
    @AuraEnabled
    public String Recipients {get;set;}
    
     @AuraEnabled
    public String Attendees {get;set;}
    
    @AuraEnabled
    public String WhoId {get;set;}
    
    // Task/Event Asignee, or Email From
    @AuraEnabled
    public String Assigned {get;set;}
    
    @AuraEnabled
    public String AssignedId {get;set;}
    
     // Is it related to an Opp or KASO?
    @AuraEnabled
    public String RelatedTo {get;set;}
    
    // Short event
    @AuraEnabled
    public Object Description {get;set;}
    
    // For indicating task completion
    @AuraEnabled
    public boolean Complete {get;set;}
    
    public DateTime ActualDate {get;set;}
    

    global Integer compareTo(Object compareTo) {
    	
    	ActivityTimeline_Model_Open ActivityTimeline_Model_Open = (ActivityTimeline_Model_Open) compareTo;
    	if (ActualDate > ActivityTimeline_Model_Open.ActualDate) return 1; 
        if (ActualDate < ActivityTimeline_Model_Open.ActualDate) return -1;
        return 0;       
    }

       // DateTime otherActualDate = objToCompare != null ? ((ActivityTimeline_Model)objToCompare).ActualDate : System.now();
        
        //return (this.ActualDate.getTime() - otherActualDate.getTime()).intValue();
          
}