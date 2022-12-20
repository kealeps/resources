var socket = new SockJS('popup-dev.shopwin.io/checkout/websocket');
stompClient = Stomp.over(socket);
stompClient.connect({}, function (frame) {
    stompClient.subscribe('/topic/messages', function (greeting) {
        console.log(greeting);
    });
});