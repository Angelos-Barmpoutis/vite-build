function openCloseMenu() {
	// * Βάζουμε το attribute data-js="toggle-menu" σε όποιο element θέλουμε να είναι το trigger για να ανοίξει και να κλείσει το μενού
	const toggleMenu = document.querySelectorAll('[data-js="toggle-menu"]');

	// * Βάζουμε το attribute data-js="menu-slider σε όποιο element θέλουμε να είναι ο slider που θα μπαίνει και θα βγαίνει στην σελίδα μας. Όλη η κίνηση γίνεται από css, η javascript κάνει toggle μόνο το class active.
	const menu = document.querySelector('[data-js="menu-slider"]');

	// * Με την menuactive ελέγχουμε στην πραγματικότητα το state του μενού.
	let menuactive = false;
	let stopScroll = {
		lastScroll: 0,
		noScroll: function () {
			window.scrollTo(0, stopScroll.lastScroll);
		},
	};
	if (toggleMenu) {
		toggleMenu.forEach((elem) => {
			elem.addEventListener("click", () => {
				if (!menuactive) {
					stopScroll.lastScroll = window.pageYOffset;
					menu.classList.add("active");
					elem.classList.add("active");
					window.addEventListener("scroll", stopScroll.noScroll);
					menuactive = true;
				} else {
					menu.classList.remove("active");
					document
						.querySelector('[data-js="toggle-menu"].active')
						.classList.remove("active");
					window.removeEventListener("scroll", stopScroll.noScroll);
					menuactive = false;
				}
			});
		});
	}
}
export default openCloseMenu;
