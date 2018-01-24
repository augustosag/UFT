WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("Origen", dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("Destino", dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("datePicker").SetDate DataTable("fecha", dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select DataTable("clase", dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select DataTable("billetes", dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell DataTable("fila", dtLocalSheet), DataTable("columna", dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set DataTable("pasajero", dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click
