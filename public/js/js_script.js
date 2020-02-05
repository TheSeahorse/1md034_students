
function menuItem(name, img, desc, kcal, allergy) {
    this.name = name;
    this.img = img;
    this.description = desc;
    this.calories = kcal;
    this.allergy = allergy;
    this.info = function() {
	return this.name + ', ' + this.calories;
    };
}

let burger1 = new menuItem('The Meat Peak','https://i.imgur.com/hlI0BUG.png','A lot of meat (not vegetarian, duh)','Over 9000 cals', 'Don\'t eat');
let burger2 = new menuItem('The Improbable Burger', 'https://non-gmoreport.com/wp-content/uploads/2019/11/Impossible-burger_transp-800x600.png','It\'s vegetarian, we promise', 'Still a lot of calories though', 'Not gluten or lactose free');
let burger3 = new menuItem('The Barely a Burger Burger', 'https://www.pngkit.com/png/full/180-1802263_subway-sandwich-png-subway-american-steakhouse-melt.png', 'Does this even count as a burger? (not veggie)', 'Looks like a sandwich so prob only 100 cals', 'Contains the soul of a Soobway employee');
let burger4 = new menuItem('The Whoopsie', 'https://www.stickpng.com/assets/images/5882488ae81acb96424ffaaf.png', 'We didn\'t copy the whooper we promise', '645 kcal', 'Contains gluten, lactose and a damp stench');
let burger5 = new menuItem('The Friskis', 'https://www.max.se/contentassets/84cddbf059224933acc462f15c2d1d7a/product_friscoburgare.jpg', 'We did copy this one from MAX though ngl', '789 kcal (I actually don\'t know I\'m just making this shit up', 'Free from all allergy stuff, except half of them');

console.log( burger1.info() );
console.log( burger2.info() );
console.log( burger3.info() );
console.log( burger4.info() );
console.log( burger5.info() );

document.getElementById("burg1").innerHTML = burger1.info();
document.getElementById("burg2").innerHTML = burger2.info();
document.getElementById("burg3").innerHTML = burger3.info();
document.getElementById("burg4").innerHTML = burger4.info();
document.getElementById("burg5").innerHTML = burger5.info();
