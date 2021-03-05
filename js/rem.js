(function (doc, win, designWidth) {
  var rootDom = doc.body || doc.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'; //获取屏幕宽度是否改变
  var recalc = function () {
    var clientWidth = rootDom.clientWidth; //获取屏幕宽度
    if (!clientWidth) {

      return;
    }
    rootDom.style.fontSize = 40 * (clientWidth / designWidth) + 'px';
    doc.documentElement.style.fontSize = 40 * (clientWidth / designWidth) + 'px'; //文档的body根据屏幕大小与设计稿的比例进行变化，方便子节点试用rem方式进行屏幕调配
    /*console.log((clientWidth / designWidth));*/
  };
  if (!doc.addEventListener) {
    return;
  }
  recalc();
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false); //屏幕宽度改变时执行一次屏幕适配
}(document, window, 1920));