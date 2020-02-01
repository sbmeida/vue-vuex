<template>
  <div class="customer">
    <!-- <h1>I'm a customer</h1> -->
    <p>I see {{ totalTvCount }} TVs!</p>
    <p v-show="happyStaff">The staff seems happy!</p>
    <p v-show="!totalTvCount">I can't buy any
      <br>
      <button @click="sendCallToWarehouse">call warehouse!?</button>
    </p>

    <!-- <div v-show="openWarehouse">
      <p>Hello!, this is the warehouse, how many TVs you want? {{amountOfProd}}</p>
      <input type="number" v-model="amountOfProd">
      <button @click="prepareCommand">Delivery {{amountOfProd}}</button>
    </div>-->
    <button :disabled="!totalTvCount" @click="buyTv">Buy TV</button>
    <button :disabled="totalTvCount < 2" @click="buyTwoTvs">Buy Two TVs</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Customer",
  computed: {
    // If you have only one state/getter object spread operators are not necessarily needed
    // But we'll use it for now, so you can see how they are used
    // mapState/mapGetter accepts an array of strings as parameter
    ...mapState(["totalTvCount"]),
    ...mapGetters(["happyStaff"])
  },
  methods: {
    ...mapActions(["removeTv", "deliveryProducts"]),
    buyTv() {
      // Dispatch the action to buy a TV
      this.$store.dispatch("removeTv", 1);
    },
    buyTwoTvs() {
      // Dispatch the action to buy two TVs
      this.$store.dispatch("removeTv", 2);
    },
    sendCallToWarehouse() {
      this.$store.dispatch("callingWarehouse");
    }
  }
};
</script>

<style scoped>
</style>