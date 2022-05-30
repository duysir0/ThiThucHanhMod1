// Viết hàm đếm số ký tự nguyên âm trong một chuỗi cho trước.
// Hàm có 1 tham số truyền vào mà một mảng các ký tự. Hàm trả về false nếu không có ký tự nguyên âm nào.
// Viết chương trình nhập vào một chuỗi bất kỳ. Gọi hàm tìm số ký tự nguyên âm vừa xây dựng ở trên.
//     Nguyên âm là các ký tự: a, o, e, u, i

strNhap = prompt(`Nhập chuỗi ký tự cần xét:`)
const vowel = "aeiuo"

 
function vowCounter (strNhap,vowel){
    let sumOfVowel = 0
    for (i=0;i < vowel.length;i++){
        if(vowel[i] == strNhap) {
            sumOfVowel += 1;
            break;
        }
        else {
            alert(`Chuỗi không có ký tự nguyên âm nào!`);
            document.getElementById(`result`).innerHTML = `Chuỗi không có ký tự nguyên âm nào`;
            break;
                }
        } document.getElementById(`result`).innerHTML = `${sumOfVowel}`
}

document.getElementById(`strPrompt`).innerHTML = `${strNhap}`;
vowCounter (strNhap,vowel)





