var calcuation = function() {
    "use strict";
    var btn = document.getElementById("btn"),
    h = document.getElementById("height"),
    w = document.getElementById("weight"),
    ans = document.getElementById("calculation"),
    me = document.getElementById("me"),
    output = "";

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        output = (Math.round(w.value) / ((Math.round(h.value) / 100) * (Math.round(h.value) / 100))).toFixed(2);
        if (output > 0) {
            if (output > 16) {
               if (output > 18.7) {
                  if (output > 25) {
                    if (output > 30) {
                        if (output > 35) {
                            if (output > 40) {
                                ans.innerHTML = "Your Body Mass Index is " + output + ". You have obesity. Please, talk to your doctor!";
                            }   else {
                                ans.innerHTML = "Your Body Mass Index is " + output + ". You have obesity. Please, talk to your doctor!";
                            }
                        }   else {
                            ans.innerHTML = "Your Body Mass Index is " + output + ". You have obesity. Please, talk to your doctor!";
                        }
                    }    else {
                        ans.innerHTML = "Your Body Mass Index is " + output + ".  You are overweight for your height. To achieve and maintain a healthy weight, be physically active every day and enjoy a healthy, well-balanced diet.";
                    }
                }   else {
                    ans.innerHTML = "Your Body Mass Index is " + output + ". You are a healthy weight for your height.";
                } 
            } else {
                ans.innerHTML = "Your Body Mass Index is " + output + ". You are underweight for your height. It's important to aim to keep within your healthy weight range. Being in the healthy weight range will improve your body's ability to fight off infection or illness.You are underweight for your height. It's important to aim to keep within your healthy weight range. Being in the healthy weight range will improve your body's ability to fight off infection or illness.";
            } 
        } else {
            ans.innerHTML = "Your Body Mass Index is " + output + ". You have a pronounced shortage of weight. Please, talk to your doctor!";
        }
    }  else {
        ans.innerHTML = "You have a negative body weight, contact the physicists! You are a new scientific discovery! <br/><br/>Or nothing entered in form :(";
    }    me.innerHTML = "Me on GitHub :)";
});
}();

