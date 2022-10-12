import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// #region FIELD IMPORTS
// #region SOLAR FIELD IMPORTS     
    // #region GB SOLAR FIELD IMPORTS
        import SOLAR_GB_IRR_MERCHANT_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_IRR_Merchant__c';
        import SOLAR_GB_IRR_FIXED_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_IRR_Fixed__c';
        import SOLAR_GB_CURTAILMENT_CONSULTANT_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Curtailment_Consultant__c';
        import SOLAR_GB_OTHER_CURTAILMENT_CONSULTANT_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Other_Curtailment_Consultant__c';
        import SOLAR_GB_CURTAILMENT_GRID_OPERATOR_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Curtailment_Grid_Operator__c';
        import SOLAR_GB_ABOVE50MW_ACDC_RATIO_FIELD from '@salesforce/schema/Investor_Account__c.Above_50MW_GB_project_AC_DC_ratio_used__c';
        import SOLAR_GB_SUB50MW_ACDC_RATIO_FIELD from '@salesforce/schema/Investor_Account__c.Sub_50MW_GB_project_AC_DC_ratio_used__c';
        import SOLAR_GB_GCR_RATIO_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_GCR_Ratio__c';
        import SOLAR_GB_TYPE_OF_INVERTER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Type_of_Inverter__c';
        import SOLAR_GB_INVERTER_SIZE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Inverter_Size_MW__c';
        import SOLAR_GB_MODULE_SIZE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Module_Size_W__c';
        import SOLAR_GB_PITCH_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Pitch_m__c';
        import SOLAR_GB_TILT_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Tilt_degrees__c';
        import SOLAR_GB_IRRADIANCE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Irradiance_options__c';
        import SOLAR_GB_OTHER_IRRADIANCE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Other_Irradiance_Options__c';
        import SOLAR_GB_EPC_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_EPC_Provider__c';
        import SOLAR_GB_ROUTE_TO_MARKET_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Route_to_Market_Provider__c';
        import SOLAR_GB_CPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_CPI_Inflation__c';
        import SOLAR_GB_RPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_RPI_Inflation__c';
        import SOLAR_GB_INFLATION_NOTES_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Inflation_Notes__c';
        // #region GB SOLAR "REVENUE" FIELD IMPORTS
            import SOLAR_GB_CONSULTANT_REV_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Consultant_Revenue_Forecast__c';
            import SOLAR_GB_SPECIFY_CONSULTANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Specify_Consultant_Revenue__c';
            /*import SOLAR_GB_AFRY_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_AFRY_Revenue__c';
            import SOLAR_GB_AURORA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Aurora_Revenue__c';
            import SOLAR_GB_BARINGA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Baringa_Revenue__c';
            import SOLAR_GB_CORNWALL_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Cornwall_Revenue__c';
            import SOLAR_GB_OTHER_CONSULTANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Other_Consultant_Revenue__c';*/
            import SOLAR_GB_ROUTE_TO_MARKET_REV_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Route_to_Market_Rev_Forecast__c';
            import SOLAR_GB_SPECIFY_ROUTE_TO_MARKET_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Specify_Route_to_Market_Rev__c';
            /*import SOLAR_GB_CFD_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_CfD_Revenue__c';
            import SOLAR_GB_CPPA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_CPPA_Revenue__c';
            import SOLAR_GB_MERCHANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Merchant_Revenue__c';
            import SOLAR_GB_OTHER_REVENUE_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Other_Route_Rev_Forecast__c';
            import SOLAR_GB_OTHER_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_GB_Other_Revenue__c';*/
        // #endregion
    // #endregion

    // #region IRELAND SOLAR FIELD IMPORTS
        import SOLAR_IE_IRR_MERCHANT_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_IRR_Merchant__c';
        import SOLAR_IE_IRR_FIXED_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_IRR_Fixed__c';
        import SOLAR_IE_CURTAILMENT_CONSULTANT_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Curtailment_Consultant__c';
        import SOLAR_IE_OTHER_CURTAILMENT_CONSULTANT_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Other_Curtailment_Consultant__c';
        import SOLAR_IE_CURTAILMENT_GRID_OPERATOR_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Curtailment_Grid_Operator__c';        
        import SOLAR_IE_ABOVE50MW_ACDC_RATIO_FIELD from '@salesforce/schema/Investor_Account__c.Above_50MW_IE_project_AC_DC_ratio_used__c';
        import SOLAR_IE_SUB50MW_ACDC_RATIO_FIELD from '@salesforce/schema/Investor_Account__c.Sub_50MW_IE_project_AC_DC_ratio_used__c';
        import SOLAR_IE_GCR_RATIO_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_GCR_Ratio__c';
        import SOLAR_IE_TYPE_OF_INVERTER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Type_of_Inverter__c';
        import SOLAR_IE_INVERTER_SIZE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Inverter_Size_MW__c';
        import SOLAR_IE_MODULE_SIZE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Module_Size_W__c';
        import SOLAR_IE_PITCH_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Pitch_m__c';
        import SOLAR_IE_TILT_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Tilt_degrees__c';
        import SOLAR_IE_IRRADIANCE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Irradiance_options__c';
        import SOLAR_IE_OTHER_IRRADIANCE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Other_Irradiance_Options__c';
        import SOLAR_IE_EPC_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_EPC_Provider__c';
        import SOLAR_IE_ROUTE_TO_MARKET_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Route_to_Market_Provider__c';
        import SOLAR_IE_CPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_CPI_Inflation__c';
        import SOLAR_IE_RPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_RPI_Inflation__c';
        import SOLAR_IE_INFLATION_NOTES_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Inflation_Notes__c';
        // #region IRELAND SOLAR "REVENUE" FIELD IMPORTS
            import SOLAR_IE_CONSULTANT_REV_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Consultant_Revenue_Forecast__c';
            import SOLAR_IE_SPECIFY_CONSULTANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Specify_Consultant_Revenue__c';
            /* import SOLAR_IE_AFRY_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_AFRY_Revenue__c';
            import SOLAR_IE_AURORA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Aurora_Revenue__c';
            import SOLAR_IE_BARINGA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Baringa_Revenue__c';
            import SOLAR_IE_CORNWALL_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Cornwall_Revenue__c';
            import SOLAR_IE_OTHER_CONSULTANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Other_Consultant_Revenue__c'; */
            import SOLAR_IE_ROUTE_TO_MARKET_REV_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Route_to_Market_Rev_Forecast__c';
            import SOLAR_IE_SPECIFY_ROUTE_TO_MARKET_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Specify_Route_to_Market_Rev__c';
            /* import SOLAR_IE_CFD_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_CfD_Revenue__c';
            import SOLAR_IE_CPPA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_CPPA_Revenue__c';
            import SOLAR_IE_MERCHANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Merchant_Revenue__c';
            import SOLAR_IE_OTHER_REVENUE_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Other_Route_Rev_Forecast__c';
            import SOLAR_IE_OTHER_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Solar_IE_Other_Revenue__c'; */
        // #endregion
    // #endregion

