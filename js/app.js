//SELECTIONS
let addTask = document.querySelector('.submit');
let tableBody = document.querySelector('tbody');
let cancelBtn = document.querySelector('.cancel')
let display = document.querySelector('.full-width')


//FUNCTIONS
// This function showTime is responsible for the clock showing in the header
const showTime = () => {
    let hours = ((new Date().getHours()) %12)
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let time;
    minutes < 10 ? minutes = '0' +  minutes : minutes
    seconds < 10 ? seconds = '0' +  seconds : seconds
    hours < 10? hours = '0' + hours : hours
    // This is the condition for adding AM / PM and the padding
    new Date().getHours() < 12 ? time = `${hours} : ${minutes} : ${seconds} AM`:  
        time = `${hours} : ${minutes} : ${seconds} PM`
        document.getElementById('timer').textContent = time
    setTimeout(showTime,1000)
}
showTime()
// The function get called here 

// This is responsible for the schedule outputs in the tables
const tableTask = (e) => {
    e.preventDefault()
    //SELECTS the subject value / inputs and the subject itself
    let subject = document.querySelector('.subject').value
    let taskTitle = document.querySelector('.subject')
    //Prevents empty selection (subject must be provided)
    if(subject) {
        //APPENDS SUBJECT to the table
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.appendChild(document.createTextNode(subject))
        tr.appendChild(td1)
        // COUNTDOWN CLOCK
        let td2 = document.createElement('td')
            const timing = (time) => {
                const repeatTime = () => {
                    let seconds = time % 60
                    seconds < 10 ? seconds = '0' + seconds : seconds
                    td2.textContent = `00 : ${seconds}`
                    if(time !== 0) {
                        time--
                        setTimeout(repeatTime, 1000)
                    } 
                    //After Schedule Timer ends this runs
                    else{
                        let showText = document.querySelector('.alarm-text')
                        display.classList.add('active')
                        showText.textContent = `Reminder:  ${subject}`
                    }                           
                }
                repeatTime()
            //APPENDS the clock to the table and calls the function at the end
            }
            let schedule = document.querySelector('.schedule').value
            td2.appendChild(document.createTextNode(schedule))
            tr.appendChild(td2)
            tableBody.appendChild(tr)
            timing(schedule)
        }
        //This runs if subject is not provided
        else {
            window.alert('Subject field cannot be empty')
        }   
}

//EVENTS
addTask.addEventListener('click', tableTask)
cancelBtn.addEventListener('click', function cancel () {
    display.classList.remove('active')
    tr.removeChild(td1)
    tr.removeChild(td2)
})