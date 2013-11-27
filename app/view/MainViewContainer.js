/*
 * File: app/view/MainViewContainer.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
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
        hideOnMaskTap: false,
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'container',
                id: 'MapContainer',
                ui: '',
                autoDestroy: false,
                hideOnMaskTap: false,
                layout: {
                    type: 'fit'
                },
                modal: false,
                items: [
                    {
                        xtype: 'map',
                        id: 'MyMap',
                        itemId: 'mymap'
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
                        hidden: false,
                        id: 'CurrentLocation',
                        width: 155,
                        iconCls: 'locate',
                        text: 'Current Location'
                    },
                    {
                        xtype: 'button',
                        action: 'searchLocationButtonEvent',
                        height: 37,
                        hidden: false,
                        id: 'SearchLocation',
                        width: 155,
                        iconCls: 'search',
                        text: 'Search Location'
                    },
                    {
                        xtype: 'button',
                        action: 'onPayButtonEvent',
                        hidden: true,
                        id: 'PayButton',
                        ui: 'action',
                        width: 100,
                        text: 'Pay'
                    },
                    {
                        xtype: 'button',
                        action: 'backButtonEvent',
                        hidden: true,
                        id: 'CancelButton',
                        ui: 'action',
                        width: 100,
                        text: 'Cancel'
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
                layout: {
                    type: 'vbox'
                },
                modal: false,
                items: [
                    {
                        xtype: 'searchfield',
                        action: 'searchLocationFieldEvent',
                        border: '',
                        docked: 'top',
                        id: 'SearchLocationField',
                        itemId: 'mysearchfield',
                        label: 'From',
                        labelWidth: '20%',
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
                            '    {formatted_address},{geo_location}',
                            '</div>'
                        ]
                    },
                    {
                        xtype: 'searchfield',
                        docked: 'top',
                        id: 'ToSearchLocationField',
                        itemId: 'mysearchfield2',
                        label: 'To',
                        labelWidth: '20%'
                    }
                ]
            },
            {
                xtype: 'panel',
                hidden: true,
                id: 'TimeSliderPanel',
                maxHeight: 30
            },
            {
                xtype: 'sliderfield',
                height: 90,
                hidden: true,
                id: 'TimeSlider',
                style: 'background-color:#2E2E2E;',
                maxValue: 288
            },
            {
                xtype: 'panel',
                id: 'ToolTip',
                style: '',
                layout: {
                    align: 'start',
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'label',
                        docked: 'bottom',
                        id: 'DayLabel',
                        style: 'border-style:solid; border-color:#2E2E2E;text-align: center; background-color:#FFFFFF;',
                        styleHtmlContent: true
                    },
                    {
                        xtype: 'label',
                        docked: 'top',
                        id: 'TimeLabel',
                        style: 'border-style:solid; border-color:#2E2E2E;text-align: center;  background-color:#FFFFFF;',
                        styleHtmlContent: true
                    }
                ]
            },
            {
                xtype: 'panel',
                docked: 'top',
                height: 242,
                hidden: true,
                id: 'TimePickerPanel',
                padding: 0,
                width: 245,
                autoDestroy: false,
                items: [
                    {
                        xtype: 'picker',
                        floatingCls: 'top',
                        height: 150,
                        id: 'TimePicker',
                        itemId: 'mypicker',
                        padding: 0,
                        ui: '',
                        width: 245,
                        autoDestroy: false,
                        scrollable: false,
                        stretchX: true,
                        stretchY: true,
                        doneButton: {
                            action: 'onDoneButtonTap',
                            hidden: true,
                            iconAlign: 'right',
                            text: 'DefaultDone'
                        },
                        cancelButton: {
                            action: 'onRealTimeButtonTap',
                            hidden: true,
                            id: 'DefaultCancel',
                            iconCls: 'refresh',
                            text: 'Real Time'
                        },
                        slots: [
                            {
                                xtype: 'pickerslot',
                                id: 'HourPickerSlot',
                                margin: '',
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
                            },
                            {
                                xtype: 'pickerslot',
                                id: 'AMPMPickerSlot',
                                autoDestroy: false,
                                name: 'AMPMPickerSlot',
                                title: 'AMPMPickerSlot'
                            }
                        ],
                        toolbar: {
                            xtype: 'toolbar',
                            docked: 'top',
                            hidden: false,
                            id: 'TimePanelToolBar',
                            autoDestroy: false,
                            items: [
                                {
                                    xtype: 'button',
                                    action: 'onDoneButtonTap',
                                    id: 'Done',
                                    text: 'Done'
                                },
                                {
                                    xtype: 'spacer'
                                },
                                {
                                    xtype: 'button',
                                    action: 'onRealTimeButtonTap',
                                    id: 'RealTime',
                                    iconAlign: 'right',
                                    iconCls: 'refresh',
                                    text: 'RealTime'
                                }
                            ]
                        },
                        listeners: [
                            {
                                fn: function(component, eOpts) {

                                    var hourPickerSlot = Ext.getCmp('HourPickerSlot');
                                    var minutePickerSlot = Ext.getCmp('MinutePickerSlot');
                                    var ampmPickerSlot = Ext.getCmp('AMPMPickerSlot');

                                    var hours = MyApp.app.getController('MainViewController').createHours();
                                    var minutes = MyApp.app.getController('MainViewController').createMinutes();
                                    var ampm = MyApp.app.getController('MainViewController').createAMPM();

                                    this.setDoneButton(false);
                                    this.setCancelButton(false);

                                    if(!hourPickerSlot.getData()){
                                        hourPickerSlot.setData(hours);
                                    } 

                                    if(!minutePickerSlot.getData()){
                                        minutePickerSlot.setData(minutes);
                                    }

                                    if(!ampmPickerSlot.getData()){
                                        ampmPickerSlot.setData(ampm);
                                    }




                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        docked: 'bottom',
                        id: 'DayTypeSelectorField',
                        maxHeight: 100,
                        labelWidth: 0,
                        options: [
                            {
                                text: 'Weekday',
                                value: 'Weekday'
                            },
                            {
                                text: 'Saturday',
                                value: 'Saturday'
                            },
                            {
                                text: 'Sunday',
                                value: 'Sunday'
                            }
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        docked: 'bottom',
                        id: 'DurationSelector',
                        maxHeight: '40%',
                        labelWidth: 0,
                        options: [
                            {
                                text: 'All',
                                value: 0
                            },
                            {
                                text: '15 Mintues',
                                value: 15
                            },
                            {
                                text: '30 Mintues',
                                value: 30
                            },
                            {
                                text: '1 Hour',
                                value: 60
                            },
                            {
                                text: '2 Hours',
                                value: 120
                            },
                            {
                                text: '3 Hours',
                                value: 180
                            },
                            {
                                text: '>=4 Hours',
                                value: 240
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '',
                id: 'TitleToolBar',
                title: 'Valet Park',
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
                        action: 'onTimeButtonTap',
                        hidden: true,
                        id: 'TimeButton',
                        iconCls: 'time',
                        text: ''
                    },
                    {
                        xtype: 'button',
                        action: 'onTimeSliderButtonTap',
                        docked: 'left',
                        id: 'SliderButton',
                        ui: 'small',
                        iconCls: 'arrow_down'
                    },
                    {
                        xtype: 'button',
                        action: 'onRefreshTapEvent',
                        docked: 'left',
                        id: 'RefreshButton',
                        ui: 'small',
                        iconCls: 'refresh',
                        text: ''
                    },
                    {
                        xtype: 'button',
                        action: 'onPayButtonScreenTap',
                        docked: 'right',
                        id: 'PayButtonScreen',
                        minWidth: 15,
                        ui: 'small',
                        width: 54,
                        iconCls: 'info',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'panel',
                hidden: false,
                id: 'ParkDurationPanel',
                ui: 'dark',
                scrollable: false,
                items: [
                    {
                        xtype: 'picker',
                        bottom: 100,
                        height: 243,
                        id: 'DurationPicker',
                        ui: 'dark',
                        stretchX: true,
                        stretchY: true,
                        useTitles: true,
                        toolbar: {
                            xtype: 'toolbar',
                            docked: 'top',
                            hidden: true
                        },
                        slots: [
                            {
                                xtype: 'pickerslot',
                                id: 'HourDurationPicker',
                                itemId: 'mypickerslot9',
                                autoDestroy: false,
                                align: 'center',
                                name: 'HourPickerSlot',
                                title: 'Hours'
                            },
                            {
                                xtype: 'pickerslot',
                                id: 'MinuteDurationPicker',
                                align: 'center',
                                name: 'MinutePickerSlot',
                                title: 'Minutes'
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        centered: false,
                        docked: 'bottom',
                        id: 'CVVTextField',
                        label: 'CVV',
                        labelWidth: '33%',
                        placeHolder: 'XXX'
                    },
                    {
                        xtype: 'selectfield',
                        centered: false,
                        docked: 'bottom',
                        id: 'CreditCardType',
                        label: 'Type:',
                        labelWidth: '33%',
                        options: [
                            {
                                text: 'Master Card',
                                value: 'Master Card'
                            },
                            {
                                text: 'Visa',
                                value: 'Visa'
                            },
                            {
                                text: 'American Express',
                                value: 'American Express'
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        docked: 'bottom',
                        id: 'CreditCardTextField',
                        label: 'CreditCard:',
                        labelWidth: '33%',
                        placeHolder: 'XXXX XXXX XXXX XXXX'
                    },
                    {
                        xtype: 'textfield',
                        disabled: true,
                        docked: 'bottom',
                        id: 'AmountTextField',
                        label: 'Amount:',
                        labelWidth: '33%'
                    },
                    {
                        xtype: 'textfield',
                        centered: false,
                        docked: 'bottom',
                        id: 'NameTextField',
                        label: 'Name:',
                        labelWidth: '33%',
                        placeHolder: 'First & Last Name'
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
                fn: 'onAddressListSelect',
                event: 'select',
                delegate: '#AddressList'
            },
            {
                fn: 'onToSearchLocationFieldKeyup',
                event: 'keyup',
                delegate: '#ToSearchLocationField'
            }
        ]
    },

    onSearchLocationFieldKeyup: function(textfield, e, eOpts) {

        var address = textfield.getValue() + ' Sydney' + ' Australia';



        var addressArray = [];
        geoSearchForAllLocations();

        // To ensure that we have current location displayed in the list view;
        function geoSearchForAllLocations(){
            var curr = "curr";
            var Curr = "Curr";

            var fromSearchField = Ext.getCmp('SearchLocationField').getValue();
            var toSearchField = Ext.getCmp('ToSearchLocationField').getValue();

            var currfromSearchField = fromSearchField.indexOf(curr);
            var CurrfromSearchField = fromSearchField.indexOf(Curr);
            var currToSearchField = toSearchField.indexOf(curr);
            var CurrToSearchField = toSearchField.indexOf(Curr);

            var containsCurrentLocation = false;

            if((currfromSearchField != -1) || (CurrfromSearchField != -1) || (currToSearchField != -1) || (CurrToSearchField != -1)){
                containsCurrentLocation = true;
            }

            if(containsCurrentLocation){
                //This has a call back to MyApp.app.getController('MainViewController').showAddress(address,addressArray,searchFieldId);
                MyApp.app.getController('MainViewController').addCurrentLocation(address,'SearchLocationField');
            } else {
                MyApp.app.getController('MainViewController').showAddress(address,addressArray,'SearchLocationField');   
            }

        }










    },

    onAddressListSelect: function(dataview, record, eOpts) {
        var searchFieldId = record.getData().search_field;
        var recordData = record.getData();
        Ext.getCmp(searchFieldId).setValue(recordData.formatted_address);

        if("SearchLocationField" === searchFieldId){
            MyApp.app.getController('MainViewController').config.globalFromCoordinates = recordData.geo_location;
        } else {
            MyApp.app.getController('MainViewController').config.globalToCoordinates = recordData.geo_location;
        }
        MyApp.app.getController('MainViewController').clearAddressList();
    },

    onToSearchLocationFieldKeyup: function(textfield, e, eOpts) {
        var address = textfield.getValue() + ' Sydney' + ' Australia';
        var addressArray = [];
        MyApp.app.getController('MainViewController').showAddress(address,addressArray,'ToSearchLocationField');

    }

});