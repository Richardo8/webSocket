var ws = new WebSocket('ws://localhost:8181');
ws.onopen = function (e) { 
    console.log('connection to server opened')
}
$(function () {
    $('#send').click(function () {
        ws.send($('#message').val())
    })


    function a() {
        return 1;
    }

    async function b() {
        let b = await a();
        console.log(b);
    }

    b();


})
