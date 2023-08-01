export const GlobalConstants = {
    Canada:'CA',
    USA: 'US',
    LANG_FR: "fr",
    MULTIPLY: " x ",
    SPACE: " ",
    DOT: ".",
    COMMA: ",",
    KILOGRAM: "kg",
    LB_TO_KG: 0.453592,
    IN_TO_CM: 2.54,
    METRIC: "metric",
    IMPERIAL: "imperial",
    CLASSNAMEPREFIX: 'ship-snackbar-',
    MAX_PREFERENCES: 10,
    THREE_DECIMAL_VALUE: 3,
    TWO_DECIMAL_VALUE: 2,
    WEIGHT_DIGITS_INFO: "1.0-3",
    ZERO_PACKAGES_REMAINING: 0,// TODO: We need to remove this when we limit the add packages from prefences to 10
    SELECTED_CLASS: 'ship-ui-selected-address',
    WARNING_CLASS: 'ship-ui-warning',
    OVERSIZED_WARNING: 'SHIPUI.OVERSIZED_WARNING',
    DEFAULT: 'default',
    CLOSE: 'close',
    ABANDON:'ABANDON',
    PHONE_NUM_REGEX: "(^\\(\\d{3}\\)\\s\\d{3}-\\d{4}\\s?)((ext|poste)\\s\\d{0,5})?$",
    EMAIL_ADDRESS_REGEX: "^['_A-Za-z0-9-+]+(\\.['_A-Za-z0-9-+]+)*@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z]{2,}$",
    EMAIL: 'email',
    REFERENCE_NUMBER: 'referenceNumber',
    COST_CENTRE: 'costCentre',
    SHIPMENT_FORM_ORDERING: ['sender', 'destination', 'packageDetails', 'products', 'customsDetails'],
   RETURN_TO_CART_MODAL:{
       MODAL_NAME: 'RETURN_TO_CART',
       MODAL_HEADER: 'SHIPUI.SHIPMENT.MODAL.RETURN_TO_CART.HEADER',
       MODAL_BODY: 'SHIPUI.SHIPMENT.MODAL.RETURN_TO_CART.BODY',
       MODAL_SUBMIT_BUTTON: 'SHIPUI.SHIPMENT.MODAL.RETURN_TO_CART.SUBMIT_BUTTON',
       MODAL_CANCEL_BUTTON: 'SHIPUI.SHIPMENT.MODAL.RETURN_TO_CART.CANCEL_BUTTON',
       MODAL_NAVIGATION_URL: '/history',
       MODAL_SOURCE_ID: 'ship-ui-cancel-return-to-order'
    },
    BUSINESS_PROFILE_MODAL:{
       MODAL_NAME: 'BUSINESS_PROFILE',
       MODAL_HEADER: 'SHIPUI.SHIPMENT.MODAL.BUSINESS_PROFILE.HEADER',
       MODAL_BODY: 'SHIPUI.SHIPMENT.MODAL.BUSINESS_PROFILE.BODY',
       MODAL_SUBMIT_BUTTON: 'SHIPUI.SHIPMENT.MODAL.BUSINESS_PROFILE.SUBMIT_BUTTON',
       MODAL_CANCEL_BUTTON: 'SHIPUI.SHIPMENT.MODAL.BUSINESS_PROFILE.CANCEL_BUTTON',
       MODAL_NAVIGATION_URL: '/preferences',
       MODAL_SOURCE_ID: 'ship-ui-manage-business-profile'
    },
   EDIT_PANEL_MODAL:{
       MODAL_NAME: 'EDIT_PANEL',
       MODAL_HEADER: 'SHIPUI.SHIPMENT.MODAL.EDIT_PANEL.HEADER',
       MODAL_BODY: 'SHIPUI.SHIPMENT.MODAL.EDIT_PANEL.BODY',
       MODAL_SUBMIT_BUTTON: 'SHIPUI.SHIPMENT.MODAL.EDIT_PANEL.SUBMIT_BUTTON',
       MODAL_CANCEL_BUTTON: 'SHIPUI.SHIPMENT.MODAL.EDIT_PANEL.CANCEL_BUTTON',
       MODAL_SOURCE_ID: 'ship-ui-panel-title'
   },
   COV_AMOUNT_PANEL_MODAL:{
       MODAL_NAME: 'COV_AMOUNT_PANEL',
       MODAL_HEADER: 'SHIPUI.SHIPMENT.MODAL.COV_AMOUNT_PANEL.HEADER',
       MODAL_BODY: 'SHIPUI.SHIPMENT.MODAL.COV_AMOUNT_PANEL.BODY',
       MODAL_SUBMIT_BUTTON: 'SHIPUI.SHIPMENT.MODAL.COV_AMOUNT_PANEL.SUBMIT_BUTTON',
       MODAL_CANCEL_BUTTON: 'SHIPUI.SHIPMENT.MODAL.COV_AMOUNT_PANEL.CANCEL_BUTTON',
       MODAL_SOURCE_ID: 'ship-ui-panel-title'
   },
   DELETE_CUSTOM_ITEM_MODAL:{
       MODAL_NAME: 'DELETE_CUSTOM_ITEM_PANEL',
       MODAL_HEADER: 'SHIPUI.SHIPMENT.MODAL.DELETE_CUSTOM_ITEM_PANEL.HEADER',
       MODAL_BODY: 'SHIPUI.SHIPMENT.MODAL.DELETE_CUSTOM_ITEM_PANEL.BODY',
       MODAL_SUBMIT_BUTTON: 'SHIPUI.SHIPMENT.MODAL.DELETE_CUSTOM_ITEM_PANEL.SUBMIT_BUTTON',
       MODAL_CANCEL_BUTTON: 'SHIPUI.SHIPMENT.MODAL.DELETE_CUSTOM_ITEM_PANEL.CANCEL_BUTTON',
       MODAL_SOURCE_ID: 'ship-ui-panel-title'
   },
    CONFIRM_PICKUP_TIME_MODAL: {
       MODAL_NAME: 'CONFIRM',
       MODAL_HEADER: 'SHIPUI.SHIPMENT.PICKUP.MODAL.CONFIRM.HEADER',
       MODAL_BODY: 'SHIPUI.SHIPMENT.PICKUP.MODAL.CONFIRM.BODY',
       MODAL_SUBMIT_BUTTON: 'SHIPUI.SHIPMENT.PICKUP.MODAL.CONFIRM.SUBMIT_BUTTON',
       MODAL_CANCEL_BUTTON: 'SHIPUI.SHIPMENT.PICKUP.MODAL.CONFIRM.CANCEL_BUTTON',
       MODAL_SOURCE_ID: 'earliest-pickup'
    },
    CANCEL_PICKUP_TIME_MODAL: {
       MODAL_NAME: 'CANCEL',
       MODAL_HEADER: 'SHIPUI.SHIPMENT.PICKUP.MODAL.CANCEL.HEADER',
       MODAL_BODY: 'SHIPUI.SHIPMENT.PICKUP.MODAL.CANCEL.BODY',
       MODAL_SUBMIT_BUTTON: 'SHIPUI.SHIPMENT.PICKUP.MODAL.CANCEL.SUBMIT_BUTTON',
       MODAL_CANCEL_BUTTON: 'SHIPUI.SHIPMENT.PICKUP.MODAL.CANCEL.CANCEL_BUTTON',
       MODAL_SOURCE_ID:  'earliest-pickup'
    },
    COUNTRYCODE: {
       CANADA: 'CA',
       USA: 'US',
       INTERNATIONAL: 'INT'
    },
    REQUIREDFIELDS: {
    CA: {
       PROVSTATECODE: true,
       POSTALZIPCODE: true,
       CONTACTPHONE: false
    },
    US: {
       PROVSTATECODE: true,
       POSTALZIPCODE: true,
       CONTACTPHONE: true
    },
    INT: {
       PROVSTATECODE: false,
       POSTALZIPCODE: false,
       CONTACTPHONE: true
    }
   },
   RESPONSETYPE:{
       SUCCESS:'success',
       ERROR:'error'
   },
   ALTTEXT:{
       PRE: 'SHIPUI.ALT.',
       POST: 'ICON'
   },
   ERROR_MSG: {
      INVALID_VALUE_MSG_INT:'SHIPUI.DIMENSION.INVALID_VALUE_INT',  // Inline error message for value > 150 cm / 59 in or value <=0  (International)
      INVALID_VALUE_MSG_DOM_USA:'SHIPUI.DIMENSION.INVALID_VALUE'   // Inline error message for value > 200 cm / 78.7 in or value <=0  (domestic/USA)
   },
   DIRECTIVES:{
    WEIGHT_MAXVAL_MET: 30,        //  Weight can't be more that 30 kg.
    WEIGHT_MAXVAL_IMP: 66,        //  Weight can't be more that 66 lb.
    WEIGHT_MAXVAL_DOCUMENT_MET: 1.36,        //  Weight can't be more that 1.36 kg.
    WEIGHT_MAXVAL_DOCUMENT_IMP: 3,        //  Weight can't be more that 3 lb.
    MAX_GIRTH_MET: 300,           // Maximum girth 300 cm or 3 meter ( Length + (2 * width))
    MAX_GIRTH_IMP: 118,           // Maximum girth 118 in. ( Length + (2 * width))
    FIELD_MAXVAL_MET: 200,        // Individual field's value can't be more that 200 cm.
    FIELD_MAXVAL_IMP: 78.7,       // Individual field's value can't be more that 78.7 in.
    LONGEST_SIDE_MET: 100,        // Oversized: Max length for one side in Metric
    LONGEST_SIDE_IMP: 39.4,       // Oversized: Max length for one side in Imperial
    SECOND_LONGEST_SIDE_MET: 76,  // Oversized: Second longest max length metrics
    SECOND_LONGEST_SIDE_IMP: 30,  // Oversized: Second longest max length imperial
    INPUT_FIELD_MIN_VAL: 0.01,    // minimum value for any input field ( 0.01 )
    INPUT_FIELD_MIN_WEIGHT_VAL_MET: 0.001,    // minimum value for any input field ( 0.001 )
    INPUT_FIELD_MIN_WEIGHT_VAL_IMP: 0.002,    // minimum value for any input field ( 0.002 )
    FIELD_MAXVAL_MET_INT: 150,    // Individual field's value can't be more that 150 cm.(International destination)
    FIELD_MAXVAL_IMP_INT: 59,     // Individual field's value can't be more that 59 in.(International destination)
    MAX_UNIT_VALUE: 99999.99
   },
   USER_APP: {
      SHIPPING_MANAGER: "SHIPMANAGER"
   },
   BREAKPOINTS: {
    MOBILE_HEIGHT_IPHONE : 667, // Max height of iphone(6/7/8) screen size
    MOBILE_HEIGHT_IPHONE_PLUS : 736 //Max height of iphone(6/7/8)plus screen size
   }
 }
 