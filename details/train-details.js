const trainNumbers = [
  "2340",
  "2341",
  "2342",
  "2343",
  "2344",
  "2345",
  "2346",
  "2347",
  "2348",
  "2349",
  "2249",
  "2248",
  "2247",
  "2246",
  "2245",
  "2244",
  "2243",
  "2242",
  "2241",
];

const schedules = {
  2340: {
    Name: "Yatri Exp",
    Number: "2340",
    DepartureTime: {
      Hours: 6,
      Minutes: 10,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 10,
      AC: 3,
    },
    Price: {
      Sleeper: 400,
      AC: 533,
    },
    DelayedBy: 0,
  },
  2341: {
    Name: "Funny Exp",
    Number: "2341",
    DepartureTime: {
      Hours: 7,
      Minutes: 15,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 15,
      AC: 5,
    },
    Price: {
      Sleeper: 532,
      AC: 765,
    },
    DelayedBy: 0,
  },
  2342: {
    Name: "Late Latif Exp",
    Number: "2342",
    DepartureTime: {
      Hours: 8,
      Minutes: 30,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 18,
      AC: 7,
    },
    Price: {
      Sleeper: 1132,
      AC: 1763,
    },
    DelayedBy: 0,
  },
  2343: {
    Name: "Delhi Door Hai Exp",
    Number: "2343",
    DepartureTime: {
      Hours: 9,
      Minutes: 45,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 32,
      AC: 1,
    },
    Price: {
      Sleeper: 555,
      AC: 1533,
    },
    DelayedBy: 0,
  },
  2344: {
    Name: "Chai Wala Exp",
    Number: "2344",
    DepartureTime: {
      Hours: 11,
      Minutes: 0,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 33,
      AC: 13,
    },
    Price: {
      Sleeper: 543,
      AC: 654,
    },
    DelayedBy: 10,
  },
  2345: {
    Name: "Pappu Exp",
    Number: "2345",
    DepartureTime: {
      Hours: 11,
      Minutes: 23,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 4,
      AC: 4,
    },
    Price: {
      Sleeper: 756,
      AC: 1532,
    },
    DelayedBy: 0,
  },
  2346: {
    Name: "Love Exp",
    Number: "2346",
    DepartureTime: {
      Hours: 12,
      Minutes: 3,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 10,
      AC: 3,
    },
    Price: {
      Sleeper: 400,
      AC: 533,
    },
    DelayedBy: 0,
  },
  2347: {
    Name: "Sundar Exp",
    Number: "2347",
    DepartureTime: {
      Hours: 13,
      Minutes: 32,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 55,
      AC: 0,
    },
    Price: {
      Sleeper: 343,
      AC: 533,
    },
    DelayedBy: 0,
  },
  2348: {
    Name: "Taxi Wala Exp",
    Number: "2347",
    DepartureTime: {
      Hours: 13,
      Minutes: 32,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 2,
      AC: 2,
    },
    Price: {
      Sleeper: 400,
      AC: 533,
    },
    DelayedBy: 50,
  },
  2349: {
    Name: "Nannu Exp",
    Number: "2349",
    DepartureTime: {
      Hours: 13,
      Minutes: 32,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 2,
      AC: 2,
    },
    Price: {
      Sleeper: 440,
      AC: 587,
    },
    DelayedBy: 0,
  },
  2249: {
    Name: "Hawai Exp",
    Number: "2349",
    DepartureTime: {
      Hours: 14,
      Minutes: 55,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 1,
      AC: 0,
    },
    Price: {
      Sleeper: 867,
      AC: 954,
    },
    DelayedBy: 0,
  },
  2248: {
    Name: "Test Exp",
    Number: "2348",
    DepartureTime: {
      Hours: 15,
      Minutes: 55,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 1,
      AC: 0,
    },
    Price: {
      Sleeper: 767,
      AC: 1054,
    },
    DelayedBy: 0,
  },
  2247: {
    Name: "Manoranjan Exp",
    Number: "2347",
    DepartureTime: {
      Hours: 17,
      Minutes: 33,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 5,
      AC: 5,
    },
    Price: {
      Sleeper: 222,
      AC: 333,
    },
    DelayedBy: 0,
  },
  2246: {
    Name: "Manu Exp",
    Number: "2346",
    DepartureTime: {
      Hours: 19,
      Minutes: 0,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 15,
      AC: 10,
    },
    Price: {
      Sleeper: 600,
      AC: 800,
    },
    DelayedBy: 30,
  },
  2245: {
    Name: "Kolkata Exp",
    Number: "2345",
    DepartureTime: {
      Hours: 20,
      Minutes: 15,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 16,
      AC: 70,
    },
    Price: {
      Sleeper: 500,
      AC: 600,
    },
    DelayedBy: 0,
  },
  2244: {
    Name: "Chennai Exp",
    Number: "2344",
    DepartureTime: {
      Hours: 21,
      Minutes: 35,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 3,
      AC: 3,
    },
    Price: {
      Sleeper: 550,
      AC: 650,
    },
    DelayedBy: 0,
  },
  2243: {
    Name: "Mumbai Exp",
    Number: "2343",
    DepartureTime: {
      Hours: 22,
      Minutes: 37,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 8,
      AC: 15,
    },
    Price: {
      Sleeper: 500,
      AC: 600,
    },
    DelayedBy: 0,
  },
  2242: {
    Name: "Pune Exp",
    Number: "2342",
    DepartureTime: {
      Hours: 23,
      Minutes: 0,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 6,
      AC: 7,
    },
    Price: {
      Sleeper: 854,
      AC: 1854,
    },
    DelayedBy: 5,
  },
  2241: {
    Name: "Hyderabad Exp",
    Number: "2341",
    DepartureTime: {
      Hours: 23,
      Minutes: 55,
      Seconds: 0,
    },
    SeatsAvailable: {
      Sleeper: 6,
      AC: 7,
    },
    Price: {
      Sleeper: 554,
      AC: 1854,
    },
    DelayedBy: 5,
  },
};

module.exports = { trainNumbers, schedules };