// #endregion

// #region ONSHORE WIND FIELD IMPORTS
    // #region GB ONSHORE WIND FIELD IMPORTS
        import ONSHORE_GB_IRR_MERCHANT_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_IRR_Merchant__c';
        import ONSHORE_GB_IRR_FIXED_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_IRR_Fixed__c';
        import ONSHORE_GB_CURTAILMENT_CONSULTANT_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Curtailment_Consultant__c';
        import ONSHORE_GB_OTHER_CURTAILMENT_CONSULTANT_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Other_Curtailment_Consultant__c';
        import ONSHORE_GB_CURTAILMENT_GRID_OPERATOR_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Curtailment_Grid_Operator__c';        
        import ONSHORE_GB_EPC_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_EPC_Provider__c';
        import ONSHORE_GB_ROUTE_TO_MARKET_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Route_to_Market_Provider__c';
        import ONSHORE_GB_CPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_CPI_Inflation__c';
        import ONSHORE_GB_RPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_RPI_Inflation__c';
        import ONSHORE_GB_INFLATION_NOTES_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Inflation_Notes__c';
        // #region GB ONSHORE "REVENUE" FIELD IMPORTS
            import ONSHORE_GB_CONSULTANT_REV_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Consultant_Revenue_Forecast__c';
            import ONSHORE_GB_SPECIFY_CONSULTANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Specify_Consultant_Revenue__c';
            /* import ONSHORE_GB_AFRY_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_AFRY_Revenue__c';
            import ONSHORE_GB_AURORA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Aurora_Revenue__c';
            import ONSHORE_GB_BARINGA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Baringa_Revenue__c';
            import ONSHORE_GB_CORNWALL_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Cornwall_Revenue__c';
            import ONSHORE_GB_OTHER_CONSULTANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Other_Consultant_Revenue__c'; */          import ONSHORE_GB_ROUTE_TO_MARKET_REV_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Route_to_Market_Rev_Forecast__c';
            import ONSHORE_GB_SPECIFY_ROUTE_TO_MARKET_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Specify_Route_to_Market_Rev__c';
            /* import ONSHORE_GB_CFD_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_CfD_Revenue__c';
            import ONSHORE_GB_CPPA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_CPPA_Revenue__c';
            import ONSHORE_GB_MERCHANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Merchant_Revenue__c';
            import ONSHORE_GB_OTHER_REVENUE_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Other_Route_Rev_Forecast__c';
            import ONSHORE_GB_OTHER_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_GB_Other_Revenue__c'; */
        // #endregion
    // #endregion

    // #region IRELAND ONSHORE WIND FIELD IMPORTS
        import ONSHORE_IE_IRR_MERCHANT_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_IRR_Merchant__c';
        import ONSHORE_IE_IRR_FIXED_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_IRR_Fixed__c';
        import ONSHORE_IE_CURTAILMENT_CONSULTANT_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Curtailment_Consultant__c';
        import ONSHORE_IE_OTHER_CURTAILMENT_CONSULTANT_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Other_Curtailment_Consultant__c';
        import ONSHORE_IE_CURTAILMENT_GRID_OPERATOR_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Curtailment_Grid_Operator__c';
        import ONSHORE_IE_EPC_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_EPC_Provider__c';
        import ONSHORE_IE_ROUTE_TO_MARKET_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Route_to_Market_Provider__c';
        import ONSHORE_IE_CPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_CPI_Inflation__c';
        import ONSHORE_IE_RPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_RPI_Inflation__c';
        import ONSHORE_IE_INFLATION_NOTES_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Inflation_Notes__c';
        // #region IRELAND ONSHORE "REVENUE" FIELD IMPORTS
            import ONSHORE_IE_CONSULTANT_REV_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Consultant_Revenue_Forecast__c';
            import ONSHORE_IE_SPECIFY_CONSULTANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Specify_Consultant_Revenue__c';
            /* import ONSHORE_IE_AFRY_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_AFRY_Revenue__c';
            import ONSHORE_IE_AURORA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Aurora_Revenue__c';
            import ONSHORE_IE_BARINGA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Baringa_Revenue__c';
            import ONSHORE_IE_CORNWALL_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Cornwall_Revenue__c';
            import ONSHORE_IE_OTHER_CONSULTANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Other_Consultant_Revenue__c'; */
            import ONSHORE_IE_ROUTE_TO_MARKET_REV_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Route_to_Market_Rev_Forecast__c';
            import ONSHORE_IE_SPECIFY_ROUTE_TO_MARKET_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Specify_Route_to_Market_Rev__c';
            /* import ONSHORE_IE_CFD_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_CfD_Revenue__c';
            import ONSHORE_IE_CPPA_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_CPPA_Revenue__c';
            import ONSHORE_IE_MERCHANT_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Merchant_Revenue__c';
            import ONSHORE_IE_OTHER_REVENUE_FORECAST_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Other_Route_Rev_Forecast__c';
            import ONSHORE_IE_OTHER_REVENUE_FIELD from '@salesforce/schema/Investor_Account__c.Onshore_IE_Other_Revenue__c'; */
        // #endregion
    // #endregion

