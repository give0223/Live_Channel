//AJAX get twitch data
function getData(callback) {
    //API Key
    var client_id = 'tlhkyl4jw6dvwl4lamhmcll4aq79ur';
    //最大回傳資料數
    var limit = '9';
    var lang = 'zh-TW'
    //URL
    var Url = `https://api.twitch.tv/kraken/streams/?
               &stream_type=live&language=${lang}&limit=${limit}`;   
    var xhr = new XMLHttpRequest();
    xhr.open('GET', Url, true);
    xhr.setRequestHeader('Client-ID', client_id);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            var response = JSON.parse(this.responseText);
            callback(null, response);
        }
    };
}

function appendData() {
    getData(function(error, data) {
        var Streams = data.streams;
        ViewCol(Streams);
    });
}

//建立頻道畫面
function ViewCol(StreamData) {
    var row = document.querySelector('.channel_row');
    
}


var bodyload = document.querySelector('body');
bodyload.onload = function() {
    appendData();
};
