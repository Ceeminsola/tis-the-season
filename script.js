document.getElementById('greetingButton').addEventListener('click', function() {
    // Pop-up card
    var popupCard = document.createElement('div');
    popupCard.className = 'popup-card';

    // Span for the close button
    var closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '&times;'; // '×' character for close button
    closeButton.addEventListener('click', function() {
        document.body.removeChild(popupCard); // Close the pop-up when close button is clicked
    });


    // close button and content to the pop-up card
    popupCard.appendChild(closeButton);

    // Append the pop-up card to the body
    document.body.appendChild(popupCard);

    // Sparkling Burst
    createSparklingBurst();
});

function createSparklingBurst() {
    var burstContainer = document.createElement('div');
    burstContainer.className = 'sparkling-burst-container';

    for (var i = 0; i < 10; i++) {
        var sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        burstContainer.appendChild(sparkle);
    }

    document.body.appendChild(burstContainer);

    // Remove the burst after a short delay
    setTimeout(function() {
        document.body.removeChild(burstContainer);
    }, 1000);
}

// function createSnowflake() {
//     var snowflake = document.createElement('div');
//     snowflake.className = 'snowflake';
//     snowflake.style.left = Math.random() * window.innerWidth + 'px';
//     document.body.appendChild(snowflake);

//     // Remove the snowflake from the DOM after animation
//     snowflake.addEventListener('animationiteration', function() {
//         document.body.removeChild(snowflake);
//     });
// }

// // Function to initiate snowfall
// function initiateSnowfall() {
//     setInterval(createSnowflake, 100); // Adjust the interval to control the snowfall density
// }

// // Call the function to initiate snowfall when the page loads
// initiateSnowfall();