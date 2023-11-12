// const personalInformation = document.getElementById("personal-Information")
// personalInformation.addEventListener("submit" , function () {
//     var arr = document.getElementsByTagName('input')
//     var name = arr[0].value
//     var age = arr[1].value
//     var phone = arr[2].value
//     if(name == "" || age == "" || phone == ""){
//         alert("cần điền đẩy đủ thông tin")  
//     }
    
//     if (isNaN(phone)) {
//         alert("sdt phải là số")
//     }
// })
const loginBtn = document.getElementById('login-btn')

// Xu ly khi nguoi dung bam nut Dang nhap
loginBtn.onclick = function () {
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  const passwordagain = document.getElementById('passwordagain')

  const usernameError = document.getElementById('username-error')
  const passwordError = document.getElementById('password-error')
  const passwordaggainError = document.getElementById('passwordaggain-error')
  const loginError = document.getElementById('login-error')

  // Kiểm tra
  if (username.value !== '') {
    usernameError.innerHTML = ''
  } else {
    usernameError.innerHTML = 'Vui lòng nhập Tên đăng ký'
  }

  if (password.value !== '') {
    passwordError.innerHTML = ''
  } else {
    passwordError.innerHTML = 'Vui lòng nhập Mật khẩu'
  }

  if (passwordagain.value === '' ||  password.value) {
    passwordError.innerHTML = 'Vui lòng nhập lại Mật khẩu'
  } else {
    passwordError.innerHTML = ''
  }

  if (password.value !== ''&& username.value !=='' && passwordagain.value == password.value) {
    loginError.innerHTML = ''
    window.location.href = '../index.html'
  } else {
    loginError.innerHTML = 'Mật khẩu điền lại không đúng'
  }
}