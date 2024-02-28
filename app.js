function processInput() {
    var inputText = document.getElementById("textArea").value;
    var lines = inputText.split('\n')
    
    var qaObjects = {};
   
    


    for (var i = 0; i < lines.length; i++) {
        // console.log(lines[i].length-1);
        // console.log();
       var question = ''
        var option = ''

         if (lines[i].charAt(lines[i].length - 1) == "?") {
            question = lines[i]
        }else{

            option = lines[i]
        }
         
        qaObjects.question = question;
        qaObjects.option =option
       
        //console.log(question);
    }
   
    
    
    console.log(qaObjects);

}


