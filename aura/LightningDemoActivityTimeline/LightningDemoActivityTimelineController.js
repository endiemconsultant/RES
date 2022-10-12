({
	doInit : function(component, event) {
                
        var recordId = component.get("v.recordId");
        
       	// retrieve server method
        var action = component.get("c.getActivityTimeline");
        
        // set method paramaters
        action.setParams({
            "recordId" : recordId
        })

        // set call back instructions
        action.setCallback(this, function(a){

            // assign server retrieved items to component variable
            component.set("v.timeLineItems", a.getReturnValue());

        });
        
        // queue action on the server
        $A.enqueueAction(action);
        
        
    }
    
    
})