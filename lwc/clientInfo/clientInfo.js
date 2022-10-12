import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// #region FIELD IMPORTS

// #region HEADER FIELD IMPORTS
    import NAME_FIELD from '@salesforce/schema/Investor_Account__c.Name';
    import STANDARD_ACCOUNT_FIELD from '@salesforce/schema/Investor_Account__c.Standard_Account__c';
    import OWNER_FIELD from '@salesforce/schema/Investor_Account__c.OwnerId';
    import ACCOUNT_TYPE_FIELD from '@salesforce/schema/Investor_Account__c.Type_of_Account__c';
    import OTHER_ACCOUNT_TYPE_FIELD from '@salesforce/schema/Investor_Account__c.Other_Type_of_Account__c';    
    import RELATIONSHIP_TYPE_FIELD from '@salesforce/schema/Investor_Account__c.Type_of_Relationship__c';
    import SOLAR_INTEREST_FIELD from '@salesforce/schema/Investor_Account__c.Interested_in_Solar__c';
    import SOLAR_INTEREST_WHICH_REGION_FIELD from '@salesforce/schema/Investor_Account__c.Solar_Interest_in_which_Region__c';
    import ONSHORE_INTEREST_FIELD from '@salesforce/schema/Investor_Account__c.Interested_in_Onshore_Wind__c';
    import ONSHORE_INTEREST_WHICH_REGION_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_Interest_in_which_Region__c';
    import STORAGE_INTEREST_FIELD from '@salesforce/schema/Investor_Account__c.Interested_in_Storage__c';
    import STORAGE_INTEREST_WHICH_REGION_FIELD from '@salesforce/schema/Investor_Account__c.Storage_Interest_in_which_Region__c';
    import HYDROGEN_INTEREST_FIELD from '@salesforce/schema/Investor_Account__c.Interested_in_Hydrogen__c';
    import HYDROGEN_INTEREST_WHICH_REGION_FIELD from '@salesforce/schema/Investor_Account__c.Hydrogen_Interest_in_which_Region__c';
    import MARKETS_FIELD from '@salesforce/schema/Investor_Account__c.Interested_in_Other_Markets__c';
    import PROVIDE_DETAILS_FIELD from '@salesforce/schema/Investor_Account__c.Provide_Details__c';
    import AM_SERVICES_FIELD from '@salesforce/schema/Investor_Account__c.AM_Services__c';
    import AM_SERVICES_THIRD_PARTY_FIELD from '@salesforce/schema/Investor_Account__c.AM_Services_Third_Party__c';
    import CONSTRUCTION_SERVICES_FIELD from '@salesforce/schema/Investor_Account__c.Construction_Services__c';
    import CONSTRUCTION_SERVICES_THIRD_PARTY_FIELD from '@salesforce/schema/Investor_Account__c.Construction_Services_Third_Party__c';
    import OM_SERVICES_FIELD from '@salesforce/schema/Investor_Account__c.OM_Services__c';
    import OM_SERVICES_THIRD_PARTY_FIELD from '@salesforce/schema/Investor_Account__c.OM_Services_Third_Party__c';

// #endregion