// #endregion

// #region STORAGE FIELD IMPORTS
    // #region GB STORAGE FIELD IMPORTS
        import STORAGE_GB_IRR_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_IRR__c';
        import STORAGE_GB_DURATION_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Duration_Appetite__c';
        import STORAGE_GB_CYCLING_RATE_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Cycling_Rate__c';
        import STORAGE_GB_EPC_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_EPC_Provider__c';
        import STORAGE_GB_ROUTE_TO_MARKET_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_Route_to_Market_Provider_GB__c';
        import STORAGE_GB_BATTERY_MANUFACTURER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Battery_Manufacturer__c';
        import STORAGE_GB_OTHER_BATTERY_MANUFACTURER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Other_Battery_Manufacturer__c';
        import STORAGE_GB_BATTERY_AUGMENTATION_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Battery_Augmentation__c';
        import STORAGE_GB_CPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_CPI_Inflation__c';
        import STORAGE_GB_RPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_RPI_Inflation__c';
        import STORAGE_GB_INFLATION_NOTES_FIELD from '@salesforce/schema/Investor_Account__c.Storage_GB_Inflation_Notes__c';
    // #endregion
    // #region IRELAND STORAGE FIELD IMPORTS
        import STORAGE_IE_IRR_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_IRR__c';
        import STORAGE_IE_DURATION_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Duration_Appetite__c';
        import STORAGE_IE_CYCLING_RATE_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Cycling_Rate__c';
        import STORAGE_IE_EPC_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_EPC_Provider__c';
        import STORAGE_IE_ROUTE_TO_MARKET_PROVIDER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Route_to_Market_Provider__c';
        import STORAGE_IE_BATTERY_MANUFACTURER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Battery_Manufacturer__c';
        import STORAGE_IE_OTHER_BATTERY_MANUFACTURER_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Other_Battery_Manufacturer__c';
        import STORAGE_IE_BATTERY_AUGMENTATION_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Battery_Augmentation__c';
        import STORAGE_IE_CPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_CPI_Inflation__c';
        import STORAGE_IE_RPI_INFLATION_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_RPI_Inflation__c';
        import STORAGE_IE_INFLATION_NOTES_FIELD from '@salesforce/schema/Investor_Account__c.Storage_IE_Inflation_Notes__c';
    // #endregion
    // #endregion

