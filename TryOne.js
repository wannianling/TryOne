// alert('Hello,您的降临是我们的荣幸~~')

// 验证QQ邮箱的函数
function validateQQEmail(email) {
  // QQ邮箱的正则表达式规则，QQ号通常为5到11位数字，后跟"@qq.com"
  var regex = /^[1-9][0-9]{4,10}@qq.com$/;
  return regex.test(email);
}

// 当用户离开输入框时触发验证
function onEmailInputBlur() {
  var emailInput = document.getElementById('qqEmail');
  var isValidQQEmail = validateQQEmail(emailInput.value);
  if (!isValidQQEmail) {
    alert('请输入有效的QQ邮箱地址。');
    emailInput.value = '';
  } else {
    return true;
  }
}

//检验密码
function validatePassword(Password) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]) || [a-z] || [A-Z] || [0-9].{6,}$/;
  return regex.test(Password);
}

function onPasswordInputBlur() {
  var passwordInput = document.getElementById('Password');
  var isVaildPassword = validatePassword(passwordInput.value);
  if (!isVaildPassword) {
    alert('请输入正确的密码！');
    passwordInput.value = '';
  } else {
    return true;
  }
}



// JavaScript验证登录函数
function validateLogin() {
  var username = document.getElementById('qqEmail').value;
  var password = document.getElementById('Password').value;

  // 假设我们期望的账号是'user'，密码是'pass'
  var expectedUsername = '1761902034@qq.com';
  var expectedPassword = '123456';

  if (username === expectedUsername && password === expectedPassword) {
    // 验证成功，进行跳转
    window.location.href = 'D:\\01大学代码\\VS code\\Try\\HomePage\\Homepage.html'; // 替换为实际的跳转页面
  } else {
    // 验证失败，提示用户
    alert('账号或密码错误！');
  }
}

// 阻止表单默认提交行为
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
});



