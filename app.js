document.addEventListener("DOMContentLoaded", function() {
    const showSignupButton = document.getElementById("showSignup");
    const showLoginButton = document.getElementById("showLogin");
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    

    showSignupButton.addEventListener("click", function() {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    });

    showLoginButton.addEventListener("click", function() {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });
});

window.addEventListener("load",()=>{
    currentUser = localStorage.getItem(username)
    if(currentUser === true){
        location.pathname = "JS-Quiz/quiz.html"
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
                location.pathname = "JS-Quiz/quiz.html"
           } else {
            document.getElementById('message').innerText = 'Incorrect password';
            }   

}

  