/*
 * File: app/store/ParkingEngineStore.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.ParkingEngineStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.PESpace'
    ],

    config: {
        autoLoad: false,
        model: 'MyApp.model.PESpace',
        storeId: 'ParkingEngineStore',
        proxy: {
            type: 'ajax',
            url: 'http://localhost:8080/parking-engine/PESpace/all',
            reader: {
                type: 'json'
            }
        },
        listeners: [
            {
                fn: 'onJsonstoreLoad',
                event: 'load'
            }
        ]
    },

    onJsonstoreLoad: function(store, records, successful, operation, eOpts) {


    }

});