trigger ContentDocumentLinkTrigger on ContentDocumentLink (after delete, after insert, after update) {
	
	List<ContentDocumentLink> cdls = ( Trigger.new == null ? Trigger.old : Trigger.new );
	
	Set<id> parentIds = new Set<id>();

    for ( ContentDocumentLink cdl : cdls ) {
        parentIds.add( cdl.LinkedEntityId );
}

    for ( List<Opportunity> opps : [ SELECT Id, ( SELECT Id FROM ContentDocumentLinks LIMIT 15) FROM Opportunity WHERE Id IN :parentIds ORDER BY AccountId ] ) {
        
        for ( Opportunity o : opps ) {
            o.Files_Attached__c = ( o.ContentDocumentLinks.size());
        }

        update opps;

    }
}