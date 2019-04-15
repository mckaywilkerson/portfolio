var app = new Vue({
  el: '#app',
  data: {
    items: [],
    totalPrice: 0,
    showPrice: false,
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        this.showPrice = false;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async CalcPrice() {
      try {
        let response = await axios.get("/api/items");
        this.totalPrice = 0;
        // for loop where I add up all the prices
        for(i=0; i<response.data.length;i++) {
          this.totalPrice += response.data[i].price;
        }
        this.showPrice = true;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
});
