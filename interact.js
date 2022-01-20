/* 
 * 页面交互
 */
var eleMain = document.getElementById("main"),
  eleControl = document.getElementById("control"),
  eleControlbd = document.getElementById("controlbd"),
  eleSizebar = document.getElementById("sizebar"),
  eleContrastbar = document.getElementById("contrastbar"),
  eleFullscreen = document.getElementById("fullscreen"),
  eleRuntime = document.getElementById("runtime");
// 希沃屏保预警
// “屏保都统一关闭了，注释掉，白写个功能”
// if (!location.href.match("noforewarn")) setInterval(updateForewarn, 600);
// 希沃屏保剩余时间
var forewarntime = 45;
// onmousemove = onclick = function () { forewarntime = 45; };
// 键盘功能函数
window.onkeydown = function (e) {
  // forewarntime = 45;
  switch (e.key) {
    // 隐藏右键菜单
    case "Escape":
      try { eleControl.style.display = ""; }
      catch (e) { } break;
    case "F12": if (confirm("若要访问GitHub上的源代码仓库来研究代码，请点击“确定”。")) open("https://github.com/ThisisHost/exam-clock");
    else if (confirm("确认要使用F12工具吗？由于本时钟的DOM元素属于异步加载、定时更新，你对网页所做的更改很可能会被随时覆盖。")) alert("欢迎使用调试工具，若有问题或申请加入我项目组可与我联系，你将对自己所做的行为承担一切可能后果。");
    else e.preventDefault(); break;
    case "/": try { if (e.ctrlKey) alert(eval(prompt("Enter command to debug:", "bg()"))); }
      catch (e) { alert(e); } break;
    default: console.log(e.key);
  }
};
// 右键控制中心
eleMain.oncontextmenu = function (e) {
  if (!e.ctrlKey) {
    e.preventDefault();
    eleControl.style.display = "";
    eleControl.style.opacity = eleControlbd.style.opacity = 0;
    setTimeout(function () { eleControl.style.opacity = ""; }, 0);
    setTimeout(function () { eleControlbd.style.opacity = ""; }, 50);
  }
};
eleControlbd.onclick = function (e) {
  eleControl.style.opacity = 0;
  setTimeout(function () {
    eleControl.style.display = "none"; 
    eleControl.style.opacity = "";
  }, 200);
}
eleSizebar.firstElementChild.style.width = (parseInt(eleMain.style.fontSize) - 0.75) * 200 + "%";
eleContrastbar.firstElementChild.style.width = (eleMain.style.opacity - 0.5) * 200 + "%";
eleSizebar.onmousedown = eleSizebar.ontouchstart =
  eleSizebar.onmousemove = eleSizebar.ontouchmove =
  eleSizebar.ondrag = function (e) {
    if (e.buttons == 1) {
      e.preventDefault();
      eleControlbd.style.opacity = 0;
      eleSizebar.firstElementChild.style.width = e.offsetX + "px";
      eleMain.style.fontSize = (e.offsetX / eleSizebar.clientWidth) / 2 + 0.75 + "em";
    }
  };
eleContrastbar.onmousedown = eleContrastbar.ontouchstart =
  eleContrastbar.onmousemove = eleContrastbar.ontouchmove =
  eleContrastbar.ondrag = function (e) {
    e.preventDefault();
    if (e.buttons == 1) {
      eleControlbd.style.opacity = 0;
      eleContrastbar.firstElementChild.style.width = e.offsetX + "px";
      eleMain.style.opacity = (e.offsetX / eleContrastbar.clientWidth) / 2 + 0.5;
    }
  };
// eleSizebar.ondragstart = eleContrastbar.ondragstart = function (e) {
//   e.preventDefault();
// }
onmouseup = function (e) { eleControlbd.style.opacity = ""; };
// 全屏
function fullscreen() {
  try {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      eleFullscreen.setAttribute("class", "fa-solid fa-expand");
      eleFullscreen.setAttribute("data-sub", "全屏");
    } else {
      document.documentElement.requestFullscreen();
      eleFullscreen.setAttribute("class", "fa-solid fa-compress");
      eleFullscreen.setAttribute("data-sub", "退出");
    }
  } catch (e) { console.warn(send("操作失败，请手动最大化窗口或全屏。<span class='dim'>建议使用Chrome/Edge/Firefox浏览器。</span>\n") + e); }
}
