import {
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
} from "./validations.js";

const rcpthaPublicKey = "6LfpfxAbAAAAAF1Mu0dBL3WspYrnyvXDIGYPNVHW";

function formPlugin(myform) {
	if (myform.form) {
		myform.form.querySelectorAll(".select-wrapper").forEach(function (elem) {
			let customSelect = elem.querySelector("select");
			elem.addEventListener("click", function () {
				this.classList.toggle("active");
			});
			customSelect.addEventListener("blur", function () {
				elem.closest(".select-wrapper").classList.remove("active");
			});
			customSelect.addEventListener("change", function () {
				elem.closest(".select-wrapper").classList.remove("active");
			});
		});

		fieldValidation(myform, "likeName", validateText, "blur");

		moveLabel(myform, "likeName", ifHasValue, "blur");
		moveLabel(myform, "likeName", ifHasValue, "");

		fieldValidation(myform, "phones", validatePhone, "blur");

		moveLabel(myform, "phones", ifHasValue, "blur");
		moveLabel(myform, "phones", ifHasValue, "");

		fieldValidation(myform, "mails", validateMail, "blur");

		moveLabel(myform, "mails", ifHasValue, "blur");
		moveLabel(myform, "mails", ifHasValue, "");

		singleErrorCheck(myform, "terms", validateCheckbox, "click");

		singleErrorCheck(myform, "dropDown", validateSelected, "click");

		moveLabel(myform, "dropDown", validateSelected, "click");
		moveLabel(myform, "dropDown", validateSelected, "");

		singleErrorCheck(myform, "notEmpty", ifHasValue, "blur");
		moveLabel(myform, "notEmpty", ifHasValue, "blur");
		moveLabel(myform, "notEmpty", ifHasValue, "");

		textfieldChecks(myform, "message", 8, "blur");

		moveLabel(myform, "message", ifHasValue, "blur");
		moveLabel(myform, "message", ifHasValue, "");

		if (ifHasRecords(myform.fileUpload)) {
			for (const prop in myform.fileUpload) {
				myform.fileUpload[prop].file.addEventListener("change", () => {
					myform.error[prop] = ifHasValue(myform.fileUpload[prop].file);
					if (myform.error[prop]) {
						activateError(myform.error[prop], myform.fileUpload[prop].file);
						myform.error[prop] = activateError(
							myform.error[prop],
							myform.fileUpload[prop].file
						);
					} else {
						myform.error[prop] = fileUpload(
							myform.fileUpload[prop].file,
							myform.fileUpload[prop].size
						);
						activateSpecialError(myform.error[prop], myform.fileUpload[prop].file);
					}
				});
			}
		}

		if (ifHasRecords(myform.likeRadio)) {
			for (const prop in myform.likeRadio) {
				myform.likeRadio[prop].forEach((elem) => {
					elem.addEventListener("change", () => {
						myform.error[prop] = validateCheckbox(elem);
						activateError(myform.error[prop], elem);
					});
				});
			}
		}

		if (ifHasRecords(myform.equals)) {
			for (const prop in myform.equals) {
				myform.equals[prop].checker.addEventListener("blur", () => {
					myform.error[
						`${prop}_${myform.equals[prop].checkWith.getAttribute("id")}`
					] = ifHasValue(myform.equals[prop].checkWith);

					if (
						!myform.error[
							`${prop}_${myform.equals[prop].checkWith.getAttribute("id")}`
						]
					) {
						myform.error[
							`${prop}_${myform.equals[prop].checker.getAttribute("id")}`
						] = ifHasValue(myform.equals[prop].checker);
						if (
							myform.error[`${prop}_${myform.equals[prop].checker.getAttribute("id")}`]
						) {
							activateError(
								myform.error[
									`${prop}_${myform.equals[prop].checker.getAttribute("id")}`
								],
								myform.equals[prop].checker
							);
						} else {
							myform.error[
								`${prop}_${myform.equals[prop].checker.getAttribute("id")}`
							] = validatePass(
								myform.equals[prop].checker,
								myform.equals[prop].checkWith
							);
							activateSpecialError(
								myform.error[
									`${prop}_${myform.equals[prop].checker.getAttribute("id")}`
								],
								myform.equals[prop].checker
							);
						}
					}
				});
			}
		}

		// --------------------------------------------
		// --------------------------------------------
		// --------------------------------------------
		//  SUBMIT BUTTON FORM VALIDATION STARTS HERE
		// --------------------------------------------
		// --------------------------------------------
		// --------------------------------------------
		let submitButton = myform.form.querySelector("button[type=submit]");
		submitButton.addEventListener("click", function (event) {
			event.preventDefault();
			submitButton.disabled = true;

			fieldValidation(myform, "likeName", validateText, "");
			fieldValidation(myform, "phones", validatePhone, "");
			fieldValidation(myform, "mails", validateMail, "");

			singleErrorCheck(myform, "terms", validateCheckbox);

			singleErrorCheck(myform, "dropDown", validateSelected);

			textfieldChecks(myform, "message", 8);

			singleErrorCheck(myform, "notEmpty", ifHasValue);

			if (ifHasRecords(myform.fileUpload)) {
				for (const prop in myform.fileUpload) {
					myform.error[prop] = ifHasValue(myform.fileUpload[prop].file);
					if (myform.error[prop]) {
						activateError(myform.error[prop], myform.fileUpload[prop].file);
						myform.error[prop] = activateError(
							myform.error[prop],
							myform.fileUpload[prop].file
						);
					} else {
						myform.error[prop] = fileUpload(
							myform.fileUpload[prop].file,
							myform.fileUpload[prop].size
						);
						activateSpecialError(myform.error[prop], myform.fileUpload[prop].file);
					}
				}
			}

			if (ifHasRecords(myform.equals)) {
				for (const prop in myform.equals) {
					myform.error[
						`${prop}_${myform.equals[prop].checkWith.getAttribute("id")}`
					] = ifHasValue(myform.equals[prop].checkWith);

					if (
						!myform.error[
							`${prop}_${myform.equals[prop].checkWith.getAttribute("id")}`
						]
					) {
						myform.error[
							`${prop}_${myform.equals[prop].checker.getAttribute("id")}`
						] = ifHasValue(myform.equals[prop].checker);
						if (
							myform.error[`${prop}_${myform.equals[prop].checker.getAttribute("id")}`]
						) {
							activateError(
								myform.error[
									`${prop}_${myform.equals[prop].checker.getAttribute("id")}`
								],
								myform.equals[prop].checker
							);
						} else {
							myform.error[
								`${prop}_${myform.equals[prop].checker.getAttribute("id")}`
							] = validatePass(
								myform.equals[prop].checker,
								myform.equals[prop].checkWith
							);
							activateSpecialError(
								myform.error[
									`${prop}_${myform.equals[prop].checker.getAttribute("id")}`
								],
								myform.equals[prop].checker
							);
						}
					}
				}
			}
			if (ifHasRecords(myform.likeRadio)) {
				for (const prop in myform.likeRadio) {
					for (let i = 0; i < myform.likeRadio[prop].length; i++) {
						if (!validateCheckbox(myform.likeRadio[prop][i])) {
							myform.error[prop] = validateCheckbox(myform.likeRadio[prop][i]);
							activateError(myform.error[prop], myform.likeRadio[prop][i]);
							break;
						} else {
							myform.error[prop] = validateCheckbox(myform.likeRadio[prop][i]);
							activateError(myform.error[prop], myform.likeRadio[prop][i]);
						}
					}
				}
			}

			if (checkIfFalse(myform.error)) {
				myform.form.querySelector(".form-alert1").style.display = "block";
				submitButton.disabled = false;
				return false;
			} else {
				// printChilds ADDS THE IDS OF THE FIELDS AND THEIR VALUES TO formsfields object
				myform.form.querySelector(".spinner").style.display = "block";
				myform.form.querySelector(".form-alert1").style.display = "none";
				grecaptcha.ready(function () {
					grecaptcha
						.execute(`${rcpthaPublicKey}`, {
							action: "submit",
						})
						.then(function (token) {
							printChilds(myform);
							// console.log(formsfields);
							form_support(myform, token);
						});
				});
				//  myform.form.submit();
			}
		});
	}
}

export { formPlugin };
