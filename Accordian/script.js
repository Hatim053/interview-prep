const container = document.querySelector('.container')
const data = [{
  questions : 'what is javascript ?',
  answer : "lorem is jfbrubrngirhgir rg8hr8grhg iugrhg",
},{
  questions : 'what is react ?',
  answer : 'loremuir oughriu rgjtiughr',
},{
  questions : 'what is backend',
  answer : 'kurgrig itghig togjigr ogrgir',
}]

let activeFaq = null


function showData(data) {
    container.innerHTML = ``
    data?.forEach((obj ,idx) => {
    const faqCard = document.createElement('div')
    faqCard.classList.add('faq-card')
     faqCard.innerHTML = `
            <div class="question">
            
            <div>what is javascript ?</div>
            <span class="controller">${activeFaq == idx ? '-' : '+'}</span>
            </div>
            <div class="${activeFaq != idx && 'hide'} answer">lorem is jfbrubrngirhgir rg8hr8grhg iugrhg</div>`
       
            const question = faqCard.querySelector('.question')
            question.addEventListener('click' , () => {
             activeFaq = activeFaq == idx ? null : idx
                console.log('clicked')
                showData(data)
            })
    container.appendChild(faqCard)
})
}
showData(data)