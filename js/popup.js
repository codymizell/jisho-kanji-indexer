const selectForm = document.getElementById("dicts")
const saveBtn = document.getElementById("save")

saveBtn.addEventListener("click", event => {
  const text = selectForm.options[selectForm.selectedIndex].text;
  const choice = dictionaries.find(entry => entry.name === text)
  localStorage.setItem("dictionaryPreference", JSON.stringify(choice))
})



const dictionaries = [
  {
    name: "A Guide To Reading and Writing Japanese (Florence Sakade)",
    id: 0
  },
  {
    name: "A Guide To Reading and Writing Japanese 3rd edition (Henshall, Seeley and De Groot)",
    id: 1
  },
  {
    name: "A Guide To Remembering Japanese Characters (Kenneth G. Henshall)",
    id: 2
  },
  {
    name: "A New Dictionary of Kanji Usage",
    id: 3
  },
  {
    name: "Classic Nelson (Andrew Nelson)",
    id: 4
  },
  {
    name: "Essential Kanji (P.G. O’Neill)",
    id: 5
  },
  {
    name: "Japanese Kanji Flashcards (Max Hodges and Tomoko Okazaki)",
    id: 6
  },
  {
    name: "Japanese Names (P.G. O’Neill)",
    id: 7
  },
  {
    name: "Japanese for Busy People",
    id: 8
  },
  {
    name: "Kanji and Kana (Spahn and Hadamitzky)",
    id: 9
  },
  {
    name: "Kanji and Kana, 2nd Edition (Spahn and Hadamitzky)",
    id: 10
  },
  {
    name: "Kanji in Context (Nishiguchi and Kono)",
    id: 11
  },
  {
    name: "Kodansha Compact Kanji Guide",
    id: 12
  },
  {
    name: "Kodansha Kanji Dictionary (Jack Halpern)",
    id: 13
  },
  {
    name: "Kodansha Kanji Learner’s Dictionary (Jack Halpern)",
    id: 14
  },
  {
    name: "Kodansha Kanji Learner’s Dictionary, 2nd Edition (Jack Halpern)",
    id: 15
  },
  {
    name: "Les Kanjis dans la tete (Yves Maniette)",
    id: 16
  },
  {
    name: "Morohashi",
    id: 16
  },
  {
    name: "New Japanese English Character Dictionary (Jack Halpern)",
    id: 17
  },
  {
    name: "New Nelson (John Haig)",
    id: 18
  },
  {
    name: "Remembering The Kanji (James Heisig)",
    id: 19
  },
  {
    name: "Remembering The Kanji, 6th edition (James Heisig)",
    id: 20
  },
  {
    name: "Tuttle Kanji Cards (Alexander Kask)",
    id: 21
  }
];