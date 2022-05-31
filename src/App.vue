<template>
  <div id="app">
    <search @search="searchMovie"/>
    <suspense>  
        <list :movies="movieList"/>
        <!--Loading info-->
    </suspense>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Search from './components/title-search/Form.vue';
import MovieRequestService from '@/services/movie-request.service';
import Movie from '@/models/movie-info.entity'
import List from './components/movie-list/List.vue';

@Component({
  components: {
    HelloWorld,
    Search,
    List,
  },
})
export default class App extends Vue {
  private movieList: Movie[] = [];

  private listing(info: Movie[]){
    console.log(info)
  }

  private searchMovie(name: string){
    MovieRequestService.getMovie(name)
      .then((response) => {
        const {data} = response;
        this.movieList = data.Search.map((obj: any) => new Movie(obj));
        this.listing(this.movieList)
      });    
  }

  
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
</style>
