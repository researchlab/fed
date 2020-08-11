import { fromJS } from 'immutable';
import { QRCODE } from './constants';

const defaultState = fromJS({
   topicList: [{
       id: 1,
       title: "社会热点",
       imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
   },
   {
    id: 2,
    title: "社会热点",
    imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
    id: 3,
    title: "社会热点",
    imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
 id: 4,
 title: "社会热点",
 imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
    id: 5,
    title: "社会热点",
    imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
 id: 6,
 title: "社会热点",
 imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
 id: 7,
 title: "社会热点",
 imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
id: 8,
title: "社会热点",
imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
}
],
articleList: [{
    id: 1,
    title: "胡歌12年后首谈中国歌王争霸赛",
    desc: "那一年, 胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛",
    imgUrl: "https://upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
},
{
    id: 2,
    title: "胡歌12年后首谈中国歌王争霸赛",
    desc: "那一年, 胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛",
    imgUrl: "https://upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
},
{
    id: 3,
    title: "胡歌12年后首谈中国歌王争霸赛",
    desc: "那一年, 胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛",
    imgUrl: "https://upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
}
],
recommendList:[{
    id:1,
    title:"简书会员",
    imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
},{
    id:2,
    title:"优选连载",
    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
},
{
    id:3,
    title: "简书版权",
    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
},
{
    id:4,
    title: "简书大学堂",
    imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
}
],
qrCode: false
});

export default (state = defaultState, action) => {
    switch (action.type){
        case QRCODE:
            return state.set('qrCode',action.qrCode);
        default:
            return state;
    }
    
}
