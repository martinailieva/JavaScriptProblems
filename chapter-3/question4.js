class Watch {
  #date = new Date();
  #timeZones = [];
  #intervalId = undefined;
  #options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  constructor(date) {
    this.#date = date || new Date();
  }

  #incrementSeconds = () => this.#date.setSeconds(this.#date.getSeconds() + 1);

  #startTimer = () => {
    this.#intervalId = setInterval(() => {
      console.log("-----------------------------------------------");
      this.#timeZones.forEach((timeZone) =>
        console.log(
          `${timeZone}: ${this.#date.toLocaleString("en-US", {
            ...this.#options,
            timeZone,
          })}`
        )
      );

      this.#incrementSeconds();
    }, 1000);
  };

  showTime = (timeZone) => {
    if (!this.#timeZones.includes(timeZone)) {
      if (this.#intervalId) {
        clearInterval(this.#intervalId);
      }

      this.#timeZones.push(timeZone);
      this.#startTimer();
    }
  };

  hideTime = (timeZone) => {
    if (this.#timeZones.includes(timeZone)) {
      if (this.#intervalId) {
        clearInterval(this.#intervalId);
      }

      this.#timeZones = this.#timeZones.filter((tz) => tz !== timeZone);

      if (this.#timeZones.length > 0) {
        this.#startTimer();
      }
    }
  };
}

const watch = new Watch();

watch.showTime("Europe/Sofia");
watch.showTime("Europe/Berlin");

setTimeout(() => watch.hideTime("Europe/Berlin"), 5000);
setTimeout(() => watch.hideTime("Europe/Sofia"), 10000);
