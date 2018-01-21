var simpleSlider = new Vue({
  el: "#simpleSlider",
  data: {
    message: "Simple slider",
    firstSliderValue: 50,
    secondSliderValue: 50
  },
  watch: {
    firstSliderValue: function(newVal, oldVal) {
      var diff = newVal - oldVal;
      this.secondSliderValue -= diff;
    }
  }
})

var doubleSlider = new Vue({
  el: "#doubleSlider",
  data: {
    message: "Double moving slider",
    firstSliderValue: 50,
    secondSliderValue: 60  
  },
  watch: {
    firstSliderValue: function(newVal, oldVal) {
      var diff = 2 * (newVal - oldVal);
      this.secondSliderValue -= diff;
    }
  },
  mounted() {
    this.$refs.firstSlider.max = this.secondSliderValue + (this.$refs.secondSlider.max - this.secondSliderValue) / 2;
    this.$refs.firstSlider.min = this.secondSliderValue - (this.secondSliderValue - this.$refs.secondSlider.min) / 2;
  }
})
