trigger OpportunityDuplicate on Opportunity (before insert) {
    
   OpportunityDuplicateHandler.MyMethod();

}