// #endregion

export default class ModelingAssumptions extends LightningElement {
    @api recordId;
     
// #region Boolean Page Variables
    viewGB = false;
    viewIreland = false;

    solarDisplay=false;
    onshoreWindDisplay=false;
    storageDisplay=false;

    viewGBSolar = false;
    editGBSolar = false;
    viewIrelandSolar = false;
    editIrelandSolar = false;

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
    // #region Solar Field Variables
        // #region Solar GB Field Variables
            solarGBIRRMerchantField = SOLAR_GB_IRR_MERCHANT_FIELD;
            solarGBIRRFixedField = SOLAR_GB_IRR_FIXED_FIELD;
            solarGBCPIInflationField = SOLAR_GB_CPI_INFLATION_FIELD;
            solarGBRPIInflationField = SOLAR_GB_RPI_INFLATION_FIELD;
            solarGBInflationNotesField = SOLAR_GB_INFLATION_NOTES_FIELD;
            solarGBCurtailmentConsultantField = SOLAR_GB_CURTAILMENT_CONSULTANT_FIELD;
            solarGBOtherCurtailmentConsultantField = SOLAR_GB_OTHER_CURTAILMENT_CONSULTANT_FIELD;
            solarGBCurtalimentGridOperatorField = SOLAR_GB_CURTAILMENT_GRID_OPERATOR_FIELD;
            solarGBAbove50MWACDCRatioField = SOLAR_GB_ABOVE50MW_ACDC_RATIO_FIELD;
            solarGBSub50MWACDCRatioField = SOLAR_GB_SUB50MW_ACDC_RATIO_FIELD;
            solarGBGCRRatioField = SOLAR_GB_GCR_RATIO_FIELD;
            solarGBTypeOfInverterField = SOLAR_GB_TYPE_OF_INVERTER_FIELD;
            solarGBInverterSizeField = SOLAR_GB_INVERTER_SIZE_FIELD;
            solarGBModuleSizeField = SOLAR_GB_MODULE_SIZE_FIELD;
            solarGBPitchField = SOLAR_GB_PITCH_FIELD;
            solarGBTiltField = SOLAR_GB_TILT_FIELD;
            solarGBIrradianceField = SOLAR_GB_IRRADIANCE_FIELD;
            solarGBOtherIrradianceField = SOLAR_GB_OTHER_IRRADIANCE_FIELD;
            solarGBEPCProviderField = SOLAR_GB_EPC_PROVIDER_FIELD;
            solarGBRouteToMarketProviderField = SOLAR_GB_ROUTE_TO_MARKET_PROVIDER_FIELD;
            // #region Solar "Revenue" Field Variables
                solarGBConsultantRevForecastField = SOLAR_GB_CONSULTANT_REV_FORECAST_FIELD;
                solarGBSpecifyConsultantRevenueField = SOLAR_GB_SPECIFY_CONSULTANT_REVENUE_FIELD;
                /*solarGBAFRYRevenueField = SOLAR_GB_AFRY_REVENUE_FIELD;
                solarGBAuroraRevenueField = SOLAR_GB_AURORA_REVENUE_FIELD;
                solarGBBaringaRevenueField = SOLAR_GB_BARINGA_REVENUE_FIELD;
                solarGBCornwallRevenueField = SOLAR_GB_CORNWALL_REVENUE_FIELD;
                solarGBOtherConsultantRevenueField = SOLAR_GB_OTHER_CONSULTANT_REVENUE_FIELD;*/
                solarGBRouteToMarketRevForecastField =SOLAR_GB_ROUTE_TO_MARKET_REV_FORECAST_FIELD;
                solarGBSpecifyRouteToMarketRevenueField = SOLAR_GB_SPECIFY_ROUTE_TO_MARKET_REVENUE_FIELD;
                /*solarGBCfDRevenueField = SOLAR_GB_CFD_REVENUE_FIELD;
                solarGBCPPARevenueField = SOLAR_GB_CPPA_REVENUE_FIELD;
                solarGBMerchantRevenueField = SOLAR_GB_MERCHANT_REVENUE_FIELD;
                solarGBOtherRevenueForecastField = SOLAR_GB_OTHER_REVENUE_FORECAST_FIELD;
                solarGBOtherRevenueField = SOLAR_GB_OTHER_REVENUE_FIELD;*/
            // #endregion
        // #endregion

