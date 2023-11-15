const icons = {
    priority:{
        0 : { name : 'more_horiz', color :''},
        1 : { name : 'signal_cellular_alt_1_bar', color :'' },
        2 : { name : 'signal_cellular_alt_2_bar', color :''},
        3 : { name : 'signal_cellular_alt_3_bar', color :''},
        4 : { name : 'priority_high', color :'#FF5722' },
    },
    status:{
        'Backlog':{ name : 'pending', color :'' },
        'Todo': { name : 'radio_button_unchecked', color :'' },
        'In progress' : { name : 'radio_button_checked', color :'#FFB300' },
        'Done' : { name : 'check_circle', color :'#1E88E5' },
        'Cancelled' : { name : 'cancel', color :'' },
    }
}

export default icons;
