const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentCount = 1

next.addEventListener('click', () => {
    currentCount++

    if(currentCount > circles.length) {
        currentCount = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentCount--

    if(currentCount < 1) {
        currentCount = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentCount) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentCount === 1) {
        prev.disabled = true
    } else if(currentCount === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}