// #region SOLAR FIELD IMPORTS 
    import SOLAR_GRID_CONFIGURATION_FIELD from '@salesforce/schema/Investor_Account__c.Solar_Grid_Configuration__c';
    import SOLAR_SERVICE_NOT_AVAILABLE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_Service_Not_Available_to_RES__c';
    import SOLAR_OTHER_SERVICE_NOT_AVAILABLE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_Other_Service_Not_Available__c';
    import SOLAR_ADDITIONAL_COMMENTS_FIELD from '@salesforce/schema/Investor_Account__c.Solar_Additional_Comments__c';
    // #region GB SOLAR FIELD IMPORTS
        import SOLAR_GB_ENERGY_ASSESSMENT_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Energy_Yield_Assessment__c';
        import SOLAR_GB_3RD_PARTY_ENERGY_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_3rd_Party_Energy_Assessment__c';
        import SOLAR_GB_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Route_to_Market__c';
        import SOLAR_GB_OTHER_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Other_Route_to_Market__c';
        import SOLAR_GB_SIZE_APPETITE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Size_Appetite__c';
        import SOLAR_GB_FINANCIAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Financial_DD_Provider__c';
        import SOLAR_GB_LEGAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Legal_DD_Provider__c';
        import SOLAR_GB_TECHNICAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Technical_DD_Provider__c';
        import SOLAR_GB_PP_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_PP_DD_Provider__c';
        import SOLAR_GB_OUTSTANDING_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Outstanding_Development_Risk__c';
        import SOLAR_GB_RISK_INVESTOR_NOT_TAKING_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Risk_Investor_Not_Taking__c';
        import SOLAR_GB_ADDITIONAL_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Additional_Dev_Risk__c';

    // #endregion
    // #region IRELAND SOLAR FIELD IMPORTS
        import SOLAR_IE_ENERGY_ASSESSMENT_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Energy_Yield_Assessment__c';
        import SOLAR_IE_3RD_PARTY_ENERGY_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_3rd_Party_Energy_Assessment__c';
        import SOLAR_IE_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Route_to_Market__c';
        import SOLAR_IE_OTHER_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Other_Route_to_Market__c';
        import SOLAR_IE_SIZE_APPETITE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Size_Appetite__c';
        import SOLAR_IE_FINANCIAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Financial_DD_Provider__c';
        import SOLAR_IE_LEGAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Legal_DD_Provider__c';
        import SOLAR_IE_TECHNICAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Technical_DD_Provider__c';
        import SOLAR_IE_PP_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_PP_DD_Provider__c';
        import SOLAR_IE_OUTSTANDING_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Outstanding_Development_Risk__c';
        import SOLAR_IE_RISK_INVESTOR_NOT_TAKING_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Risk_Investor_Not_Taking__c';
        import SOLAR_IE_ADDITIONAL_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Additional_Dev_Risk__c';

    // #endregion
// #endregion

// #region ONSHORE WIND FIELD IMPORTS
    import ONSHORE_GRID_CONFIGURATION_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_Grid_Configuration__c';
    import ONSHORE_SERVICE_NOT_AVAILABLE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_Service_Not_Available_to_RES__c';
    import ONSHORE_OTHER_SERVICE_NOT_AVAILABLE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_Other_Service_Not_Available__c';
    import ONSHORE_ADDITIONAL_COMMENTS_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_Additional_Comments__c';

    // #region GB ONSHORE WIND FIELD IMPORTS
        import ONSHORE_GB_ENERGY_ASSESSMENT_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Energy_Yield_Assessment__c';
        import ONSHORE_GB_3RD_PARTY_ENERGY_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_3rd_Party_Energy_Assessment__c';
        import ONSHORE_GB_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Route_to_Market__c';
        import ONSHORE_GB_OTHER_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Other_Route_to_Market__c';
        import ONSHORE_GB_SIZE_APPETITE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Size_Appetite__c';
        import ONSHORE_GB_FINANCIAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Financial_DD_Provider__c';
        import ONSHORE_GB_LEGAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Legal_DD_Provider__c';
        import ONSHORE_GB_TECHNICAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Technical_DD_Provider__c';
        import ONSHORE_GB_PP_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_PP_DD_Provider__c';
        import ONSHORE_GB_OUTSTANDING_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Outstanding_Development_Risk__c';
        import ONSHORE_GB_RISK_INVESTOR_NOT_TAKING_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Risk_Investor_Not_Taking__c';
        import ONSHORE_GB_ADDITIONAL_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Additional_Dev_Risk__c';

    // #endregion
    // #region IRELAND ONSHORE WIND FIELD IMPORTS
        import ONSHORE_IE_ENERGY_ASSESSMENT_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Energy_Yield_Assessment__c';
        import ONSHORE_IE_3RD_PARTY_ENERGY_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_3rd_Party_Energy_Assessment__c';
        import ONSHORE_IE_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Route_to_Market__c';
        import ONSHORE_IE_OTHER_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Other_Route_to_Market__c';
        import ONSHORE_IE_SIZE_APPETITE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Size_Appetite__c';
        import ONSHORE_IE_FINANCIAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Financial_DD_Provider__c';
        import ONSHORE_IE_LEGAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Legal_DD_Provider__c';
        import ONSHORE_IE_TECHNICAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Technical_DD_Provider__c';
        import ONSHORE_IE_PP_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_PP_DD_Provider__c';
        import ONSHORE_IE_OUTSTANDING_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Outstanding_Development_Risk__c';
        import ONSHORE_IE_RISK_INVESTOR_NOT_TAKING_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Risk_Investor_Not_Taking__c';
        import ONSHORE_IE_ADDITIONAL_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Additional_Dev_Risk__c';
        
    // #endregion
