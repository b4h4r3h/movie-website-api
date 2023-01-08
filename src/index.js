import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieBox from './movieBoxComponent';
import "./style.css"
import "./Font.css"
const movie = {
  "mostviewedvideos": [
    {
      "id": "49576207",
      "title": "لپ تاپ گیمینگ خریدم !    از دم اقساط هر ماه هزار تومن !!!!!!",
      "username": "HITMAAN2",
      "userid": "15337078",
      "visit_cnt": 6955,
      "uid": "QTtcZ",
      "isHidden": false,
      "process": "no_stat",
      "big_poster": "https://static.cdn.asset.aparat.com/avt/49576207-6189-b__4898.jpg",
      "small_poster": "https://static.cdn.asset.aparat.com/avt/49576207-6189__4898.jpg",
      "profilePhoto": "https://www.aparat.com/public/public/user_data/profile_photo/5113/15337078-m.jpg",
      "duration": 315,
      "sdate": "10 دی 1401",
      "create_date": "2022-12-31 17:27:34",
      "sdate_timediff": 82121,
      "frame": "https://www.aparat.com/video/video/embed/videohash/QTtcZ/vt/frame",
      "official": "no",
      "autoplay": true,
      "video_date_status": "notset",
      "360d": false,
      "deleteurl": "",
      "imdb": 8.9,
      "rate": 97+ "%"
    },
    {
      "id": "49557418",
      "title": "هادی چوپان چقدر غذا و مکمل میخوره ؟",
      "username": "fit",
      "userid": "1236519",
      "visit_cnt": 9246,
      "uid": "EPIAM",
      "isHidden": false,
      "process": "done",
      "big_poster": "https://static.cdn.asset.aparat.com/avt/49557418-7657-b__9670.jpg",
      "small_poster": "https://static.cdn.asset.aparat.com/avt/49557418-7657__9670.jpg",
      "profilePhoto": "https://www.aparat.com/public/public/user_data/profile_photo/413/1236519-m.jpg",
      "duration": 211,
      "sdate": "9 دی 1401",
      "create_date": "2022-12-30 18:17:33",
      "sdate_timediff": 165522,
      "frame": "https://www.aparat.com/video/video/embed/videohash/EPIAM/vt/frame",
      "official": "yes",
      "autoplay": true,
      "video_date_status": "notset",
      "360d": false,
      "deleteurl": "",
      "imdb": 3.4,
      "rate": 82+ "%"
    },
    {
      "id": "49540307",
      "title": "فیلیمو مدرسه _BTS_درس خوندن",
      "username": "Nazani_n",
      "userid": "15673173",
      "visit_cnt": 672,
      "uid": "9QR8G",
      "isHidden": false,
      "process": "done",
      "big_poster": "https://static.cdn.asset.aparat.com/avt/49540307-2477-b__8536.jpg",
      "small_poster": "https://static.cdn.asset.aparat.com/avt/49540307-2477__8536.jpg",
      "profilePhoto": "https://www.aparat.com/public/public/aparat/img/global/avatar-is-channel.png",
      "duration": 255,
      "sdate": "8 دی 1401",
      "create_date": "2022-12-29 18:34:08",
      "sdate_timediff": 250927,
      "frame": "https://www.aparat.com/video/video/embed/videohash/9QR8G/vt/frame",
      "official": "no",
      "autoplay": true,
      "video_date_status": "notset",
      "360d": false,
      "deleteurl": "",
      "imdb": 5.5,
      "rate": 71+ "%"
    },
    {
      "id": "49571302",
      "title": "فولادی‌ها کرونا را دور زدند",
      "username": "ecoiran",
      "userid": "2650407",
      "visit_cnt": 442,
      "uid": "iqOWC",
      "isHidden": false,
      "process": "done",
      "big_poster": "https://static.cdn.asset.aparat.com/avt/49571302-8614-b__1003.jpg",
      "small_poster": "https://static.cdn.asset.aparat.com/avt/49571302-8614__1003.jpg",
      "profilePhoto": "https://www.aparat.com/public/public/user_data/profile_photo/884/2650407-m.jpg",
      "duration": 283,
      "sdate": "10 دی 1401",
      "create_date": "2022-12-31 13:26:16",
      "sdate_timediff": 96599,
      "frame": "https://www.aparat.com/video/video/embed/videohash/iqOWC/vt/frame",
      "official": "yes",
      "autoplay": true,
      "video_date_status": "notset",
      "360d": false,
      "deleteurl": "",
      "imdb": 6.7,
      "rate": 68+ "%"
    },
    {
      "id": "49571446",
      "title": "آیا زمستان فصل پایان کوددهی  گیاهان است؟!",
      "username": "golon.ir",
      "userid": "5337378",
      "visit_cnt": 460,
      "uid": "fjVwK",
      "isHidden": false,
      "process": "done",
      "big_poster": "https://static.cdn.asset.aparat.com/avt/49571446-6240-b__7101.jpg",
      "small_poster": "https://static.cdn.asset.aparat.com/avt/49571446-6240__7101.jpg",
      "profilePhoto": "https://www.aparat.com/public/public/user_data/profile_photo/1780/5337378-m.jpg",
      "duration": 410,
      "sdate": "10 دی 1401",
      "create_date": "2022-12-31 13:32:40",
      "sdate_timediff": 96215,
      "frame": "https://www.aparat.com/video/video/embed/videohash/fjVwK/vt/frame",
      "official": "no",
      "autoplay": true,
      "video_date_status": "notset",
      "360d": false,
      "deleteurl": "",
      "imdb": 7.3,
      "rate": 55+ "%"
    },
    {
      "id": "49572001",
      "title": "مرغ ناردونی در ایستگاه شکموها",
      "username": "istgaheshekamoha",
      "userid": "11323639",
      "visit_cnt": 895,
      "uid": "lqpAe",
      "isHidden": false,
      "process": "done",
      "big_poster": "https://static.cdn.asset.aparat.com/avt/49572001-9052-b__1334.jpg",
      "small_poster": "https://static.cdn.asset.aparat.com/avt/49572001-9052__1334.jpg",
      "profilePhoto": "https://www.aparat.com/public/public/user_data/profile_photo/3775/11323639-m.jpg",
      "duration": 460,
      "sdate": "10 دی 1401",
      "create_date": "2022-12-31 13:59:44",
      "sdate_timediff": 94591,
      "frame": "https://www.aparat.com/video/video/embed/videohash/lqpAe/vt/frame",
      "official": "no",
      "autoplay": true,
      "video_date_status": "notset",
      "360d": false,
      "deleteurl": "",
      "imdb": 8.2,
      "rate": 64+ "%"
    },
    {
      "id": "49570514",
      "title": "تجدید میثاق ملت با ولایت و خلق حماسه‌ای دیگر در سالروز یوم‌الله ۹ دی",
      "username": "bonyaddefa",
      "userid": "5357984",
      "visit_cnt": 15446,
      "uid": "0CYD3",
      "isHidden": false,
      "process": "no_stat",
      "big_poster": "https://static.cdn.asset.aparat.com/avt/49570514-3664-b__6949.jpg",
      "small_poster": "https://static.cdn.asset.aparat.com/avt/49570514-3664__6949.jpg",
      "profilePhoto": "https://www.aparat.com/public/public/user_data/profile_photo/1786/5357984-m.jpg",
      "duration": 555,
      "sdate": "10 دی 1401",
      "create_date": "2022-12-31 12:44:11",
      "sdate_timediff": 99124,
      "frame": "https://www.aparat.com/video/video/embed/videohash/0CYD3/vt/frame",
      "official": "yes",
      "autoplay": true,
      "video_date_status": "notset",
      "360d": false,
      "deleteurl": "",
      "imdb": 9.1,
      "rate": 97+ "%"
    },
    {
      "id": "32186244",
      "title": "تیزر فیلم تئاتر نا - ب - غه ، ( لینک تماشای فیلم تئاتر در قسمت توضیحات )",
      "username": "RaHe_ShiRi",
      "userid": "10087671",
      "visit_cnt": 43480,
      "uid": "2EwMB",
      "isHidden": false,
      "process": "done",
      "big_poster": "https://static.cdn.asset.aparat.com/avt/32186244-8175-b__7301.jpg",
      "small_poster": "https://static.cdn.asset.aparat.com/avt/32186244-8175__7301.jpg",
      "profilePhoto": "https://www.aparat.com/public/public/user_data/profile_photo/3363/10087671-m.jpg",
      "duration": 53,
      "sdate": "25 فروردین 1400",
      "create_date": "2021-04-14 11:13:51",
      "sdate_timediff": 54194544,
      "frame": "https://www.aparat.com/video/video/embed/videohash/2EwMB/vt/frame",
      "official": "no",
      "autoplay": true,
      "video_date_status": "notset",
      "360d": false,
      "deleteurl": "",
      "imdb": 6.2,
      "rate": 54+ "%"
    },
    {
      "id": "32193876",
      "title": "نشست آزادی تجارت، راهبرد خروج از تنگنای اقتصادی ایران  | تحول 1400",
      "username": "AbbasAkhoundi",
      "userid": "5811113",
      "visit_cnt": 31268,
      "uid": "pEQts",
      "isHidden": false,
      "process": "done",
      "big_poster": "https://static.cdn.asset.aparat.com/avt/32193876-5212-b__4685.jpg",
      "small_poster": "https://static.cdn.asset.aparat.com/avt/32193876-5212__4685.jpg",
      "profilePhoto": "https://www.aparat.com/public/public/user_data/profile_photo/1938/5811113-m.jpg",
      "duration": 3389,
      "sdate": "25 فروردین 1400",
      "create_date": "2021-04-14 13:58:29",
      "sdate_timediff": 54184666,
      "frame": "https://www.aparat.com/video/video/embed/videohash/pEQts/vt/frame",
      "official": "yes",
      "autoplay": true,
      "video_date_status": "notset",
      "360d": false,
      "deleteurl": "",
      "imdb": 3.4,
      "rate": 43+ "%"
    },
    {
      "id": "32200093",
      "title": "وقتی از شیر کاله حرف می زنیم از چه حرف می زنیم.",
      "username": "KallehDairy",
      "userid": "603899",
      "visit_cnt": 50673,
      "uid": "WMOch",
      "isHidden": false,
      "process": "done",
      "big_poster": "https://static.cdn.asset.aparat.com/avt/32200093-9299-b__4003.jpg",
      "small_poster": "https://static.cdn.asset.aparat.com/avt/32200093-9299__4003.jpg",
      "profilePhoto": "https://www.aparat.com/public/public/user_data/profile_photo/202/603899-m.jpg",
      "duration": 361,
      "sdate": "25 فروردین 1400",
      "create_date": "2021-04-14 16:42:47",
      "sdate_timediff": 54174808,
      "frame": "https://www.aparat.com/video/video/embed/videohash/WMOch/vt/frame",
      "official": "yes",
      "autoplay": true,
      "video_date_status": "notset",
      "360d": false,
      "deleteurl": "",
      "imdb": 7.6,
      "rate": 55+ "%"
    }
  ],
  "ui": {
    "pagingForward": "https://www.aparat.com//etc/api/mostviewedvideos/curoffset/40/most_id/13187546/moretype/forward",
    "pagingBack": ""
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div className='bg movie-poster'>
    {/* <img src='https://static.namava.ir/Content/Upload/Images/420744a4-432b-47ec-ac87-742020710e2a.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900' className='background'></img> */}
      <div className='wrapper'>
        <p className='big-title'> سریــال گارسیـــا</p>
        <div className='flex-40gap-row'>
          <div className='flex-8gap-row'>
            <img className='icon-24' src={require('./assets/heart black.png')}></img>
            {/* age jarime sham eshkal nadare, be bug khordam raftam donbale rahe hallesh */}
            <span className="font-bold vazirfa description-size">78%</span>
          </div>
          <p className='description-size'>IMDB: 7.1</p>
          <p className='description-size'>دوبله اختصاصی سایت</p>
        </div>
        <p>
        آنتونیا یک خبرنگار جوان است که به‌ طور تصادفی یک جاسوس حرفه ای به نام گارسیا را که به مدت <br>
        </br>چند دهه توسط سرویس ‌های مخفی منجمد شده بود، آزاد می کند و...
        </p>
      </div>
    </div>
    <div className='wrapper'>
      <div className='ov'>
        <div className='section-margin-top'>
          <p className='p-white title-font-size'>جدیدترین ها</p>
          <MovieBox data={movie}></MovieBox>
        </div>
        <div className='section-margin-top'>
          <p className='p-white title-font-size'>علمی تخیلی</p>
          <MovieBox data={movie}></MovieBox>
        </div>
        <div className='section-margin-top'>
          <p className='p-white title-font-size'>ویژه های سریالی</p>
          <MovieBox data={movie}></MovieBox>
        </div>
      </div>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
