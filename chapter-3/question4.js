class Watch {
  constructor(date = new Date(), format) {
    this.date = date;
    this.format = format;
  }

  showTime = () => {
    setInterval(() => {
      this.date = new Date();
      const hours = this.date.getHours();
      const minutes = this.date.getMinutes();
      const seconds = this.date.getSeconds();
      console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  };
}

const watch = new Watch();
console.log(watch.showTime());