// #endregion

// #region STORAGE FIELD IMPORTS
    import STORAGE_GRID_CONFIGURATION_FIELD from '@salesforce/schema/Investor_Account__c.Storage_Grid_Configuration__c';
    import STORAGE_SERVICE_NOT_AVAILABLE_FIELD from '@salesforce/schema/Investor_Account__c.Storage_Service_Not_Available_to_RES__c';
    import STORAGE_OTHER_SERVICE_NOT_AVAILABLE_FIELD from '@salesforce/schema/Investor_Account__c.Storage_Other_Service_Not_Available__c';
    import STORAGE_ADDITIONAL_COMMENTS_FIELD from '@salesforce/schema/Investor_Account__c.Storage_Additional_Comments__c';

    // #region GB STORAGE FIELD IMPORTS
        import STORAGE_GB_DURATION_APPETITE_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Duration_Appetite__c';
        import STORAGE_GB_OTHER_DURATION_APPETITE_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Other_Duration_Appetite__c';
        import STORAGE_GB_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Route_to_Market__c';
        import STORAGE_GB_OTHER_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Other_Route_to_Market__c';
        import STORAGE_GB_SIZE_APPETITE_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Size_Appetite__c';
        import STORAGE_GB_FINANCIAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Financial_DD_Provider__c';
        import STORAGE_GB_LEGAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Legal_DD_Provider__c';
        import STORAGE_GB_TECHNICAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Technical_DD_Provider__c';
        import STORAGE_GB_PP_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_PP_DD_Provider__c';
        import STORAGE_GB_OUTSTANDING_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Outstanding_Development_Risk__c';
        import STORAGE_GB_RISK_INVESTOR_NOT_TAKING_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Risk_Investor_Not_Taking__c';
        import STORAGE_GB_ADDITIONAL_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Additional_Dev_Risk__c';

    // #endregion
    // #region IRELAND STORAGE FIELD IMPORTS
        import STORAGE_IE_DURATION_APPETITE_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Duration_Appetite__c';
        import STORAGE_IE_OTHER_DURATION_APPETITE_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Other_Duration_Appetite__c';
        import STORAGE_IE_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Route_to_Market__c';
        import STORAGE_IE_OTHER_ROUTE_TO_MARKET_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Other_Route_to_Market__c';
        import STORAGE_IE_SIZE_APPETITE_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Size_Appetite__c';
        import STORAGE_IE_FINANCIAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Financial_DD_Provider__c';
        import STORAGE_IE_LEGAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Legal_DD_Provider__c';
        import STORAGE_IE_TECHNICAL_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Technical_DD_Provider__c';
        import STORAGE_IE_PP_DD_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_PP_DD_Provider__c';
        import STORAGE_IE_OUTSTANDING_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Outstanding_Development_Risk__c';
        import STORAGE_IE_RISK_INVESTOR_NOT_TAKING_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Risk_Investor_Not_Taking__c';
        import STORAGE_IE_ADDITIONAL_RISK_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Additional_Dev_Risk__c';

    // #endregion
// #endregion

// #endregion

export default class ClientInfo extends LightningElement {
    @api recordId;
  
// #region Boolean Page Variables
    alwaysTrue = true;    
    editHeader = false;

    viewGB = false;
    viewIreland = false;

    headerDisplay=false;
    solarDisplay=false;
    onshoreWindDisplay=false;
    storageDisplay=false;

    viewGBSolar = false;
    editGBSolar = false;
    viewIrelandSolar = false;
    editIrelandSolar = false;

    viewSolarOtherServiceNotAvailableField = true;
    viewOnshoreOtherServiceNotAvailableField = true;
    viewStorageOtherServiceNotAvailableField = true;

    viewGBOnshoreWind = false;
    editGBOnshoreWind = false;
    viewIrelandOnshoreWind = false;
    editIrelandOnshoreWind = false;

    viewGBStorage = false;
    editGBStorage = false;
    viewIrelandStorage = false;
    editIrelandStorage = false;

// #endregion

// #region Field Variables
    // #region Header Field Variables
        nameField = NAME_FIELD;
        standardAccountField = STANDARD_ACCOUNT_FIELD;
        ownerField = OWNER_FIELD;
        accountTypeField = ACCOUNT_TYPE_FIELD;
        otherAccountTypeField = OTHER_ACCOUNT_TYPE_FIELD;
        relationshipTypeField = RELATIONSHIP_TYPE_FIELD;
        
