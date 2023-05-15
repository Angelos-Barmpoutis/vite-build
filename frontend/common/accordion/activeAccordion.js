// You need to install first the accordion.js and read the instructions ;)

function activeToggle(target) {
	const panel = target.querySelector('[data-js="accordion_contents"]');
	let panelHeight = () => panel.scrollHeight;
	if (target.classList.contains("active")) {
		target.classList.remove("active");
	} else {
		target.classList.add("active");
	}
	if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = panelHeight() + "px";
	}
}

export default activeToggle;
