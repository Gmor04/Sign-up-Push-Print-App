let firstname = document.querySelector('#firstname')
let Lastname = document.querySelector('#lastname')
let Email = document.querySelector('#Email')
let password = document.querySelector('#password')
let Date = document.querySelector('#Date')
let Month = document.querySelector('#month')
let Year = document.querySelector('#year')
let Gender = document.querySelector('#Gender')

let Display = document.querySelector('.display-div')

let storage = []


function signup(event) {
    event.preventDefault()

    let userInfomation = {

        Firstname: firstname.value,
        Lastname: Lastname.value,
        Email: Email.value,
        Password: password.value,        
        Date: Date.value,
        Month: Month.value,
        Year: Year.value,
        Gender: Gender.value,

    }

    let result = storage.push(userInfomation);

    console.log(storage);

    console.log(result);

   
    Display.innerHTML = ` 
     
                                Firstname : ${storage[0].Firstname} <br> 
                                Lastname : ${storage[0].Lastname} <br>
                                Emailaddress : ${storage[0].Email} <br>
                                Password : ${storage[0].Password} <br>
                                Date of Birth : ${storage[0].Date} / ${storage[0].Month} / ${storage[0].Year} <br>
                                Gender : ${storage[0].Gender} <br>
                                                            
                         `;


}