        solarInterestField = SOLAR_INTEREST_FIELD;
        solarInterestWhichRegionField = SOLAR_INTEREST_WHICH_REGION_FIELD;
        onshoreWindInterestField = ONSHORE_INTEREST_FIELD;
        onshoreInterestWhichRegionField = ONSHORE_INTEREST_WHICH_REGION_FIELD;
        storageInterestField = STORAGE_INTEREST_FIELD;
        storageInterestWhichRegionField = STORAGE_INTEREST_WHICH_REGION_FIELD;
        hydrogenInterestField = HYDROGEN_INTEREST_FIELD;
        hydrogenInterestWhichRegionField = HYDROGEN_INTEREST_WHICH_REGION_FIELD;

        marketsField = MARKETS_FIELD;
        provideDetailsField = PROVIDE_DETAILS_FIELD;

        amServicesField = AM_SERVICES_FIELD;
        amServicesThirdPartyField = AM_SERVICES_THIRD_PARTY_FIELD;
        constructionServicesField = CONSTRUCTION_SERVICES_FIELD;
        constructionServicesThirdPartyField = CONSTRUCTION_SERVICES_THIRD_PARTY_FIELD;
        omServicesField = OM_SERVICES_FIELD;
        omServicesThirdPartyField = OM_SERVICES_THIRD_PARTY_FIELD;
        
    // #endregion

    // #region Solar Field Variables
        solarGridConfigurationField = SOLAR_GRID_CONFIGURATION_FIELD;
        solarServiceNotAvailableField = SOLAR_SERVICE_NOT_AVAILABLE_FIELD;
        solarOtherServiceNotAvailableField = SOLAR_OTHER_SERVICE_NOT_AVAILABLE_FIELD;
        solarAdditionalCommentsField = SOLAR_ADDITIONAL_COMMENTS_FIELD;
        // #region Solar GB Field Variables
            solarGBEnergyAssessmentField = SOLAR_GB_ENERGY_ASSESSMENT_FIELD;
            solarGB3rdPartyEnergyField = SOLAR_GB_3RD_PARTY_ENERGY_FIELD;
            solarGBRouteToMarketField = SOLAR_GB_ROUTE_TO_MARKET_FIELD;
            solarGBOtherRouteToMarketField = SOLAR_GB_OTHER_ROUTE_TO_MARKET_FIELD;
            solarGBSizeAppetiteField = SOLAR_GB_SIZE_APPETITE_FIELD;
            solarGBFinancialDDProviderField = SOLAR_GB_FINANCIAL_DD_PROVIDER_FIELD;
            solarGBLegalDDProviderField = SOLAR_GB_LEGAL_DD_PROVIDER_FIELD;
            solarGBTechnicalDDProviderField = SOLAR_GB_TECHNICAL_DD_PROVIDER_FIELD;
            solarGBPPDDProviderField = SOLAR_GB_PP_DD_PROVIDER_FIELD;
            solarGBOutstandingRiskField = SOLAR_GB_OUTSTANDING_RISK_FIELD;
            solarGBRiskInvestorNotTakingField = SOLAR_GB_RISK_INVESTOR_NOT_TAKING_FIELD;
            solarGBAdditionalRiskField = SOLAR_GB_ADDITIONAL_RISK_FIELD;

        // #endregion
        // #region Solar Ireland Field Variables
            solarIEEnergyAssessmentField = SOLAR_IE_ENERGY_ASSESSMENT_FIELD;
            solarIE3rdPartyEnergyField = SOLAR_IE_3RD_PARTY_ENERGY_FIELD;
            solarIERouteToMarketField = SOLAR_IE_ROUTE_TO_MARKET_FIELD;
            solarIEOtherRouteToMarketField = SOLAR_IE_OTHER_ROUTE_TO_MARKET_FIELD;
            solarIESizeAppetiteField = SOLAR_IE_SIZE_APPETITE_FIELD;
            solarIEFinancialDDProviderField = SOLAR_IE_FINANCIAL_DD_PROVIDER_FIELD;
            solarIELegalDDProviderField = SOLAR_IE_LEGAL_DD_PROVIDER_FIELD;
            solarIETechnicalDDProviderField = SOLAR_IE_TECHNICAL_DD_PROVIDER_FIELD;
            solarIEPPDDProviderField = SOLAR_IE_PP_DD_PROVIDER_FIELD;
            solarIEOutstandingRiskField = SOLAR_IE_OUTSTANDING_RISK_FIELD;
            solarIERiskInvestorNotTakingField = SOLAR_IE_RISK_INVESTOR_NOT_TAKING_FIELD;
            solarIEAdditionalRiskField = SOLAR_IE_ADDITIONAL_RISK_FIELD;

