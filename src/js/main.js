const MS_PER_CHORD = 1000; // 1000 milliseconds for each chord

let view = new Vue({
  el: "#app",
  data: {
    allChords: ["E", "A", "D"],
    selectedChords: ["E", "A", "D"],
    currentChord: "",
  },
  methods: {
    start: function (event) {
      let changesRemaining = 60;
      let intervalId = setInterval(() => {
        this.currentChord = this.selectedChords[
          Math.floor(Math.random() * this.selectedChords.length)
        ];
        if (--changesRemaining <= 0) {
          clearInterval(intervalId);
        }
      }, MS_PER_CHORD);
    },
  },
});
