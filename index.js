var nums = document.querySelectorAll("#keyboard>div");
var bag = document.querySelector("#disp");

for(var i=0; i<nums.length;i++){
    nums[i].addEventListener("click", myFunction);

}

function myFunction(){
    var targetNumber = event.target.innerText;

    switch(targetNumber){
        case "C":
            bag.innerText =" ";
            break;

            case "=":
                bag.innerText=eval(bag.innerText);
                break;

            case "DEl":
                bag.innerText = bag.innerText.trim().slice(0,-1);
                break;
                
                default:
                    bag.innerText+= " " + targetNumber + " ";

            
    }

}