        // #region Solar Ireland Field Variables
            solarIEIRRMerchantField = SOLAR_IE_IRR_MERCHANT_FIELD;
            solarIEIRRFixedField = SOLAR_IE_IRR_FIXED_FIELD;
            solarIECPIInflationField = SOLAR_IE_CPI_INFLATION_FIELD;
            solarIERPIInflationField = SOLAR_IE_RPI_INFLATION_FIELD;
            solarIEInflationNotesField = SOLAR_IE_INFLATION_NOTES_FIELD;
            solarIECurtailmentConsultantField = SOLAR_IE_CURTAILMENT_CONSULTANT_FIELD;
            solarIEOtherCurtailmentConsultantField = SOLAR_IE_OTHER_CURTAILMENT_CONSULTANT_FIELD;
            solarIECurtalimentGridOperatorField = SOLAR_IE_CURTAILMENT_GRID_OPERATOR_FIELD;
            solarIEAbove50MWACDCRatioField = SOLAR_IE_ABOVE50MW_ACDC_RATIO_FIELD
            solarIESub50MWACDCRatioField = SOLAR_IE_SUB50MW_ACDC_RATIO_FIELD;
            solarIEGCRRatioField = SOLAR_IE_GCR_RATIO_FIELD;
            solarIETypeOfInverterField = SOLAR_IE_TYPE_OF_INVERTER_FIELD;
            solarIEInverterSizeField = SOLAR_IE_INVERTER_SIZE_FIELD;
            solarIEModuleSizeField = SOLAR_IE_MODULE_SIZE_FIELD;
            solarIEPitchField = SOLAR_IE_PITCH_FIELD;
            solarIETiltField = SOLAR_IE_TILT_FIELD;
            solarIEIrradianceField = SOLAR_IE_IRRADIANCE_FIELD;
            solarIEOtherIrradianceField = SOLAR_IE_OTHER_IRRADIANCE_FIELD;
            solarIEEPCProviderField = SOLAR_IE_EPC_PROVIDER_FIELD;
            solarIERouteToMarketProviderField = SOLAR_IE_ROUTE_TO_MARKET_PROVIDER_FIELD;
            // #region Solar Ireland "Revenue" Field Variables
                solarIEConsultantRevForecastField = SOLAR_IE_CONSULTANT_REV_FORECAST_FIELD;
                solarIESpecifyConsultantRevenueField = SOLAR_IE_SPECIFY_CONSULTANT_REVENUE_FIELD;
                /*solarIEAFRYRevenueField = SOLAR_IE_AFRY_REVENUE_FIELD;
                solarIEAuroraRevenueField = SOLAR_IE_AURORA_REVENUE_FIELD;
                solarIEBaringaRevenueField = SOLAR_IE_BARINGA_REVENUE_FIELD;
                solarIECornwallRevenueField = SOLAR_IE_CORNWALL_REVENUE_FIELD;
                solarIEOtherConsultantRevenueField = SOLAR_IE_OTHER_CONSULTANT_REVENUE_FIELD;
                */solarIERouteToMarketRevForecastField =SOLAR_IE_ROUTE_TO_MARKET_REV_FORECAST_FIELD;
                solarIESpecifyRouteToMarketRevenueField = SOLAR_IE_SPECIFY_ROUTE_TO_MARKET_REVENUE_FIELD;
                /*solarIECfDRevenueField = SOLAR_IE_CFD_REVENUE_FIELD;
                solarIECPPARevenueField = SOLAR_IE_CPPA_REVENUE_FIELD;
                solarIEMerchantRevenueField = SOLAR_IE_MERCHANT_REVENUE_FIELD;
                solarIEOtherRevenueForecastField = SOLAR_IE_OTHER_REVENUE_FORECAST_FIELD;
                solarIEOtherRevenueField = SOLAR_IE_OTHER_REVENUE_FIELD;*/
            // #endregion
        // #endregion

