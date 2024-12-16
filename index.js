const buttons = document.querySelectorAll("button");
const button1 = document.querySelectorAll("button");
const display = document.querySelector("#display");
const preview = document.querySelector("#preview");
const display1 = document.querySelector("#display1")
const history = document.querySelector("#history");
const displayHistory = document.querySelector(".cal-history");
const hide = document.querySelector(".hide")

const array = [];

buttons.forEach((btn) => {


    btn.onclick = ()=>{

        if(btn.id == "clear"){
            display1.value = "Ang Sarap mo Michael";
            setTimeout( ()=> ( display1.value= ""),2000);
            preview.innerText="";
        }

        else if(btn.id == "delete"){

            const str = display1.value.toString();
            display1.value = str.substr(0,str.length -1);

        }
        

        else if (display1.value != "" && btn.id == "equals"){

            const ans = eval(display1.value);
            let pre = display1.value;

            
            //show answer
            setTimeout(()=> (display1.value=ans),500);
            
            //assignment view

            show_preview  = pre + " = " + ans ;
            preview.innerText = show_preview;

            let get_history = show_preview

            array.push(get_history)

            let history_result= array.join("\n")
            // history.innerText= history_result
            GetArray(history_result)
        

        }

        else if(display1.value == "" && btn.id =="equals")
            {

                display1.value="Enter Value";
                setTimeout( ()=> ( display1.value= ""),2000);

        }

        else if (btn.id == "history"){

            displayHistory.style.display = "flex";
            hide.style.display="flex";


      
            GetArray(history_result)      
        }

        



        else{
            display1.value += btn.id;
        }

    };
});

hide.onclick = function(){
    displayHistory.style.display = "none";
    hide.style.display="none";
 
}




function GetArray (item){

    displayHistory.innerText=item


}