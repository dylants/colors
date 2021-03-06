"use strict";

function generateColors(text) {
    var i, colors, color;

    colors = [];

    // null check
    if (!text) {
        return colors;
    }

    // generate a color for each character in the text string,
    // adding it to our colors array
    for (i = 0; i < text.length; i++) {
        color = generateColor(text.charAt(i));
        colors.push(color);
    }

    return colors;
}
// export the function
module.exports.generateColors = generateColors;


function generateColor(character) {
    var color;

    // convert the character to an ascii value
    color = character.charCodeAt(0);

    // increase the distance between each character
    // to create a wider color spectrum
    color = color * 1000;

    // bound that value to 0 - 360 (the HSL color space)
    color = color % 360;

    // return an HSL representation of the color,
    // using 100% saturation and 50% lightness
    return "hsl(" + color + ", 100%, 50%);";
}
// export the function
module.exports.generateColor = generateColor;
