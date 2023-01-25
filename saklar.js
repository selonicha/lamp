const bright = document.getElementById("background");
var defaultContrast = 800;
bright.classList.add(`bg-gray-${defaultContrast}`);

function saklar() {
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");
  let lamp1 = document.getElementById("lamp1");
  let lamp2 = document.getElementById("lamp2");
  let lamp3 = document.getElementById("lamp3");
  console.log(defaultContrast);

  //toggle.checked ? alert("on") : alert("off");
  if (toggle1.checked) {
    console.log("on");
    defaultContrast -= 120;
    lamp1.src = "aset/image/on.gif";
    console.log(`defultContrast ${defaultContrast}`);
    return defaultContrast;
  } else {
    console.log("off");
    defaultContrast += 120;
    lamp1.src = "aset/image/off.gif";
    return defaultContrast;
  }
  if (toggle2.checked) {
    console.log("on");
    defaultContrast -= 120;
    lamp2.src = "aset/image/on.gif";
    return defaultContrast;
  } else {
    console.log("off");
    defaultContrast += 120;
    lamp2.src = "aset/image/off.gif";
    return defaultContrast;
  }

  if (toggle3.checked) {
    console.log("on");
    defaultContrast -= 120;
    lamp3.src = "aset/image/on.gif";
    return defaultContrast;
  } else {
    console.log("off");
    defaultContrast += 120;
    lamp3.src = "aset/image/off.gif";
    return defaultContrast;
  }
  bright.classList.add(`bg-gray-${defaultContrast}`);
}

//   if (action == "on") {
//     if (lampNum == 1) {
//       lamp1.src = "aset/image/on.gif";
//     }
//     if (lampNum == 2) {
//       lamp2.src = "aset/image/on.gif";
//     }
//     if (lampNum == 3) {
//       lamp3.src = "aset/image/on.gif";
//     }
//   }
//   if (action == "off") {
//     if (lampNum == 1) {
//       lamp1.src = "aset/image/off.gif";
//     }
//     if (lampNum == 2) {
//       lamp2.src = "aset/image/off.gif";
//     }
//     if (lampNum == 3) {
//       lamp3.src = "aset/image/off.gif";
//     }
//   }
// }
