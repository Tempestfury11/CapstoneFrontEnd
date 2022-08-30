<template>
  <div id="main" class="product">
    <div class="container">
      <div class="card" v-if="game">
      <img id="image" class="img-fluid" :src="game.img" />
        <div class="card_load"></div>
        <div class="card_load_extreme_title">{{game[0].title}}</div>
        <div class="card_load_extreme_descripion">{{game[0].descripion}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('getproduct',this.$route.params.id)
  },
  computed : {
    game(){
      return this.$store.state.product
    }
  }

}
</script>

<style scoped>
#main {
  background-image:url('https://i.postimg.cc/MZsP5fwK/Texture-Background-Dark-Spot-HD.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  overflow-x: hidden;
  padding: 100px 0;
  text-align: center;
}
</style>
