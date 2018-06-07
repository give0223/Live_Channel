//Golable var
var DelayScroll;

//Twitch API物件
var TW_Obj = {
        '_language': 'zh-TW',//頻道語言
        '_isloading': false,//載入狀態
        'channel_Index': 0,//位移筆數
        'limit': 9,//最大回傳資料數
    };

//AJAX get twitch data
//getData(頻道語言,回呼函式)
function getData(GetData_Obj,callback) {
    //loading now
    GetData_Obj._isloading = true;
    //API Key
    var client_id = 'tlhkyl4jw6dvwl4lamhmcll4aq79ur';
    //URL
    var Url = `https://api.twitch.tv/kraken/streams/?&stream_type=live&language=${GetData_Obj._language}&limit=${GetData_Obj.limit}&offset=${GetData_Obj.channel_Index}`;   
    var xhr = new XMLHttpRequest();
    xhr.open('GET', Url, true);
    xhr.setRequestHeader('Client-ID', client_id);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            var response = JSON.parse(this.responseText);
            //將資料放入CallBack function
            callback(null, response);
        }
    };
}

//呼叫getData函式取得Twitch資料，再將取得資料放入HTML中
//appendData(頻道語言)
function appendData(Data_Obj) {
    //呼叫getData執行CallBack function處理資料
    getData(Data_Obj,function(error, data) {
        var Streams = data.streams;
        //宣告取得主畫面最外層框架
        var main_row = document.querySelector('.channel_row');
        //將每個頻道依序加入框架中
        Streams.forEach(item => {
            var channel_col = ViewCol(item);
            main_row.innerHTML += channel_col;
        });               
    });
    Data_Obj._isloading = false;
    Data_Obj.channel_Index = Data_Obj.channel_Index + 10;
    console.log('Data_Obj.channel_Index = ' + Data_Obj.channel_Index);
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

function Timefun() {
    DelayScroll = setTimeout(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            if(!TW_Obj._isloading) {
                appendData(TW_Obj);
                console.log('TW_Obj.channel_Index = ' + TW_Obj.channel_Index);
            }
        }
    },500);
}

//Loading
$(window).ready(function() {
    //建立初始畫面
    appendData(TW_Obj);
    //網頁下滑後再讀取其他頻道
    $(window).scroll(function () {
        //清除下滑讀取延遲函式 
        clearTimeout(DelayScroll);
        //執行下滑讀取延遲函式
        Timefun();
    });
});