        // #endregion
    // #endregion

    // #region Onshore Wind Field Variables
        onshoreGridConfigurationField = ONSHORE_GRID_CONFIGURATION_FIELD;
        onshoreServiceNotAvailableField = ONSHORE_SERVICE_NOT_AVAILABLE_FIELD;
        onshoreOtherServiceNotAvailableField = ONSHORE_OTHER_SERVICE_NOT_AVAILABLE_FIELD;
        onshoreAdditionalCommentsField = ONSHORE_ADDITIONAL_COMMENTS_FIELD;
        // #region Onshore Wind GB Field Variables
            onshoreGBEnergyAssessmentField = ONSHORE_GB_ENERGY_ASSESSMENT_FIELD;
            onshoreGB3rdPartyEnergyField = ONSHORE_GB_3RD_PARTY_ENERGY_FIELD;
            onshoreGBRouteToMarketField = ONSHORE_GB_ROUTE_TO_MARKET_FIELD;
            onshoreGBOtherRouteToMarketField = ONSHORE_GB_OTHER_ROUTE_TO_MARKET_FIELD;
            onshoreGBSizeAppetiteField = ONSHORE_GB_SIZE_APPETITE_FIELD;
            onshoreGBFinancialDDProviderField = ONSHORE_GB_FINANCIAL_DD_PROVIDER_FIELD;
            onshoreGBLegalDDProviderField = ONSHORE_GB_LEGAL_DD_PROVIDER_FIELD;
            onshoreGBTechnicalDDProviderField = ONSHORE_GB_TECHNICAL_DD_PROVIDER_FIELD;
            onshoreGBPPDDProviderField = ONSHORE_GB_PP_DD_PROVIDER_FIELD;
            onshoreGBOutstandingRiskField = ONSHORE_GB_OUTSTANDING_RISK_FIELD;
            onshoreGBRiskInvestorNotTakingField = ONSHORE_GB_RISK_INVESTOR_NOT_TAKING_FIELD;
            onshoreGBAdditionalRiskField = ONSHORE_GB_ADDITIONAL_RISK_FIELD;

        // #endregion
        // #region Onshore Wind Ireland Field Variables
            onshoreIEEnergyAssessmentField = ONSHORE_IE_ENERGY_ASSESSMENT_FIELD;
            onshoreIE3rdPartyEnergyField = ONSHORE_IE_3RD_PARTY_ENERGY_FIELD;
            onshoreIERouteToMarketField = ONSHORE_IE_ROUTE_TO_MARKET_FIELD;
            onshoreIEOtherRouteToMarketField = ONSHORE_IE_OTHER_ROUTE_TO_MARKET_FIELD;
            onshoreIESizeAppetiteField = ONSHORE_IE_SIZE_APPETITE_FIELD;
            onshoreIEFinancialDDProviderField = ONSHORE_IE_FINANCIAL_DD_PROVIDER_FIELD;
            onshoreIELegalDDProviderField = ONSHORE_IE_LEGAL_DD_PROVIDER_FIELD;
            onshoreIETechnicalDDProviderField = ONSHORE_IE_TECHNICAL_DD_PROVIDER_FIELD;
            onshoreIEPPDDProviderField = ONSHORE_IE_PP_DD_PROVIDER_FIELD;
            onshoreIEOutstandingRiskField = ONSHORE_IE_OUTSTANDING_RISK_FIELD;
            onshoreIERiskInvestorNotTakingField = ONSHORE_IE_RISK_INVESTOR_NOT_TAKING_FIELD;
            onshoreIEAdditionalRiskField = ONSHORE_IE_ADDITIONAL_RISK_FIELD;

        // #endregion
    // #endregion

