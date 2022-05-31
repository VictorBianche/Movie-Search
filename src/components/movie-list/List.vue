<template>
    <div class="movie-block">
        <ul class="movie-list">
          <li v-for="movie in movies" :key="movie.imdbID" class="movie">       
            <div class="poster"><img :src="movie.poster"></div>
            <div class="title" :id="movie.title"> {{movie.title}} </div>
            <div class="year"> {{movie.year}} </div>
          </li>
        </ul>
    </div> 
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Movie from '@/models/movie-info.entity'

@Component
export default class List extends Vue{
  @Prop({ default: [] }) 
  private movies!: Movie[];
}
</script>

<style>
ul {    
    list-style-type: none;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;    
}

.movie{
    /* border: solid 1px rgb(0, 255, 26); */
    width: 180px;
    height: 320px;
    justify-content: center;
    text-align: center;
    padding: 5px;
    background-color: rgba(0,0,0,0.85);
    display: block;
    margin: 5px;
    align-content: space-around;
}
.poster{
    /* border: solid 1px rgb(204, 255, 0); */
    padding-top: 5px;
}

.poster > img{
    /* border: solid 1px rgb(85, 0, 255); */
    height: 250px;
    width: 160px;
}

.title{
    /* border: solid 1px red; */
    justify-content: center;
    text-align: center;
    color: white;
    padding: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
}

.year{
    /* border: solid 1px rgb(255, 0, 242); */
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 12px;
    padding:2px;
}
</style>

