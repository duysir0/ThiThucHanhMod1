function QuikMaff() {
    let a = +prompt("Nhập số a");
    let b = +prompt("Nhập số b");
    
    if (a == 0 && b != 0) {
        alert(`PT vô nghiệm`);
        document.getElementById('result').innerHTML = `X vô nghiệm`;

    } else if (a == 0 && b == 0) {
        alert(`PT vô số nghiệm`);
        document.getElementById('result').innerHTML = `X có vô số nghiệm`;

    } else {
        let x = -b / a;
        document.getElementById('result').innerHTML = `${x}`;
    }
    document.getElementById('a').innerHTML = `${a}`;
    document.getElementById('b').innerHTML = `${b}`;
}

QuikMaff();