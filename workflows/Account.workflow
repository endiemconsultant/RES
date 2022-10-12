<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Email_for_New_Accounts_Above_100_in_Annual_Revenue</fullName>
        <description>Email for New Accounts Above $100 in Annual Revenue</description>
        <protected>false</protected>
        <recipients>
            <type>accountOwner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Account_Over_100_in_Revenue</template>
    </alerts>
    <rules>
        <fullName>Alert for Added Account</fullName>
        <actions>
            <name>Email_for_New_Accounts_Above_100_in_Annual_Revenue</name>
            <type>Alert</type>
        </actions>
        <active>false</active>
        <booleanFilter>1</booleanFilter>
        <criteriaItems>
            <field>Account.AnnualRevenue</field>
            <operation>greaterThan</operation>
            <value>USD 100</value>
        </criteriaItems>
        <triggerType>onCreateOnly</triggerType>
        <workflowTimeTriggers>
            <offsetFromField>Account.CreatedDate</offsetFromField>
            <timeLength>1</timeLength>
            <workflowTimeTriggerUnit>Hours</workflowTimeTriggerUnit>
        </workflowTimeTriggers>
    </rules>
    <tasks>
        <fullName>Follow_up_with_New_Account</fullName>
        <assignedTo>kyle.love@res-group.com</assignedTo>
        <assignedToType>user</assignedToType>
        <description>1 day after an account with over $100 in revenue is created, Raheleh Folkerts will send a introduction e-mail to account contact.</description>
        <dueDateOffset>1</dueDateOffset>
        <notifyAssignee>false</notifyAssignee>
        <offsetFromField>Account.CreatedDate</offsetFromField>
        <priority>Normal</priority>
        <protected>false</protected>
        <status>Not Started</status>
        <subject>Follow-up with New Account</subject>
    </tasks>
</Workflow>
