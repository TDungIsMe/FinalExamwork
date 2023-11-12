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

  const usernameError = document.getElementById('username-error')
  const passwordError = document.getElementById('password-error')
  const loginError = document.getElementById('login-error')

  // Kiểm tra
  if (username.value === '') {
    usernameError.innerHTML = 'Vui lòng nhập Tên đăng nhập'
  } else {
    usernameError.innerHTML = ''
  }

  if (password.value === '') {
    passwordError.innerHTML = 'Vui lòng nhập Mật khẩu'
  } else {
    passwordError.innerHTML = ''
  }

  if (username.value !== 'Dũng' || password.value !== '123456') {
    loginError.innerHTML = 'Sai Tên đăng nhập hoặc Mật khẩu'
  } else {
    loginError.innerHTML = ''
    window.location.href = '../index.html'
  }
}