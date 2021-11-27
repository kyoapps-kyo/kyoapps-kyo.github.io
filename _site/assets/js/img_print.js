$(document).ready(imgPrint());
function imgPrint(){
    let imgString = "";
    let i = 0;
    let date = "2021/11/22";
    let hDirName = "/heng/h";
    let sDirName = "/shu/P";
    let bDirName = "/bigShu/P";
    let imgType = ".jpg";
    let hMax = 9;
    let sMax = 48;
    let bigImgN = 5;
    // 输出竖大图
    for( i = 0 ;i < bigImgN ;i++){
        imgString = imgString + "<div style='width: 100%; padding:5px'><a class='js_gallery_evaluate' href='/assets/imgs/"+ date + bDirName + i + imgType + "' data-fancybox='gallery' ><img src='/assets/imgs/"+ date + bDirName + i + imgType + "' alt=''></a></div>"
    }
    // 输出横图
    for( i = 0 ;i < hMax ;i++){
        imgString = imgString + "<div style='width: 100%; padding:5px'><a class='js_gallery_evaluate' href='/assets/imgs/"+ date + hDirName + i + imgType + "' data-fancybox='gallery' ><img src='/assets/imgs/"+ date + hDirName + i + imgType + "' alt=''></a></div>"
    }
    // 输出竖图
    for( i = 0 ;i < sMax ;i++){
        imgString = imgString + "<div style='width: 50%; padding:5px'><a class='js_gallery_evaluate' href='/assets/imgs/"+ date + sDirName + i + imgType + "' data-fancybox='gallery' ><img src='/assets/imgs/"+ date + sDirName + i + imgType + "' alt=''></a></div>"
    }
    $("#img-box").append(imgString);
}
