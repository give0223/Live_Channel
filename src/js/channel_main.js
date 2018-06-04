//AJAX get twitch data
function getData(callback) {
    //API Key
    var client_id = 'tlhkyl4jw6dvwl4lamhmcll4aq79ur';
    //最大回傳資料數
    var limit = '9';
    //URL
    var Url = `https://api.twitch.tv/kraken/streams/?
               &stream_type=live&limit=${limit}`;   
    var xhr = new XMLHttpRequest();
    xhr.open('GET', Url, true);
    xhr.setRequestHeader('Client-ID', client_id);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            var data = JSON.parse(this.responseText);
            callback(null, data);
        }
    };
}

function appendData() {
    getData(null,function(error, data) {
        console.log("err: " + error + " , getdata: " + data);
    });
}

// getData();
appendData();