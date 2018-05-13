function timer(){
    let start = $('#start-timer');
    let stop = $('#stop-timer');
    $(start).on('click', pressStart);
    $(stop).on('click', pause);
    let seconds = $('#seconds');
    let minutes = $('#minutes');
    let hours = $('#hours');

    let second = 0;

    let interval = null;


    function pressStart() {
        if(interval === null){
            interval = setInterval(createTime, 1000);
        }


    }

    function pause() {

        clearInterval(interval);
        interval = null;
    }

    function createTime() {
        second++;
        hours.text(('0' + Math.floor(second / 60 / 60)).slice(-2));
        minutes.text(('0' + Math.floor((second  / 60) % 60)).slice(-2));
        seconds.text(('0' + second % 60).slice(-2));
    }


}