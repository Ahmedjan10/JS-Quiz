
window.addEventListener("load",()=>{
    currentUser = localStorage.getItem(username)
    if(currentUser === true){
        location.pathname = "/quiz.html"
    }
})



document.querySelector('#signupButton').addEventListener('click', signup);
document.querySelector('#loginButton').addEventListener('click', login);

function signup(){
    const username = document.getElementById("signupUsername").value
    const password = document.getElementById("signupPassword").value
    
    if(username === "" || password === ""){
        document.getElementById('message').innerText = 'Please fill in both fields';
        return;
    }

    if (localStorage.getItem(username)){
        document.getElementById('message').innerText =  'user alerdy exist'
    }
    else {
        localStorage.setItem(username,password)
        document.getElementById('message').innerText = "sign up succesfully"
    }
}

function login(){
    const username = document.getElementById("loginUsername").value
    const password = document.getElementById("loginPassword").value

    if (username === "" ||  password === ""){
        document.getElementById('message').innerText = 'Please fill in both fields';
          return;
         }

    const storedPassword = localStorage.getItem(username)   
    if (storedPassword === null) {
        document.getElementById('message').innerText = 'Username does not exist';
            } else if (storedPassword === password) {
                document.getElementById('message').innerText ='Login successful!';
                location.pathname ="/quiz.html"
           } else {
            document.getElementById('message').innerText = 'Incorrect password';
            }   

}

  