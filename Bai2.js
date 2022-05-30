const x = [1, 3, 5, 7, 9, 12];
NumNhap = +prompt(`Cho mảng X = [1,3,5,7,9,12]
                                Nhập số cần thử`)

function xetArray(NumNhap, x) {
    for (i = 0; i < x.length; i++) {
        if (x[i] == NumNhap) {
            document.getElementById('boolean').innerHTML = `Có`;
            document.getElementById('indexNo').innerHTML = `[${i}]`;
            break;

        } else {
            document.getElementById('boolean').innerHTML = `Không`;
        }
    }
}

document.getElementById('promptNum').innerHTML = `${NumNhap}`;
xetArray(NumNhap, x)


