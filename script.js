function calculate() {

    let gifChance = Math.floor(Math.random() * 11);

    if (gifChance <= 9) {
        document.getElementById("heartLoveChicken").src = "images/d20.gif";
    }

    if (gifChance > 9) {
        document.getElementById("heartLoveChicken").src = "images/spongebobThinking.gif";
    }


    let nameOne = document.getElementById("nameOne").value;
    let nameTwo = document.getElementById("nameTwo").value;

    setTimeout(afterWait, 6000)

    function afterWait() {
                let loveCompatibility = Math.floor(Math.random() * 101);
                document.getElementById("compatibilityParagraph").innerText = "Your compatibility is " + loveCompatibility +"%!";
    
                if (loveCompatibility <= 30) {
                    document.getElementById("commentParagraph").innerText = "I will be honest. \nYour compatibility with " + nameTwo + " isn't the greatest.\n But it can only get better from here! Give them a gift, or surprise them with McDonald's!\n I certainly believe in you!";
                    document.getElementById("heartLoveChicken").src = "images/badChicken.png";
                }
    
                if (loveCompatibility >= 31 && loveCompatibility <= 70) {
                    document.getElementById("commentParagraph").innerText = "You and " + nameTwo + " are great for each other! It could still be better but I think you're doing good\n for now! Surprise them with a bucket of KFC and it might just shoot up\n to 101% compatibility!";
                    document.getElementById("heartLoveChicken").src = "images/mediumChicken.jpg";
                }
    
                if (loveCompatibility > 70) {
                    document.getElementById("commentParagraph").innerText = "Holy wackadoodle biscuits! You and " + nameTwo + " are absolutely perfect\n for each other! Everybody needs to idolize your compatibility!\n Celebrate with some Kentucky Fried Chicken together! You've earned it.\n🍗";
                    document.getElementById("heartLoveChicken").src = "images/goodChicken.png";
                }
            }
        }