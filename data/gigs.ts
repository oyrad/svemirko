export const gigs: Gig[] = [
  {
    date: "18. 4.",
    venue: "Marihuana marš",
    city: "Ljubljana",
  },
  {
    date: "19. 4.",
    venue: "MC Pekarna",
    city: "Maribor",
  },
  {
    date: "24. 5.",
    venue: "Beer fest",
    city: "Zagreb",
  },
  {
    date: "7. 6.",
    venue: "KSB",
    city: "Banja Luka",
  },
  {
    date: "8. 6.",
    venue: "Kvirhana",
    city: "Sarajevo",
  },
  {
    date: "25. 5.",
    venue: "MC Patriot",
    city: "Slovenske Konjice",
  },
  {
    date: "15. 6.",
    venue: "Pine fest",
    city: "Samobor",
  },
  {
    date: "21. 6.",
    venue: "CMoKFEST",
    city: "Koper",
  },
  {
    date: "27. 6.",
    venue: "Arsenal fest",
    city: "Kragujevac",
  },
  {
    date: "29. 6.",
    venue: "Velvet festival",
    city: "Punat",
  },
  {
    date: "20. 7.",
    venue: "OK fest",
    city: "Tjentište",
  },
];

export type Gig = {
  date: String;
  venue: String;
  city: String;
};
