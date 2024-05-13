function increaseSize() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyles() {
    var textArea = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = ""; // Reset to default color
        textArea.style.textDecoration = "none"; // Reset text decoration
    }
}

function mooText() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;

    // Uppercase the text
    textArea.value = text.toUpperCase();

    // Add "-Moo" suffix to the last word of each sentence
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length - 1; i++) {
        var words = sentences[i].trim().split(" ");
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(". ");
}



