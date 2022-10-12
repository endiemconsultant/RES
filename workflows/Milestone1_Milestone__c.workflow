<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Distributed_PM_BD_Missing_Fields</fullName>
        <description>Distributed PM - BD Missing Fields</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Distributed/Distributed_BD</template>
    </alerts>
    <alerts>
        <fullName>Distributed_PM_Completed</fullName>
        <description>Distributed PM - Completed</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <recipients>
            <recipient>laura.dolan@res-group.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Distributed/Distributed_Completed</template>
    </alerts>
    <alerts>
        <fullName>Distributed_PM_Development_Task</fullName>
        <ccEmails>wrike@wrike.com</ccEmails>
        <description>Distributed PM - Development Task</description>
        <protected>false</protected>
        <senderType>DefaultWorkflowUser</senderType>
        <template>Distributed/Distributed_Development</template>
    </alerts>
    <alerts>
        <fullName>Distributed_PM_Finance</fullName>
        <ccEmails>Rajan.Arora@res-group.com;</ccEmails>
        <ccEmails>matt.pagano@res-group.com</ccEmails>
        <description>Distributed PM - Finance</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>Distributed/Distributed_Finance</template>
    </alerts>
    <alerts>
        <fullName>Distributed_PM_Operations_2</fullName>
        <description>Distributed PM - Operations 2</description>
        <protected>false</protected>
        <recipients>
            <recipient>laura.dolan@res-group.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Distributed/Distributed_Operations_2</template>
    </alerts>
    <alerts>
        <fullName>Distributed_PM_Operations_Layout</fullName>
        <description>Distributed PM - Operations Layout</description>
        <protected>false</protected>
        <recipients>
            <recipient>laura.dolan@res-group.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Distributed/Distributed_Operations_1</template>
    </alerts>
    <alerts>
        <fullName>Distributed_PM_Past_Due_Milestone_Alert</fullName>
        <description>Distributed PM - Past Due Milestone Alert</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Distributed/Distributed_Past_Due_Milestone</template>
    </alerts>
    <alerts>
        <fullName>Legal_Support_Request_Notification_Alert</fullName>
        <ccEmails>Debra.Eurich@res-group.com;</ccEmails>
        <ccEmails>Valarie.Cadena@res-group.com</ccEmails>
        <description>Legal - Support Request Notification - Alert</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Legal_Support_Request_Notification</template>
    </alerts>
</Workflow>
