const container = document.querySelector(".container");

const data = [
{
    id : "1",
    question : "what is the price ?",
    answer : "Lorem ipsum dolor sit amet consectetur.",
    isActve : true
},
{
    id : "2",
    question : "what is validity ?",
    answer : "Lorem ipsum dolor sit amet consectetur."
},
{
    id : "3",
    question : "what are the features included ?",
    answer : "Lorem ipsum dolor sit amet consectetur."
}
];
const isActive = [];

function showCard(data) {
    container.innerHTML = "";
data.forEach(obj => {
    const {id , question , answer} = obj;
    const isCurrentCardActive = isActive.includes(id);
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
     <div class="question">${question} <span class="btn">${isCurrentCardActive ? "-" : "+"}</span></div>
        <div class="answer ${isCurrentCardActive ? "active" : "inactive"}">${answer}</div>
    `
    const btn = card.querySelector(".btn");
    btn.addEventListener("click" , () => {
         const answer = card.querySelector(".answer")
        if(!isCurrentCardActive) {
            console.log(isCurrentCardActive);
            isActive.push(id);
            console.log(isActive);
            answer.classList.remove("inactive");
        } else {
               console.log(isCurrentCardActive);
            const idx = isActive.indexOf(id);
            isActive.splice(idx , 1);
             console.log(isActive);
             answer.classList.add("inactive");
        }
     
        showCard(data);
    });
    container.appendChild(card);
});
}



showCard(data);
