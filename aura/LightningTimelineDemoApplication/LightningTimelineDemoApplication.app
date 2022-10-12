<aura:application access="GLOBAL" extends="ltng:outApp" >
    
	<aura:dependency resource="c:LightningDemoHeader"/>
    <aura:dependency resource="c:LightningDemoActivityTimeline"/>
    
    <ltng:require styles="/resource/SLDS0120/assets/styles/salesforce-lightning-design-system-ltng.css" />
    
    <div class="slds">
            
    		<c:LightningDemoHeader />
            <c:LightningDemoActivityTimeline />
  			
    </div>

</aura:application>