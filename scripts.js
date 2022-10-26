/* Add your JavaScript to this file */

window.onload = function(){
    const newsletter= document.getElementsByClassName('newsletter')[0];
    var email= document.getElementById('email');
    const btn= newsletter.getElementsByTagName('button')[0];
    const msg= newsletter.getElementsByClassName('message')[0];
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var invalidEmailMessage = `Please enter a valid email address`;

    btn.onclick = ev =>{
        ev.preventDefault();
        msg.textContent  = (!email.value.match(mailformat) || email.value == ""   ) 
        ? invalidEmailMessage :  `Thank you! Your email address ${email.value} has been added to our mailing list!`
    } 
}
