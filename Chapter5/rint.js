// Event Emitter 객체를 생성합니다.
//exports.timer = new process.EventEmitter();
var events = require('events');
exports.timer = new events();

// 이벤트를 강제로 발생시킵니다.
setInterval(function () {
    exports.timer.emit('tick');
}, 1000);