    // #region Storage Field Variables
        storageGridConfigurationField = STORAGE_GRID_CONFIGURATION_FIELD;
        storageServiceNotAvailableField = STORAGE_SERVICE_NOT_AVAILABLE_FIELD;
        storageOtherServiceNotAvailableField = STORAGE_OTHER_SERVICE_NOT_AVAILABLE_FIELD;
        storageAdditionalCommentsField = STORAGE_ADDITIONAL_COMMENTS_FIELD;
        // #region Onshore Wind GB Field Variables
            storageGBDurationAppetiteField = STORAGE_GB_DURATION_APPETITE_FIELD;
            storageGBOtherDurationAppetiteField = STORAGE_GB_OTHER_DURATION_APPETITE_FIELD;
            storageGBRouteToMarketField = STORAGE_GB_ROUTE_TO_MARKET_FIELD;
            storageGBOtherRouteToMarketField = STORAGE_GB_OTHER_ROUTE_TO_MARKET_FIELD;
            storageGBSizeAppetiteField = STORAGE_GB_SIZE_APPETITE_FIELD;
            storageGBFinancialDDProviderField = STORAGE_GB_FINANCIAL_DD_PROVIDER_FIELD;
            storageGBLegalDDProviderField = STORAGE_GB_LEGAL_DD_PROVIDER_FIELD;
            storageGBTechnicalDDProviderField = STORAGE_GB_TECHNICAL_DD_PROVIDER_FIELD;
            storageGBPPDDProviderField = STORAGE_GB_PP_DD_PROVIDER_FIELD;
            storageGBOutstandingRiskField = STORAGE_GB_OUTSTANDING_RISK_FIELD;
            storageGBRiskInvestorNotTakingField = STORAGE_GB_RISK_INVESTOR_NOT_TAKING_FIELD;
            storageGBAdditionalRiskField = STORAGE_GB_ADDITIONAL_RISK_FIELD;

        // #endregion
        // #region Storage Ireland Field Variables
            storageIEDurationAppetiteField = STORAGE_IE_DURATION_APPETITE_FIELD;
            storageIEOtherDurationAppetiteField = STORAGE_IE_OTHER_DURATION_APPETITE_FIELD;
            storageIERouteToMarketField = STORAGE_IE_ROUTE_TO_MARKET_FIELD;
            storageIEOtherRouteToMarketField = STORAGE_IE_OTHER_ROUTE_TO_MARKET_FIELD;
            storageIESizeAppetiteField = STORAGE_IE_SIZE_APPETITE_FIELD;
            storageIEFinancialDDProviderField = STORAGE_IE_FINANCIAL_DD_PROVIDER_FIELD;
            storageIELegalDDProviderField = STORAGE_IE_LEGAL_DD_PROVIDER_FIELD;
            storageIETechnicalDDProviderField = STORAGE_IE_TECHNICAL_DD_PROVIDER_FIELD;
            storageIEPPDDProviderField = STORAGE_IE_PP_DD_PROVIDER_FIELD;
            storageIEOutstandingRiskField = STORAGE_IE_OUTSTANDING_RISK_FIELD;
            storageIERiskInvestorNotTakingField = STORAGE_IE_RISK_INVESTOR_NOT_TAKING_FIELD;
            storageIEAdditionalRiskField = STORAGE_IE_ADDITIONAL_RISK_FIELD;

        // #endregion

// #endregion

// #endregion

// #region Country Button Handlers  
get countryOptions() { 
        return [
            {label: "GB", value: "GB"} ,
            {label: "Ireland", value: "Ireland"},
        ];
    }

countrySelected = "";
handleCountrySelection (event) {
        this.countrySelected = event.detail.value;

     if (this.countrySelected ==="GB")
        { 
            this.viewGB=true;
            this.viewGBSolar=true;
            this.viewGBOnshoreWind=true;
            this.viewGBStorage=true;

            this.editGBSolar=false;
            this.editGBOnshoreWind=false;
            this.editGBStorage=false;

            this.viewIreland=false;
            this.viewIrelandSolar=false;
            this.viewIrelandOnshoreWind=false;
            this.viewIrelandStorage=false;

            this.editIrelandSolar=false;
            this.editIrelandOnshoreWind=false;
            this.editIrelandStorage=false;
        }
        
        else if (this.countrySelected === "Ireland") 
        {
            this.viewIreland=true;
            this.viewIrelandSolar=true;
            this.viewIrelandOnshoreWind=true;
            this.viewIrelandStorage=true;

            this.editIrelandSolar=false;
            this.editIrelandOnshoreWind=false;
            this.editIrelandStorage=false;

            this.viewGB=false;
            this.viewGBSolar=false;
            this.viewGBOnshoreWind=false;
            this.viewGBStorage=false;

            this.editGBSolar=false;
            this.editGBOnshoreWind=false;
            this.editGBStorage=false;
        }
    }
// #endregion

// #region Technology Interest Checkbox Handlers
    activeSections = [];

