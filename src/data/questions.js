const questions = [
  {
    id: 1,
    title: "Quantas pessoas tem a sua equipe?",
    field: "peopleQuantity",
    type: "radio",
    options: [
      "1 até 3",
      "4 até 6",
      "7 até 9",
      "10 até 14",
      "15 ou mais",
    ],
  },
  {
    id: 2,
    title: "Qual a sua satisfação com a empresa?",
    type: "buttons",
    field: "satisfaction",
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
];

export default questions;
