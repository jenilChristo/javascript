function MyThing(options) {
  this.setupOptions(options);
  console.log("1")
  process.nextTick(() => {
    this.startDoingStuff();
  });
}

const thing = new MyThing();
thing.getReadyForStuff();