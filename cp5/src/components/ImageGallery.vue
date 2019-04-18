<template>
<div>
  <div class="content">
    <div class="image" v-for="photo in photos" v-bind:key="photo._id">
      <img :src="photo.path" />
      <p>{{photo.description}}</p>
      <p class="photoDate">
        <span v-if="photo.user.name">{{photo.user.name}}, </span>
        {{formatDate(photo.created)}}
      </p>
    </div>
  </div>

</div>
</template>


<script>
import moment from 'moment';

export default {
  name: 'ImageGallery',
  props: {
    photos: Array
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    }
  },
}
</script>



<style scoped>
.photoTitle {
  margin: 0px;
  font-size: 1.2em;
}

.photoDate {
  float: bottom;
  margin: 0px;
  font-size: 0.9em;
  font-weight: normal;
}

.content {
    width: 700px;
    padding: 20px;
    overflow: hidden;
}

.content img {
    margin-right: 15px;
    float: left;
}

p {

  margin: 0px;

}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  max-width: 100px;
  max-height: 100px;
  image-orientation: from-image;
}

</style>
