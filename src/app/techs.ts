import { Tech } from "./tech";

export const TECHS: Tech[] = [
  { id:  1, name: "Mysticism", cost: 50, blueCredit: 5, redCredit: 0, greenCredit: 0, yellowCredit: 5, orangeCredit: 0, precursor: 0, precursorCredit: 0, isBlue: true, isRed: false, isGreen: false, isYellow: true, isOrange: false },
  { id:  2, name: "Sculpture", cost: 50, blueCredit: 10, redCredit: 5, greenCredit: 0, yellowCredit: 0, orangeCredit: 0, precursor: 0, precursorCredit: 0, isBlue: true, isRed: false, isGreen: false, isYellow: false, isOrange: false },
  { id:  3, name: "Cloth Making", cost: 50, blueCredit: 5, redCredit: 0, greenCredit: 0, yellowCredit: 0, orangeCredit: 10, precursor: 0, precursorCredit: 0, isBlue: false, isRed: false, isGreen: false, isYellow: false, isOrange: true },
  { id:  4, name: "Urbanism", cost: 50, blueCredit: 0, redCredit: 10, greenCredit: 5, yellowCredit: 0, orangeCredit: 0, precursor: 0, precursorCredit: 0, isBlue: false, isRed: true, isGreen: false, isYellow: false, isOrange: false },
  { id:  5, name: "Monarchy", cost: 60, blueCredit: 0, redCredit: 10, greenCredit: 0, yellowCredit: 5, orangeCredit: 0, precursor: 0, precursorCredit: 0, isBlue: false, isRed: true, isGreen: false, isYellow: false, isOrange: false },
  { id:  6, name: "Written Record", cost: 60, blueCredit: 0, redCredit: 5, greenCredit: 5, yellowCredit: 0, orangeCredit: 0, precursor: 0, precursorCredit: 0, isBlue: false, isRed: true, isGreen: true, isYellow: false, isOrange: false },
  { id:  7, name: "Pottery", cost: 60, blueCredit: 5, redCredit: 0, greenCredit: 0, yellowCredit: 0, orangeCredit: 10, precursor: 0, precursorCredit: 0, isBlue: false, isRed: false, isGreen: false, isYellow: false, isOrange: true },
  { id:  8, name: "Masonry", cost: 60, blueCredit: 0, redCredit: 0, greenCredit: 5, yellowCredit: 0, orangeCredit: 10, precursor: 0, precursorCredit: 0, isBlue: false, isRed: false, isGreen: false, isYellow: false, isOrange: true },
  { id:  9, name: "Mythology", cost: 60, blueCredit: 5, redCredit: 0, greenCredit: 0, yellowCredit: 10, orangeCredit: 0, precursor: 0, precursorCredit: 0, isBlue: false, isRed: false, isGreen: false, isYellow: true, isOrange: false },
  { id: 10, name: "Empiricism", cost: 60, blueCredit: 5, redCredit: 5, greenCredit: 10, yellowCredit: 5, orangeCredit: 5, precursor: 0, precursorCredit: 0, isBlue: false, isRed: false, isGreen: true, isYellow: false, isOrange: false },
  { id: 11, name: "Deism", cost: 70, blueCredit: 0, redCredit: 0, greenCredit: 0, yellowCredit: 10, orangeCredit: 5, precursor: 0, precursorCredit: 0, isBlue: false, isRed: false, isGreen: false, isYellow: true, isOrange: false },
  { id: 12, name: "Theocracy", cost: 80, blueCredit: 0, redCredit: 5, greenCredit: 0, yellowCredit: 5, orangeCredit: 0, precursor: 0, precursorCredit: 0, isBlue: false, isRed: true, isGreen: false, isYellow: true, isOrange: false },
  { id: 13, name: "Drama and Poetry", cost: 80, blueCredit: 10, redCredit: 0, greenCredit: 0, yellowCredit: 5, orangeCredit: 0, precursor: 0, precursorCredit: 0, isBlue: true, isRed: false, isGreen: false, isYellow: false, isOrange: false },
  { id: 14, name: "Music", cost: 80, blueCredit: 10, redCredit: 0, greenCredit: 0, yellowCredit: 5, orangeCredit: 0, precursor: 0, precursorCredit: 0, isBlue: true, isRed: false, isGreen: false, isYellow: false, isOrange: false },
  { id: 15, name: "Astronavigation", cost: 80, blueCredit: 0, redCredit: 0, greenCredit: 10, yellowCredit: 5, orangeCredit: 0, precursor: 0, precursorCredit: 0, isBlue: false, isRed: false, isGreen: true, isYellow: false, isOrange: false },
  { id: 16, name: "Coinage", cost: 90, blueCredit: 0, redCredit: 5, greenCredit: 10, yellowCredit: 0, orangeCredit: 0, precursor: 0, precursorCredit: 0, isBlue: false, isRed: false, isGreen: true, isYellow: false, isOrange: false },
  { id: 17, name: "Metalworking", cost: 90, blueCredit: 0, redCredit: 5, greenCredit: 0, yellowCredit: 0, orangeCredit: 10, precursor: 0, precursorCredit: 0, isBlue: false, isRed: false, isGreen: false, isYellow: false, isOrange: true },

  { id: 18, name: "Monument", cost: 180, blueCredit: 0, redCredit: 0, greenCredit: 0, yellowCredit: 10, orangeCredit: 10, precursor: 1, precursorCredit: 10, isBlue: false, isRed: false, isGreen: false, isYellow: true, isOrange: true },
  { id: 19, name: "Architecture", cost: 140, blueCredit: 10, redCredit: 0, greenCredit: 5, yellowCredit: 0, orangeCredit: 0, precursor: 2, precursorCredit: 10, isBlue: true, isRed: false, isGreen: false, isYellow: false, isOrange: false },
  { id: 20, name: "Naval Warfare", cost: 160, blueCredit: 0, redCredit: 10, greenCredit: 0, yellowCredit: 0, orangeCredit: 5, precursor: 3, precursorCredit: 10, isBlue: false, isRed: true, isGreen: false, isYellow: false, isOrange: false },
  { id: 21, name: "Diplomacy", cost: 160, blueCredit: 10, redCredit: 5, greenCredit: 0, yellowCredit: 0, orangeCredit: 0, precursor: 4, precursorCredit: 10, isBlue: true, isRed: false, isGreen: false, isYellow: false, isOrange: false },
  { id: 22, name: "Law", cost: 150, blueCredit: 0, redCredit: 10, greenCredit: 0, yellowCredit: 5, orangeCredit: 0, precursor: 5, precursorCredit: 10, isBlue: false, isRed: true, isGreen: false, isYellow: false, isOrange: false },
  { id: 23, name: "Cartography", cost: 160, blueCredit: 5, redCredit: 0, greenCredit: 10, yellowCredit: 0, orangeCredit: 0, precursor: 6, precursorCredit: 10, isBlue: false, isRed: false, isGreen: true, isYellow: false, isOrange: false },
  { id: 24, name: "Agriculture", cost: 120, blueCredit: 0, redCredit: 0, greenCredit: 5, yellowCredit: 0, orangeCredit: 10, precursor: 7, precursorCredit: 10, isBlue: false, isRed: false, isGreen: false, isYellow: false, isOrange: true },
  { id: 25, name: "Engineering", cost: 160, blueCredit: 0, redCredit: 0, greenCredit: 10, yellowCredit: 0, orangeCredit: 10, precursor: 8, precursorCredit: 10, isBlue: false, isRed: false, isGreen: true, isYellow: false, isOrange: true },
  { id: 26, name: "Literacy", cost: 110, blueCredit: 10, redCredit: 10, greenCredit: 5, yellowCredit: 5, orangeCredit: 5, precursor: 9, precursorCredit: 10, isBlue: true, isRed: true, isGreen: false, isYellow: false, isOrange: false },
  { id: 27, name: "Medicine", cost: 140, blueCredit: 0, redCredit: 0, greenCredit: 10, yellowCredit: 0, orangeCredit: 5, precursor: 10, precursorCredit: 10, isBlue: false, isRed: false, isGreen: true, isYellow: false, isOrange: false },
  { id: 28, name: "Fundamentalism", cost: 150, blueCredit: 5, redCredit: 0, greenCredit: 0, yellowCredit: 10, orangeCredit: 0, precursor: 11, precursorCredit: 10, isBlue: false, isRed: false, isGreen: false, isYellow: true, isOrange: false },
  { id: 29, name: "Universal Doctrine", cost: 160, blueCredit: 0, redCredit: 5, greenCredit: 0, yellowCredit: 10, orangeCredit: 0, precursor: 12, precursorCredit: 10, isBlue: false, isRed: false, isGreen: false, isYellow: true, isOrange: false },
  { id: 30, name: "Rhetoric", cost: 130, blueCredit: 10, redCredit: 5, greenCredit: 0, yellowCredit: 0, orangeCredit: 0, precursor: 13, precursorCredit: 10, isBlue: true, isRed: false, isGreen: false, isYellow: false, isOrange: false },
  { id: 31, name: "Enlightenment", cost: 160, blueCredit: 0, redCredit: 0, greenCredit: 0, yellowCredit: 10, orangeCredit: 5, precursor: 14, precursorCredit: 10, isBlue: false, isRed: false, isGreen: false, isYellow: true, isOrange: false },
  { id: 32, name: "Calendar", cost: 180, blueCredit: 0, redCredit: 5, greenCredit: 10, yellowCredit: 0, orangeCredit: 0, precursor: 15, precursorCredit: 10, isBlue: false, isRed: false, isGreen: true, isYellow: false, isOrange: false },
  { id: 33, name: "Trade Routes", cost: 180, blueCredit: 0, redCredit: 0, greenCredit: 0, yellowCredit: 5, orangeCredit: 10, precursor: 16, precursorCredit: 10, isBlue: false, isRed: false, isGreen: false, isYellow: false, isOrange: true },
  { id: 34, name: "Military", cost: 170, blueCredit: 0, redCredit: 10, greenCredit: 0, yellowCredit: 0, orangeCredit: 5, precursor: 17, precursorCredit: 10, isBlue: false, isRed: true, isGreen: false, isYellow: false, isOrange: false },

  { id: 35, name: "Wonder of the World", cost: 290, blueCredit: 20, redCredit: 0, greenCredit: 0, yellowCredit: 0, orangeCredit: 20, precursor: 18, precursorCredit: 20, isBlue: true, isRed: false, isGreen: false, isYellow: false, isOrange: true },
  { id: 36, name: "Mining", cost: 230, blueCredit: 0, redCredit: 0, greenCredit: 5, yellowCredit: 0, orangeCredit: 20, precursor: 19, precursorCredit: 20, isBlue: false, isRed: false, isGreen: false, isYellow: false, isOrange: true },
  { id: 37, name: "Diaspora", cost: 270, blueCredit: 5, redCredit: 0, greenCredit: 0, yellowCredit: 20, orangeCredit: 0, precursor: 20, precursorCredit: 20, isBlue: false, isRed: false, isGreen: false, isYellow: true, isOrange: false },
  { id: 38, name: "Provincial Empire", cost: 260, blueCredit: 0, redCredit: 20, greenCredit: 0, yellowCredit: 5, orangeCredit: 0, precursor: 21, precursorCredit: 20, isBlue: false, isRed: true, isGreen: false, isYellow: false, isOrange: false },
  { id: 39, name: "Cultural Ascendency", cost: 280, blueCredit: 20, redCredit: 0, greenCredit: 0, yellowCredit: 5, orangeCredit: 0, precursor: 22, precursorCredit: 20, isBlue: true, isRed: false, isGreen: false, isYellow: false, isOrange: false },
  { id: 40, name: "Library", cost: 220, blueCredit: 5, redCredit: 0, greenCredit: 20, yellowCredit: 0, orangeCredit: 0, precursor: 23, precursorCredit: 20, isBlue: false, isRed: false, isGreen: true, isYellow: false, isOrange: false },
  { id: 41, name: "Democracy", cost: 220, blueCredit: 5, redCredit: 20, greenCredit: 0, yellowCredit: 0, orangeCredit: 0, precursor: 24, precursorCredit: 20, isBlue: false, isRed: true, isGreen: false, isYellow: false, isOrange: false },
  { id: 42, name: "Roadbuiding", cost: 220, blueCredit: 0, redCredit: 0, greenCredit: 5, yellowCredit: 0, orangeCredit: 20, precursor: 25, precursorCredit: 20, isBlue: false, isRed: false, isGreen: false, isYellow: false, isOrange: true },
  { id: 43, name: "Mathematics", cost: 250, blueCredit: 20, redCredit: 10, greenCredit: 20, yellowCredit: 10, orangeCredit: 10, precursor: 26, precursorCredit: 20, isBlue: true, isRed: false, isGreen: true, isYellow: false, isOrange: false },
  { id: 44, name: "Anatomy", cost: 270, blueCredit: 0, redCredit: 0, greenCredit: 20, yellowCredit: 0, orangeCredit: 5, precursor: 27, precursorCredit: 20, isBlue: false, isRed: false, isGreen: true, isYellow: false, isOrange: false },
  { id: 45, name: "Monotheism", cost: 240, blueCredit: 0, redCredit: 5, greenCredit: 0, yellowCredit: 20, orangeCredit: 0, precursor: 28, precursorCredit: 20, isBlue: false, isRed: false, isGreen: false, isYellow: true, isOrange: false },
  { id: 46, name: "Theology", cost: 250, blueCredit: 0, redCredit: 0, greenCredit: 5, yellowCredit: 20, orangeCredit: 0, precursor: 29, precursorCredit: 20, isBlue: false, isRed: false, isGreen: false, isYellow: true, isOrange: false },
  { id: 47, name: "Politics", cost: 230, blueCredit: 20, redCredit: 0, greenCredit: 0, yellowCredit: 5, orangeCredit: 0, precursor: 30, precursorCredit: 20, isBlue: true, isRed: false, isGreen: false, isYellow: false, isOrange: false },
  { id: 48, name: "Philosophy", cost: 220, blueCredit: 0, redCredit: 0, greenCredit: 20, yellowCredit: 20, orangeCredit: 0, precursor: 31, precursorCredit: 20, isBlue: false, isRed: false, isGreen: true, isYellow: true, isOrange: false },
  { id: 49, name: "Public Works", cost: 230, blueCredit: 0, redCredit: 20, greenCredit: 0, yellowCredit: 0, orangeCredit: 5, precursor: 32, precursorCredit: 20, isBlue: false, isRed: true, isGreen: false, isYellow: false, isOrange: false },
  { id: 50, name: "Trade Empire", cost: 260, blueCredit: 0, redCredit: 5, greenCredit: 0, yellowCredit: 0, orangeCredit: 20, precursor: 33, precursorCredit: 20, isBlue: false, isRed: false, isGreen: false, isYellow: false, isOrange: true },
  { id: 51, name: "Advanced Military", cost: 240, blueCredit: 0, redCredit: 20, greenCredit: 5, yellowCredit: 0, orangeCredit: 0, precursor: 34, precursorCredit: 20, isBlue: false, isRed: true, isGreen: false, isYellow: false, isOrange: false }
];

export const TECHTREE: Tech[][] = TECHS.filter(t => t.precursor == 0).map(t => {
  let precursor: number = t.id;
  let nextTech: Tech | undefined;
  let techs: Tech[] = [t];
  while (nextTech = TECHS.find(t2 => t2.precursor == precursor)) {
    precursor = nextTech.id;
    techs.push(nextTech);
  }
  return techs;
});