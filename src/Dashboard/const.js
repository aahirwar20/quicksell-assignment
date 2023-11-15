const priority = [
    { id : 0, name : 'No priority', icon :{ name : 'more_horiz', color :''}},
    { id : 1, name : 'Low',  icon :{ name : 'signal_cellular_alt_1_bar', color :'' }},
    { id : 2, name : 'Medium',  icon :{ name : 'signal_cellular_alt_2_bar', color :''}},
    { id : 3, name : 'High' ,  icon :{ name : 'signal_cellular_alt_3_bar', color :''}},
    { id : 4, name : 'Urgent', icon :{ name : 'priority_high', color :'#FF5722' }},
]

const status = [
    { id : 'Backlog', name : 'Backlog', icon :{ name : 'pending', color :'' }},
    { id : 'Todo', name : 'Todo', icon : { name : 'radio_button_unchecked', color :'' }},
    { id : 'In progress', name : 'In progress', icon : { name : 'radio_button_checked', color :'#FFB300' }},
    { id : 'Done', name : 'Done' , icon : { name : 'check_circle', color :'#1E88E5' }},
    { id : 'Cancelled', name : 'Cancelled', icon :{ name : 'cancel', color :'' }},
]

export {
    priority,
    status,
}
