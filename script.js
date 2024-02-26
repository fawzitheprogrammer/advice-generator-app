
  let adviceId = document.getElementById('advice-id');
  let adviceContent = document.getElementById('advice-content');



async function fetchAdvices(){
  const res = await fetch('https://api.adviceslip.com/advice');

  const { slip:{id,advice } } = await res.json();

  if(res.status==200){
    adviceId.textContent = `ADVICE #${id}`;
  adviceContent.textContent = `“${advice}”`;
  }

}



