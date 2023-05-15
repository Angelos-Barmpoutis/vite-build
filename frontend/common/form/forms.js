import { formPlugin } from "formPlugin.js";

let form1 = {
	form: document.getElementById("contactForm"),
	name: "contactForm",
	likeName: {
		name: document.querySelector("#name_1"),
	},

	//  βάζουμε όλα τα RADIO BUTTON GROUP. Ο selector είναι το name του group
	likeRadio: {
		//   radioGroup: document.querySelectorAll('[name="radioGroup1"]'),
		//   radioGroup2: document.querySelectorAll('[name="radioGroup2"]'),
	},

	//  Εδώ μπαίουν όλα τα πεδία που δεν είναι required και δεν θέλουν και validation.
	noValidation: {
		//   field1: document.querySelector("#address_1"),
	},

	// όλα τα πεδία που θέλουμε να κάνουμε έλεγχο email διεύθυνσης μπαίνουν εδώ
	mails: {
		mail: document.querySelector("#email_1"),
	},

	//  πεδίο που ελέγχει αριθμούς τηλεφώνου
	phones: {
		phone: document.querySelector("#phone_1"),
	},

	// Όλα τα dropdown μπαίνουν εδώ και ελέγχετε εάν έχουν επιλεχθεί
	dropDown: {
		select: document.querySelector("#product_1"),
		//   subject: document.querySelector("#subject_1"),
	},

	message: {
		message1: document.querySelector("#message_1"),
	},

	// Όλα τα checkboxes τύπου terms μπαίνουν εδώ
	terms: {
		//   term1: document.querySelector("#check-privacy_1"),
		term2: document.querySelector("#check-privacy_2"),
	},

	notEmpty: {
		//   name: document.querySelector("#name_1"),
		//   mail: document.querySelector("#email_1"),
		//   address: document.querySelector("#address_1"),
		//   message: document.querySelector("#message_1"),
	},

	// Βάζουμε ζεύγη από πεδία που θέλουμε να τσεκάρουμε αν είναι ίδια μεταξύ τους. Στο πεδίο checker βάζουμε το πεδίο που ο χρήστης θα ξαναγράψει την τιμή και στο πεδίο checkWith βάζουμε το πεδίο με το οποίο θέλουμε να γίνει η σύγκριση. ΣΤΟ ΠΕΔΙΟ CHECKER ΔΕΝ ΓΙΝΕΤΑΙ ΚΑΝΕΝΑ VALIDATION ΕΚΤΟΣ ΑΠΟ ΤΟΝ ΕΛΕΓΧΟ ΠΟΥ ΒΛΕΠΕΙ ΕΑΝ Η ΤΙΜΗ ΤΟΥ ΕΙΝΑΙ ΙΔΙΑ ΜΕ ΤΟΥ ΠΕΔΙΟΥ ΠΟΥ ΘΑ ΤΟΥ ΟΡΙΣΟΥΜΕ.
	equals: {
		//   pair_1: {
		//    checker: document.querySelector("#checker_1"),
		//    checkWith: document.querySelector("#email_1"),
		//   },
	},

	// Όλα τα πεδία που είναι για upload αρχείον. Στο file βάζουμε τον selector του πεδίου και στο size το μέγιστο μέγεθος του αρχείου σε ΜΒ.
	fileUpload: {
		//   file_1: {
		//    file: document.querySelector("#file_1"),
		//    size: 5, // Size in MB
		//   },
		//         file_2 : {
		//            file: document.querySelector("#file_2"),
		//            size: 6
		//         }
	},
	error: {},
};

