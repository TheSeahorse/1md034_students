/*
<script src="https://vuejs.org/js/vue.js"></script>

<div id="burgerList">
  <h1>
    "Välj en burgare"
  </h1>
  <div v-for="burger in menu">
    {{ burger.name }}
    <img v-bind:src="burger.img">
    <p>
    {{ burger.desc }}
    </p>
    <p v-if="burger.lactose">
    Contains lactose
    </p>
    <p v-if="burger.gluten">
    Contains gluten
    </p>
  </div>
</div>
*/

const vm = new Vue ({
	el: '#burgerList',
  	data: {
    menu
    }
})
