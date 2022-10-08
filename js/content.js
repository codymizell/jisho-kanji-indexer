let pref = { id: 0 }

if (localStorage.getItem('dictionaryPreference'))
  pref = localStorage.getItem('dictionaryPreference');

window.onload = () => {
  const kanjiList = document.querySelectorAll('.kanji.details');


  kanjiList.forEach(e => {
    const dictionaryEntries = e.querySelectorAll('table[summary="Dictionary indices"] tr')
    const kanjiIndex = dictionaryEntries[pref.id].querySelector(".dic_ref").textContent
    const dic = dictionaryEntries[pref.id].querySelector(".dic_name").textContent

    const details = e.querySelector("div[data-area] > div.row > .large-12:nth-child(2)")

    const index = document.createElement("div")
    index.textContent = kanjiIndex + ": " + dic;
    details.appendChild(index);



    const parent = e.querySelector("div[data-area] > div.row")
    const character = e.querySelector("div:nth-child(1) > div.small-12.large-2.columns > div > div:nth-child(1)")
    const strokes = e.querySelector("div:nth-child(2) > div.small-12.large-2.columns > div > div:nth-child(1)")
    parent.replaceChild(strokes, character)
  })
}

// div #main_results
// div #result_area
// div .kanji .details

// <table summary = "Dictionary indices"></table>
// <td class="dic_name"></td>
// <td class="dic_ref"></td>

