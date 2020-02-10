const vm1 = new Vue ({
    el: '#bs',
    data: {
	food,
	burgerCheck: ""
    }
})

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
