document.write("<TD class=DaySunTitle id=diary >" + days[0] + "</TD>");
for (var intLoop = 1; intLoop < days.length - 1; intLoop++)
  document.write("<TD class=DayTitle id=diary>" + days[intLoop] + "</TD>");
document.write("<TD class=DaySatTitle id=diary>" + days[intLoop] + "</TD>");
