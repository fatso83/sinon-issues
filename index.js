import FakeTimers from "@sinonjs/fake-timers";

FakeTimers.install();

console.log(new Date().getTime());
console.log(Date.now());
