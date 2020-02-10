function menuItem(name, img, desc, kcal, gluten, lactose) {
    this.name = name;
    this.img = img;
    this.description = desc;
    this.calories = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.info = function() {
	return this.name + ', ' + this.calories;
    };
}

let burger1 = new menuItem('The Meat Peak','https://i.imgur.com/hlI0BUG.png','A lot of meat (not vegetarian, duh)','Over 9000 cals', true, true);
let burger2 = new menuItem('The Improbable Burger', 'https://non-gmoreport.com/wp-content/uploads/2019/11/Impossible-burger_transp-800x600.png','It\'s vegetarian, we promise', 'Still a lot of calories though', false, false);
let burger3 = new menuItem('The Barely a Burger Burger', 'https://www.pngkit.com/png/full/180-1802263_subway-sandwich-png-subway-american-steakhouse-melt.png', 'Does this even count as a burger? (not veggie)', 'Looks like a sandwich so prob only 100 cals', true, false);
let burger4 = new menuItem('The Whoopsie', 'https://www.stickpng.com/assets/images/5882488ae81acb96424ffaaf.png', 'We didn\'t copy the whooper we promise', '645 kcal', true, true);
let burger5 = new menuItem('The Friskis', 'https://www.gamereactor.se/media/forum/se/16627244_42.jpg', 'We did copy this one from MAX though ngl', '789 kcal (I actually don\'t know I\'m just making this shit up)', false, true);

let menu = [ burger1, burger2, burger3, burger4, burger5 ];
/*
let wrapper = document.getElementById("bs");

let burger;

for (burger of menu) {
    let listDiv = document.createElement("div");
    listDiv.className="burger";
    
    let listHeader = document.createElement("h3");
    let listName = document.createTextNode(burger.name);
    listHeader.appendChild(listName);
    listDiv.appendChild(listHeader);
    
    let listPicture = document.createElement("img");
    listPicture.className="img";
    listPicture.src=burger.img;
    listDiv.appendChild(listPicture);
    
    let listInfo = document.createElement("li");
    listInfo.className="info";
    let listDesc = document.createTextNode(burger.description);
    listInfo.appendChild(listDesc);
    
    if (burger.lactose) {
  	let pElem = document.createElement("li");
  	let lactose = document.createTextNode("Contains Lactose");
	pElem.appendChild(lactose);
  	listInfo.appendChild(pElem);
    }
    if (burger.gluten) {
 	let pElem = document.createElement("li");
  	let gluten = document.createTextNode("Contains Gluten");
	pElem.appendChild(gluten)
  	listInfo.appendChild(pElem);
    }
    listDiv.appendChild(listInfo);
    wrapper.appendChild(listDiv);
}
*/

/*
  <script src="https://vuejs.org/js/vue.js"></script>

  <div id="myID">
  <h1>
  "Välj en burgare"
  </h1>
  </div>
*/
