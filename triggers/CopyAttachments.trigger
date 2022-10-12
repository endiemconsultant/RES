trigger CopyAttachments on Milestone1_Milestone__c (after insert) {
	
 Attachment[] attList = [select id, name, body from Attachment where ParentId = :Trigger.new[0].Opportunity__c];
 Attachment[] insertAttList = new Attachment[]{};

         for(Attachment a: attList)
         {
               Attachment att = new Attachment(name = a.name, body = a.body, parentid = Trigger.new[0].id);
               insertAttList.add(att);
         }
       if(insertAttList.size() > 0)
       {
            insert insertAttList;
       }

}