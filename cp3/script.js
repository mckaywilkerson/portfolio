let app = new Vue({
  el: '#app',
  data: {
    number: '1',
    max: '300',
    player: {
      first_name: '',
      last_name: '',
      position: '',
      id: '',
      team: {
        name: '',
      }
    },
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
    showPlayer: false,
  },
  created() {
    this.xkcd();
  },
  watch: {
    number(value, oldvalue) {
      if (oldvalue === '') {
        this.max = value;
      } else {
        this.xkcd();
      }
    },
  },
  methods: {
    async xkcd() {
      this.loading = true;
      try {
        let response = await axios.get('https://www.balldontlie.io/api/v1/players/' + this.number);
        this.showPlayer = false;
        this.player = response.data;
        this.loading = false;
        this.number = response.data.id;
        return true;
      } catch (error) {
        this.loading = false;
        this.number = this.max;
        console.log(error);
      }
    },
    firstComic() {
      this.number = 1;
    },
    previousComic() {
      this.number = this.player.id - 1;
      if (this.number < 1)
      this.number = 1;
    },
    nextComic() {
      this.number = this.player.id + 1;
      if (this.number > this.max)
      this.number = this.max
    },
    lastComic() {
      this.number = this.max
    },
    getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
    },
    randomComic() {
      this.number = this.getRandom(1, this.max);
    },
    addComment() {
      if (!(this.number in this.comments))
        Vue.set(app.comments, this.number, new Array);
      this.comments[this.number].push({
        author: this.addedName,
        text: this.addedComment
      });
      this.addedName = '';
      this.addedComment = '';
    },
    showTeam() {
      this.showPlayer = true;
    }
  }
});
