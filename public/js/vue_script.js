const vm = new Vue ({
    el: '#main',
    data: {
	food,
	burgerCheck: [],
	burgerDisplay: "",
	vname: "",
	vemail: "",
	vstreetname: "",
	vhousenr: "",
	vpayment: "Debit Card",
	vgenders: "Prefer not to say"
    },
    methods: {
	collectOrder: function() {
	    let allInfo = [this.vname, this.vemail, this.vstreetname, this.vhousenr, this.vpayment, this.vgenders, this.burgerCheck];
	    console.log(allInfo);
	    this.burgerDisplay = "";
	    for (let item in this.burgerCheck) {
		if (item != 0) {
		    this.burgerDisplay += ", ";
		}
		this.burgerDisplay += this.burgerCheck[item];
	    }
	}
    }
    
})

/*
const vm2 = new Vue ({
    el: '#button',
    methods: {
	collectOrder: function() {
	    let name = document.getElementById("name").value;
	    let email = document.getElementById("email").value;
	    let streetname = document.getElementById("streetname").value;
	    let housenr = document.getElementById("housenr").value;
	    let payment = document.getElementById("payment").value;
	    let genders = document.getElementsByName("gender");
	    let savedGender;
	    for (let gender in genders) {
		if (genders[gender].checked) {
		    savedGender = genders[gender];
		    break;
		}
	    }
	    allInfo = [name, email, streetname, housenr, payment, savedGender]
	    console.log(allInfo);
	}
    }
})

const vm3 = new Vue ({
    el: '#contactinfo',
    data: {
	vname: "",
	vemail: "",
	vstreetname: "",
	vhousenr: "",
	vpayment: "Debit Card",
	vgenders: "Prefer not to say"
    }
})
*/
