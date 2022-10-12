<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>send_report_CSV</fullName>
        <description>send report CSV</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>DefaultWorkflowUser</senderType>
        <template>unfiled$public/CSV_Embed</template>
    </alerts>
    <rules>
        <fullName>Report CSV Embed</fullName>
        <actions>
            <name>send_report_CSV</name>
            <type>Alert</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>rptobj__c.reporttrigger__c</field>
            <operation>greaterThan</operation>
            <value>0</value>
        </criteriaItems>
        <criteriaItems>
            <field>rptobj__c.Name</field>
            <operation>equals</operation>
            <value>ThatReport</value>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <tasks>
        <fullName>Test</fullName>
        <assignedTo>kyle.love@res-group.com</assignedTo>
        <assignedToType>user</assignedToType>
        <dueDateOffset>0</dueDateOffset>
        <notifyAssignee>false</notifyAssignee>
        <offsetFromField>User.LastLoginDate</offsetFromField>
        <priority>Normal</priority>
        <protected>false</protected>
        <status>Not Started</status>
        <subject>Test</subject>
    </tasks>
    <tasks>
        <fullName>Test123</fullName>
        <assignedTo>kyle.love@res-group.com</assignedTo>
        <assignedToType>user</assignedToType>
        <dueDateOffset>0</dueDateOffset>
        <notifyAssignee>false</notifyAssignee>
        <priority>Normal</priority>
        <protected>false</protected>
        <status>Not Started</status>
        <subject>Test</subject>
    </tasks>
</Workflow>