    // #endregion

    // #region Onshore Wind Field Variables
        // #region Onshore Wind GB Field Variables
            onshoreGBIRRMerchantField = ONSHORE_GB_IRR_MERCHANT_FIELD;
            onshoreGBIRRFixedField = ONSHORE_GB_IRR_FIXED_FIELD;
            onshoreGBCPIInflationField = ONSHORE_GB_CPI_INFLATION_FIELD;
            onshoreGBRPIInflationField = ONSHORE_GB_RPI_INFLATION_FIELD;
            onshoreGBInflationNotesField = ONSHORE_GB_INFLATION_NOTES_FIELD;
            onshoreGBCurtailmentConsultantField = ONSHORE_GB_CURTAILMENT_CONSULTANT_FIELD;
            onshoreGBOtherCurtailmentConsultantField = ONSHORE_GB_OTHER_CURTAILMENT_CONSULTANT_FIELD;
            onshoreGBCurtalimentGridOperatorField = ONSHORE_GB_CURTAILMENT_GRID_OPERATOR_FIELD;
            onshoreGBEPCProviderField = ONSHORE_GB_EPC_PROVIDER_FIELD;
            onshoreGBRouteToMarketProviderField = ONSHORE_GB_ROUTE_TO_MARKET_PROVIDER_FIELD;
            // #region Onshore Wind GB "Revenue" Field Variables
                onshoreGBConsultantRevForecastField = ONSHORE_GB_CONSULTANT_REV_FORECAST_FIELD;
                onshoreGBSpecifyConsultantRevenueField = ONSHORE_GB_SPECIFY_CONSULTANT_REVENUE_FIELD;
                /*onshoreGBAFRYRevenueField = ONSHORE_GB_AFRY_REVENUE_FIELD;
                onshoreGBAuroraRevenueField = ONSHORE_GB_AURORA_REVENUE_FIELD;
                onshoreGBBaringaRevenueField = ONSHORE_GB_BARINGA_REVENUE_FIELD;
                onshoreGBCornwallRevenueField = ONSHORE_GB_CORNWALL_REVENUE_FIELD;
                onshoreGBOtherConsultantRevenueField = ONSHORE_GB_OTHER_CONSULTANT_REVENUE_FIELD;*/
                onshoreGBRouteToMarketRevForecastField =ONSHORE_GB_ROUTE_TO_MARKET_REV_FORECAST_FIELD;
                onshoreGBSpecifyRouteToMarketRevenueField = ONSHORE_GB_SPECIFY_ROUTE_TO_MARKET_REVENUE_FIELD;
                /*onshoreGBCfDRevenueField = ONSHORE_GB_CFD_REVENUE_FIELD;
                onshoreGBCPPARevenueField = ONSHORE_GB_CPPA_REVENUE_FIELD;
                onshoreGBMerchantRevenueField = ONSHORE_GB_MERCHANT_REVENUE_FIELD;
                onshoreGBOtherRevenueForecastField = ONSHORE_GB_OTHER_REVENUE_FORECAST_FIELD;
                onshoreGBOtherRevenueField = ONSHORE_GB_OTHER_REVENUE_FIELD;*/
            // #endregion
        // #endregion

