WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "Los Angeles"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Portland"
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("datePicker").SetDate "28-Jan-2018"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Business"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select "3"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 1,0
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Augusto"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click
