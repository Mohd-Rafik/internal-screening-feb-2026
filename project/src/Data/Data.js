
const data = {
  languages: [
    {
      code: "us",
      name: "Eng (US)",
      flag: "https://flagcdn.com/w20/us.png",
    },
    {
      code: "in",
      name: "Hindi",
      flag: "https://flagcdn.com/w20/in.png",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w20/fr.png",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w20/es.png",
    },
  ],
  progress: [
    {
      title: "Completed Courses",
      value: 75,
      type: "completed",
      icon: "check"
    },
    {
      title: "Progress Courses",
      value: 903,
      type: "progress1",
      icon: "light"
    },
    {
      title: "Upcoming Courses",
      value: 112,
      type: "upcoming",
      icon: "bookmark"
    }

  ],

  chart: [
    { week: "SUN", lastMonth: 40, thisMonth: 30 },
    { week: "mon", lastMonth: 50, thisMonth: 75 },
    { week: "Tues", lastMonth: 70, thisMonth: 50 },
    { week: "wed", lastMonth: 40, thisMonth: 90 },
    { week: "thurs", lastMonth: 90, thisMonth: 50 },
    { week: "Fri", lastMonth: 70, thisMonth: 50 },
    { week: "sat", lastMonth: 50, thisMonth: 75 },
  ],
  ScoreActivity: {
    2024: [
      { month: "Jan", lastMonth: 45, thisMonth: 60 },
      { month: "Feb", lastMonth: 55, thisMonth: 70 },
      { month: "Mar", lastMonth: 65, thisMonth: 80 },
      { month: "Apr", lastMonth: 50, thisMonth: 68 },
      { month: "May", lastMonth: 70, thisMonth: 85 },
      { month: "Jun", lastMonth: 60, thisMonth: 75 },
      { month: "Jul", lastMonth: 80, thisMonth: 90 },
      { month: "Aug", lastMonth: 55, thisMonth: 72 },
      { month: "Sep", lastMonth: 66, thisMonth: 78 },
      { month: "Oct", lastMonth: 58, thisMonth: 74 },
      { month: "Nov", lastMonth: 77, thisMonth: 88 },
      { month: "Dec", lastMonth: 69, thisMonth: 81 }
    ],

    2025: [
      { month: "Jan", lastMonth: 65, thisMonth: 78 },
      { month: "Feb", lastMonth: 48, thisMonth: 60 },
      { month: "Mar", lastMonth: 72, thisMonth: 85 },
      { month: "Apr", lastMonth: 55, thisMonth: 68 },
      { month: "May", lastMonth: 80, thisMonth: 90 },
      { month: "Jun", lastMonth: 46, thisMonth: 58 },
      { month: "Jul", lastMonth: 88, thisMonth: 92 },
      { month: "Aug", lastMonth: 60, thisMonth: 74 },
      { month: "Sep", lastMonth: 70, thisMonth: 83 },
      { month: "Oct", lastMonth: 52, thisMonth: 66 },
      { month: "Nov", lastMonth: 77, thisMonth: 89 },
      { month: "Dec", lastMonth: 69, thisMonth: 81 }
    ]
  },




  schedule: [

    {
      id: 1,
      title: "Web Design",
      date: "January 5, 2021",
      time: "09.00 - 10.00 AM",
      teacher: "Ms. Samantha William",
      color: "green"
    },
    {
      id: 2,
      title: "Interaction Design",
      date: "January 17, 2021",
      time: "09.00 - 10.00 AM",
      teacher: "Mr. Tony Soap",
      color: "yellow"
    },
    {
      id: 3,
      title: "Basic Programming",
      date: "January 25, 2021",
      time: "09.00 - 10.00 AM",
      teacher: "Ms. Samantha William",
      color: "blue"
    }
  ]
};

export default data;
