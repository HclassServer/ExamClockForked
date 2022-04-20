console.groupCollapsed("\n%c  %c考试时钟 ExamClock", "background:url('https://exam.cooo.site/logo_g_64.png') no-repeat;padding:32px;", "font:bold 36px sans-serif;color:#3a9;");
console.log("\n考试时钟“填补了业余与专业之间的空白”。\n项目仓库：https://github.com/L33Z22L11/ExamClock\n野生技协群：894656456\n\n");
console.groupEnd();
/* 
 * 适用于宝鸡中学的考试科目列表
 */
var exam = {};
exam["2022-04-200"] = function () {
  slogan.$main = "";
  $("语文", today.date, "14:15", "16:45");
  return "本日临时";
};
exam[30] = function () {
  slogan.$main = today.cee + "天 奋勇争先";
  subject.$admit = 2;
  // 这种情况就比较复杂了，代码和人有一个能跑就行
  // 特别注意，最后一轮求余后应该是数组第0项
  if (today.day) {
    // 非周日的白天
    if (today.day == 5) $("听力", today.date, "07:05", "07:25");
    $("晨读1", today.date, "06:55", "07:25");
    $("晨会", today.date, "07:25", "07:30");
    $("晨读2", today.date, "07:30", "08:00");
    $("第1节", today.date, "08:10", "08:55");
    $("第2节", today.date, "09:05", "09:50");
    $("课间操", today.date, "09:50", "10:00", "<a href='http://player.bilibili.com/player.html?aid=971208498'><i class='fa-regular fa-circle-play'></i> 点击播放宝中室内健身操</a>");
    $("第3节", today.date, "10:20", "11:05");
    $("第4节", today.date, "11:15", "12:00");
    $("午休", today.date, "12:15", "13:55");
    $("第5节", today.date, "14:10", "14:55");
    $("第6节", today.date, "15:05", "15:50");
    if (today.day != 6) $("第7节", today.date, "16:05", "16:50");
    if (today.day == 2) $("考练", today.date, "17:00", "17:45", 0, ["第" + today.week + "周" + today.weekday + "限时纠错训练：理科" + ["双周数学", "单周化学"][today.week % 2] + "，文科第" + (today.week % 3 || 3) + "/3轮" + ["地理(明日)", "政治", "历史",][today.week % 3]]);
    else if (today.day == 3 && !(today.week % 3)) $("考练", today.date, "17:00", "17:45", 0, ["第" + today.week + "周" + today.weekday + "限时纠错训练：理科无，文科第3/3轮地理"]);
    else if (today.day == 4) $("考练", today.date, "17:00", "17:45", 0, ["第" + today.week + "周" + today.weekday + "限时纠错训练：理科物理，文科数学"]);
    else if (today.day == 6) $(["数学", "英语",][today.week % 2], today.date, "15:55", "17:55", 0, ["第" + today.week + "周" + today.weekday + "大考练：若信息异常，请自行修改或设置临时科目。"]);
    else $("自习", today.date, "17:00", "17:45");
  } else {
    // 周日白天
    $(["语文", "综合",][today.week % 2], today.date, "14:10", "16:40", 0, ["第" + today.week + "周" + today.weekday + "大考练：若信息异常，请自行修改或设置临时科目。"]);
    $("订正", today.date, "16:50", "17:30");
  }
  if (today.day != 6) {
    // 非周六的晚上
    $("晚训", today.date, "18:25", "18:45", 0, ["第" + today.week + ["周：双周", "周：单周"][today.week % 2] + today.weekday + ([["英语", "语文", "物理/地理", "数学", "生物/政治", "化学/历史",], ["数学", "英语", "物理/地理", "化学/政治", "语文", "生物/历史",]][today.week % 2][today.day] || "无") + "小题精练"], 5);
    $("晚写", today.date, "18:45", "18:55");
    $("晚一", today.date, "18:55", "19:40");
    $("晚二", today.date, "19:50", "20:35");
    $("晚三", today.date, "20:50", "22:00");
    $("晚修", today.date, "22:10", "23:30");
  }
  // return "高三日常";
  return "<span data-sub='可切换到三轮模考'>高三日常</span>";
};
exam[31] = function () {
  slogan.$sub = ["高三第二学期第一次模拟考练：请以司号及广播通知为准，在答题卡上写清组别。"];
  // subject.$admit = 30;
  $("语文", "2022-04-20", "09:00", "11:30");
  $("自习", "2022-04-20", "17:00", "17:45");
  $("数学", "2022-04-21", "07:40", "09:40");
  $("英语", "2022-04-21", "10:00", "12:00");
  $("综合", "2022-04-21", "14:15", "16:45");
  $("自习", "2022-04-21", "17:00", "17:45");
  return "高三三轮";
};
exam[300] = function () {
  if (!today.day) {
    $("", today.date, "14:10", "16:40");
    $("", today.date, "16:50", "17:30");
  }
  if (today.day % 3 == 1) {
    $("语文", today.date, "09:00", "11:30");
    $("自习", today.date, "17:00", "17:45");
    $("数学", today.date, "07:40", "09:40");
  } else if (today.day % 3 == 2) {
    $("英语", today.date, "10:00", "12:00");
    $("综合", today.date, "14:15", "16:45");
    $("自习", today.date, "17:00", "17:45");
  } else {
    $("讲评", today.date, "17:00", "17:45");
  }
};
exam[20] = function () {
  slogan.$main = "";
  subject.$admit = 2;
  $("晨读1", today.date, "07:05", "07:25");
  $("晨会", today.date, "07:25", "07:30");
  $("晨读2", today.date, "07:30", "08:00");
  $("第1节", today.date, "08:10", "08:55");
  $("第2节", today.date, "09:05", "09:50");
  $("课间操", today.date, "09:50", "10:00", "<a href='http://player.bilibili.com/player.html?aid=971208498'><i class='fa-regular fa-circle-play'></i> 点击播放宝中室内健身操</a>");
  $("第3节", today.date, "10:20", "11:05");
  $("第4节", today.date, "11:15", "12:00");
  $("自习", today.date, "12:00", "12:15");
  $("午休", today.date, "12:30", "13:55");
  $("第5节", today.date, "14:10", "14:55");
  $("第6节", today.date, "15:05", "15:50");
  $("第7节", today.date, "16:05", "16:50");
  $("自习", today.date, "17:00", "17:35");
  $("晚饭", today.date, "17:35", "17:45");
  // $("背诵", today.date, "18:25", "18:55", 0, 0, 5);
  $("晚训", today.date, "18:25", "18:45", 0, ["第" + today.week + ["周：双周", "周：单周"][today.week % 2] + today.weekday + (today.day % 2 ? "英语听力" : "语文视频")]);
  $("晚写", today.date, "18:45", "18:55");
  $("晚一", today.date, "18:55", "19:40");
  $("晚二", today.date, "19:50", "20:35");
  $("晚三", today.date, "20:50", "22:00");
  $("晚修", today.date, "22:10", "23:00");
  return "高二日常";
}
exam[21] = function () {
  slogan.$sub = ["高二第二学期阶段一考试(理科)：请以实际铃声为准。"];
  subject.$admit = 20;
  $("数学", "2022-04-11", "14:00", "16:00");
  $("化学", "2022-04-11", "16:30", "18:10");
  $("语文", "2022-04-12", "07:40", "10:10");
  $("生物", "2022-04-12", "10:40", "12:10");
  $("英语", "2022-04-12", "14:00", "16:00");
  $("物理", "2022-04-12", "16:30", "18:10");
  return "高二理科";
};
exam[22] = function () {
  slogan.$sub = ["高二第二学期阶段一考试(文科)：请以实际铃声为准。"];
  subject.$admit = 20;
  $("数学", "2022-04-11", "14:00", "16:00");
  $("政治", "2022-04-11", "16:30", "18:10");
  $("语文", "2022-04-12", "07:40", "10:10");
  $("历史", "2022-04-12", "10:40", "12:20");
  $("英语", "2022-04-12", "14:00", "16:00");
  $("地理", "2022-04-12", "16:30", "18:10");
  return "高二文科";
};
exam[11] = function () {
  slogan.$main = "未启用 仅供测试";
  slogan.$sub = ["高一期末暨模块结业考试：请以实际铃声为准。"];
  subject.$admit = 20;
  $("语文", "2022-01-20", "07:50", "09:50");
  $("化学", "2022-01-20", "10:20", "12:00");
  $("物理", "2022-01-20", "14:20", "16:00");
  $("生物", "2022-01-20", "16:30", "18:00");
  $("史地", "2022-01-21", "07:50", "09:50");
  $("英语", "2022-01-21", "10:20", "12:00");
  $("数学", "2022-01-21", "14:00", "15:40");
  $("政治", "2022-01-21", "16:10", "17:10");
  return "高一";
};
