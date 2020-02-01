import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTvCount: 10, // The TV inventory
    isLarryHappy: true,
    isJennyHappy: true,
    // sendCallToWarehouse: false,
    openWarehouse: false
  },

  getters: {
    happyStaff: state => {
      console.log("test");
      return state.isLarryHappy && state.isJennyHappy;
    }
  },

  mutations: {
    // Jenny
    removeTv(state, amount) {
      // For now we allow Jenny to remove one TV at a time
      state.totalTvCount -= amount;
    }
  },

  actions: {
    // Larry
    removeTv(context, amount) {
      // For now we only remove a tv,
      // but this action can contain logic
      // so we could expand it in the future.
      // console.log(context, amount);
      if (context.state.totalTvCount >= amount) {
        console.log(context.state.totalTvCount);
        context.commit("removeTv", amount);
      }
    },
    callingWarehouse(state) {
      debugger;
      console.log("calling1");
      this.state.openWarehouse = true;
      console.log("status: " + this.state.openWarehouse);
    },
    deliveryProducts(context, amount) {
      console.log("Delivering product");
      this.state.totalTvCount = amount;
      this.state.openWarehouse = false;
    }
  }
});
