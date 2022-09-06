<template>
    <Navbar/>
    <CardLoader/>
  <router-view/>
    <FooterView/>
</template>

<script>
import FooterView from "@/components/FooterView.vue";
import Navbar from "@/components/Navbar.vue";
import CardLoader from "@/components/CardLoader.vue";
export default {
  components: { FooterView, Navbar, CardLoader, CardLoader },
};
</script>

<style>

</style>
