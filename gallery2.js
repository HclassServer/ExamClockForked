/* 
 * 背景切换
 */
var gallery = {
  // "宝鸡中学官网"
  // "campus": "e6e5b4e8e80debb10e61f854696cef7f", "autumn": "da07a39c238357f9c39e5717b8a9c8f9",
  // "2312张峻嘉"
  "211101_绩笑_窗边": "ad57061c5331004aa903a538e60ce6f6", "211102_绩笑_书堆": "3e3c8cfccf6f1fbd5dca012da616f94a", "211103_绩笑_讲台": "c10719e3cf6fb335b3be8bf91fb91da3", "211104_绩笑_课桌": "84ebd03a1fa73c3cf8c545adf7a61003", "211105_绩笑_商店": "c8030ebcf54a299ec68a0d7714c3079e", "211106_绩笑_云层": "8c02d70150f0d44bd12c8dd78cfe8e0b", "211107_绩笑_蒲公英": "06a9213ddf6c271efb5f362599c3a0a7",
  // "2222王一苇"
  "211201_純粋な_校门": "ffe43161091c3e086c0c757513938708", "211202_純粋な_楼顶": "8e10d9dd4dfe9673813fd3380e45d174", "211203_純粋な_操场": "79d1d64ad68cc39a4f4f658cc1c86dd4", "211204_純粋な_广场": "655996e17525aec70a552349bbff0158",
  // "2215史晓芳"
  "211205_齐天_书桌": "9f1f737065468006c5b38ab3b16684b7",
  // "2205康亦菲"
  "211206_云山_环道": "d689b757ce6c36ead44ab44d7680f387",
  // "2203袁瑜彤"
  "211207_Echo_云海": "16a660a4e4151664fabcd933830fc66b", "211208_Echo_楼顶": "f0347b55687558faedf4fcef68bd198d", "211209_Echo_杨树林": "183f64fe28824c645f25d31a65bfb9a3", "211210_Echo_操场": "def64788d6b39f9317a1138df0f1e3b9", "211211_Echo_楼道": "c637b572159025a80ac59ea89daddfa1", "211212_Echo_水杉": "283b282532369cff4dc08cbab06728eb",
  // "2216赵凌玥"
  "211213_凌球_雪松": "8f63d50aaf96d9f6ad0ec95e8f85f4a5",
  // "2210龚泽城"
  "211214_北盼城南烟花繁_日落": "90c10f637fe3b7300f34fe093e625cd7", "211215_北盼城南烟花繁_楼道": "50a6aac0b92c42889c502c450089c5d4", "211216_北盼城南烟花繁_兼程": "0f0c9d868e6c1fd2a421daaab42d40c3",
  // "2203张家云"
  "211217_小佗_紫叶李": "3dd9e1d14e00d30be6788c3c7e791825", "211218_小佗_银杏": "d3e1e44a52d431c3db18956ac0e9bb5a", "211219_小佗_复羽叶栾树": "9c3bf1777cbae93cd8fd2ea4be6c0882", "211220_小佗_云海": "e0b08330ddb922b237d5abfeac533d8a", "211221_小佗_合欢花": "62883665ddfa464d974a26e71f14a785", "211222_小佗_梅": "837ea0c0bcf79ff942eb7a5207371b6a", "211223_小佗_合欢": "f7aa6954c006e7aec0f27f165860a08c", "211224_小佗_紫叶李": "493d51e87092698ede2d60e7b163c054", "211225_小佗_操场": "b211467545e5f09e693849584c052a98", "211226_小佗_幕墙与树": "96b4ecbb376b43e757f4cba5e9014e97", "211227_小佗_篮球架": "d7b20ec4149b9a021382969fabae8a2e", "211228_小佗_永远热爱": "d90dff621e86a8823fad14e10a0e19cd",
  // "2211魏欣瑶"
  "211229_姚小瑶_云": "73ef8cf22f34cb1cce637858ebe6f823", "211230_姚小瑶_运动会": "0dbb9156e678aa0ff5d69bec04918279",
  // "2204郑笑然"
  "211231_暮草兮_龙棕": "17164c2b8293ea432c67f62f965ff5eb",
  // "2201李欣源"
  "211232_Stars_操场": "d48b74b952603771a200c84ef987bceb", "211233_Stars_广场": "8e2bab626390aa6c028c8c11c1ba4ed1", "211234_Stars_操场的云": "f4bc39ce9dabf094144ede0f9aa6a14e", "211235_Stars_云与合欢": "c7c7a922db451d29d7c59594772ae1de",
  // "2215刘辰靖"
  "211236_靖靖子_夕晖": "2b7dd636bc86d45d59b3315312d41231", "211237_靖靖子_不落": "9efaae46b92844286176d5c59564b84b", "211238_靖靖子_夕云": "627489cebe36f3d4deb35e81be6de23e", "211239_靖靖子_运动会": "0a30aa1d60450824ebbcda1e0ec07987", "211240_靖靖子_金叶女贞": "43587a6d8b599ad74faf07a7e6db0bac", "211241_靖靖子_教室后": "3723ab6fa16c6fcfb77a44750cce82ec", "211242_靖靖子_对面宿舍": "f98487cf34fd3f2c46955d7d96d52792", "211243_靖靖子_书架": "9c5595051c1efa899d4cb631c98fbd3c", "211244_靖靖子_楼外楼": "60f04203cd77c2edd3d0649b0730b7c3", "211245_靖靖子_讲桌下": "7edd089e817c0e0760fa31022a119827", "211246_靖靖子_谁的课桌": "b92d78904365196b62671f6ae18c783d", "211247_靖靖子_午间": "5e4ca1325b1131b9033692d54b560b64", "211248_靖靖子_货架": "840afd0bef2f8e7db8902f682a01c3bf", "211249_靖靖子_这又是谁的课桌": "133043b71104bcfd3857fb7a1c37f934",
  // "2203郑小雨"
  "211250_秤砣_墙上": "cd6c6646c287c61186a8dc8e9a37c122", "211251_秤砣_捉光": "e784b18a14ee01a346cbe5b3dcb9d2fa", "211252_秤砣_楼间松": "0accbbd75a7e388c49570c8b7942b60f", "211253_秤砣_栾树外": "cc64de25816d74e1c331aa742c908ae6", "211254_秤砣_枫香树下": "8978baa3db6e135df052ce27cd275119", "211255_秤砣_鳞状云": "b488e5316d3f9d618238513b87eba901", "211256_秤砣_第二场雪": "ea1b46a7492764684940a21c0a330cfa", "211257_秤砣_外立面": "58f5c3cbbe3b9a8f3c30ee187c8d86bc", "211258_秤砣_放飞气球": "3f364038682a6e14fa979cec7ab1f537", "211259_秤砣_气球外的梦": "6a6817decfb67e533f6233973391de4f", "211260_秤砣_远方的灯": "8b3e96da5f9815accda9d45a7b1ad934", "211261_秤砣_晴": "eb33091a563ffcc451f2a7e0110b91a5", "211262_秤砣_月": "984018fb175143bbfaf789cf0482c382",
  // "2210龚泽城"
  "211263_北盼城南烟花繁_看操场": "e7cdfcb8c3d6e9a5e40500cfd06dfb07", "211264_北盼城南烟花繁_球场": "4e13762feb990cd70f7c85202f79c602",
  // "2225安睿琦"
  "211265_东隅_日出": "42e670813470264ab26564603cb339b4", "211266_东隅_对面": "892e21899186de12922f1c3637eba077", "211267_东隅_操场与日落": "02d88527ad0c8c52bc1783c913b3f40b",
  // "2210李维钒"
  "211268_SuperR1SE_一框": "af5aff6617de43af5e02427a7e47b917", "211269_SuperR1SE_背后": "128c64fa0b384652dcc1927ffc177349", "211270_SuperR1SE_日": "5e0180e07eefbe0111f6190047f13f66",
  // "2205董家亦"
  "220101_亦_于云出": "b541338cf74529c25c2bdc49bc60a0e7", "220102_亦_楼与楼": "3779bba383ac9bac48edb3b5f985ec7c", "220103_亦_看台上": "c3466dba45a7cd5d994239864c3337fa", "220104_亦_球场的黄昏": "a77709bdf5e66108d01df9d2e0ec574c", "220105_亦_旗杆与云海": "e9c907be322c6ccb1fb12a758c077118", "220106_亦_操场": "a9905c6f35a0ce234c445047ba6831ac", "220107_亦_绚": "028e6b27082a3f639cd76cf2412c3870", "220108_亦_霞": "8399df720705576b96b3fa5614b20a0f", "220109_亦_天空之下是热爱": "3fb8a659e3f007028ed6a883feb2c826", "220110_亦_射者中": "880c7bab6ff2758e613026061057b66d", "220111_亦_胶囊仓降落台": "5281c3afcfc0ed009ad30e0ce904e2b1",
  // "2219郎国璇"
  "220112_泡泡_捉云": "5f86951f06b25fe14bf64eacfd9b98d7", "220113_泡泡_云上冲浪": "f0f626c3c35de4fbfce1e559239f05be", "220114_泡泡_日落于东": "da54edf43f49d0787be388214595f0d9", "220115_泡泡_饱和度战士": "726df029cc3363b74b4ebf6735e3a7a1",
  // "2216吴滢羽"
  "220116_吴鸭鸭_艺术节的夜": "f8a8b60d377a67ccc84a4b7fdeddbd2d", "220117_吴鸭鸭_落日与晚风": "44843696ffc75688134a689b2fe8208d", "220118_吴鸭鸭_校庆人海": "288b4ac91a4c8ba1ccc44844e2b444c7", "220119_吴鸭鸭_校庆幕后": "39005bc4839eef48712d66869bb00774",
  // "2210李维钒"
  "220120_SuperR1SE_广场": "970e5ad16c4d9bd5610146813a572ef3", "220121_SuperR1SE_球场": "092ea5b17974b750e3497af6a9a4dc5e",
  // "2216刘子璐"
  "220122_纸某鹿_火烧云": "be34c217f3de6044e147b427b783abf0", "220123_纸某鹿_云的形状": "c2f6bb262cff512e92be10c108742402", "220124_纸某鹿_持不稳的黄昏": "fdafcbc4e761fe99ff7c9b52846541f7", "220125_木鱼_欢庆之夜": "139b8a1732ac6526a000d0caac8e8aa9", "220126_木鱼_虹": "cab48045c6647b148cd4d31b133f3fac",
  // "2226刘一可"
  "220126_派小星_光帆": "6229b32441f52a1c2fa31692445ea38e", "220127_派小星_摘": "f5101db570b55c608ddbc6886d3c4314", "220128_派小星_觅": "307ee9ef24ba54c37cf3aa1f8723cc85", "220129_派小星_镜中云": "25825885a34e1e8a8013af29d802f75a", "220130_派小星_叶影": "d0e876848c5248acef4c4ed5bb392e72", "220131_派小星_镶": "c41835897aa2c5b889fd71a48865241b", "220132_派小星_遇": "54d876ebcefabe50d6a5c9bc2e84c1bc", "220133_派小星_路迹": "a775bb14081eb18ec6d43d3f713bf0af", "220134_派小星_映": "085df26eb2ff746ef319c58455843094", "220135_派小星_雨过": "f20ad44ae3645769022f9fccfdb0bc1a", "220136_派小星_覆云": "db27e31ffa786a146543d5522d409080", "220137_派小星_楼": "6d97257b6ed0a26258caf5a7ed1d5312",
  // "2221王楷超"
  "220138_古怪_某人的杯子": "456d06fe305d097aa6bd7eb92e276b3f", "220139_古怪_桌上的笔袋": "904af76c65a5e4d0aedb3f9d06d2eac7", "2201340_古怪_讲台前的杯子": "1c7404d684a7979b83f0fe0f4ad2c0d7", "220141_古怪_打球的少年们": "e9a9928505af607ae7b185900fc1d1b3", "220142_古怪_阳光直射的地方": "4ddb7ce9a0b1288c611e52bcf3393f57", "220143_古怪_空虚的走廊": "5a074b032a37e19f67568bc7e41a3aaa", "220144_古怪_神奇的房间": "dead3e87a24eadd8a4375abf8ac24283", "220145_古怪_死里卷": "aaf4f4d7220df8ba6457f8d5c82ff596", "220146_古怪_古怪的笔袋": "fe786bb350372655d645440fa4f452b0", "220147_古怪_午间的书桌": "4a3d6a1e3000bacdf41e38e5a580d7c5", "220148_古怪_凌乱的课桌": "3993ff736ab65a13b3cdc2c674157242", "220149_古怪_我不知道起什么名字了": "cf51c2d7cf72af9d4e72fa3d98f9d122", "220150_古怪_剩余的143天": "44f09a300b73b0d2904585cd40a8d10c", "220151_古怪_那边的兼程楼": "5c3bf663ed0f71baae0604a53c840c9e", "220152_古怪_周六的街道": "91c7810b339b290af2123f22ec4f2368",
};
// reversed array for Background list
bg.ra = Object.keys(gallery).reverse();
document.getElementById("bglist").innerHTML = function () {
  var l = "", GSIZE = 20;
  for (var i in bg.ra) {
    // function get
    if (i % GSIZE == 0) l += "<details>\n  <summary>" + Math.max((bg.ra.length - i - 19), 1) + "~" + (bg.ra.length - i) + "</summary>\n  <div class='alist'>\n";
    l += "    <a onclick='bg(\"" + bg.ra[i] + "\")'>" + bg.ra[i] + "</a>\n";
    if (i % GSIZE == GSIZE - 1) l += "  </div>\n</details>\n";
  }
  // console.log(l);
  return l;
}();
function bg(name) {
  // 若同时以Date.now()作为volnum和picseed的随机种子，会产生特定的余数对应关系
  // if (volnum == null) volnum = $volnum[~~(Math.random() * $volnum.length)];
  // if (picseed == null) picseed = ~~(Math.random() * gallery[volnum].pic.length);
  if (!(name in gallery)) name = bg.ra[~~(Math.random() * bg.ra.length)];
  try {
    document.documentElement.style.backgroundImage = "url(https://images.xuewuzhibu.cn/" + gallery[name] + ".jpg)";
    send((document.getElementById("bg").innerHTML = "背景: " + name) + " <span class='dim'>在右键菜单可指定背景，使用须遵守<a href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh'> CC BY-NC-SA 4.0 </a>许可。</div>");
    // 定时换壁纸（康总加成🙏）
    clearInterval(bg.interval);
    bg.interval = setInterval(bg, 2040411);
  } catch (e) {
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
bg();
