var menuButton = document.getElementById("menuButton");


function menuShow () {

	var menuItems = document.getElementsByClassName("mItem");

	console.log("menu called");
	// go through each element in menuItems and change class to display
	for (var i = 0; i < menuItems.length; i++) {
		if (menuItems[i].className === "mItem li-hide"){
			// if a hidden list item SHOW
			menuItems[i].className = "mItem li-show";
			console.log(`${i} was shown`);
		} else {
			// else hide
			menuItems[i].className = "mItem li-hide";
		}
	}
	return menuItems;
}

menuButton.onclick = function () {
	menuShow();
}