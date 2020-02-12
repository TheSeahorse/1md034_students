'use strict';
const socket = io();

const vm = new Vue ({
    el: '#main',
    data: {
	orderInt: 0,
	details: {x: 0, y: 0},
	localOrder: {x: -420, y: 0},
	orders: {},
	food,
	burgerCheck: [],
	burgerDisplay: "",
	burgerDispatch: [],
	vname: "",
	vemail: "",
	vpayment: "Debit Card",
	vgenders: "Prefer not to say"
    },
    methods: {
	getNext: function() {
	    /* This function returns the next available key (order number) in
	     * the orders object, it works under the assumptions that all keys
	     * are integers. */
	    this.orderInt += 1;
	    return this.orderInt;
	},
	addOrders: function(event) {
	    let allInfo = [this.vname, this.vemail, this.vpayment, this.vgenders, this.burgerCheck];
	    console.log(allInfo);
	    this.burgerDisplay = "";
	    for (let item in this.burgerCheck) {
		if (item != 0) {
		    this.burgerDisplay += ", ";
		}
		this.burgerDisplay += this.burgerCheck[item];
	    }
	    // When you click in the map, a click event object is sent as parameter
	    //to the function designated in v-on:click (i.e. this one).
	    //The click event object contains among other things different
	    //coordinates that we need when calculating where in the map the click
	    //actually happened.
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: this.localOrder,
		orderItems: this.burgerCheck,
	    });
	},
	displayOrder: function(event) {
	    
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    this.localOrder = {
		x: event.clientX - 10 - offset.x,
		y: event.clientY - 10 - offset.y,
	    }
	},
    }
    
})
