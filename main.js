
console.log(document.activeElement)

const scriptURL = "https://script.google.com/macros/s/AKfycbwuNt54mVqoQdtRMepYBVNGkwe1OrKj66j7N9rOXkDPEy3xXqpuMgbrQAUWUwVMFW_lmw/exec"
const form = document.forms['contact-form']
console.log(form);

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => location.reload())
      .catch(error => console.error('Error!', error.message))
  })



function hidLock(){
    let lock = document.getElementById('lock');
    lock.style.display ="none";
    moveSquares()
}

function moveSquares(){
    let wid = 100;
    let hei = 100;
    let sq = document.getElementsByClassName('square');

    for (let i =0; i< sq.length; i++){
        sq[i].style.width = wid + '%';
        sq[i].style.height = hei + '%';
    }

    const interval = setInterval(function () {
        if(wid<0) {
            clearInterval(interval);
            document.getElementsByClassName('background-landing')[0].style.zIndex = '1';
            document.getElementsByClassName('square-container')[0].style.zIndex='-2';
        }
        wid = wid - 5;
        hei = hei - 5;
        for (let i =0; i< sq.length; i++){
            sq[i].style.width = wid + '%';
            sq[i].style.height = hei + '%';
            console.log(sq[i].style.width);

        }
    }, 300);





  
  




}







