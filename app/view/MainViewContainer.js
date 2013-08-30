/*
 * File: app/view/MainViewContainer.js
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

Ext.define('MyApp.view.MainViewContainer', {
    extend: 'Ext.Container',

    config: {
        id: 'MainViewContainer',
        ui: '',
        autoDestroy: false,
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                height: 40,
                left: '',
                title: 'Valet Parking',
                layout: {
                    align: 'start',
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        action: 'backButtonEvent',
                        hidden: true,
                        id: 'BackButton',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'button',
                        action: 'daySelectorButtonEvent',
                        id: 'DaySelectorButton',
                        iconCls: 'compose',
                        iconMask: true
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'MapContainer',
                ui: '',
                width: 1000,
                autoDestroy: false,
                hideOnMaskTap: false,
                layout: {
                    type: 'card'
                },
                modal: false,
                items: [
                    {
                        xtype: 'sliderfield',
                        docked: 'top',
                        height: 52,
                        id: 'TimeSlider',
                        padding: '',
                        style: 'background-color:black',
                        styleHtmlContent: true,
                        label: '',
                        labelWrap: true,
                        value: [
                            0
                        ],
                        maxValue: 1415
                    },
                    {
                        xtype: 'map',
                        docked: 'bottom',
                        height: 999,
                        id: 'MyMap',
                        itemId: 'mymap',
                        width: 1071,
                        geo: 'var geo = Ext.create(\'Ext.util.Geolocation\', {\n    autoUpdate: false,\n    listeners: {\n        locationupdate: function(geo) {\n            alert(\'New latitude: \' + geo.getLatitude());\n        },\n        locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {\n            if(bTimeout){\n                alert(\'Timeout occurred.\');\n            } else {\n                alert(\'Error occurred.\');\n            }\n        }\n    }\n});\n\ngeo.updateLocation();'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                height: 40,
                id: 'BottomToolBar',
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        action: 'currentLocationButton',
                        height: 37,
                        width: 155,
                        iconCls: 'locate',
                        iconMask: true,
                        text: 'Current Location'
                    },
                    {
                        xtype: 'button',
                        action: 'searchLocationButtonEvent',
                        height: 37,
                        width: 155,
                        iconCls: 'search',
                        iconMask: true,
                        text: 'Search Location'
                    }
                ]
            },
            {
                xtype: 'panel',
                action: 'addressListEvent',
                border: '',
                html: '',
                id: 'SearchLocationPanel',
                hideOnMaskTap: false,
                modal: false,
                items: [
                    {
                        xtype: 'searchfield',
                        action: 'searchLocationFieldEvent',
                        border: '',
                        id: 'SearchLocationField',
                        itemId: 'mysearchfield',
                        label: '',
                        labelWidth: '0%',
                        name: '',
                        autoComplete: true
                    },
                    {
                        xtype: 'list',
                        action: 'addressListEvent',
                        height: 753,
                        id: 'AddressList',
                        itemId: 'mylist',
                        width: 899,
                        itemTpl: [
                            '<div style=\'margin-left:10px;\'>',
                            '    {formatted_address},{lng},{lat}',
                            '</div>'
                        ],
                        store: 'MyDirectStore'
                    }
                ]
            },
            {
                xtype: 'panel',
                floatingCls: '200',
                height: 105,
                hidden: true,
                id: 'DaySelectorPanel',
                itemId: 'mypanel1',
                maxHeight: 100,
                maxWidth: 400,
                padding: '',
                width: 210,
                hideOnMaskTap: true,
                items: [
                    {
                        xtype: 'checkboxfield',
                        action: 'weekDayCheckBox',
                        docked: 'top',
                        height: 45,
                        id: 'Weekday',
                        width: 198,
                        label: 'Weekdays',
                        labelWidth: '50%'
                    },
                    {
                        xtype: 'checkboxfield',
                        action: 'weekEndCheckBox',
                        docked: 'bottom',
                        height: 45,
                        id: 'Weekend',
                        width: 198,
                        label: 'Weekend',
                        labelWidth: '50%'
                    }
                ]
            },
            {
                xtype: 'panel',
                docked: 'top',
                height: 130,
                hidden: true,
                id: 'TimePickerPanel',
                padding: 0,
                width: 145,
                autoDestroy: false,
                items: [
                    {
                        xtype: 'picker',
                        height: 124,
                        hideAnimation: {
                            type: 'popIn',
                            duration: 200
                        },
                        id: 'TimePicker',
                        itemId: 'mypicker',
                        maxHeight: 124,
                        maxWidth: 140,
                        padding: 0,
                        width: 135,
                        scrollable: false,
                        stretchX: true,
                        slots: [
                            {
                                xtype: 'pickerslot',
                                id: 'HourPickerSlot',
                                autoDestroy: false,
                                scrollToTopOnRefresh: false,
                                name: 'HourPickerSlot',
                                title: 'HourPickerSlot'
                            },
                            {
                                xtype: 'pickerslot',
                                id: 'MinutePickerSlot',
                                autoDestroy: false,
                                scrollToTopOnRefresh: false,
                                name: 'MinutePickerSlot',
                                title: 'MinutePickerSlot'
                            }
                        ],
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    component.setCancelButton(false);
                                    component.setDoneButton(false);

                                },
                                event: 'painted'
                            },
                            {
                                fn: function(component, eOpts) {

                                    var hourPickerSlot = Ext.getCmp('HourPickerSlot');
                                    var minutePickerSlot = Ext.getCmp('MinutePickerSlot');
                                    var hours = getHours();
                                    var minutes = getMinutes();

                                    if(!hourPickerSlot.getData()){
                                        hourPickerSlot.setData(hours);
                                    } 

                                    if(!minutePickerSlot.getData()){
                                        minutePickerSlot.setData(minutes);
                                    } 

                                    function getHours(){
                                        var chours = [];
                                        chours = createTimeArray(24);
                                        return chours;
                                    }

                                    function getMinutes(){
                                        var cminutes = [];
                                        cminutes = createTimeArray(60);
                                        return cminutes;
                                    }

                                    function createTimeArray(totalNumber){
                                        var timeArray = [];    

                                        for(var i=0; i< totalNumber; i++){
                                            if(i<10){
                                                timeArray.push(new timeObject('0'+ i, i));
                                            } else {
                                                timeArray.push(new timeObject(i,i));
                                            }   
                                        }
                                        return timeArray;
                                    }


                                    function timeObject(text,value) {
                                        this.text = text;
                                        this.value = value;
                                    }

                                },
                                event: 'initialize'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onSearchLocationFieldKeyup',
                buffer: 1500,
                event: 'keyup',
                delegate: '#SearchLocationField'
            },
            {
                fn: 'onDaySelectorPanelHide',
                event: 'hide',
                delegate: '#DaySelectorPanel'
            }
        ]
    },

    onSearchLocationFieldKeyup: function(textfield, e, eOpts) {

        var tweetStore = Ext.getStore('MyDirectStore');
        var tweetProxy = tweetStore.getProxy();
        var textFieldValue = textfield.getValue();
        var urlRequest = 'https://maps.googleapis.com/maps/api/place/textsearch/xml?query='+textFieldValue+'+Sydney&sensor=true&key=AIzaSyDh_RPGaZuLP8-bEBlIjLq98Vj91SEnaZM';
        alert(urlRequest);
        tweetProxy.setUrl(urlRequest);
        tweetStore.load();
        var addressList = Ext.getCmp("AddressList");
        addressList.refresh();
    },

    onDaySelectorPanelHide: function(component, eOpts) {
        //HasHideMaskOnTap
    }

});