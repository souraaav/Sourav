// Function to change the background color of the body when the button is clicked
document.getElementById("changeColorButton").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4F4F4", "#FFC300"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
