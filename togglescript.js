$(function () {
    var running = false;
    $(".wrapper1").scroll(function () {
        if (running) {
            running = false;
            return;
        }
        running = true;
        $(".wrapper2")
            .scrollLeft($(".wrapper1").scrollLeft());
    });
    $(".wrapper2").scroll(function () {
        if (running) {
            running = false;
            return;
        }
        running = true;
        $(".wrapper1")
            .scrollLeft($(".wrapper2").scrollLeft());
    });
});