<template>
  <div >

    <div id="search-bar">
        <form v-on:submit.prevent="search" class="search">
            <input type="text"  placeholder="Title" v-model="title">
            <button class="btn btn-primary">&#128269; Search</button>
        </form>
    </div>
    <div v-if="info">
        <div v-if="info.data.Response === 'False'">
            <h1>Not Found</h1>
        </div>
        <div v-else>
            <MovieCard v-bind:movie="info.data"></MovieCard>
        </div>
    </div>
    <div v-else>
        <Placeholder v-if="!info" ></Placeholder>
    </div>
  </div>
</template>

<script>
import MovieCard from "./movie_card.vue";
import Placeholder from "./placeholder"

export default {
  name: "home",
  data() {
      return {
          info: null,
          movie: null,
          title: ''
      }
  },
  components: {
    MovieCard,
    Placeholder
  },
  methods: {
      search:function (event){
          axios.get(`http://www.omdbapi.com/?t=${this.title}&apikey=5a5e9a3b`)
          .then((response) => {
              this.info = response
              console.log(this.info)
          })
          
      }
  },
};
</script>

<style>
    
#search-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 50px;
}

h1 {
    text-align: center;
    color: #1e3f5a;
}

button {
    display: inline;
}

input {
    height: 40px;
    width: 20rem;
}
</style>