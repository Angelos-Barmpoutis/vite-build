let isSearching = false;
const spinner = document.querySelector(".spinner");
const formsfields = {};

// CHECK IF THE ERROR OBJECT HAS ANY TRUE ERROR
function checkIfFalse(elem) {
	let thevalues = [];
	for (const value in elem) {
		thevalues.push(`${elem[value]}`);
	}
	return thevalues.includes("true");
}

// ACTIVATE THE EMPTY FIELD ERROR
function activateError($val, $elem) {
	if ($val == true) {
		if ($elem.hasAttribute("required")) {
			$elem
				.closest(".input-block")
				.querySelector(".error")
				.classList.add("active");
			if ($elem.closest(".input-block").querySelector(".error2")) {
				$elem
					.closest(".input-block")
					.querySelector(".error2")
					.classList.remove("active");
			}
			return true;
		} else {
			if ($elem.closest(".input-block").querySelector(".error2")) {
				$elem
					.closest(".input-block")
					.querySelector(".error2")
					.classList.remove("active");
			}
			return false;
		}
	} else {
		$elem
			.closest(".input-block")
			.querySelector(".error")
			.classList.remove("active");
	}
}

// ACTIVATE THE DETAILD INSTRUCTIONS ERROR
function activateSpecialError($val, $elem) {
	if ($val == true) {
		$elem
			.closest(".input-block")
			.querySelector(".error2")
			.classList.add("active");
		$elem
			.closest(".input-block")
			.querySelector(".error")
			.classList.remove("active");
	} else {
		$elem
			.closest(".input-block")
			.querySelector(".error")
			.classList.remove("active");
		$elem
			.closest(".input-block")
			.querySelector(".error2")
			.classList.remove("active");
	}
}

// SIMPLE TEXT VALIDATION. THROW ERROR IF THERE IS A NUMBER OR MORE THAN 2 SPACES
function validateText(elem) {
	if (
		elem.value.match(/^[α-ωΑ-Ωa-zA-ZάΆήΉίΊέΈόΌύΎώΏ.\s]*$/) == null ||
		(elem.value.match(/\s/g) != null && elem.value.match(/\s/g).length >= 3) ||
		(elem.value.match(/\./g) != null && elem.value.match(/\./g).length >= 2) ||
		elem.value.length < 2
	) {
		return true;
	} else {
		return false;
	}
}

// Checks if input has value
function ifHasValue(elem) {
	if (elem.value.length != 0) {
		return false;
	} else {
		return true;
	}
}
// Checks if input has value and length
function ifHasValueLength(elem, chars = 0) {
	if (elem.value.length <= chars) {
		return true;
	} else {
		return false;
	}
}

// Checks if the values of 2 fields are the same
function validatePass(val1, val2) {
	if (val1.value != val2.value) {
		return true;
	} else {
		return false;
	}
}

function validateMail(elem) {
	if (
		elem.value.match(/^([\w-.]+@([\w-]+\.)+[\w-]{2,6})?$/) == null ||
		elem.length < 2
	) {
		return true;
	} else {
		return false;
	}
}

function validatePhone(elem) {
	if (elem.value.match(/^[0-9]*$/) == null || elem.value.length < 10) {
		return true;
	} else {
		return false;
	}
}

function validateSelected(elem) {
	if (elem.selectedIndex == 0) {
		return true;
	} else {
		return false;
	}
}

function validateCheckbox(elem) {
	// if (jQuery(elem).is(':checked')) {
	if (elem.hasAttribute("required")) {
		if (elem.checked) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

function fileUpload(elem, size) {
	// if (elem.value != "") {
	if (elem.files[0].size / 1024 / 1024 < size) {
		return false;
	} else {
		return true;
	}
}

function ifHasRecords(obj) {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) return true;
	}
}

function form_support(myform, tokenn) {
	if (!isSearching) {
		isSearching = true;
		let formData = new FormData();

		formData.append("action", form_settings[`${myform.name}_action`]);
		formData.append("nonce", form_settings[`${myform.name}_nonce`]);
		formData.append("token", tokenn);

		for (const prop in formsfields) {
			formData.append(`${prop}`, formsfields[prop]);
		}

		fetch(form_settings.url, {
			method: "POST",
			credentials: "same-origin",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					myform.form.querySelector(".form-alert-success").style.display = "none";
					myform.form.querySelector(".form-alert-error").style.display = "none";
					myform.form.querySelector("button[type=submit]").disabled = false;
					var mMembers = data;
					myform.form.querySelector(".spinner").style.display = "none";
					if (mMembers == "success") {
						const active = document.querySelectorAll(".input-block.is-active");
						active.forEach((elem) => elem.classList.remove("is-active"));
						myform.form.reset();
						myform.form.querySelector(".form-alert-success").style.display = "block";
					} else {
						myform.form.querySelector(".form-alert-error").style.display = "block";
					}

					isSearching = false;
				}
			})
			.catch((error) => {
				myform.form.querySelector(".spinner").style.display = "none";
				myform.form.querySelector(".form-alert-error").style.display = "block";
			});
	}
}

