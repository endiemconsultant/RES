import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// #region FIELD IMPORTS
    import REQUESTOR_NAME_FIELD from '@salesforce/schema/Case.ContactId';
    import REQUESTORS_TEAM_FIELD from '@salesforce/schema/Case.Requestors_Team__c';

    import REASON_FOR_REQUEST_FIELD from '@salesforce/schema/Case.Reason_For_Request__c';
    import BUSINESS_REQUIREMENTS_FIELD from '@salesforce/schema/Case.Business_Requirements__c';
    import TECHNICAL_REQUIREMENTS_FIELD from '@salesforce/schema/Case.Technical_Requirements__c';

    import ARE_OTHER_STAKEHOLDERS_IMPACTED_FIELD from '@salesforce/schema/Case.Are_Other_Stakeholders_Impacted__c';
    import IMPACTED_STAKEHOLDERS_FIELD from '@salesforce/schema/Case.Impacted_Stakeholders__c';
    import ARE_IMPACTED_STAKEHOLDERS_AWARE_FIELD from '@salesforce/schema/Case.Are_Impacted_Stakeholders_Aware__c';
    import ANY_STAKEHOLDER_CONCERNS_FIELD from '@salesforce/schema/Case.Any_Stakeholder_Concerns__c';
    import LIST_STAKEHOLDER_CONCERNS_FIELD from '@salesforce/schema/Case.List_Stakeholder_Concerns__c';
    import ALL_STAKEHOLDER_CONCERNS_RESOLVED_FIELD from '@salesforce/schema/Case.All_Stakeholder_Concerns_Resolved__c';

    import DEV_LEVEL_OF_EFFORT_FIELD from '@salesforce/schema/Case.Dev_Level_Of_Effort__c';
    import DEV_BACKLOG_WHEN_CAN_WORK_START_FIELD from '@salesforce/schema/Case.Dev_Backlog_When_Can_Work_Start__c';
    import STANDARD_CHANGE_FIELD from '@salesforce/schema/Case.Standard_Change_Checkbox__c';

    import SERVICE_TEAM_RECOMMENDATION_FIELD from '@salesforce/schema/Case.Service_Team_Recommendation__c';
    import SERVICE_TEAM_IMPACT_SIGN_OFF_FIELD from '@salesforce/schema/Case.Service_Team_Impact_Sign_Off__c';
// #endregion

export default class SfDevRequest extends LightningElement {
    @api recordId;

// #region FIELD VARIABLES
    requestorNameField=REQUESTOR_NAME_FIELD;
    requestorsTeamField=REQUESTORS_TEAM_FIELD;

    reasonForRequestField=REASON_FOR_REQUEST_FIELD;
    businessRequirementsField=BUSINESS_REQUIREMENTS_FIELD;
    technicalRequirementsField=TECHNICAL_REQUIREMENTS_FIELD;

    areOtherStakeholdersImpactedField=ARE_OTHER_STAKEHOLDERS_IMPACTED_FIELD;
    impactedStakeholdersField=IMPACTED_STAKEHOLDERS_FIELD;
    areImpactedStakeholdersAwareField=ARE_IMPACTED_STAKEHOLDERS_AWARE_FIELD;
    anyStakeholderConcersField=ANY_STAKEHOLDER_CONCERNS_FIELD;
    listStakeholderConcernsField=LIST_STAKEHOLDER_CONCERNS_FIELD;
    allStakeholderConcernsResolvedField=ALL_STAKEHOLDER_CONCERNS_RESOLVED_FIELD;

    devLevelOfEffortField=DEV_LEVEL_OF_EFFORT_FIELD;
    devBacklogWhenCanWorkStartField=DEV_BACKLOG_WHEN_CAN_WORK_START_FIELD;
    standardChangeField=STANDARD_CHANGE_FIELD;

    serviceTeamRecommendationField=SERVICE_TEAM_RECOMMENDATION_FIELD;
    serviceTeamImpactSignOffField=SERVICE_TEAM_IMPACT_SIGN_OFF_FIELD;
// #endregion

// #region Page Variables
    alwaysTrue = true;
    editForm = false;
    activeSections = ['viewRequest', 'viewImpact', 'viewServiceTeam','editRequest', 'editImpact', 'editServiceTeam' ];
// #endregion


// #region Button Handlers
    handleEdit() {
        this.editForm = !this.editForm;
    }

    handleUpdate() {
        const toastEvent = new ShowToastEvent({
            title: 'Impact Analysis Update',
            message: 'Impact Analysis Updated Successfully.',
            variant: 'success'
        });
        this.dispatchEvent( toastEvent );
        this.editForm = false;
    }
// #endregion

}