        // #region Onshore Wind Ireland Field Variables
            onshoreIEIRRMerchantField = ONSHORE_IE_IRR_MERCHANT_FIELD;
            onshoreIEIRRFixedField = ONSHORE_IE_IRR_FIXED_FIELD;
            onshoreIECPIInflationField = ONSHORE_IE_CPI_INFLATION_FIELD;
            onshoreIERPIInflationField = ONSHORE_IE_RPI_INFLATION_FIELD;
            onshoreIEInflationNotesField = ONSHORE_IE_INFLATION_NOTES_FIELD;
            onshoreIECurtailmentConsultantField = ONSHORE_IE_CURTAILMENT_CONSULTANT_FIELD;
            onshoreIEOtherCurtailmentConsultantField = ONSHORE_IE_OTHER_CURTAILMENT_CONSULTANT_FIELD;
            onshoreIECurtalimentGridOperatorField = ONSHORE_IE_CURTAILMENT_GRID_OPERATOR_FIELD;
            onshoreIEEPCProviderField = ONSHORE_IE_EPC_PROVIDER_FIELD;
            onshoreIERouteToMarketProviderField = ONSHORE_IE_ROUTE_TO_MARKET_PROVIDER_FIELD;
            // #region Onshore Wind Ireland "Revenue" Field Variables
                onshoreIEConsultantRevForecastField = ONSHORE_IE_CONSULTANT_REV_FORECAST_FIELD;
                onshoreIESpecifyConsultantRevenueField = ONSHORE_IE_SPECIFY_CONSULTANT_REVENUE_FIELD;
                /*onshoreIEAFRYRevenueField = ONSHORE_IE_AFRY_REVENUE_FIELD;
                onshoreIEAuroraRevenueField = ONSHORE_IE_AURORA_REVENUE_FIELD;
                onshoreIEBaringaRevenueField = ONSHORE_IE_BARINGA_REVENUE_FIELD;
                onshoreIECornwallRevenueField = ONSHORE_IE_CORNWALL_REVENUE_FIELD;
                onshoreIEOtherConsultantRevenueField = ONSHORE_IE_OTHER_CONSULTANT_REVENUE_FIELD;*/
                onshoreIERouteToMarketRevForecastField =ONSHORE_IE_ROUTE_TO_MARKET_REV_FORECAST_FIELD;
                onshoreIESpecifyRouteToMarketRevenueField = ONSHORE_IE_SPECIFY_ROUTE_TO_MARKET_REVENUE_FIELD;
                /*onshoreIECfDRevenueField = ONSHORE_IE_CFD_REVENUE_FIELD;
                onshoreIECPPARevenueField = ONSHORE_IE_CPPA_REVENUE_FIELD;
                onshoreIEMerchantRevenueField = ONSHORE_IE_MERCHANT_REVENUE_FIELD;
                onshoreIEOtherRevenueForecastField = ONSHORE_IE_OTHER_REVENUE_FORECAST_FIELD;
                onshoreIEOtherRevenueField = ONSHORE_IE_OTHER_REVENUE_FIELD;*/
            // #endregion
        // #endregion

