const adviceMe = () => {
    const adviceId = Math.floor(Math.random()*224) + 1;
    fetch(`https://api.adviceslip.com/advice/${adviceId}`)
        .then(res => res.json())
        .then(advice => {
            const adviceText = advice.slip.advice;
            
            let cardId = document.querySelector('.advice-id');
            let cardAdvice = document.querySelector('.advice>p');

            cardId.innerText = `Advice #${adviceId}`;
            cardAdvice.innerHTML = `${adviceText}`;
            // console.log(`Advice no.: ${adviceId}`);
            // console.log(`${adviceText}`);
        })
        .catch(error => console.log(`Error: ${error}`))
}

document.onload = adviceMe();
document.querySelector('#generate-advice')
    .addEventListener("click", adviceMe);