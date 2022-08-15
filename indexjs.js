var questions = ["Why interfaces is used in java","JIT Compiler is used for","Basic part of java","Java has only immutable string"];
var count = 0;

function myFunction(){
    var person = prompt("Enter your name","Chris Hemsworth");
    if(person != null && person!= " "){
     document.getElementById("demo").innerHTML = "Hello" + person+"! We will start the quiz as soon as hit on start";
     document.getElementById("star").style.display = "block";
    }
}


function afunc(){
    document.getElementById("ques").innerHTML  =  questions[0];
    count =0;
    document.getElementById("demo").innerHTML = "";
    document.getElementById("skr").innerHTML = "";
    document.getElementById("hala").style.display = "none";

}

function bfunc(i){
    var c = i+1;
    document.getElementById("ques").innerHTML = questions[c];
    ans();

}





function Next(){
    document.getElementById("result").innerHTML = "";
    var i=0;
    var c=questions.length;
    for(i; i<c;i++){
      if(document.getElementById("ques").innerHTML === questions[i]){
        bfunc(i);
        break;
      }
    }
}


function score(){
    document.getElementById("star").innerHTML = "Your score is  " + count;
    document.getElementById("ster").style.display = "block";


}

function load(){
    document.location.reload();
}




function ans(){
   if(document.getElementById("ques").innerHTML === "Why interfaces is used in java"){
    var option1 = document.createElement('button');
    option1.innerHTML = "Polymorphism";
    document.body.appendChild(option1);
    option1.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
        
    }


    var option2 = document.createElement('button');
    option2.innerHTML = "Abstraction";
    document.body.appendChild(option2);
    option2.onclick = function opta(){
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Right Answer";
        count++;
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }



    var option3 = document.createElement('button');
    option3.innerHTML = "Inheritance";
    document.body.appendChild(option3);
    option3.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }



    var option4 = document.createElement('button');
    option4.innerHTML = "Threading";
    document.body.appendChild(option4);
    option4.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }
    
   }





   else if(document.getElementById("ques").innerHTML === "JIT Compiler is used for"){
    var option1 = document.createElement('button');
    option1.innerHTML = "Threading";
    document.body.appendChild(option1);
    option1.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
        
    }


    var option2 = document.createElement('button');
    option2.innerHTML = "Optimisation";
    document.body.appendChild(option2);
    option2.onclick = function opta(){
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Right Answer";
        count++;
        
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }



    var option3 = document.createElement('button');
    option3.innerHTML = "source Code conversion";
    document.body.appendChild(option3);
    option3.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }



    var option4 = document.createElement('button');
    option4.innerHTML = "Regex ";
    document.body.appendChild(option4);
    option4.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }
    
   }




   else if(document.getElementById("ques").innerHTML === "JIT Compiler is used for"){
    var option1 = document.createElement('button');
    option1.innerHTML = "Threading";
    document.body.appendChild(option1);
    option1.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
        
    }


    var option2 = document.createElement('button');
    option2.innerHTML = "Optimisation";
    document.body.appendChild(option2);
    option2.onclick = function opta(){
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Right Answer";
        count++;
        
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }



    var option3 = document.createElement('button');
    option3.innerHTML = "source Code conversion";
    document.body.appendChild(option3);
    option3.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }



    var option4 = document.createElement('button');
    option4.innerHTML = "Regex ";
    document.body.appendChild(option4);
    option4.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }
    
   }





   else if(document.getElementById("ques").innerHTML === "Basic part of java"){
    var option1 = document.createElement('button');
    option1.innerHTML = "Threading";
    document.body.appendChild(option1);
    option1.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
        
    }


    var option2 = document.createElement('button');
    option2.innerHTML = "OOPS";
    document.body.appendChild(option2);
    option2.onclick = function opta(){
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Right Answer";
        count++;
        
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }



    var option3 = document.createElement('button');
    option3.innerHTML = "Inheritance";
    document.body.appendChild(option3);
    option3.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }



    var option4 = document.createElement('button');
    option4.innerHTML = "Encapsulation ";
    document.body.appendChild(option4);
    option4.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }
    
   }




   else if(document.getElementById("ques").innerHTML === "Java has only immutable string"){
    var option1 = document.createElement('button');
    option1.innerHTML = "YES";
    document.body.appendChild(option1);
    option1.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        score();
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
        
    }


    var option2 = document.createElement('button');
    option2.innerHTML = "No";
    document.body.appendChild(option2);
    option2.onclick = function opta(){
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Right Answer";
        count++;
        score();

        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }



    var option3 = document.createElement('button');
    option3.innerHTML = "Not support both";
    document.body.appendChild(option3);
    option3.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        score();
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }



    var option4 = document.createElement('button');
    option4.innerHTML = "none of the Above ";
    document.body.appendChild(option4);
    option4.onclick = function opta(){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong Answer";
        score();
        setTimeout(Next,1000);
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
    }
    
   }


}











































// ------------------------------------------------
// var colors = ["red","black","blue","pink","yellow"];

// function changecolor(){
//     var num = Math.floor(Math.random()*(colors.length));
//     // floor sealing.
//     document.getElementById("target").style.backgroundColor = colors[num];
// }








































// ----------------------------------------------
// console.log("hi")
// function func(){
//     var x = document.getElementById("num").value;
//     document.getElementById("para").style.fontSize = "90px";
//     document.getElementById("para").style.color = "red";
//     document.getElementById("para").innerHTML="Hello" + x;
//     document.getElementById("num").value = "";
//     alert("Hellow world" + x);
 
// }

// function table(){
//     var n = document.getElementById('num').value;
//     var arr = [];
//     for(var i =1;i<=10;i++){
//        arr.push(n + "x" + i +"=" +n*i);
//     }
//     document.getElementById("para").innerHTML = arr;
// }

// function numc(){
//   var x = document.getElementById("num");
//   if(num%2 == 0){
//     document.getElementById('para').innerHTML = "Even";
//   }
//   else{
//     document.getElementById('para').innerHTML = "Odd";
//   }
// }

// function brazilFunc(){
//     var c = "This is Brazil Flag";
//     document.getElementById("brazil").innerHTML = c;
// }

// function outBrazil(){
//     var c = ""
//     document.getElementById("brazil").innerHTML = c;
// }


// function indiaFunc(){
//     var c = "This is India Flag";
//     document.getElementById("india").innerHTML = c;
// }

// function outindia(){
//     var c = ""
//     document.getElementById("india").innerHTML = c;
// }



// function usFunc(){
//     var c = "This is US Flag";
//     document.getElementById("us").innerHTML = c;
// }

// function outus(){
//     var c = ""
//     document.getElementById("us").innerHTML = c;
// }



// function britainFunc(){
//     var c = "This is Britain Flag";
   
//     document.getElementById("britain").innerHTML = c ;
// }

// function outBritain(){
//     var c = ""
//     document.getElementById("britain").innerHTML = c;
// }




// function rusFunc(){
//     var c = "This is Russia Flag";
//     document.getElementById("russia").innerHTML = c;
// }

// function outrus(){
//     var c = ""
//     document.getElementById("russia").innerHTML = c;
// }



// function fraFunc(){
//     var c = "This is France Flag";
//     document.getElementById("france").innerHTML = c;
// }

// function outfra(){
//     var c = ""
//     document.getElementById("france").innerHTML = c;
// }