/*  ____
   ╱
  ╱___    EncodedFramework
 ╱   ┌─   https://encode42.dev
╱___ ├╴
*/

// CSS applied to visible/invisible popups
const popupCSS = [
	{ "opacity": "1", "visibility": "visible" },
	{ "opacity": "0", "visibility": "hidden" }
];

class EncodedFramework {
	constructor(options) {
		this.popupClass = options.popupClass ? options.popupClass : ".ef-popup";
		this.main();
	}

	// Main function
	main() {
		// Hide and listen to all popups
		const popups = $(this.popupClass);
		popups.css("display", "block");
		popups.click(e => {
			this.togglePopup($(e.target));
		});
	}

	// Toggle popups
	togglePopup(popup, action) {
		const status = action === undefined ? !popup.data("open") : action;
		return popup.css(status ? popupCSS[0] : popupCSS[1]) && popup.data("open", status);
	}
}