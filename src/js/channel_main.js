//AJAX get twitch data
function getData(callback) {
    //API Key
    var client_id = 'tlhkyl4jw6dvwl4lamhmcll4aq79ur';
    //最大回傳資料數
    var limit = '9';
    //語言
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

//呼叫getData函式取得Twitch資料，再將取得資料放入HTML中
function appendData() {
    getData(function(error, data) {
        var Streams = data.streams;
        //宣告取得主畫面最外層框架
        var main_row = document.querySelector('.channel_row');
        //將每個頻道依序加入框架中
        Streams.forEach(item => {
            var channel_col = ViewCol(item);
            main_row.innerHTML += channel_col;
        });
        
        
    });
}

//建立頻道畫面
function ViewCol(StreamData) {
    return `
            <div class='col'>
                <a href='${StreamData.channel.url}' target='_blank' title='${StreamData.channel.status}'>
                    <div class='preview'>
                        <img src='${StreamData.preview.medium}'>
                    </div>
                    <div class='button'>
                        <div class='avator'>
                            <img src='${StreamData.channel.logo}'>
                        </div>
                        <div class='intor'>
                            <div class='channel_name'>
                                ${StreamData.channel.status}
                            </div>
                            <div class='owner_name'>
                                ${StreamData.channel.display_name}
                            </div>
                        </div>
                    </div>
                </a>
            </div>`;
    
}

//Loading
$(window).ready(function() {
    appendData();
});
