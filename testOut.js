'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var ws = new WebSocket('ws://localhost:8181');
ws.onopen = function (e) {
    console.log('connection to server opened');
};
$(function () {
    var b = function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var b;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return a();

                        case 2:
                            b = _context.sent;

                            console.log(b);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function b() {
            return _ref.apply(this, arguments);
        };
    }();

    $('#send').click(function () {
        ws.send($('#message').val());
    });

    function a() {
        return 1;
    }

    b();
});
