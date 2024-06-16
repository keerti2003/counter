"use strict";

let begin = function () {
  let number = 0;
  let num = 0;

  document.querySelector(".num").value = number;
  document.querySelector(".ent").value = num;
  document.querySelector(".message").textContent = "Start Counter...";

  const sound = document.getElementById("sound");

  let countCounter = function (num) {
    document.querySelector(".plus").addEventListener("click", function () {
      number = number + 1;
      document.querySelector(".num").value = number;
      if (num && num == number) {
        sound.play();
        document.querySelector(".message").textContent = "Over !!";
      }
    });
    document.querySelector(".minus").addEventListener("click", function () {
      number = number - 1;
      document.querySelector(".num").value = number;
    });
  };

  document.querySelector(".enter").addEventListener("click", function () {
    num = Number(document.querySelector(".ent").value);
    countCounter(num);
  });
};

document.querySelector(".again").addEventListener("click", function () {
  begin();
});

begin();
