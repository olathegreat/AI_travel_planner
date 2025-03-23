export const selectTravelerList =[
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole traveler exploration',
        icon: '➕',
        people: '1 people'
    },
    {
        id: 2,
        title: 'A couple',
        desc: 'Two travelers in tandem',
        icon: '🥂',
        people: '2 people'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adventurers',
        icon: '🏡',
        people: '3 to 5 people'
    },
    {
        id:4,
        title: 'Friends',
        desc: 'A bunch of thrill seekers',
        icon: '⛷️',
        people: '5 to 10 people'
    },
]


export const selectBudgetOptions =[
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💵',
       
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average size',
        icon: '💰',
       
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Dont worry about cost',
        icon: '💸',
        
    },
   
]

export  const AI_PROMPT = 'Generate Travel Plan for Location: {location} for {totalDays} days and {totalNight} night for {traveler} with a {budget} budget with a flight d etails, flight price with booking url, hotel options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, description and places to visit nearby with placeName, place details, place image url, geo cordinates, ticket pricing , time to travel to each of the location for {totalDays} days and {totalNight} night with each day plan with the best time to visit in JSON, put the currency in string dollar and its value'