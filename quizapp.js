const quesJSON=[{
    correctAns:"narendar damodar das modi",
    options:['narendar damodar das modi','arvind kejriwal','soniya gandhi','rahul gandhi'],
    question:"who is indian prime minister?"
},
{
    correctAns:"draupadi murmu",
    options:['ramnath kovind','draupadi murmu','avinash pal','pranam mukhar ji'],
    question:"who is indian chief minister?"
},
{
    correctAns:"dharmendra pradhan",
    options:['rajsekhar singh','piyush goyal','rakesh jangloni','dharmendra pradhan'],
    question:"who is indian educational minister?"
},
{
    correctAns:"3:2",
    options:['4:2','2:4','3:2','4:3'],
    question:"what's ratio of our national flag?"
},
{
    correctAns:"7",
    options:['5','6','7','8'],
    question:"how many union teritory in our india?"
}];


let score=0;
let currentqu=0;
const totalScore=quesJSON.length;

//accesssing all the element...
let questionEl=document.querySelector("#question");
let optionEl=document.querySelector("#options")
let scoreEl=document.querySelector("#score");
const nextEl=document.querySelector("#next")
showQuestion();
nextEl.addEventListener('click',()=>{
    scoreEl.textContent=`score: ${score}/ ${totalScore}`;
    nextques();
});

function showQuestion(){

//destructuring........
const{correctAns,options,question}=quesJSON[currentqu];

//set questions...........
questionEl.textContent=question;

//shuufled option
const shuufleoptions=shfleoption(options);

//the option div with the buttons......
shuufleoptions.forEach((opt)=>{
    const btn=document.createElement('button');
    btn.textContent=opt;
    optionEl.appendChild(btn);

    // event handling on the  button..
    btn.addEventListener('click',()=>{
    if(opt===correctAns){
        score++;
    }else{
        score=score-0.25;
    }
    scoreEl.textContent=`score: ${score} /${totalScore}`;
    nextques();
    });
});
};

//function for nextques.
function nextques(){
    currentqu++;
    optionEl.textContent='';
    if(currentqu>=quesJSON.length){
        questionEl.textContent="quiz completed";
        nextEl.remove();
      
    }else{
        showQuestion();
    }

}

//shuffling the options....

function shfleoption(options){
    for(let i=options.length-1;i>= 0;i--){
        const j=Math.floor(Math.random()*i+1);
    
    [options[i],options[j]]= [options[j],options[i]];
    }
   return options;
}
// let option=[1,2,3,4,5];
// shfleoption(option);