let form2 = {
	form: document.getElementById("newsLetter"),
	name: "newsLetter",
	likeName: {
		// name: document.querySelector("#name_1"),
	},

	//  βάζουμε όλα τα RADIO BUTTON GROUP. Ο selector είναι το name του group
	likeRadio: {
		//   radioGroup: document.querySelectorAll('[name="radioGroup1"]'),
		//   radioGroup2: document.querySelectorAll('[name="radioGroup2"]'),
	},

	//  Εδώ μπαίουν όλα τα πεδία που δεν είναι required και δεν θέλουν και validation.
	noValidation: {
		//   field1: document.querySelector("#address_1"),
	},

	// όλα τα πεδία που θέλουμε να κάνουμε έλεγχο email διεύθυνσης μπαίνουν εδώ
	mails: {
		mail: document.querySelector("#email_2"),
	},

	//  πεδίο που ελέγχει αριθμούς τηλεφώνου
	phones: {
		// phone: document.querySelector("#phone_1"),
	},

	// Όλα τα dropdown μπαίνουν εδώ και ελέγχετε εάν έχουν επιλεχθεί
	dropDown: {
		// select: document.querySelector("#product_1"),
		//   subject: document.querySelector("#subject_1"),
	},

	message: {
		// message1: document.querySelector("#message_1"),
	},

	// Όλα τα checkboxes τύπου terms μπαίνουν εδώ
	terms: {
		//   term1: document.querySelector("#check-privacy_1"),
		term2: document.querySelector("#check-privacy_3"),
	},

	notEmpty: {
		//   name: document.querySelector("#name_1"),
		//   mail: document.querySelector("#email_1"),
		//   address: document.querySelector("#address_1"),
		//   message: document.querySelector("#message_1"),
	},

	// Βάζουμε ζεύγη από πεδία που θέλουμε να τσεκάρουμε αν είναι ίδια μεταξύ τους. Στο πεδίο checker βάζουμε το πεδίο που ο χρήστης θα ξαναγράψει την τιμή και στο πεδίο checkWith βάζουμε το πεδίο με το οποίο θέλουμε να γίνει η σύγκριση. ΣΤΟ ΠΕΔΙΟ CHECKER ΔΕΝ ΓΙΝΕΤΑΙ ΚΑΝΕΝΑ VALIDATION ΕΚΤΟΣ ΑΠΟ ΤΟΝ ΕΛΕΓΧΟ ΠΟΥ ΒΛΕΠΕΙ ΕΑΝ Η ΤΙΜΗ ΤΟΥ ΕΙΝΑΙ ΙΔΙΑ ΜΕ ΤΟΥ ΠΕΔΙΟΥ ΠΟΥ ΘΑ ΤΟΥ ΟΡΙΣΟΥΜΕ.
	equals: {
		//   pair_1: {
		//    checker: document.querySelector("#checker_1"),
		//    checkWith: document.querySelector("#email_1"),
		//   },
	},

	// Όλα τα πεδία που είναι για upload αρχείον. Στο file βάζουμε τον selector του πεδίου και στο size το μέγιστο μέγεθος του αρχείου σε ΜΒ.
	fileUpload: {
		//   file_1: {
		//    file: document.querySelector("#file_1"),
		//    size: 5, // Size in MB
		//   },
		//         file_2 : {
		//            file: document.querySelector("#file_2"),
		//            size: 6
		//         }
	},
	error: {},
};

let CVForm = {
	form: document.getElementById("CVForm"),
	name: "CVForm",
	likeName: {
		name: document.querySelector("#name_2"),
	},

	//  βάζουμε όλα τα RADIO BUTTON GROUP. Ο selector είναι το name του group
	likeRadio: {
		//   radioGroup: document.querySelectorAll('[name="radioGroup1"]'),
		//   radioGroup2: document.querySelectorAll('[name="radioGroup2"]'),
	},

	//  Εδώ μπαίουν όλα τα πεδία που δεν είναι required και δεν θέλουν και validation.
	noValidation: {
		// workLocation: document.querySelector("#subject_1"),
	},

	// όλα τα πεδία που θέλουμε να κάνουμε έλεγχο email διεύθυνσης μπαίνουν εδώ
	mails: {
		mail: document.querySelector("#email_1"),
	},

	//  πεδίο που ελέγχει αριθμούς τηλεφώνου
	phones: {
		// phone: document.querySelector("#phone_1"),
	},

	// Όλα τα dropdown μπαίνουν εδώ και ελέγχετε εάν έχουν επιλεχθεί
	dropDown: {
		select: document.querySelector("#product_1"),
		//   subject: document.querySelector("#subject_1"),
	},

	message: {
		message1: document.querySelector("#message_1"),
	},

	// Όλα τα checkboxes τύπου terms μπαίνουν εδώ
	terms: {
		//   term1: document.querySelector("#check-privacy_1"),
		term2: document.querySelector("#check-privacy_2"),
	},

	notEmpty: {
		workLocation: document.querySelector("#subject_1"),
		//   mail: document.querySelector("#email_1"),
		//   address: document.querySelector("#address_1"),
		//   message: document.querySelector("#message_1"),
	},

	// Βάζουμε ζεύγη από πεδία που θέλουμε να τσεκάρουμε αν είναι ίδια μεταξύ τους. Στο πεδίο checker βάζουμε το πεδίο που ο χρήστης θα ξαναγράψει την τιμή και στο πεδίο checkWith βάζουμε το πεδίο με το οποίο θέλουμε να γίνει η σύγκριση. ΣΤΟ ΠΕΔΙΟ CHECKER ΔΕΝ ΓΙΝΕΤΑΙ ΚΑΝΕΝΑ VALIDATION ΕΚΤΟΣ ΑΠΟ ΤΟΝ ΕΛΕΓΧΟ ΠΟΥ ΒΛΕΠΕΙ ΕΑΝ Η ΤΙΜΗ ΤΟΥ ΕΙΝΑΙ ΙΔΙΑ ΜΕ ΤΟΥ ΠΕΔΙΟΥ ΠΟΥ ΘΑ ΤΟΥ ΟΡΙΣΟΥΜΕ.
	equals: {
		//   pair_1: {
		//    checker: document.querySelector("#checker_1"),
		//    checkWith: document.querySelector("#email_1"),
		//   },
	},

	// Όλα τα πεδία που είναι για upload αρχείον. Στο file βάζουμε τον selector του πεδίου και στο size το μέγιστο μέγεθος του αρχείου σε ΜΒ.
	fileUpload: {
		file_1: {
			file: document.querySelector("#file_1"),
			size: 5, // Size in MB
		},
		// file_2 : {
		//    file: document.querySelector("#file_2"),
		//    size: 6
		// }
	},
	error: {},
};

formPlugin(form1);
formPlugin(form2);
formPlugin(CVForm);
