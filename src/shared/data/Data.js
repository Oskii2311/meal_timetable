import React from "react";

const DATA = [
  {
    tfoot: {
      diet: "LOW-CARB",
      gym: true
    },
    day: 64,
    rows: [
      {
        id: 1,
        th: "6:00 AM",
        text: null,
        shake: true,
        yes: true
      },
      {
        id: 2,
        th: "9:00 AM",
        text: "Ham And Swiss Roll Ups",
        shake: false,
        yes: true
      },
      {
        id: 3,
        th: "12:00 PM",
        text: "Turkey Melt",
        shake: false,
        yes: true
      },
      {
        id: 4,
        th: "3:00 PM",
        text: [
          "Bod",
          <span key="bullet2" className="bullet">
            &#8226;
          </span>,
          "ē Burn with Mozzarella and Tomato Slices"
        ],
        shake: false,
        yes: true
      },
      {
        id: 5,
        th: "6:00 PM",
        text: "Turkey Melt",
        shake: false,
        yes: false
      }
    ]
  },
  {
    tfoot: {
      diet: "LOW-CARB",
      gym: true
    },
    day: 65,
    rows: [
      {
        id: 1,
        th: "6:00 AM",
        text: null,
        shake: true,
        yes: false,
        choosen: true
      },
      {
        id: 2,
        th: "9:00 AM",
        text: "Ham And Swiss Roll Ups",
        shake: false,
        yes: false
      },
      {
        id: 3,
        th: "12:00 PM",
        text: "Turkey Melt",
        shake: false,
        yes: false
      },
      {
        id: 4,
        th: "3:00 PM",
        text: [
          "Bod",
          <span key="bullet3" className="bullet">
            &#8226;
          </span>,
          "ē Burn with Mozzarella and Tomato Slices"
        ],
        shake: false,
        yes: false
      },
      {
        id: 5,
        th: "6:00 PM",
        text: "Turkey Melt",
        shake: false,
        yes: false
      }
    ]
  },
  {
    tfoot: {
      diet: "HIGH-CARB",
      gym: false
    },
    day: 66,
    rows: [
      {
        id: 1,
        th: "6:00 AM",
        text: null,
        shake: true,
        yes: false
      },
      {
        id: 2,
        th: "9:00 AM",
        text: "Grilled Steak (HC)",
        shake: false,
        yes: false
      },
      {
        id: 3,
        th: "12:00 PM",
        text: null,
        shake: true,
        yes: false
      },
      {
        id: 4,
        th: "3:00 PM",
        text: [
          "Bod",
          <span key="bullet4" className="bullet">
            &#8226;
          </span>,
          "ē Burn and Whole-Wheat English Muffin with Butter Spray"
        ],
        shake: false,
        yes: false
      },
      {
        id: 5,
        th: "6:00 PM",
        text: "Garlic Lime Chicken (HC)",
        shake: false,
        yes: false
      }
    ]
  },
  {
    tfoot: {
      diet: "LOW-CARB",
      gym: false
    },
    day: 67,
    rows: [
      {
        id: 1,
        th: "6:00 AM",
        text: null,
        shake: true,
        yes: false
      },
      {
        id: 2,
        th: "9:00 AM",
        text: "Ham and Swiss Roll Ups",
        shake: false,
        yes: false
      },
      {
        id: 3,
        th: "12:00 PM",
        text: "Turkey Melt",
        shake: false,
        yes: false
      },
      {
        id: 4,
        th: "3:00 PM",
        text: [
          "Bod",
          <span key="bullet5" className="bullet">
            &#8226;
          </span>,
          "ē Burn with Mozzarella and Tomato Slices"
        ],
        shake: false,
        yes: false
      },
      {
        id: 5,
        th: "6:00 PM",
        text: "Turkey Melt",
        shake: false,
        yes: false
      }
    ]
  },
  {
    tfoot: {
      diet: "LOW-CARB",
      gym: false
    },
    day: 68,
    rows: [
      {
        id: 1,
        th: "6:00 AM",
        text: null,
        shake: true,
        yes: false
      },
      {
        id: 2,
        th: "9:00 AM",
        text: "Ham And Swiss Roll Ups",
        shake: false,
        yes: false
      },
      {
        id: 3,
        th: "12:00 PM",
        text: null,
        shake: true,
        yes: false
      },
      {
        id: 4,
        th: "3:00 PM",
        text: [
          "Bod",
          <span key="bullet6" className="bullet">
            &#8226;
          </span>,
          "ē Burn with Mozzarella and Tomato Slices"
        ],
        shake: false,
        yes: false
      },
      {
        id: 5,
        th: "6:00 PM",
        text: "Turkey Melt",
        shake: false,
        yes: false
      }
    ]
  },
  {
    tfoot: {
      diet: "HIGH-CARB",
      gym: false
    },
    day: 69,
    rows: [
      {
        id: 1,
        th: "6:00 AM",
        text: null,
        shake: true,
        yes: false
      },
      {
        id: 2,
        th: "9:00 AM",
        text: "Grilled Steak (HC)",
        shake: false,
        yes: false
      },
      {
        id: 3,
        th: "12:00 PM",
        text: null,
        shake: true,
        yes: false
      },
      {
        id: 4,
        th: "3:00 PM",
        text: [
          "Bod",
          <span key="bullet7" className="bullet">
            &#8226;
          </span>,
          "ē Burn and Whole-Wheat English Muffin with Butter Spray"
        ],
        shake: false,
        yes: false
      },
      {
        id: 5,
        th: "6:00 PM",
        text: "Garlic Lime Chicken (HC)",
        shake: false,
        yes: false
      }
    ]
  },
  {
    tfoot: {
      diet: "CHEAT DAY",
      gym: false
    },
    day: 70,
    rows: [
      {
        id: 1,
        th: "6:00 AM",
        text: null,
        shake: false,
        yes: false
      },
      {
        id: 2,
        th: "9:00 AM",
        text: null,
        shake: false,
        yes: false
      },
      {
        id: 3,
        th: "12:00 PM",
        text: null,
        shake: false,
        yes: false
      },
      {
        id: 4,
        th: "3:00 PM",
        text: null,
        shake: false,
        yes: false
      },
      {
        id: 5,
        th: "6:00 PM",
        text: null,
        shake: false,
        yes: false
      }
    ]
  }
];

export default DATA;
