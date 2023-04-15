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
    { name: "waiting", value: "notPlaned", text: "არ ვგეგმავ" },
    {
      name: "waiting",
      value: "alreadyHadCovid",
      text: "გადატანილი მაქვს და ვგეგმავ აცრას",
    },
  ],
  [
    { name: "meetingFrequency", value: "twiceWeek", text: "კვირაში ორჯერ" },
    { name: "meetingFrequency", value: "onceWeek", text: "კვირაში ერთხელ" },
    { name: "meetingFrequency", value: "twiceWeek", text: "ორ კვირაში ერთხელ" },
    { name: "meetingFrequency", value: "onceMonth", text: "თვეში ერთხელ" },
  ],
  [
    { name: "officeWork", value: "0", text: "0" },
    { name: "officeWork", value: "1", text: "1" },
    { name: "officeWork", value: "2", text: "2" },
    { name: "officeWork", value: "3", text: "3" },
    { name: "officeWork", value: "4", text: "4" },
    { name: "officeWork", value: "5", text: "5" },
  ],
];

export default data;
