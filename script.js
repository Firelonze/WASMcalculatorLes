let div = document.getElementById("div");
let sub = document.getElementById("sub");
let add = document.getElementById("add");
let mul = document.getElementById("mul");
WebAssembly
.instantiateStreaming(fetch('./math.wasm'))
.then(({instance}) => {
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);
    // console.log(instance.exports.sum(5, 5)+ "%c dit is een optelling", "color: #ff8400;");
    // console.log(instance.exports.mul(10, 10)+ "%c dit is een vermenigvuldiging", "color: cyan;");
    // console.log(instance.exports.sub(8, 2)+ "%c dit is een aftrekking", "color: lime;");
    // console.log(instance.exports.div(25, 5)+ "%c dit is een  delenDoor", "color: yellow;");
    switch (operator) {
        case "plus":
            add.innerHTML = instance.exports.add(oldNum,theNum);
            break;
        case "minus":
            sub.innerHTML = instance.exports.sub(oldNum,theNum);
            break;
        case "divided by":
            div.innerHTML = instance.exports.div(oldNum,theNum);
            break;  
        case "times":
            mul.innerHTML = instance.exports.mul(oldNum,theNum);
            break;
    }
});
 