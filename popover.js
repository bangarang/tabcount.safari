
safari.application.addEventListener("popover", handlePopoverEvent, false);
function handlePopoverEvent(event)
{
	document.body.innerHTML = "";
	var myWin = safari.application.browserWindows;
	var myTabs = 0;
	for (var i=0;i<myWin.length;i++) {
		myTabs += safari.application.browserWindows[i].tabs.length;
	}
	document.write("<h2 style='text-align: center;margin:0;'>windows: " + myWin.length + "</h2>");
	document.write("<h2 style='text-align: center;margin:0;'>tabs: " + myTabs + "</h2>");
}