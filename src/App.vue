<template>
  <div id="app">
    <Customer/>
    <Warehouse/>
  </div>
</template>

<script>
import Customer from "./components/Customer";
import Warehouse from "./components/Warehouse";

export default {
  name: "App",
  components: {
    Customer,
    Warehouse
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
