<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>Update_Display_Asset_Capacity</fullName>
        <field>Display_Asset_Capacity__c</field>
        <formula>Aus_Calc_Asset_Capacity_MW__c</formula>
        <name>Update Display Asset Capacity</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>SS Display Asset Capacity</fullName>
        <actions>
            <name>Update_Display_Asset_Capacity</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <formula>OR( Aus_Calc_Asset_Capacity_MW__c  &lt;&gt;  Display_Asset_Capacity__c ,  ISNULL( Display_Asset_Capacity__c ) )</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
</Workflow>
