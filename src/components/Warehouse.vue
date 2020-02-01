<template>
  <div class="warehouse">
    <div v-show="openWarehouse">
      <p>Hello!, this is the warehouse, how many TVs you want? {{amountOfProd}}</p>
      <input type="number" v-model="amountOfProd">
      <button @click="prepareCommand">Delivery {{amountOfProd}}</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Warehouse",
  data() {
    return {
      amountOfProd: 10
    };
  },
  computed: {
    ...mapState(["openWarehouse"])
  },
  methods: {
    prepareCommand() {
      this.$store.dispatch("deliveryProducts", this.amountOfProd);
    }
  }
};
</script>

<style lang="scss" scoped>
.warehouse {
  width: 300px;
  margin: auto;
  padding: 10px 0;
  border-radius: 10px;
  text-align: center;
  background-color: red;
  font-size: 0.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>