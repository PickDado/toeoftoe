<template>
  <!-- <h1>TicTacToe!</h1> -->

  <h1>TOE OF TOE!</h1>
  <h2>Tocca a {{ this.$store.state.turno }}</h2>
  <div class="container"><button class="reset" onclick="window.location.reload()">Reset</button>  </div>
  
  

  <div class="container"><ToeBox /><ToeBox /><ToeBox /></div>
  <div class="container"><ToeBox /><ToeBox /><ToeBox /></div>
  <div class="container"><ToeBox /><ToeBox /><ToeBox /></div>

  <img class="piede" src="./assets/piede.png" alt="Piedi e dita" width="100" />
  

  
</template>

<script>
import ToeBox from "./components/ToeBox.vue";

export default {
  name: "App",
  components: {
    ToeBox,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: flex;
  align-content: center;
  justify-content: center;
}
.reset {
  font-size: x-large;
  margin-bottom: 1%;

}

.piede{
  margin-top:1%;
}
</style>
