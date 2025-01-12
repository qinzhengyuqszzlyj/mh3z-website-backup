//需要images/focus1.swf
/**************************图片翻动兼容修改****************************/

/***********************修改后兼容所有浏览器，大家看放心使用************/

/*************************修改时间：2013年10月12日****************/

/*******************************修改人：杨桐翰********************/

function FlashPic(pics, links, texts, widths, heights, picheigth) {
  //alert(11);
  var a = "",
    b = "",
    c = "";
  var o = pics.split("|");
  var p = links.split("|");
  var q = texts.split("|");
  for (var i = 0; i < o.length; i++) {
    if (o[i] != "") {
      a += o[i] + "|";
      b += p[i] + "|";
      if (q[i].length > 26) {
        q[i] = q[i].substring(0, 25);
        q[i] += "...";
      }
      c += q[i] + "|";
      //alert(q[i]);
      //alert(c);
    }
  }
  a = a.substring(0, a.length - 1);
  b = b.substring(0, b.length - 1);
  c = c.substring(0, c.length - 1);

  var fv =
    "pics=" +
    a +
    "&links=" +
    b +
    "&texts=" +
    c +
    "&borderwidth=" +
    widths +
    "&borderheight=" +
    picheigth +
    "&textheight=22";
  document.write(
    '<object id="focusflash" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7" type="application/x-shockwave-flash" width="' +
      widths +
      '" height="' +
      heights +
      '">'
  );
  document.write('<param name="movie" value="images/focus1.swf">');
  document.write('<param name="quality" value="High">');
  document.write('<param name="allowscriptaccess" value="sameDomain">');
  document.write('<param name="menu" value="false">');
  document.write('<param name="wmode" value="transparent">');
  document.write('<param name="bgcolor" value="#ffffff;">');
  document.write('<param name="flashvars" value="' + fv + '">');
  document.write(
    '<embed id="focusflash" src="images/focus1.swf" quality="High" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowscriptaccess="sameDomain" menu="false" wmode="opaque" flashvars="' +
      fv +
      '" width="' +
      widths +
      '" height="' +
      heights +
      '"></object>'
  );
}
