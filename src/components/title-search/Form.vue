<template>
    <div class="searcher">
      <input type="text" placeholder="Digite o nome do filme" id="input-search" v-model="movieName" required>
      <!--{{movieName}}-->
      <button id="btn-request" @click="onSearch()"><img src="@/assets/icons8-search.svg" alt="Request Button"></button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  private movieName = '';
  
  private onSearch(){
    this.$emit('search', this.movieName);
  }
}

</script>

<style>
.searcher{
    justify-content: center;
    align-content: center;
    display: flex;
    padding: 20px 0;
    background-color:darkviolet;
}

#input-search{
    border-radius: 0px;
    border: 0;
    padding:5px;
    outline: 0;
}

#btn-request{
    border-radius: 0px;
    border: 0;
    padding:5px;
}

#btn-request:hover{
    background-color:darkgrey;
    color: aliceblue;
    transition: 0.3s;
}

input:invalid{
  border:2px dotted red;
}
</style>
