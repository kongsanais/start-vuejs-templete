<template>
  <v-app>
    <Header/>
    <Menu />
    <Content/>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/layout/Header";
import Menu from "@/components/layout/Menu";
import Content from "@/components/layout/Content";
import Footer from "@/components/layout/Footer";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Content,
    Footer
  },
  // mounted() {
  //   this.$store.dispatch({ type: "restoreLogin" });
  // },
};
</script>
<style></style>
