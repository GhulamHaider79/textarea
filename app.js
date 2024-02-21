function processInput() {
    var inputText = document.getElementById("textArea").value;
    console.log(inputText)
    var lines = inputText.split('\n');

    var qaObject = {};

    for (var i = 0; i < lines.length; i += 5) {
        // Assuming each set of 5 lines corresponds to a single QA pair
        var questionIndex = i;
        
        var option1Index = i + 1;
        var option2Index = i + 2;
        var option3Index = i + 3;
        var option4Index = i + 4;

        var question = lines[questionIndex].trim();
        var option1 = lines[option1Index];
        var option2 = lines[option2Index];
        var option3 = lines[option3Index];
        var option4 = lines[option4Index];

        // Store the QA pair in the object
        qaObject[question] = {
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4
        };
    }

     console.log(qaObject);

    
     document.getElementById("textArea").value = "";
     alert("Submit Successfully  See in Console")

}