    // #endregion

    // #region Storage Field Variables
        // #region Storage GB Field Variables
            storageGBIRRField = STORAGE_GB_IRR_FIELD;
            storageGBCPIInflationField = STORAGE_GB_CPI_INFLATION_FIELD;
            storageGBRPIInflationField = STORAGE_GB_RPI_INFLATION_FIELD;
            storageGBInflationNotesField = STORAGE_GB_INFLATION_NOTES_FIELD;
            storageGBDurationField = STORAGE_GB_DURATION_FIELD;
            storageGBCyclingRateField = STORAGE_GB_CYCLING_RATE_FIELD;
            storageGBEPCProviderField = STORAGE_GB_EPC_PROVIDER_FIELD;
            storageGBRouteToMarketProviderField = STORAGE_GB_ROUTE_TO_MARKET_PROVIDER_FIELD;
            storageGBBatteryManufacturerField = STORAGE_GB_BATTERY_MANUFACTURER_FIELD;
            storageGBOtherBatteryManufacturerField = STORAGE_GB_OTHER_BATTERY_MANUFACTURER_FIELD;
            storageGBBatteryAugmentationField = STORAGE_GB_BATTERY_AUGMENTATION_FIELD;
        // #endregion
        // #region Storage Ireland Field Variables
            storageIEIRRField = STORAGE_IE_IRR_FIELD;
            storageIECPIInflationField = STORAGE_IE_CPI_INFLATION_FIELD;
            storageIERPIInflationField = STORAGE_IE_RPI_INFLATION_FIELD;
            storageIEInflationNotesField = STORAGE_IE_INFLATION_NOTES_FIELD;
            storageIEDurationField = STORAGE_IE_DURATION_FIELD;
            storageIECyclingRateField = STORAGE_IE_CYCLING_RATE_FIELD;
            storageIEEPCProviderField = STORAGE_IE_EPC_PROVIDER_FIELD;
            storageIERouteToMarketProviderField = STORAGE_IE_ROUTE_TO_MARKET_PROVIDER_FIELD;
            storageIEBatteryManufacturerField = STORAGE_IE_BATTERY_MANUFACTURER_FIELD;
            storageIEOtherBatteryManufacturerField = STORAGE_IE_OTHER_BATTERY_MANUFACTURER_FIELD;
            storageIEBatteryAugmentationField = STORAGE_IE_BATTERY_AUGMENTATION_FIELD;
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

    handleSolarDisplay() {
        this.solarDisplay = !this.solarDisplay;

        setTimeout(() => {
            this.activeSections = ["Header", "Solar", "Solar Revenue", "Onshore", "Onshore Revenue", "Storage"];
        }, 50
        );
    }

    handleOnshoreWindDisplay() {
        this.onshoreWindDisplay = !this.onshoreWindDisplay;

        setTimeout(() => {
            this.activeSections = ["Header", "Solar", "Solar Revenue", "Onshore", "Onshore Revenue", "Storage"];
        }, 50
        );
    }

    handleStorageDisplay() {
        this.storageDisplay = !this.storageDisplay;

        setTimeout(() => {
            this.activeSections = ["Header", "Solar", "Solar Revenue", "Onshore", "Onshore Revenue", "Storage"];
        }, 50
        );
    }
// #endregion

// #region Edit Button Handlers
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
        this.editIrelandStorage = false;
        this.viewIrelandStorage = true;
    }

// #endregion
    
}