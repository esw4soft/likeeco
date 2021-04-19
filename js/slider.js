 // 照片放入陣列
 let sliderbox = ["九份.jpg", "二寮觀日亭.jpg", "r-room3.jpg", "中正紀念堂.jpg", "六十石山2.jpg", "台北大稻埕.jpeg", "四草隧道1.jpg",
 "光之穹頂1.jpg", "西子灣2.jpg", "宜蘭羅東運動公園.jpeg"
]
let slidercontent = "";

// 迴圈產生dom
for (i = 0; i < sliderbox.length; i++) {

 slidercontent += `<li><img src="../img/${sliderbox[i]}" alt=""></li>`;

 $(".navul").append(`<li></li>`)
}
$(".imgul").append(slidercontent);


// 變數尺寸
var sliderindex = 0;
var sliderMove = 0;
let sliderCount = sliderbox.length;

// 把固定尺寸改成rwd動態修改尺寸
let sliderWidth = $(".wrapper").width();
$("#sliderimages").css("width", sliderCount * sliderWidth);

$("#pages li").eq(0).addClass("active");

// 改成on多事件
$("#pages li").on("mouseenter click", function () {
 sliderindex = $(this).index();
 goslide();

})

$('#sliderpre').click(function(){
    // alert("hi");
    sliderindex--;
    if(sliderindex<0)sliderindex=sliderCount-1;
    // sliderMove = 0 - sliderindex * 800;
    // $('.slider-images').css("left", sliderMove + "px");
    // $('#page li').siblings().css("background", "transparent")
    //   .end().css("background", "white");
    goslide();


  })

  $('#slidernext').click(function(){
    // alert("ergf");
    sliderindex++;
    if(sliderindex>=sliderCount)sliderindex=0;
    // sliderMove = 0 - sliderindex * 800;
    // $('.slider-images').css("left", sliderMove + "px");
    // $('#page li').siblings().css("background", "transparent")
    //   .end().css("background", "white");

      goslide();
  }
   
    
  )

// 照片移動+page圖示切換
function goslide() {
 sliderMove = 0 - sliderindex * sliderWidth;
 $('.slider-images').css("left", sliderMove + "px");
 $('#pages li').eq(sliderindex).addClass("active")
   .siblings().removeClass();
}

// 把固定尺寸改成rwd動態修改尺寸 每次變更畫面會重新修改尺寸
$(window).resize(function () {
 sliderWidth = $(".wrapper").width();
 $("#sliderimages").css("width", sliderCount * sliderWidth);
 goslide();
});