// Function to create and object with the fields values and the fields ids to send for wordpress
function printChilds(myform) {
	field("likeName");
	field("message");
	field("phones");
	field("mails");
	checkBoxes("terms");
	radioGroup("likeRadio");
	field("dropDown");
	field("notEmpty");
	field("noValidation");
	filesUpload("fileUpload");

	//  field("likeRadio");

	function field(field) {
		if (myform[`${field}`]) {
			if (ifHasRecords(myform[`${field}`])) {
				for (const prop in myform[`${field}`]) {
					const propId = myform[`${field}`][prop].id;
					const propValue = myform[`${field}`][prop].value;
					formsfields[propId] = `${propValue}`;
				}
			}
		}
	}

	function checkBoxes(field) {
		if (myform[`${field}`]) {
			if (ifHasRecords(myform[`${field}`])) {
				for (const prop in myform[`${field}`]) {
					const propId = myform[`${field}`][prop].id;
					const propValue = myform[`${field}`][prop].value;
					if (myform[`${field}`][prop].checked) {
						formsfields[propId] = `${propValue}`;
					} else {
						formsfields[propId] = "";
					}
				}
			}
		}
	}

	//  SPECIAL FUNCTION FOR RADIO GROUPS
	function radioGroup(field) {
		if (myform[`${field}`]) {
			if (ifHasRecords(myform[`${field}`])) {
				for (const prop in myform[`${field}`]) {
					let group = myform[`${field}`][prop];
					group.forEach((elem) => {
						if (elem.checked) {
							formsfields[elem.id] = `${elem.value}`;
						}
					});
				}
			}
		}
	}

	//  SPECIAL FUNCTION FOR FILEUPLOADS
	function filesUpload(field) {
		if (myform[`${field}`]) {
			if (ifHasRecords(myform[`${field}`])) {
				for (const prop in myform[`${field}`]) {
					const propId = myform[`${field}`][prop]["file"].id;
					const propValue = myform[`${field}`][prop]["file"].files[0];
					formsfields[propId] = propValue;
				}
			}
		}
	}
}

function fieldValidation(myform, field, callback, event) {
	if (ifHasRecords(myform[`${field}`])) {
		// Loop through the objects properties
		for (const prop in myform[`${field}`]) {
			if (arguments[3] !== "") {
				// Adding blur event to the field
				myform[`${field}`][prop].addEventListener(`${event}`, () => {
					checkTextFields(...arguments, prop);
				});
			} else {
				checkTextFields(...arguments, prop);
			}
		}
	}
}

function checkTextFields(myform, field, callback, event, prop) {
	// First check if field have or dont have value in it. If it doesn't have value we return TRUE, if it have we Return FALSE. We give this value to the errors object property
	myform.error[prop] = ifHasValue(myform[`${field}`][prop]);
	if (myform.error[prop]) {
		// If the error value is true with run the function that activates the empty field error
		activateError(myform.error[prop], myform[`${field}`][prop]);
		myform.error[prop] = activateError(
			myform.error[prop],
			myform[`${field}`][prop]
		);
	} else {
		// If the error is False we run the validation to check if the value is correct. If the value has errors we return true else we return false
		myform.error[prop] = callback(myform[`${field}`][prop]);
		// We run the function that activates the input value error NOT THE EMPTY input
		activateSpecialError(myform.error[prop], myform[`${field}`][prop]);
	}
}

function singleErrorCheck(myform, field, callback, event) {
	if (ifHasRecords(myform[`${field}`])) {
		if (arguments[3]) {
			for (const prop in myform[`${field}`]) {
				myform[`${field}`][prop].addEventListener(`${event}`, () => {
					myform.error[prop] = callback(myform[`${field}`][prop]);
					activateError(myform.error[prop], myform[`${field}`][prop]);
				});
			}
		} else {
			for (const prop in myform[`${field}`]) {
				myform.error[prop] = callback(myform[`${field}`][prop]);
				activateError(myform.error[prop], myform[`${field}`][prop]);
			}
		}
	}
}
function moveLabel(myform, field, callback, event) {
	if (ifHasRecords(myform[`${field}`])) {
		if (arguments[3]) {
			for (const prop in myform[`${field}`]) {
				myform[`${field}`][prop].addEventListener(`${event}`, () => {
					myform.error[prop] = callback(myform[`${field}`][prop]);
					if (!myform.error[prop]) {
						myform.form
							.querySelector(`#${myform[`${field}`][prop].id}`)
							.closest(".input-block")
							.classList.add("has-value");
					} else {
						myform.form
							.querySelector(`#${myform[`${field}`][prop].id}`)
							.closest(".input-block")
							.classList.remove("has-value");
					}
				});
			}
		} else {
			for (const prop in myform[`${field}`]) {
				myform.error[prop] = callback(myform[`${field}`][prop]);
				if (!myform.error[prop]) {
					myform.form
						.querySelector(`#${myform[`${field}`][prop].id}`)
						.closest(".input-block")
						.classList.add("has-value");
				} else {
					myform.form
						.querySelector(`#${myform[`${field}`][prop].id}`)
						.closest(".input-block")
						.classList.remove("has-value");
				}
			}
		}
	}
}

function textfieldChecks(myform, field, length, event) {
	if (ifHasRecords(myform[`${field}`])) {
		if (arguments[3]) {
			for (const prop in myform[`${field}`]) {
				myform[`${field}`][prop].addEventListener(`${event}`, () => {
					myform.error[prop] = ifHasValueLength(myform[`${field}`][prop], length);
					activateError(myform.error[prop], myform[`${field}`][prop]);
				});
			}
		} else {
			for (const prop in myform[`${field}`]) {
				myform.error[prop] = ifHasValueLength(myform[`${field}`][prop], length);
				activateError(myform.error[prop], myform[`${field}`][prop]);
			}
		}
	}
}

export {
	singleErrorCheck,
	checkIfFalse,
	activateError,
	activateSpecialError,
	validateText,
	ifHasValue,
	validatePass,
	validateMail,
	validatePhone,
	validateSelected,
	validateCheckbox,
	fileUpload,
	ifHasRecords,
	form_support,
	printChilds,
	fieldValidation,
	formsfields,
	spinner,
	textfieldChecks,
	moveLabel,
};
