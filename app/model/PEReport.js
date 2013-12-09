/*
 * File: app/model/PEReport.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.model.PEReport', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'startHour'
            },
            {
                name: 'startMinute'
            },
            {
                name: 'dayOfWeek'
            },
            {
                name: 'minEndHour'
            },
            {
                name: 'minEndMinute'
            },
            {
                name: 'maxEndHour'
            },
            {
                name: 'maxEndMinute'
            },
            {
                name: 'totalCost'
            },
            {
                name: 'totalTime'
            },
            {
                name: 'startTime',
                type: 'date'
            },
            {
                name: 'mode'
            },
            {
                name: 'endTime',
                type: 'date'
            }
        ]
    },

    constructor: function(startTime) {
        this.callParent();
        if (startTime) {
            this.set('startTime', startTime);
            this.set('startHour', startTime.getHours());
            this.set('startMinute', startTime.getMinutes());
            this.set('dayOfWeek', startTime.getDay());
        }
        return this;
    },

    addToTotalCost: function(incrementTotalCost) {
        var totalCostDTO;
        if(this.get('totalCost')){
             totalCostDTO = this.get('totalCost') + incrementTotalCost;
        } else {
             totalCostDTO = incrementTotalCost;
        }
        this.set('totalCost', totalCostDTO);

    },

    getStartTime: function() {
        return this.get('startTime');
        //return this.convertToDateTime(this.get('startHour')+ ":"+this.get('startMinute'));
    },

    getMinEndTime: function() {
        var minEndHour = this.get('minEndHour') - 0;
        var minEndMin = this.get('minEndMinute')- 0;

        if(minEndHour===0 && minEndMin===0){
            return 0;
        }

        return this.get('endTime');
        //return this.convertToDateTime(this.get('minEndHour')+ ":"+this.get('minEndMinute'));
    },

    convertToDateTime: function(timeString) {
        var timeRegex = /(\d\d?):(\d\d)/;
        var today = this.get('startTime');
        var match = timeRegex.exec(timeString);
        if(!match) return null;
        var hours = match[1]-0;
        var minutes =  match[2]-0;

        //For All Times:
        if((hours===0)&&(minutes===0)){
            return 0;
        }


        return new Date(today.getFullYear(), today.getMonth(),today.getDate(),hours,minutes);
    }

});