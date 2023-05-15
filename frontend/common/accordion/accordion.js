import activeToggle from "./activeAccordion.js";
/* HTML
<div data-js="accordion">
<button data-js="accordion-toggler"></button>
<div data-js="accordion_contents">
</div>
</div>
*/

/* SCSS
[data-js="accordion"] {
	display: flex;
	flex-direction: column;
	[data-js="accordion_contents"] {
		max-height: 0px;
		overflow: hidden;
		transition: max-height 0.25s ease-in-out;
	}
}
*/

/* USE
To use the function you need to specify 3 arguments:
1) the container that if you follow the html above it would be [data-js="accordion"] or [data-js="accordion-group"] in case you want to have in the same page accordion groups that you want to open close the accordions of one group without interfere with the accordions of th other group.
2) true of false for the behavior of the accordions in a group. True if you want to close the active accordion when you click to open another. False if you want to close the accordion only when you click again in the accordion's toggler.
By default the behavior is set to true.
3) Optional, give the index of a accordion with activetoggle function that you want to be open on load (import activeToggle from "./components/activeAccordion.js";)


TO SET AN ACCORDION ACTIVE YOU IMPORT THE "activeAccordion.js" and run the function below
activeToggle(accordions[0]);
*/

function accordion(container, closeActives = true) {
	container
		.querySelector('[data-js="accordion-toggler"]')
		.addEventListener("click", function () {
			toggleState(container);
		});

	function toggleState(target) {
		const panel = target.querySelector('[data-js="accordion_contents"]');
		let panelHeight = () => panel.scrollHeight;
		if (target.classList.contains("active")) {
			target.classList.remove("active");
		} else {
			if (closeActives) {
				let openAccordion = document.querySelector('[data-js="accordion"].active');
				if (openAccordion) {
					toggleState(openAccordion);
				}
			}
			target.classList.add("active");
		}
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panelHeight() + "px";
		}
	}
}


export default accordion;


