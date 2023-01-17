const questions = [
  {
    id: 1,
    paragraph:
      "Seven family members of three generations are sitting in a row and all are facing North. Three persons sit between V’s father and V’s sister, who sits at extreme end. S is grandson of P, who is mother in law of U. T is husband of R and sits at extreme end. V is son of Q, who sits 2nd to the left of T. Three persons sit between Q and R. P sits 2nd to the left of S, who doesn’t sit next to T. One person sits between V and R’s son.",
    questions: [
      {
        id: 1,
        question: "Who among the following sits 2nd to the left of V’s wife?",
        answers: ["P", "Q", "R", "S", "None of these"],
      },
      {
        id: 2,
        question: "How is Q related to T?",
        answers: [
          "Father",
          "Mother",
          "Father in law",
          "Mother in law",
          "None of these",
        ],
      },
      {
        id: 3,
        question:
          "How many persons are sitting between son of T and father in law of U?",
        answers: ["None", "One", "Two", "Three", "More than three"],
      },
    ],
  },
  {
    id: 2,
    paragraph:
      "There are three floors in a given building such that floor 2 is above floor 1 and floor 3 is above floor 2. In the building there are three flats in each floor such that Flat A is in the west of Flat B, which is in the west of Flat C. In the building each Flat on each floor has an area of 2520 ft and each flat has some certain number of room and no two flat has same number of rooms. The area of each rooms of one of the flat on the odd number floor is 280 ft. The floor having 9 rooms is one of the floors below the floor having each room area of 360 ft. The area of each room on floor 3rd of Flat A is 350 ft more than the area of the flat having 9 rooms.Total number of Rooms in all the flats of floor 2nd is 15. Number of Rooms in Flat C of 2nd floor is more than the number of Rooms in Flat A of 2nd floor but less than the number of rooms in Flat B of 2nd floor. The flat having each room area of 420 ft is in the west of flat having each room area of 252 ft. There is only one floor between the floor having 2 rooms and the floor having each room area 630 ft but in the same flat. The flat having each room area 504 ft is on even number floor. The Floor having each room area of 315 ft is kept immediately below the floor having 5 rooms.",
    questions: [
      {
        id: 1,
        question: "What is the area of a room in Flat B on floor 2? ",
        answers: ["340 ", "360 ", "396", "either (a) or (c) ", "None of these"],
      },
      {
        id: 2,
        question: " What is the total number of rooms on floor 3rd? ",
        answers: ["22 ", "21 ", "20", "18", "None of these"],
      },
      {
        id: 3,
        question: "Which of the following statement is true?",
        answers: [
          "Total number of rooms on floor 2 is 16 ",
          "Area of each room is 494 ft of flat A on floor 1 ",
          "Total rooms in Flat B of all three floors is 20.",
          "Total rooms in Flat A of all three floors is 9.",
          "None is correct",
        ],
      },
      {
        id: 4,
        question: "What is the area of room of flat B on floor 3rd?",
        answers: ["420 ft", "400 ft", "385 ft ", "342 ft ", "None of these"],
      },
      {
        id: 5,
        question:
          "How many rooms are there of the west of the flat who’s each room area is 280 ft? ",
        answers: ["2", "4 ", "3 ", " 5", "None of these"],
      },
    ],
  },
  {
    id: 3,
    paragraph:
      "A certain number of persons are standing in a row facing north. All of them earn different amount. Three persons are standing between L and F. O is standing immediately ahead of L. P is standing adjacent to F. Only two persons are standing between P and Z who is standing behind F. Only one person stands between Z and G. H is standing exactly behind G. Q is standing at one of the extreme end. Four persons are standing between Q and K. K is standing immediately behind L. Not more than 14 persons are standing in the row. C is standing immediately behind of T. X is standing behind V but ahead of M. M is not standing behind G. The following information is given for the amount earn by them—  S@P means S earn 500 more than P.  S#P means S earn 1000 less than P. S$P means S earn equal to P. The amount earn by all of them is given below—  V@Z$H@X$Q$G, M$F#G, V#L#T, T$C#O, F@K@P ",
    questions: [
      {
        id: 1,
        question:
          " What will be the sum of the amount earn by Q, Z and L if the amount earn by M is 7000?",
        answers: ["24000", "16000", "14500", "15000", " 26500"],
      },
      {
        id: 2,
        question: " How many persons are standing ahead of V?",
        answers: ["Two", "More than four", "Three", "One", "four"],
      },
      {
        id: 3,
        question: " How many persons are standing between G and X?",
        answers: ["Two", "More than three", "Three", "One", "None"],
      },
      {
        id: 4,
        question:
          " What will be the difference of the amount earn by the one who earn highest and the one who earn lowest, if X earn 4500?",
        answers: ["4000 ", "6000 ", "1500 ", "1000 ", "2500"],
      },
      {
        id: 5,
        question:
          " What will be the amount earn by the one who is standing immediately ahead of C if K earns 5000?",
        answers: ["4000", "7500 ", "11500 ", "15000", "9500"],
      },
    ],
  },
  {
    id: 4,
    paragraph:
      "Seven boxes A , B, C, D, E, F, G are kept one above the other containing different number of chocolates ranging from 10-90. Not more than Four boxes are kept above A. Two boxes are kept between A and the box containing 41 chocolates, which is kept below Box A. D contains thrice number of chocolates than box B. Box C contains 50 number of chocolates and is not kept at the top. The number of chocolates in box G is a cube of a number. Only one box is kept between box containing 41 chocolates and 39 chocolates. Box D has less number of chocolates than box A. One of the boxes contain 78 chocolates. Five boxes are kept between box containing 64 chocolates and Box C. Box G is immediately above box E. Box D is not kept immediately above or below box B. Three boxes are kept between box D and box F. Box D is above box F.",
    questions: [
      {
        id: 1,
        question:
          "Which among the following box/boxes is kept exactly between Box D and Box B?",
        answers: ["G ,E", "B,C", "B,A", "F,C", " none of these"],
      },
      {
        id: 2,
        question: "How many chocolates are kept in box E?",
        answers: [50, 13, 78, 41, " none of these"],
      },
      {
        id: 3,
        question:
          "Which among the following boxes contains the maximum and minimum number of chocolates respectively?",
        answers: [" G, E ", " B, D ", "C, A ", " F, B ", "none of these"],
      },
      {
        id: 4,
        question: "Which of the following combination is not true?",
        answers: ["50-D ", "13-B", "41-E", "64-A ", "none of these"],
      },
      {
        id: 5,
        question:
          "Which among the following boxes is kept immediately below box B?",
        answers: ["G ", " C ", " A", "F", "none of these"],
      },
    ],
  },
  {
    id: 5,
    paragraph:
      "There are three persons A, B and C who each invested in two different scheme S1 and S2. A in invested Rs 80,000 for 2 yr in scheme S1 and 30,000 for 4 years in scheme S2. B invested Rs 30,000 for 3year in S1 and he did not invest in scheme B. B also obtained a profit of 10,000 by selling his car. C invested Rs 50000 for 5 years in scheme S1 and 10000 for 3  year in scheme S2. Total profit obtained from scheme S1 is 2 lakh and scheme S2 is 90,000.",
    questions: [
      {
        id: 1,
        question:
          "What is the ratio of total profit obtained by B and profit obtained by C from scheme S1 ",
        answers: ["23 : 47 ", "54 : 47 ", "36 : 43", "23 : 50 ", "27 : 50"],
      },
      {
        id: 2,
        question:
          "Profit obtained by A from scheme S1 is what percent of profit obtained by C from scheme S2.",
        answers: [
          "346 (7/ 9) % ",
          "347 (8 /9) % ",
          "356 (7 /9 ) % ",
          "345 (4/ 9 )% ",
          "355 (5 /9) % ",
        ],
      },
      {
        id: 3,
        question:
          "If sum of investment of A in both schemes and total profit obtained by A from both scheme is invested at compound Interest at the rate of 20% p.a. then find the total compound interest obtained in 2 yr ",
        answers: ["108240 ", "104206 ", "105208 ", "109280 ", "106220"],
      },
      {
        id: 4,
        question:
          "What is the average of profit attained by A from scheme S1 and profit of C obtained from scheme S2.",
        answers: ["41000 ", "42000 ", "44000", "55000 ", "40000"],
      },
      {
        id: 5,
        question:
          "If A had invested his sum at Simple Interest for 3 yr at the rate of R% p.a. instead in scheme S1 and B has invested his sum at compound Interest at (R + 5%) p.a. for 1 year and difference in interest obtained is 30,000 then find value of R%.",
        answers: ["10% ", "9% ", "15% ", "18% ", "12%"],
      },
    ],
  },
  {
    id: 6,
    paragraph:
      "What number is wrong according to given number series pattern: – ",
    questions: [
      {
        id: 1,
        question: "1, 3, 9, 31, 128, 651, 3913 ",
        answers: ["9", "1", "128", "31", "3913"],
      },
      {
        id: 2,
        question: "291, 147, 75, 39, 22, 12, 7.5",
        answers: ["22", "291", "147", "75", "7.5"],
      },
      {
        id: 3,
        question: "26, 27, 34, 58, 106, 186, 306 ",
        answers: ["26", "34", "58", "106", "27"],
      },
      {
        id: 4,
        question: "5.9, 6, 6.1, 6.4, 7.9, 18.5, 112.9",
        answers: ["6", "5.9", "6.1", "18.5", "112.9"],
      },
      {
        id: 5,
        question: "330, 80, 280, 120, 250, 130, 240",
        answers: ["330", "130", "280", "240", "80"],
      },
    ],
  },
  {
    id: 7,
    paragraph: "",
    questions: [
      {
        id: 1,
        question:
          "Bharat and Ekta started a business together. ‘Bharat’ invested for 11 months while ‘Ekta’ invested for 12 months. Out of total profit 20% is given to ‘Bharat’ as an active partner and remaining is distributed between ‘Bharat’ and ‘Ekta’ according to their investments. At last profit share of Bharat and Ekta is equal. If initial investment of ‘Bharat’ is Rs. 6,000, then find initial investment of ‘Ekta’?",
        answers: [
          "Rs. 9,750",
          " Rs. 11,250",
          "Rs. 13,750",
          "Rs. 12,500",
          "none of these. ",
        ],
      },
    ],
  },
  {
    id: 8,
    paragraph: "",
    questions: [
      {
        id: 1,
        question:
          "The number of girls in the college was 50 less than the number of boys in that college. Subsequently, a few number of girls joined that college and the ratio of boys and girls become 2 : 5. Find the minimum number of girls who joined college recently (Number of boys and girls are positive integer). ",
        answers: ["116", "120", "124", "128", "136"],
      },
    ],
  },
  {
    id: 9,
    paragraph: "",
    questions: [
      {
        id: 1,
        question:
          "Two types of ornaments are prepared by using gold and copper in two different proportions. In first ornaments, 6 gram gold is mixed with 5 gram copper and in second ornament 5 gram gold is mixed with 3 gram copper. If total quantity of gold and copper is122 gram and 90 gram respectively then how many ornaments are prepared of second type? (total gold and copper are used)",
        answers: ["15", "10", "7", "20", "9"],
      },
    ],
  },
  {
    id: 10,
    paragraph: "",
    questions: [
      {
        id: 1,
        question:
          "Quantity I. ‘x’ : x² + x – 6 = 0  , Quantity II . ‘y’ : y²+7y+12 = 0",
        answers: [
          "Quantity I > Quantity II",
          "Quantity I < Quantity II ",
          "Quantity I ≥ Quantity II",
          "Quantity I ≤ Quantity II",
          "Quantity I = Quantity II or No relation",
        ],
      },
    ],
  },
  {
    id: 11,
    paragraph: "",
    questions: [
      {
        id: 1,
        question:
          "Sum of 8 consecutive even number is S1. Quantity I – Sum of second number and eight number in S1 Quantity II – Sum of third number and sixth number in S1",
        answers: [
          "Quantity I > Quantity II",
          "Quantity I < Quantity II ",
          "Quantity I ≥ Quantity II",
          "Quantity I ≤ Quantity II",
          "Quantity I = Quantity II or No relation",
        ],
      },
    ],
  },
  {
    id: 12,
    paragraph: "",
    questions: [
      {
        id: 1,
        question:
          "An article is sold at Rs. 1500 after allowing discount of 12.5% on Marked price. Quantity I –Rs.550 , Quantity II –Mark price of article.",
        answers: [
          "Quantity I > Quantity II",
          "Quantity I < Quantity II ",
          "Quantity I ≥ Quantity II",
          "Quantity I ≤ Quantity II",
          "Quantity I = Quantity II or No relation",
        ],
      },
    ],
  },
  {
    id: 13,
    paragraph: "",
    questions: [
      {
        id: 1,
        question:
          " If a speed of boat is 500% more than the speed of a current. Quantity I –‘x’ : If boat can travel a distance of 63 km in 3 hr, in downstream then ‘x’ is the speed of the boat in upstream (km/hr). Quantity II – 15 km/hr ",
        answers: [
          "Quantity I > Quantity II",
          "Quantity I < Quantity II ",
          "Quantity I ≥ Quantity II",
          "Quantity I ≤ Quantity II",
          "Quantity I = Quantity II or No relation",
        ],
      },
    ],
  },
];
export default questions;
