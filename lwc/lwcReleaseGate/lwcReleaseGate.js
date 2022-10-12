import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// #region FIELD IMPORTS
import ARE_OTHER_STAKEHOLDERS_IMPACTED_FIELD from '@salesforce/schema/Case.Are_Other_Stakeholders_Impacted__c';
import IMPACTED_STAKEHOLDERS_FIELD from '@salesforce/schema/Case.Impacted_Stakeholders__c';
import ARE_IMPACTED_STAKEHOLDERS_AWARE_FIELD from '@salesforce/schema/Case.Are_Impacted_Stakeholders_Aware__c';
import ANY_STAKEHOLDER_CONCERNS_FIELD from '@salesforce/schema/Case.Any_Stakeholder_Concerns__c';
import LIST_STAKEHOLDER_CONCERNS_FIELD from '@salesforce/schema/Case.List_Stakeholder_Concerns__c';
import ALL_STAKEHOLDER_CONCERNS_RESOLVED_FIELD from '@salesforce/schema/Case.All_Stakeholder_Concerns_Resolved__c';

    import ADMIN_TESTING_COMPLETED_FIELD from '@salesforce/schema/Case.Admin_Testing_Completed__c';
    import USER_TESTING_COMPLETED_FIELD from '@salesforce/schema/Case.User_Testing_Completed__c';
    import DESCRIBE_THE_TESTING_FIELD from '@salesforce/schema/Case.Describe_The_Testing__c';

    import NEW_PROCESS_FIELD from '@salesforce/schema/Case.New_Process__c';
    import PROCESS_DOCUMENT_CREATED_FIELD from '@salesforce/schema/Case.Process_Document_Created__c';
    import PROCESS_DOCUMENT_LINK_FIELD from '@salesforce/schema/Case.Process_Document_Link__c';
    import USER_TRAINING_COMPLETED_FIELD from '@salesforce/schema/Case.User_Training_Completed__c';

    import SERVICE_TEAM_RELEASE_FIELD from '@salesforce/schema/Case.Service_Team_Release__c';
// #endregion

export default class SfdcReleaseGate extends LightningElement {
    @api recordId;

// #region FIELD VARIABLES
    areOtherStakeholdersImpactedField=ARE_OTHER_STAKEHOLDERS_IMPACTED_FIELD;
    impactedStakeholdersField=IMPACTED_STAKEHOLDERS_FIELD;
    areImpactedStakeholdersAwareField=ARE_IMPACTED_STAKEHOLDERS_AWARE_FIELD;
    anyStakeholderConcersField=ANY_STAKEHOLDER_CONCERNS_FIELD;
    listStakeholderConcernsField=LIST_STAKEHOLDER_CONCERNS_FIELD;
    allStakeholderConcernsResolvedField=ALL_STAKEHOLDER_CONCERNS_RESOLVED_FIELD;
    
    adminTestingCompletedField=ADMIN_TESTING_COMPLETED_FIELD;
    userTestingCompletedField=USER_TESTING_COMPLETED_FIELD;
    describeTheTestingField=DESCRIBE_THE_TESTING_FIELD;

    newProcessField=NEW_PROCESS_FIELD;
    processDocumentCreatedField=PROCESS_DOCUMENT_CREATED_FIELD;
    processDocumentLinkField=PROCESS_DOCUMENT_LINK_FIELD;
    userTrainingCompletedField=USER_TRAINING_COMPLETED_FIELD;

    serviceTeamReleaseField=SERVICE_TEAM_RELEASE_FIELD;
// #endregion

// #region PAGE VARIABLES
    alwaysTrue = true;
    editForm = false;
    activeSections = ['viewImpact', 'viewTesting', 'viewProcess', 'editImpact', 'editTesting', 'editProcess' ];
// #endregion

// #region BUTTON HANDLERS
    handleEdit() {
        this.editForm = !this.editForm;
    }

    handleUpdate() {
        const toastEvent = new ShowToastEvent({
            title: 'Release Gate Form Update',
            message: 'Release Gate Form Updated Successfully.',
            variant: 'success'
        });
        this.dispatchEvent( toastEvent );
        this.editForm = false;
    }
// #endregion


}