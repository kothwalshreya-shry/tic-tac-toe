let boxes = document.querySelectorAll(".box");
let re = document.querySelector("#re");
let newbt = document.querySelector("#p");
let msg = document.querySelector("#msg");
let k = document.querySelector(".k");
let turn = true;
const arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn)
        {
        box.innerText = "O";
        turn = false;
        }
        else{
        box.innerText = "X";
        turn = true;
        }
        box.disabled = true; 
        Check();
});
});
const reset = () =>
{
    turn = true;
    for(let box of boxes)
    {
      box.disabled = false; 
      box.innerText = "";
      k.style.display = "none"; 
      re.classList.add("show");
    }
}
const show = (winner) =>
{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    k.style.display = "block";
    re.classList.remove("show");
    for(let box of boxes)
        {
            box.disabled = true;
        };
}
const Check = () => 
{
 for(let i of arr)
 {
    if(boxes[i[0]].innerText != "" && boxes[i[1]].innerText != "" && boxes[i[2]].innerText != "")
    {
        if(boxes[i[0]].innerText == boxes[i[1]].innerText && boxes[i[1]].innerText == boxes[i[2]].innerText)
        {
        console.log("winner");
        let t = boxes[i[0]].innerText;
        show(t);
        }
    }
 }
};
newbt.addEventListener("click",reset);
re.addEventListener("click",reset);