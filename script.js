
// ==========================
// ENVELOPE OPENING
// ==========================

const envelopeButton = document.getElementById("envelopeButton");

const mailScreen = document.getElementById("mailScreen");
const invitationScreen = document.getElementById("invitationScreen");
const successScreen = document.getElementById("successScreen");

let envelopeOpened = false;

envelopeButton.addEventListener("click", function() {

    // Prevent opening it multiple times
    if (envelopeOpened) return;

    envelopeOpened = true;

    // Start the envelope animation
    envelopeButton.classList.add("open");

    document.getElementById("clickHint").textContent =
        "Opening your letter... ♡";

    // Show the invitation after the animation
    setTimeout(function() {

        mailScreen.classList.add("hidden");
        invitationScreen.classList.remove("hidden");

    }, 1000);

});


// ==========================
// YES / NO INTERACTION
// ==========================

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const littleNote = document.getElementById("littleNote");

let noClicks = 0;

yesButton.addEventListener("click", function() {

    // Hide the invitation
    invitationScreen.classList.add("hidden");

    // Show the celebration
    successScreen.classList.remove("hidden");

});


noButton.addEventListener("click", function() {

    noClicks++;

    // Make YES grow gradually
    const yesScale = Math.min(1 + noClicks * 0.12, 1.6);

    // Make NO shrink slightly, but remain usable
    const noScale = Math.max(1 - noClicks * 0.07, 0.8);

    yesButton.style.transform = `scale(${yesScale})`;
    noButton.style.transform = `scale(${noScale})`;

    // Change the little message
    const messages = [
        "Are you sure? 🥺",
        "But it's our anniversary! ♡",
        "I'll give you kisses!",
        "The YES button is looking pretty good...",
        "Hmph ♡"
    ];

    const messageIndex = Math.min(noClicks - 1, messages.length - 1);

    littleNote.textContent = messages[messageIndex];

});

// ==========================
// PRESENT REVEALS
// ==========================

const giftButtons = document.querySelectorAll(".gift-button");

giftButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const giftNumber = button.dataset.gift;
        const giftMessage = document.getElementById("gift" + giftNumber);

        // Reveal or hide the present's message
        giftMessage.classList.toggle("hidden");

        // Change the present's appearance
        button.classList.toggle("open");

    });

});
