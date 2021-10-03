const beautifyButton = document.querySelector(".beautify"); 
const clearButton = document.querySelector(".clear"); 
const inputBox =  document.querySelector(".inputBox"); 
beautifyButton.addEventListener("click", (e) => {
    var inputjson =inputBox.value;
    console.log(inputjson);
    inputBox.value = '';
    var obj ="";
    try{
        obj = JSON.parse(inputjson);
    }catch(ex){
        inputBox.animate(
            {
                backgroundColor: "rgb(173, 26, 26)",
            },
            1000,
            function () {
              $(this).css("border", "none");
            }
          );
          inputBox.value=inputjson;
        return;
    }
    inputBox.animate(
        {
          backgroundColor: "rgb(173,255,47)",
        },
        1000,
        function () {
          $(this).css("border", "none");
        }
      );
    console.log(obj);
    inputBox.value=JSON.stringify(obj, null, 4);
});


clearButton.addEventListener("click", (e) => {
    inputBox.value = '';
    // document.getElementById("input").style.backgroundColor = "green";
  });