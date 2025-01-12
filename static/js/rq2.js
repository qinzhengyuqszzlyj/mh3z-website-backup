for (var intWeeks = 0; intWeeks < 6; intWeeks++) {
  document.write("<TR style='cursor:pointer'>");
  for (var intDays = 0; intDays < days.length; intDays++)
    document.write("<TD class=CalendarTD></TD>");
  document.write("</TR>");
}
