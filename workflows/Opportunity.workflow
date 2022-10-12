<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Account_Type_Blank</fullName>
        <description>Account Type Blank</description>
        <protected>false</protected>
        <recipients>
            <field>LastModifiedById</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Account_Type_Notification</template>
    </alerts>
    <alerts>
        <fullName>Distributed_Notify_Proposal_Manager</fullName>
        <description>Distributed - Notify Proposal Manager</description>
        <protected>false</protected>
        <recipients>
            <recipient>laura.dolan@res-group.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Distributed/Distributed_Proposal_Manager</template>
    </alerts>
    <alerts>
        <fullName>Distributed_Proposal_Submitted</fullName>
        <description>Distributed - Proposal Submitted</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <recipients>
            <recipient>laura.dolan@res-group.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Distributed/Distributed_Proposal_Manager</template>
    </alerts>
    <alerts>
        <fullName>IT_Negotiations_Notification</fullName>
        <ccEmails>IT.MobRequest@res-group.com</ccEmails>
        <description>IT - Negotiations Notification</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Negotiations_Oppty_Stage_Change</template>
    </alerts>
    <alerts>
        <fullName>New_Opportunity_Email_Alert</fullName>
        <description>New Opportunity - Email Alert</description>
        <protected>false</protected>
        <recipients>
            <type>accountOwner</type>
        </recipients>
        <senderAddress>salesforce.system@res-group.com</senderAddress>
        <senderType>OrgWideEmailAddress</senderType>
        <template>unfiled$public/New_Opportunity_Alert</template>
    </alerts>
    <alerts>
        <fullName>Opportunity_Past_Due_Close_Date_Alert</fullName>
        <description>Opportunity - Past Due Close Date Alert</description>
        <protected>false</protected>
        <recipients>
            <field>LastModifiedById</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Oppty_Template_for_Past_Close_Dates</template>
    </alerts>
    <alerts>
        <fullName>Procore_Email_Notification_Notice_of_Intent</fullName>
        <ccEmails>Americas.ProCoreSupport@res-group.com</ccEmails>
        <description>Procore - Email Notification - Notice of Intent</description>
        <protected>false</protected>
        <recipients>
            <field>LastModifiedById</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Procore_Oppty_Notice_to_Proceed</template>
    </alerts>
    <alerts>
        <fullName>T_D_Notification_of_Closed_Opp</fullName>
        <ccEmails>RESTD.Estimating@res-group.com</ccEmails>
        <description>T&amp;D - Notification of Closed Opp</description>
        <protected>false</protected>
        <recipients>
            <field>LastModifiedById</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>T_D_Notification_Emails/T_D_Oppty_Closed_Opp</template>
    </alerts>
    <alerts>
        <fullName>T_D_Notification_of_Documents_Uploaded</fullName>
        <ccEmails>RESTD.Estimating@res-group.com</ccEmails>
        <description>T&amp;D - Notification of Documents Uploaded</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>T_D_Notification_Emails/T_D_Documents_Uploaded</template>
    </alerts>
    <alerts>
        <fullName>T_D_Notification_of_Due_Date_Change</fullName>
        <ccEmails>RESTD.Estimating@res-group.com</ccEmails>
        <description>T&amp;D - Notification of Due Date Change</description>
        <protected>false</protected>
        <recipients>
            <field>LastModifiedById</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>T_D_Notification_Emails/T_D_Proposal_Due_Date_Changed</template>
    </alerts>
    <alerts>
        <fullName>T_D_Notification_of_Stage_Change</fullName>
        <description>T&amp;D - Notification of Stage Change</description>
        <protected>false</protected>
        <recipients>
            <recipient>kelli.keefe@res-group.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <field>LastModifiedById</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>T_D_Notification_Emails/T_D_Oppty_Stage_Change</template>
    </alerts>
    <fieldUpdates>
        <fullName>Australia_Pursuit_Closed</fullName>
        <field>Aus_Pursuit_Status__c</field>
        <literalValue>Inactive</literalValue>
        <name>Australia Pursuit Closed</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Origination_Shortlist_Checkbox_Update</fullName>
        <field>Origination_Shortlist_Check__c</field>
        <literalValue>1</literalValue>
        <name>Origination Shortlist Checkbox Update</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Opportunity_Name</fullName>
        <field>Name</field>
        <formula>Account.Name &amp; &quot; - &quot; &amp; TEXT(Contract_Type__c) &amp; &quot; - &quot;&amp;  Project_Development__r.Name</formula>
        <name>Update Opportunity Name</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Time_Stamp_Field_Update</fullName>
        <field>Update_Date__c</field>
        <formula>Today()</formula>
        <name>Update Time Stamp Field Update</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>Account Type Blank - Workflow</fullName>
        <actions>
            <name>Account_Type_Blank</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.Account_Type__c</field>
            <operation>equals</operation>
        </criteriaItems>
        <criteriaItems>
            <field>User.ProfileId</field>
            <operation>notEqual</operation>
            <value>System Administrator</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Tier__c</field>
            <operation>equals</operation>
            <value>Global Key,Regional Key,BL Key,Target,Prospect,Supplier</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Aus - Inactive Pursuit Status</fullName>
        <actions>
            <name>Australia_Pursuit_Closed</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <description>Stage is closed won or lost - so the pursuit has ended.</description>
        <formula>OR(  ISPICKVAL( StageName , &quot;SEC&quot;) ,  ISPICKVAL( StageName , &quot;END&quot;))</formula>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Email Alert%3A Distributed - Proposal Submitted</fullName>
        <actions>
            <name>Distributed_Proposal_Submitted</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <formula>AND(
ISPICKVAL(PnL__c, &quot;Distributed&quot;),
ISPICKVAL(RES_Geography__c , &quot;Americas&quot;),
ISPICKVAL(StageName, &quot;Proposal Submitted&quot;),
ISCHANGED(StageName)
)</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Email Alert%3A Distributed Proposal Manager</fullName>
        <actions>
            <name>Distributed_Notify_Proposal_Manager</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <description>Any Time a Distributed Opportunity&apos;s Stage is changed and NOT equal to Prospecting or Proposal Submitted</description>
        <formula>AND(
ISPICKVAL(PnL__c, &quot;Distributed&quot;),
ISPICKVAL(RES_Geography__c , &quot;Americas&quot;),
NOT(ISPICKVAL(StageName,&quot;Confirm Value&quot;)),
NOT(ISPICKVAL(StageName,&quot;Define Solution&quot;)),
NOT(ISPICKVAL(StageName, &quot;Proposal Submitted&quot;)), 
OR(ISCHANGED(StageName),
(CreatedDate = LastModifiedDate)
)
)</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Email Alert%3A Proposals Stage</fullName>
        <active>true</active>
        <formula>And( 
ISCHANGED( StageName ) , 
ISPICKVAL(StageName , &apos;RFP Pending&apos;) 
)</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>IT - Notification Rule</fullName>
        <actions>
            <name>IT_Negotiations_Notification</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <booleanFilter>1 AND 2 AND (3 OR 4 OR 5 OR 6)</booleanFilter>
        <criteriaItems>
            <field>Opportunity.StageName</field>
            <operation>equals</operation>
            <value>Negotiations</value>
        </criteriaItems>
        <criteriaItems>
            <field>Opportunity.Business_Line__c</field>
            <operation>includes</operation>
            <value>T&amp;D,Solar Const,Wind Const</value>
        </criteriaItems>
        <criteriaItems>
            <field>Opportunity.RES_Geography__c</field>
            <operation>equals</operation>
            <value>US</value>
        </criteriaItems>
        <criteriaItems>
            <field>Opportunity.RES_Geography__c</field>
            <operation>equals</operation>
            <value>Canada</value>
        </criteriaItems>
        <criteriaItems>
            <field>Opportunity.RES_Country__c</field>
            <operation>equals</operation>
            <value>United States</value>
        </criteriaItems>
        <criteriaItems>
            <field>Opportunity.RES_Country__c</field>
            <operation>equals</operation>
            <value>Canada</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Notify Mickie Criteria</fullName>
        <active>true</active>
        <formula>AND(
ISPICKVAL(PnL__c,&quot;Transmission (S3&quot;),
OR(
ISCHANGED(StageName),
ISNEW()
),
OR(
ISPICKVAL(StageName,&quot;Proposal Preparation&quot;),
ISPICKVAL(PRIORVALUE(StageName),&quot;Pending Bid Decision&quot;)
)
)</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Opportunity Creation</fullName>
        <actions>
            <name>New_Opportunity_Email_Alert</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <formula>AND(CloseDate &gt; TODAY(), 
OR(AccountId = &quot;0010H00002nKzU0QAK&quot;, 
AccountId = &quot;0010H00002nKzU2QAK&quot;, 
AccountId  = &quot;0010H00002nKzV1QAK&quot;)
)</formula>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Opportunity Name Convention</fullName>
        <actions>
            <name>Update_Opportunity_Name</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <description>Enforce opportunity naming convention.</description>
        <formula>AND(
NOT(CONTAINS(Name,Account.Name)),
ISPICKVAL( PnL__c, &quot;RES Developed Project&quot;))</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Oppty Past Due Close Date - Email Notification</fullName>
        <actions>
            <name>Opportunity_Past_Due_Close_Date_Alert</name>
            <type>Alert</type>
        </actions>
        <active>false</active>
        <formula>AND(
IsClosed = False,
NOT(ISPICKVAL(StageName,&quot;Tabled&quot;)),
ISPICKVAL(StageName,&quot;Americas&quot;),
$User.ProfileId &lt;&gt; &quot;00ei0000001BR5D&quot;,
OR(
CloseDate &gt; TODAY(),
AND(COD_Date__c &lt; CloseDate, ISNULL(COD_Date__c)=FALSE)
))</formula>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Origination Shortlist Check</fullName>
        <actions>
            <name>Origination_Shortlist_Checkbox_Update</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <description>Workflow rule to check if the opportunity enters the &quot;Shortlist&quot; Stage. Workflow will only &apos;check&apos; the checkbox, the field can be modified before or after the workfl</description>
        <formula>AND( ISCHANGED( StageName ),  ISPICKVAL(StageName,&quot;Shortlist&quot;), RecordType.Name=&apos;Origination&apos; )</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Update Time Stamp WorkFlow</fullName>
        <actions>
            <name>Update_Time_Stamp_Field_Update</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <formula>AND(OR(ISCHANGED(Latest_Update__c),ISNEW()),NOT(ISBLANK(Latest_Update__c)))</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
</Workflow>
