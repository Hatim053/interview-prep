const display = document.querySelector('.time-display')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')



let startTime = 0
let stop = true
let timePassed = 0

function init() {
    if(stop) return
     timePassed = (Date.now() - startTime)
    const ms = timePassed % 1000
    const totalSeconds = Math.floor(timePassed/1000)
     seconds =  Math.floor(totalSeconds % 60)
    const totalMinutes = totalSeconds / 60
     minutes = Math.floor(totalMinutes % 60)
     hours = Math.floor(totalMinutes / 60)

    display.innerHTML= `<span>${hours}:</span><span>${minutes}:</span><span>${seconds}:</span><span>${ms}</span>`
     
    requestAnimationFrame(init)
       
}



startBtn.addEventListener('click' , (e) => {
    stop = false
    startTime = Date.now()
    e.target.disabled = true
    e.target.classList.add('disabled')
   requestAnimationFrame(init)
})

stopBtn.addEventListener('click' , (e) => {
    stop = !stop
    if(!stop) {
    e.target.innerText = 'Stop'
    startTime = Date.now() - timePassed
    // console.log(startTime)
    init()
    }
    else {
        // console.log(startTime , timePassed)
    e.target.innerText = 'Resume'
    }
    e.target.classList.toggle('resume')
    e.target.classList.toggle('stop')
})

resetBtn.addEventListener('click' , (e) => {
    stop = true
    startBtn.disabled = false
    startBtn.classList.remove('disabled')
    display.innerHTML = '<span>00:00:00:00</span>'
    startTime = 0
    console.log('done')
    
})

