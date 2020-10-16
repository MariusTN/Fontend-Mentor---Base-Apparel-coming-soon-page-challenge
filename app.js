let form = document.querySelector('form');
let email = document.querySelector('.email');



form.addEventListener('submit', e => {
    e.preventDefault();
    let emailVal = email.value;

    // check if it is a valid email
    if (!validateEmail(emailVal)) {
        form.classList.add('error');
    } else {
        form.classList.remove('error');
        document.body.innerHTML = `
            <div style="display:flex; align-items: center; justify-content: center;">
            <h1>Thank you!</h1>
            </div>

            <a style="display:flex; align-items: center; justify-content: center; font-size: 4rem" href="/index.html">If your browser does not redirect you, click here</a>

            <div style="display:flex; align-items: center; justify-content: center; font-size: 4rem";>Redirecting in 5 seconds</div>`;

            setTimeout(function(){
                window.location.href = './index.html';
            }, 5000);
        }
});
    setInterval()


function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}