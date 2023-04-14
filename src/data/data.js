const data = [
  [
    { name: "hadCovid", value: "hadCovid", text: "კი" },
    { name: "hadCovid", value: "hadntCovid", text: "არა" },
    { name: "hadCovid", value: "notYet", text: "ახლა მაქვს" },
  ],

  [
    { name: "hadTest", value: "hadTest", text: "კი" },
    { name: "hadTest", value: "hadntTest", text: "არა" },
  ],
  [
    { name: "hadVaccine", value: "hadVaccine", text: "კი" },
    { name: "hadVaccine", value: "hadntVaccine", text: "არა" },
  ],
  [
    { name: "vaccineStage", value: "fisrtAndSecond", text: "უკვე აცრილი ხარ?" },
    { name: "vaccineStage", value: "fullyVaccined", text: "სრულად აცრილი ვარ" },
    {
      name: "vaccineStage",
      value: "onlyFirst",
      text: "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე",
    },
  ],
  [
    {
      name: "waiting",
      value: "waitinDate",
      text: "დარეგისტრირებული ვარ და ველოდები რიცხვს",
    },
    { name: "waitin", value: "notPlaned", text: "არ ვგეგმავ" },
    {
      name: "waiting",
      value: "alreadyHadCovid",
      text: "გადატანილი მაქვს და ვგეგმავ აცრას",
    },
  ],
];

export default data;
