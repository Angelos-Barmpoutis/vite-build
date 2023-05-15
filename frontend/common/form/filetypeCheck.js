// This is a function that checks if the file type of an upload input is valid and adds the file name in an html element

// ! elem is the container of the input. When you call the function is the first argument
// * let fileUpload = document.querySelector('[data-js="fileUpload"]');

// ! The input must have data attribute: data-js="fileInput"
// * const fileInput = elem.querySelector('[data-js="fileInput"]');

// ! types is an array with the supported file types
// * const fileTypes = [
// *   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// *   "application/pdf",
// *   "application/msword",
// * ];
// The file types above are for .docx, .pdf and .doc

// ! filename is an html element that will be shown the filename you must add the data attribute: data-js="fileName"
// * const fileName = elem.querySelector('[data-js="fileName"]');

function fileTypeCheck(elem, types) {
	const fileInput = elem.querySelector('[data-js="fileInput"]');
	const fileName = elem.querySelector('[data-js="fileName"]');

	fileInput.addEventListener("change", function () {
		if (!types.includes(`${this.files[0].type}`)) {
			alert("File type not supported");
		} else {
			if (fileName) {
				fileName.innerHTML = `${this.files[0].name}`;
			}
		}
	});
}

export default fileTypeCheck;
