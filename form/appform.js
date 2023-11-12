const personalInformation = document.getElementById("personal-Information")
personalInformation.addEventListener("submit" , function () {
    var arr = document.getElementsByTagName('input')
    var name = arr[0].value
    var age = arr[1].value
    var phone = arr[2].value
    if(name == "" || age == "" || phone == ""){
        alert("cần điền đẩy đủ thông tin")  
    }
    if (isNaN(phone)) {
        alert("sdt phải là số")
    }
})