/* 
 * 背景切换
 */
var gallery = [
  { vol: "2021年11月", author: ["2312张峻嘉"], list: [{ name: "211101_绩笑_窗边", id: "ad57061c5331004aa903a538e60ce6f6" }, { name: "211102_绩笑_书堆", id: "3e3c8cfccf6f1fbd5dca012da616f94a" }, { name: "211103_绩笑_讲台", id: "c10719e3cf6fb335b3be8bf91fb91da3" }, { name: "211104_绩笑_课桌", id: "84ebd03a1fa73c3cf8c545adf7a61003" }, { name: "211105_绩笑_商店", id: "c8030ebcf54a299ec68a0d7714c3079e" }, { name: "211106_绩笑_云层", id: "8c02d70150f0d44bd12c8dd78cfe8e0b" }, { name: "211107_绩笑_蒲公英", id: "06a9213ddf6c271efb5f362599c3a0a7" },] },
  { vol: "2021年12月①期", author: ["2222王一苇", "2215史晓芳", "2205康亦菲", "2203袁瑜彤", "2216赵凌玥", "2210龚泽城"], list: [{ name: "211201_純粋な_校门", id: "ffe43161091c3e086c0c757513938708" }, { name: "211202_純粋な_楼顶", id: "8e10d9dd4dfe9673813fd3380e45d174" }, { name: "211203_純粋な_操场", id: "79d1d64ad68cc39a4f4f658cc1c86dd4" }, { name: "211204_純粋な_广场", id: "655996e17525aec70a552349bbff0158" }, { name: "211205_齐天_书桌", id: "9f1f737065468006c5b38ab3b16684b7" }, { name: "211206_云山_环道", id: "d689b757ce6c36ead44ab44d7680f387" }, { name: "211207_Echo_云海", id: "16a660a4e4151664fabcd933830fc66b" }, { name: "211208_Echo_楼顶", id: "f0347b55687558faedf4fcef68bd198d" }, { name: "211209_Echo_幕影", id: "85fdadb96f7ab66b79b3043834e19eef" }, { name: "211210_Echo_操场", id: "def64788d6b39f9317a1138df0f1e3b9" }, { name: "211211_Echo_楼道", id: "c637b572159025a80ac59ea89daddfa1" }, { name: "211212_Echo_水杉", id: "283b282532369cff4dc08cbab06728eb" }, { name: "211213_凌球_雪松", id: "8f63d50aaf96d9f6ad0ec95e8f85f4a5" }, { name: "211214_北盼城南烟花繁_日落", id: "90c10f637fe3b7300f34fe093e625cd7" }, { name: "211215_北盼城南烟花繁_楼道", id: "50a6aac0b92c42889c502c450089c5d4" }, { name: "211216_北盼城南烟花繁_兼程", id: "0f0c9d868e6c1fd2a421daaab42d40c3" },] },
  { vol: "2021年12月②期", author: ["2203张家云", "2211魏欣瑶", "2204郑笑然"], list: [{ name: "211217_小佗_紫叶李", id: "3dd9e1d14e00d30be6788c3c7e791825" }, { name: "211218_小佗_银杏", id: "d3e1e44a52d431c3db18956ac0e9bb5a" }, { name: "211219_小佗_复羽叶栾树", id: "9c3bf1777cbae93cd8fd2ea4be6c0882" }, { name: "211220_小佗_云海", id: "e0b08330ddb922b237d5abfeac533d8a" }, { name: "211221_小佗_合欢花", id: "62883665ddfa464d974a26e71f14a785" }, { name: "211222_小佗_梅", id: "837ea0c0bcf79ff942eb7a5207371b6a" }, { name: "211223_小佗_合欢", id: "f7aa6954c006e7aec0f27f165860a08c" }, { name: "211224_小佗_紫叶李", id: "493d51e87092698ede2d60e7b163c054" }, { name: "211225_小佗_操场", id: "b211467545e5f09e693849584c052a98" }, { name: "211226_小佗_幕墙与树", id: "96b4ecbb376b43e757f4cba5e9014e97" }, { name: "211227_小佗_篮球架", id: "d7b20ec4149b9a021382969fabae8a2e" }, { name: "211228_小佗_永远热爱", id: "d90dff621e86a8823fad14e10a0e19cd" }, { name: "211229_姚小瑶_云", id: "73ef8cf22f34cb1cce637858ebe6f823" }, { name: "211230_姚小瑶_运动会", id: "0dbb9156e678aa0ff5d69bec04918279" }, { name: "211231_暮草兮_龙棕", id: "17164c2b8293ea432c67f62f965ff5eb" },] },
  { vol: "2021年12月③期", author: ["2201李欣源", "2215刘辰靖"], list: [{ name: "211232_Stars_操场", id: "d48b74b952603771a200c84ef987bceb" }, { name: "211233_Stars_广场", id: "8e2bab626390aa6c028c8c11c1ba4ed1" }, { name: "211234_Stars_操场的云", id: "f4bc39ce9dabf094144ede0f9aa6a14e" }, { name: "211235_Stars_云与合欢", id: "c7c7a922db451d29d7c59594772ae1de" }, { name: "211236_靖靖子_夕晖", id: "2b7dd636bc86d45d59b3315312d41231" }, { name: "211237_靖靖子_不落", id: "9efaae46b92844286176d5c59564b84b" }, { name: "211238_靖靖子_夕云", id: "627489cebe36f3d4deb35e81be6de23e" }, { name: "211239_靖靖子_运动会", id: "0a30aa1d60450824ebbcda1e0ec07987" }, { name: "211240_靖靖子_金叶女贞", id: "43587a6d8b599ad74faf07a7e6db0bac" }, { name: "211241_靖靖子_教室后", id: "3723ab6fa16c6fcfb77a44750cce82ec" }, { name: "211242_靖靖子_对面宿舍", id: "f98487cf34fd3f2c46955d7d96d52792" }, { name: "211243_靖靖子_书架", id: "9c5595051c1efa899d4cb631c98fbd3c" }, { name: "211244_靖靖子_楼外楼", id: "60f04203cd77c2edd3d0649b0730b7c3" }, { name: "211245_靖靖子_讲桌下", id: "7edd089e817c0e0760fa31022a119827" }, { name: "211246_靖靖子_谁的课桌", id: "b92d78904365196b62671f6ae18c783d" }, { name: "211247_靖靖子_午间", id: "5e4ca1325b1131b9033692d54b560b64" }, { name: "211248_靖靖子_货架", id: "840afd0bef2f8e7db8902f682a01c3bf" }, { name: "211249_靖靖子_这又是谁的课桌", id: "133043b71104bcfd3857fb7a1c37f934" }] },
  { vol: "2021年12月④期", author: ["2203郑小雨"], list: [{ name: "211250_秤砣_墙上", id: "cd6c6646c287c61186a8dc8e9a37c122" }, { name: "211251_秤砣_捉光", id: "e784b18a14ee01a346cbe5b3dcb9d2fa" }, { name: "211252_秤砣_楼间松", id: "0accbbd75a7e388c49570c8b7942b60f" }, { name: "211253_秤砣_栾树外", id: "cc64de25816d74e1c331aa742c908ae6" }, { name: "211254_秤砣_枫香树下", id: "8978baa3db6e135df052ce27cd275119" }, { name: "211255_秤砣_鳞状云", id: "b488e5316d3f9d618238513b87eba901" }, { name: "211256_秤砣_第二场雪", id: "ea1b46a7492764684940a21c0a330cfa" }, { name: "211257_秤砣_外立面", id: "58f5c3cbbe3b9a8f3c30ee187c8d86bc" }, { name: "211258_秤砣_放飞气球", id: "3f364038682a6e14fa979cec7ab1f537" }, { name: "211259_秤砣_气球外的梦", id: "6a6817decfb67e533f6233973391de4f" }, { name: "211260_秤砣_远方的灯", id: "8b3e96da5f9815accda9d45a7b1ad934" }, { name: "211261_秤砣_晴", id: "eb33091a563ffcc451f2a7e0110b91a5" }, { name: "211262_秤砣_月", id: "984018fb175143bbfaf789cf0482c382" },] },
  { vol: "2021年末补充", author: ["2210龚泽城", "2225安睿琦", "2210李维钒"], list: [{ name: "211263_北盼城南烟花繁_看操场", id: "e7cdfcb8c3d6e9a5e40500cfd06dfb07" }, { name: "211264_北盼城南烟花繁_球场", id: "4e13762feb990cd70f7c85202f79c602" }, { name: "211265_东隅_日出", id: "42e670813470264ab26564603cb339b4" }, { name: "211266_东隅_对面", id: "892e21899186de12922f1c3637eba077" }, { name: "211267_东隅_操场与日落", id: "02d88527ad0c8c52bc1783c913b3f40b" }, { name: "211268_SuperR1SE_一框", id: "af5aff6617de43af5e02427a7e47b917" }, { name: "211269_SuperR1SE_背后", id: "128c64fa0b384652dcc1927ffc177349" }, { name: "211270_SuperR1SE_日", id: "5e0180e07eefbe0111f6190047f13f66" },] },
  { vol: "2022年1月①期", author: ["2205董家亦", "2219郎国璇"], list: [{ name: "220101_亦_于云出", id: "b541338cf74529c25c2bdc49bc60a0e7" }, { name: "220102_亦_楼与楼", id: "3779bba383ac9bac48edb3b5f985ec7c" }, { name: "220103_亦_看台上", id: "c3466dba45a7cd5d994239864c3337fa" }, { name: "220104_亦_球场的黄昏", id: "a77709bdf5e66108d01df9d2e0ec574c" }, { name: "220105_亦_旗杆与云海", id: "e9c907be322c6ccb1fb12a758c077118" }, { name: "220106_亦_操场", id: "a9905c6f35a0ce234c445047ba6831ac" }, { name: "220107_亦_绚", id: "028e6b27082a3f639cd76cf2412c3870" }, { name: "220108_亦_霞", id: "8399df720705576b96b3fa5614b20a0f" }, { name: "220109_亦_天空之下是热爱", id: "3fb8a659e3f007028ed6a883feb2c826" }, { name: "220110_亦_射者中", id: "880c7bab6ff2758e613026061057b66d" }, { name: "220111_亦_胶囊仓降落台", id: "5281c3afcfc0ed009ad30e0ce904e2b1" }, { name: "220112_泡泡_捉云", id: "5f86951f06b25fe14bf64eacfd9b98d7" }, { name: "220113_泡泡_云上冲浪", id: "f0f626c3c35de4fbfce1e559239f05be" }, { name: "220114_泡泡_日落于东", id: "da54edf43f49d0787be388214595f0d9" }, { name: "220115_泡泡_饱和度战士", id: "726df029cc3363b74b4ebf6735e3a7a1" },] },
  { vol: "2022年1月②期", author: ["2216吴滢羽", "2210李维钒", "2216刘子璐", "2219杜碧涵"], list: [{ name: "220116_吴鸭鸭_艺术节的夜", id: "f8a8b60d377a67ccc84a4b7fdeddbd2d" }, { name: "220117_吴鸭鸭_落日与晚风", id: "44843696ffc75688134a689b2fe8208d" }, { name: "220118_吴鸭鸭_校庆人海", id: "288b4ac91a4c8ba1ccc44844e2b444c7" }, { name: "220119_吴鸭鸭_校庆幕后", id: "39005bc4839eef48712d66869bb00774" }, { name: "220120_SuperR1SE_广场", id: "970e5ad16c4d9bd5610146813a572ef3" }, { name: "220121_SuperR1SE_球场", id: "092ea5b17974b750e3497af6a9a4dc5e" }, { name: "220122_纸某鹿_火烧云", id: "be34c217f3de6044e147b427b783abf0" }, { name: "220123_纸某鹿_云的形状", id: "c2f6bb262cff512e92be10c108742402" }, { name: "220124_纸某鹿_持不稳的黄昏", id: "fdafcbc4e761fe99ff7c9b52846541f7" }, { name: "220125_木鱼_欢庆之夜", id: "139b8a1732ac6526a000d0caac8e8aa9" }, { name: "220126_木鱼_虹", id: "cab48045c6647b148cd4d31b133f3fac" },] },
  { vol: "2022年1月③期", author: ["2226刘一可"], list: [{ name: "220126_派小星_光帆", id: "6229b32441f52a1c2fa31692445ea38e" }, { name: "220127_派小星_摘", id: "f5101db570b55c608ddbc6886d3c4314" }, { name: "220128_派小星_觅", id: "307ee9ef24ba54c37cf3aa1f8723cc85" }, { name: "220129_派小星_镜中云", id: "25825885a34e1e8a8013af29d802f75a" }, { name: "220130_派小星_叶影", id: "d0e876848c5248acef4c4ed5bb392e72" }, { name: "220131_派小星_镶", id: "c41835897aa2c5b889fd71a48865241b" }, { name: "220132_派小星_遇", id: "54d876ebcefabe50d6a5c9bc2e84c1bc" }, { name: "220133_派小星_路迹", id: "a775bb14081eb18ec6d43d3f713bf0af" }, { name: "220134_派小星_映", id: "085df26eb2ff746ef319c58455843094" }, { name: "220135_派小星_雨过", id: "f20ad44ae3645769022f9fccfdb0bc1a" }, { name: "220136_派小星_覆云", id: "db27e31ffa786a146543d5522d409080" }, { name: "220137_派小星_楼", id: "6d97257b6ed0a26258caf5a7ed1d5312" },] },
  { vol: "2022年1月④期", author: ["2221王楷超"], list: [{ name: "220138_古怪_某人的杯子", id: "456d06fe305d097aa6bd7eb92e276b3f" }, { name: "220139_古怪_桌上的笔袋", id: "904af76c65a5e4d0aedb3f9d06d2eac7" }, { name: "220140_古怪_讲台前的杯子", id: "1c7404d684a7979b83f0fe0f4ad2c0d7" }, { name: "220141_古怪_打球的少年们", id: "e9a9928505af607ae7b185900fc1d1b3" }, { name: "220142_古怪_阳光直射的地方", id: "4ddb7ce9a0b1288c611e52bcf3393f57" }, { name: "220143_古怪_空虚的走廊", id: "5a074b032a37e19f67568bc7e41a3aaa" }, { name: "220144_古怪_神奇的房间", id: "dead3e87a24eadd8a4375abf8ac24283" }, { name: "220145_古怪_死里卷", id: "aaf4f4d7220df8ba6457f8d5c82ff596" }, { name: "220146_古怪_古怪的笔袋", id: "fe786bb350372655d645440fa4f452b0" }, { name: "220147_古怪_午间的书桌", id: "4a3d6a1e3000bacdf41e38e5a580d7c5" }, { name: "220148_古怪_凌乱的课桌", id: "3993ff736ab65a13b3cdc2c674157242" }, { name: "220149_古怪_我不知道起什么名字了", id: "cf51c2d7cf72af9d4e72fa3d98f9d122" }, { name: "220150_古怪_剩余的143天", id: "44f09a300b73b0d2904585cd40a8d10c" }, { name: "220151_古怪_那边的兼程楼", id: "5c3bf663ed0f71baae0604a53c840c9e" }, { name: "220152_古怪_周六的街道", id: "91c7810b339b290af2123f22ec4f2368" },] },
  { vol: "2022年2月①期", author: ["2314郭姝含", "2226?张若旭"], list: [{ name: "220201_一棵果树_云树", id: "39b2fb245adcf0cff2b1de129c4d9196" }, { name: "220202_一棵果树_团", id: "2443acff0babdf0017ae2fdbc081d9f9" }, { name: "220203_一棵果树_驾一叶", id: "2151d46cd1a43c77e0119365aab4262f" }, { name: "220204_一棵果树_艺术", id: "ce41f36c5da85542914810fb17e5691e" }, { name: "220205_一棵果树_漾", id: "4203f4a59f30093f804a0c5351d6212a" }, { name: "220206_一棵果树_霞", id: "fdc46b6cd8b9c80e95016585bb6d0465" }, { name: "220207_抓旭_叶间", id: "76e16f942ead8696140d600bd703b7e9" }, { name: "220208_抓旭_云帘", id: "5f80dda1bae36bde7153db794a102b77" }, { name: "220209_抓旭_望月", id: "26a38fa02245c67997c928b9cc0e028e" }, { name: "220210_抓旭_海中树", id: "126ffb836b3eabffb8d5993f83288c95" }, { name: "220211_抓旭_微夏", id: "1e1393fc5a021a83cf73ed37e193ab5e" }, { name: "220212_抓旭_云生", id: "912cbaecc22fe8acff045a55777d18c2" }, { name: "220213_抓旭_天之纹", id: "f0a6570a1f067e7d03ce5a5c3428e266" }, { name: "220214_抓旭_光迹", id: "9da986d12391fb6e5332e37182f22f39" }, { name: "220215_抓旭_行路", id: "d9063558342bf483e82841cf22fc90bf" }, { name: "220216_抓旭_树下", id: "3bff2b64816d930ae5da4f276a87ad2b" },] },
  { vol: "2022年2月②期", author: ["2221王楷超"], list: [{ name: "220217_古怪_相机水印忘关了", id: "7b3ddf2fe5fe8819332fbd208a3caadf" }, { name: "220218_古怪_傍晚", id: "72b0f3e254aaab01c12b1f05a4496e47" }, { name: "220219_古怪_植被颜色是不是太深了", id: "24fa9897ae6629c9d7879c75de0c2b7c" }, { name: "220220_古怪_这张忘了拍的是哪了", id: "bd7b6fba9ebd08cf7ff44e1fc4985218" }, { name: "220221_古怪_Lightroom改的天空", id: "0f36141c226b55c003eeb0306364af84" }, { name: "220222_古怪_回村的小路", id: "5c78ed6dc240f47a54b56846697be444" }, { name: "220223_古怪_等等，这是哪来着，我又忘了", id: "0f29940b2bd0769b5e01b8dbdbd364c5" }, { name: "220224_古怪_千万别细看这张", id: "063e50ea55211cd0c5058d064e2f36df" }, { name: "220225_古怪_再不走就快天黑了", id: "3b79b9c7d6435671c976d55f77290e7b" }, { name: "220226_古怪_话说山和坡的区别是啥", id: "40756b5000dd34df5b8f671efe341de4" }, { name: "220227_古怪_你知道水塔在哪吗？", id: "b5fdb38300aa799814b40ec467c6f1a1" }, { name: "220228_古怪_这张好黑啊", id: "666e6b46615f51b61ca3c88a3173073c" }, { name: "220229_古怪_呃，写不出来名字了，那就叫无题吧", id: "83f246ac448fb2a3220471f057aaaf66" }, { name: "220230_古怪_平淡无奇的一张", id: "d975172fc667dcd0921344b0c402bede" }, { name: "220231_古怪_不知名公园", id: "6d4515a136927af3da29a375b8a5e3be" },] },
  { vol: "2022年2月③期", author: ["2216孙子萱"], list: [{ name: "220123_太阳_松", id: "7b2988657078848206d524ca11076f3c" }, { name: "220123_太阳_雪与外立面", id: "995e8b6e91e8404711e91be7aaec2491" }, { name: "220234_太阳_柳下", id: "cc4220026e9dc449dbe75619426c3476" }, { name: "220235_太阳_窗间", id: "395cd8ee04ad69ed304c5ddfdab74e39" }, { name: "220236_太阳_漫雪", id: "16336210d6e07358d5471faa8888506e" }, { name: "220237_太阳_余晖", id: "f8f9f63e5a8110d0657a3a0d4f572989" },] },
];
bg.vol = [gallery.length - 1, gallery.length - 2, gallery.length - 3];
!function () {
  bg.vol = bg.vol.concat(bg.vol, bg.vol, bg.vol, bg.vol, bg.vol, bg.vol, bg.vol, bg.vol,);
  // console.log(bg.vol);
  for (var v in gallery) for (var p in gallery[v].list) bg.vol.push(~~v);
  document.getElementById("bglist").innerHTML = function () {
    var l = "";
    for (v in gallery) {
      l += "<details>\n  <summary>" + gallery[v].vol + "</summary>\n  <div class='alist'>\n";
      for (p in gallery[v].list) l += "    <a onclick='bg(" + v + "," + p + ")'>" + gallery[v].list[p].name + "</a>\n";
      l += "  </div>\n</details>\n";
    }
    // console.log(l);
    return l;
  }();
  bg();
}();
function bg(v, p) {
  // 若同时以new Date作为volnum和picseed的随机种子，会产生特定的余数对应关系
  if (v == null) v = bg.vol[~~(Math.random() * bg.vol.length)];
  if (p == null) p = ~~(Math.random() * gallery[v].list.length);
  try {
    document.documentElement.style.backgroundImage = "url(https://images.xuewuzhibu.cn/" + gallery[v].list[p % (gallery[v].list.length)].id + ".jpg)";
    send((document.getElementById("bg").innerHTML = "背景：" + gallery[v].list[p % (gallery[v].list.length)].name + "@" + gallery[v].vol) + " <span class='dim'>在右键菜单可指定背景，使用须遵守<a href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh'> CC BY-NC-SA 4.0 </a>许可。</div>");
    // 定时换壁纸（康总加成🙏）
    clearInterval(bg.interval);
    bg.interval = setInterval(bg, 2040411);
    return "来自" + gallery[v].vol + "的" + gallery[v].list[p % (gallery[v].list.length)].name + "似乎具有某种神秘的力量";
  } catch (e) {
    // 虽然上面一般不会出错，出错了下面这段备用代码也可能无法运行，但还是写一段
    console.warn(send("主背景函数出错，已启用备用背景。\n") + e);
    eleMain.style.background = "rgba(0,0,0,0.75)";
    switch (~~(Math.random() * 2) + 1) {
      case 0: document.documentElement.style.backgroundImage = "url(" + prompt("输入背景url") + ")"; break;
      case 1: document.documentElement.style.backgroundImage = "url(https://bu.dusays.com/2021/11/23/" + ["9dd5f0f9ae39c", "86f0354849ead", "aef07ee202d3c", "a3676bbf32d4e", "4b347391fec34", "b1a6b10044d7e", "10f58d6677aeb"][~~(Math.random() * 7)] + ".jpg)"; break;
      case 2: document.documentElement.style.backgroundImage = "url(https://bu.dusays.com/2021/12/19/" + ["0e34aef718e53", "cbb7ca9f47a46", "d9daedc01bca6", "2ecfe0c8ff887", "8a1d489af0279", "12479fb170d16", "9b17e5fffdb73", "cad676f747c56", "eaf02f09741ea", "c03de66f3cef0", "84a92ddf8c5c8", "6b4b98bd96ee2", "0b91c8d48bbb0"][~~(Math.random() * 13)] + ".jpg)"; break;
      default: document.documentElement.style.backgroundImage = eleMain.style.background = "";
    }
  }
}
