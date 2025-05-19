"use strict";

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Content Loaded");
    
    const questionText = document.querySelector("#questionText");
    const shakeButton = document.querySelector("#shakeBall");
    const restartButton = document.querySelector("#restartButton");
    const ballAnswers = [
        "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", 
        "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", 
        "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", 
        "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
    
    // Enable button
    questionText.addEventListener("input", function() {
        if (questionText.value.length == 0) {
            console.log("Button Disabled");
            shakeButton.disabled = true;
            shakeButton.style.color="white"; 
            
        } else {
            console.log("Button Enabled");
            shakeButton.disabled = false;
            shakeButton.style.color="rgb(90, 123, 255)";
        }
    })

    // Button mouseover
    shakeButton.addEventListener("mouseover", function() {
        if (!shakeButton.disabled) {
            shakeButton.style.borderColor="rgb(90, 123, 255)";
        }
    })
    shakeButton.addEventListener("mouseout", function() {
        if (!shakeButton.disabled) {
            shakeButton.style.borderColor="rgb(175, 175, 175)";
        }
    })
    
    // Answer display
    shakeButton.addEventListener("click", function() {
        console.log("Shake ball");
        document.querySelector("#ballImage").src="images/answer_ball.JPG";
        questionText.style.display= "none";
        shakeButton.style.display = "none";
        document.querySelector("h4").innerText = questionText.value;
        document.querySelector("p").innerText = ballAnswers[Math.floor(Math.random() * 20)];
        restartButton.style.display = "block";
    });

    // Reset
    restartButton.addEventListener("click", function() {
        console.log("Reset elements");
        document.querySelector("#ballImage").src="images/8_ball.JPG";
        document.querySelector("h4").innerText = "What is your question?";
        questionText.style.display= "";
        questionText.value = "";
        shakeButton.style.display = "";
        shakeButton.disabled = true;
        shakeButton.style.color="white"; 
        document.querySelector("p").innerText = "";
        restartButton.style.display = "none";
    })
}); 