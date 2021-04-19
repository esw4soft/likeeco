 // 資料放入陣列
 let popupdata = ["三奇村1.jpg", "玉里客城橋4.jpg", "九份.jpg", "二寮觀日亭.jpg", "r-room3.jpg", "中正紀念堂.jpg", "六十石山2.jpg", "台北大稻埕.jpeg", "四草隧道1.jpg",
 "光之穹頂1.jpg", "西子灣2.jpg", "宜蘭羅東運動公園.jpeg"
]
let popupdatabox = "";
let popupbox = "";
let popuptest = $(".wrap")[0]
let popuptest2 = $(".popupup")[0]


// 做popup
const dopopup = () =>{
    $(".popup-open").click(function (e) {
        var href = $(this).attr("href")
        $(href).fadeIn(250);
        $(href).children("popup-box").removeClass("transform-out").addClass("transform-in");
        e.preventDefault();
        console.log("aaa")
       
       });
       
       $(".popup-close").click(function (e) {
        $(".popup-wrap").fadeOut(200);
        $(".popup-box").removeClass("transform-in").addClass("transform-out");
        e.preventDefault();
       });
}



// 剛進來的畫面
for (i = 0; i < popupdata.length; i++) {

    popupdatabox +=
     `<a class="open popup-open" href="#${i}" style="text-decoration: none;"><div class="imgbox"><img src="../img/${popupdata[i]}" alt="">${popupdata[i]}</div></a>`;


    popupbox +=
     `<div class="popup-wrap" id="${i}"><div class="popup-box transform-out"><h2>${popupdata[i]}</h2><img src="../img/${popupdata[i]}" alt=""><a class="close-btn popup-close" href="#">x</a></div></div>`
}
// console.log(popupdata)
popuptest.innerHTML = popupdatabox;
popuptest2.innerHTML = popupbox;

dopopup();



// //////////////// left-bar

// 點全選按鈕
$(".alldis").click(function(){
    alldisplay()
})

// 全選刪除按鈕
$(".allrem").click(function(){
    allremove()
})

// jpg按鈕
$(".filjpg").click(function(){

    let jpgbox = filterItems('jpg')
    // console.log(jpgbox)
    filterjpg(jpgbox)
})

// jpeg按鈕
$(".filjpeg").click(function(){

    let jpegbox = filterItems('jpeg')
    filterjpeg(jpegbox)
})



// 過濾filter函式
function filterItems(query) {
    return popupdata.filter(function(el) {
            // console.log(query.toLowerCase());
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}
// jpeg函式
const filterjpeg = (jpegbox) => {
    let popupdatabox = ""
    let popupbox = ""
    let leftbarbox = $(".wrap")[0]
    let leftbarboxpopup = $(".popupup")[0]

    leftbarbox.innerHTML = ""
    leftbarboxpopup.innerHTML = ""

    for (i = 0; i < jpegbox.length; i++) {

        popupdatabox +=
         `<a class="open popup-open" href="#${i}" style="text-decoration: none;"><div class="imgbox"><img src="../img/${jpegbox[i]}" alt="">${jpegbox[i]}</div></a>`;
    
    
        popupbox +=
         `<div class="popup-wrap" id="${i}"><div class="popup-box transform-out"><h2>${jpegbox[i]}</h2><img src="../img/${jpegbox[i]}" alt=""><a class="close-btn popup-close" href="#">x</a></div></div>`
    }

    leftbarbox.innerHTML = popupdatabox
    leftbarboxpopup.innerHTML = popupbox

    // console.log("aaa")

    dopopup();
}


// jpg函式
const filterjpg = (jpgbox) => {
    let popupdatabox = ""
    let popupbox = ""
    let leftbarbox = $(".wrap")[0]
    let leftbarboxpopup = $(".popupup")[0]

    leftbarbox.innerHTML = ""
    leftbarboxpopup.innerHTML = ""

    for (i = 0; i < jpgbox.length; i++) {

        popupdatabox +=
         `<a class="open popup-open" href="#${i}" style="text-decoration: none;"><div class="imgbox"><img src="../img/${jpgbox[i]}" alt="">${jpgbox[i]}</div></a>`;
    
    
        popupbox +=
         `<div class="popup-wrap" id="${i}"><div class="popup-box transform-out"><h2>${jpgbox[i]}</h2><img src="../img/${jpgbox[i]}" alt=""><a class="close-btn popup-close" href="#">x</a></div></div>`
    }

    leftbarbox.innerHTML = popupdatabox
    leftbarboxpopup.innerHTML = popupbox

    // console.log("aaa")

    dopopup();
}



// 全選刪除
const allremove = () => {
    

    let leftbarbox = $(".wrap")[0]
    let leftbarboxpopup = $(".popupup")[0]

    leftbarbox.innerHTML = ""
    leftbarboxpopup.innerHTML = ""
}



// 全選顯示
const alldisplay = () => {


    let popupdatabox = ""
    let popupbox = ""
    let leftbarbox = $(".wrap")[0]
    let leftbarboxpopup = $(".popupup")[0]

    leftbarbox.innerHTML = ""
    leftbarboxpopup.innerHTML = ""

    for (i = 0; i < popupdata.length; i++) {

        popupdatabox +=
         `<a class="open popup-open" href="#${i}" style="text-decoration: none;"><div class="imgbox"><img src="../img/${popupdata[i]}" alt="">${popupdata[i]}</div></a>`;
    
    
        popupbox +=
         `<div class="popup-wrap" id="${i}"><div class="popup-box transform-out"><h2>${popupdata[i]}</h2><img src="../img/${popupdata[i]}" alt=""><a class="close-btn popup-close" href="#">x</a></div></div>`
    }

    leftbarbox.innerHTML = popupdatabox
    leftbarboxpopup.innerHTML = popupbox

    // console.log("aaa")

    dopopup();
}


// console.log(leftbarbox)




   

