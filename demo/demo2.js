
layui.use('form', function () {
  var form = layui.form;

  //各种基于事件的操作，下面会有进一步介绍
});
layui.use('carousel', function () {
  var carousel = layui.carousel;
  //建造实例
  carousel.render({
    elem: '#carousel3',
    width: '233px', //设置容器宽度
    height: '24px',
    interval: 1000,
    arrow: 'always',
    autoplay: 'none'
    //  height:'200px',
  });
});

layui.use('carousel', function () {
  var carousel = layui.carousel;
  //建造实例
  carousel.render({
    elem: '#carousel1',
    width: '220px', //设置容器宽度
    height: '240px',
    interval: 1000,
    arrow: 'none',
    autoplay: 'none'
    //  height:'200px',
  });
});
layui.use('carousel', function () {
  var carousel = layui.carousel;
  //建造实例
  carousel.render({
    elem: '#carousel2',
    width: '220px', //设置容器宽度
    height: '300px',
    interval: 1000000,
    arrow: 'none',
    autoplay: 'none',
    indicator: 'outside'
    //  height:'200px',
  });
});
layui.use('carousel', function () {
  var carousel = layui.carousel;
  //建造实例
  carousel.render({
    elem: '#carousel',
    width: '980px', //
    height: '320px',
    arrow: 'none',
    interval: 100000,
    autoplay: 'none'
    //  height:'200px',
  });
});
layui.use('laypage', function () {
  var laypage = layui.laypage;

  laypage.render({
    elem: 'test1',
    count: 100,
    groups: 5,
    layout: ['count', 'prev', 'page', 'skip', 'next'],
  });
});



// 公告滚动

var timer = null;
var speed = 4;
var od = document.getElementById("wrapper");
var au = od.getElementsByTagName('ul')[0];
var ali = au.getElementsByTagName('li');
au.innerHTML = au.innerHTML + au.innerHTML;
au.style.width = ali[0].offsetWidth * ali.length + 'px';
timer12 = setInterval(move, 30)
function move() {
  if (au.offsetLeft < -au.offsetWidth / 2) {
    au.style.left = '0';
  }
  if (au.offsetLeft > 0) {
    au.style.left = -au.offsetWidth / 2 + 'px';
  }
  au.style.left = au.offsetLeft + speed + 'px';
  //   console.log(2)
}
od.onmouseover = function () {
  clearInterval(timer12);
}
od.onmouseout = function () {
  timer12 = setInterval(move, 30)
}
document.getElementById("g-notice-prev").onclick = function () {
  // console.log(1)
  speed = -4;
}
document.getElementById("g-notice-next").onclick = function () {
  // console.log(1)
  speed = 4;
}

// var nav=document.getElementsByClassName('g-nav')[0];
// var navLI=nav.getElementsByTagName("li");
// // var navLI=document.querySelector('.g-nav li');
// for(var i=0;i<navLI.length;i++){
//   (function(i){
//     navLI[i].onclick = function () {
//       navLI[i].classlist.add="active"
//     alert(i);
// };
// })(i)
// }

jQuery.clickPlugin = {
  click: function (selector,node,class1,count,childnode1) {
    $(selector).click(function () {
      if(count){
          $(this).siblings(node).children(childnode1).removeClass(class1);  
        $(this).children(childnode1).addClass(class1);   
      }else{
        $(this).siblings(node).removeClass(class1);  
        $(this).addClass(class1); 
      }
           
    })
      
  }
}

$.clickPlugin.click(".g-nav li",'li','active-this',true,'a');
$.clickPlugin.click(".search-nav li",'li','active',false);
$.clickPlugin.click(".f-tab-top h2",'h2','h2-active',false);



$