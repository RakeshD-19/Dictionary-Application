const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");
const btn=document.getElementById("searchbtn");
const sound=document.getElementById('sound');

btn.addEventListener('click',() =>{
    let inpword=document.getElementById("inp-word").value;
    fetch(`${url}${inpword}`)
         .then((response)=>response.json())
         .then((data)=>{
            console.log(data);
            result.innerHTML=`<div class="word"><h3>${inpword}</h3>
            <button onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
        </div>
        <div class="detail">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetic}/</p>
        </div>
        <p class="wordmeans">
        ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="exword">
           ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
        
        })
        .catch(()=>{
            result.innerHTML=`<h3 class="error">COULDN'T FIND THE WORD</h3>`;

        });

});
function playSound(){
    sound.play();
}
