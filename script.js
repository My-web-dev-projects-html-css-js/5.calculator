let display=document.getElementById("display");
let buttons=document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        //if user click 'C' box should be empty
        if(e.target.innerHTML=="C"){
            display.value="";
        }
        //if user click '=' box should be calculated
        else if(e.target.innerHTML=="="){
            try {
                display.value=eval(display.value);
            } catch (error) {
                display.value="Error"
            }
        }
        //if user click any button it should be display in the box
        else{
            display.value+=e.target.innerHTML;
        }
    })
})

