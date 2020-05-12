const MS_PER_MINUTE = 60000;

let view = new Vue({
  el: "#app",
  data: {
    chords: [
      { name: "E", checked: false },
      { name: "A", checked: false },
      { name: "D", checked: false },
      { name: "G", checked: false },
      { name: "C", checked: false },
      { name: "Em", checked: false },
      { name: "Dm", checked: false },
      { name: "Am", checked: false },
    ],
    goal: 30,
    currentChord: "",
    secondsLeft: 60,
    timesUp: false,
  },
  methods: {
    start: function () {
      this.timesUp = false;
      this.secondsLeft = 60;

      let selectedChords = this.chords.filter((chord) => chord.checked);
      if (selectedChords.length > 0) {
        let intervalId = setInterval(() => {
          this.currentChord =
            selectedChords[
              Math.floor(Math.random() * selectedChords.length)
            ].name;
          if (--this.secondsLeft <= 0) {
            clearInterval(intervalId);
            this.timesUp = true;
          }
        }, MS_PER_MINUTE / this.goal);
      }
    },
  },
});
