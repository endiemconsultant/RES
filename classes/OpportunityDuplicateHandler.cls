public class OpportunityDuplicateHandler {
    
    public static void MyMethod(){
        
    Set<String> setName = new Set<String>();
	For(Opportunity op :(List<Opportunity>) trigger.new)
	{
		setName.add(op.name);
	}
	
	if(setName.size() > 0 )
	{
		List<Opportunity> lstOp = [select name ,id from Opportunity where name in :setName ];
		
		Map<String ,Opportunity> mapNameWiseOpportunity = new Map<String,Opportunity>();
		For(Opportunity op: lstOp)
		{
			mapNameWiseOpportunity.put(op.name ,op);
		}
		
		For(Opportunity op :(List<Opportunity>) trigger.new)
		{
			if(mapNameWiseOpportunity.containsKey(op.name))
			{
				op.Name.addError('Name already Exist ');
			}
		}
		
	}
        
        
    }

}