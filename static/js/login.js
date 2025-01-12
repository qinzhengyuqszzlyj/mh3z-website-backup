function LoginFormSubmit(theForm, UserLoginID, Password) {
  var szUserID, szPassword;
  var blUserID, blPasswor;
  var szBuf;

  szUserID = UserLoginID.value;
  szPassword = Password.value;

  blUserID = false;
  blPassword = false;
  szBuf = "";

  if (szUserID == "") {
    szBuf += "请输入用户名！\n";
    blUserID = true;
  }

  if (szPassword == "") {
    szBuf += "请输入密码！\n";
    blPassword = true;
  }

  if (blUserID || blPassword) {
    alert(szBuf);
    if (blUserID) {
      UserLoginID.focus();
    } else {
      Password.focus();
    }
    return false;
  }

  return true;
}