    handleHeaderDisplay() {
        this.headerDisplay = !this.headerDisplay;
        
        
        setTimeout(() => {
            this.activeSections = ["Header", "Solar", "Onshore", "Storage"];
        }, 50
        );
         
    }

    handleSolarDisplay() {
        this.solarDisplay = !this.solarDisplay;
        
        
        setTimeout(() => {
            this.activeSections = ["Header", "Solar", "Onshore", "Storage"];
        }, 50
        );
        
    }

    handleOnshoreWindDisplay() {
        this.onshoreWindDisplay = !this.onshoreWindDisplay;
        
        
        setTimeout(() => {
            this.activeSections = ["Header", "Solar", "Onshore", "Storage"];
        }, 50
        );
        
    }

    handleStorageDisplay() {
        this.storageDisplay = !this.storageDisplay;
        
        
        setTimeout(() => {
            this.activeSections = ["Header", "Solar", "Onshore", "Storage"];
        }, 50
        );
        
    }
// #endregion

// #region Edit Button Handlers
    handleHeaderEdit() {
        this.editHeader = !this.editHeader;
    }

    handleGBSolarEdit() {
        this.viewGBSolar = !this.viewGBSolar;
        this.editGBSolar = !this.editGBSolar;
    }

    handleIrelandSolarEdit() {
        this.viewIrelandSolar = !this.viewIrelandSolar;
        this.editIrelandSolar = !this.editIrelandSolar;
    }

    handleGBOnshoreWindEdit() {
        this.viewGBOnshoreWind = !this.viewGBOnshoreWind;
        this.editGBOnshoreWind = !this.editGBOnshoreWind;
    }

    handleIrelandOnshoreWindEdit() {
        this.viewIrelandOnshoreWind = !this.viewIrelandOnshoreWind;
        this.editIrelandOnshoreWind = !this.editIrelandOnshoreWind;
    }

    handleGBStorageEdit() {
        this.viewGBStorage = !this.viewGBStorage;
        this.editGBStorage = !this.editGBStorage;
    }

    handleIrelandStorageEdit() {
        this.viewIrelandStorage = !this.viewIrelandStorage;
        this.editIrelandStorage = !this.editIrelandStorage;
    }
// #endregion
    
// #region Update Button Handlers
    headerSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Account Header Update',
            message: 'Header Fields Updated Successfully.',
            variant: 'success'
        });
        this.dispatchEvent( toastEvent );
        this.editHeader = false;
        
    }

    gbSolarSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Account GB Solar Update',
            message: 'GB Solar Fields Updated Successfully.',
            variant: 'success'
        });
        this.dispatchEvent( toastEvent );
        this.editGBSolar = false;
        this.viewGBSolar = true;
    }

    irelandSolarSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Account Ireland Solar Update',
            message: 'Ireland Solar Fields Updated Successfully.',
            variant: 'success'
        });
        this.dispatchEvent( toastEvent );
        this.editIrelandSolar = false;
        this.viewIrelandSolar = true;
    }

    gbOnshoreWindSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Account GB Onshore Wind Update',
            message: 'GB Onshore Wind Fields Updated Successfully.',
            variant: 'success'
        });
        this.dispatchEvent( toastEvent );
        this.editGBOnshoreWind = false;
        this.viewGBOnshoreWind = true;
    }

    irelandOnshoreWindSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Account Ireland Onshore Wind Update',
            message: 'Ireland Onshore Wind Fields Updated Successfully.',
            variant: 'success'
        });
        this.dispatchEvent( toastEvent );
        this.editIrelandOnshoreWind = false;
        this.viewIrelandOnshoreWind = true;
    }

    gbStorageSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Account GB Storage Update',
            message: 'GB Storage Fields Updated Successfully.',
            variant: 'success'
        });
        this.dispatchEvent( toastEvent );
        this.editGBStorage = false;
        this.viewGBStorage = true;
    }

    irelandStorageSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Account Ireland Storage Update',
            message: 'Ireland Storage Fields Updated Successfully.',
            variant: 'success'
        });
        this.dispatchEvent( toastEvent );
        this.viewIrelandStorage = true;
    }

// #endregion
        
}