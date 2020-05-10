const MS_PER_CHORD = 1000; // 1000 milliseconds for each chord

let view = new Vue({
  el: "#app",
  data: {
    chords: [
      { name: "E", checked: false },
      { name: "A", checked: false },
      { name: "D", checked: false },
    ],
    currentChord: "",
    secondsLeft: 60,
    timesUp: false,
  },
  methods: {
    start: function () {
      this.timesUp = false;
      this.secondsLeft = 60;
      let intervalId = setInterval(() => {
        let selectedChords = this.chords.filter((chord) => chord.checked);
        this.currentChord =
          selectedChords[
            Math.floor(Math.random() * selectedChords.length)
          ].name;
        if (--this.secondsLeft <= 0) {
          clearInterval(intervalId);
            this.timesUp = true;
        }
      }, MS_PER_CHORD);
    },
  },
});
