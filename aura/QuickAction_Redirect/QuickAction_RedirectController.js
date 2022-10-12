({
    doInit : function(component, event, helper) {
        var action = component.get("c.cloneOpportunity");
        var opp = component.get("v.recordId");
        action.setParams({
                "OppId" : component.get("v.recordId")
                });
        action.setCallback(this,function(data){
           var clonedRecordId = data.getReturnValue();        
             helper.navigate(component);
            var dismissActionPanel = $A.get("e.force:closeQuickAction");
             dismissActionPanel.fire();

        });
 $A.enqueueAction(action);
 }
})