<template>
    <Navbar/>
  <router-view/>
    <FooterView/>
</template>

<script>
import FooterView from "@/components/FooterView.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  components: {FooterView, Navbar},
};
</script>

<style>

</style>
