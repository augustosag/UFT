WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "John"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "5a688f847211e99093d6"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "Los Angeles"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "San Francisco"
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage").Click 1,15
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("lu").SetDate "26-Jan-2018"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Business"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select "2"
