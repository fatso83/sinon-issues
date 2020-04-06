import FakeTimers from "@sinonjs/fake-timers";

FakeTimers.install();

const dateObj = Date;

console.log(new Date().getTime());
console.log(dateObj.now());
