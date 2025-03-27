export const coffeeTypes = [
    "All", "Cappuccino", "Espresso", "Latte", "Americano", "Mocha", "Macchiato", 
    "Flat White", 
];

export const coffeeArray = [
    {
        type: "Cappuccino",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
        rating: 4.5,
        shortDesc: "Espresso with steamed milk foam",
        longDesc: "A classic Italian coffee drink composed of equal parts espresso, steamed milk, and velvety milk foam, often dusted with cocoa powder or cinnamon. The perfect balance of strong coffee and creamy texture.",
        cupSize: [
            {
                size: "S",
                price: 4.99
            },
            {
                size: "M",
                price: 6.00
            },
            {
                size: "L",
                price: 8.00
            }
        ]
    },
    {
        type: "Espresso",
        price: 3.50,
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
        rating: 4.7,
        shortDesc: "Strong concentrated coffee shot",
        longDesc: "The purest coffee experience - a single ounce of intensely flavored coffee extracted under high pressure. Served as the base for most coffee drinks or enjoyed alone as a quick, potent pick-me-up.",
        cupSize: [
            {
                size: "S",
                price: 3.50
            },
            {
                size: "M",
                price: 4.50
            },
            {
                size: "L",
                price: 5.50
            }
        ]
    },
    {
        type: "Latte",
        price: 5.25,
        image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e",
        rating: 4.3,
        shortDesc: "Smooth espresso with steamed milk",
        longDesc: "A creamy coffee drink made with a shot of espresso and three times as much steamed milk, topped with a light layer of foam. Milder than a cappuccino, with the coffee flavor blending harmoniously with the milk.",
        cupSize: [
            {
                size: "S",
                price: 5.25
            },
            {
                size: "M",
                price: 6.25
            },
            {
                size: "L",
                price: 7.25
            }
        ]
    },
    {
        type: "Americano",
        price: 3.75,
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c",
        rating: 4.2,
        shortDesc: "Espresso diluted with hot water",
        longDesc: "Created by adding hot water to espresso, resulting in a similar strength to drip coffee but with a different flavor profile. Has the intensity of espresso but in a larger, smoother format.",
        cupSize: [
            {
                size: "S",
                price: 3.75
            },
            {
                size: "M",
                price: 4.75
            },
            {
                size: "L",
                price: 5.75
            }
        ]
    },
    {
        type: "Mocha",
        price: 5.50,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        rating: 4.6,
        shortDesc: "Chocolate-flavored latte",
        longDesc: "A delightful combination of espresso, steamed milk, and chocolate (usually in syrup form), topped with whipped cream. The perfect choice for those who want their coffee with a dessert-like sweetness.",
        cupSize: [
            {
                size: "S",
                price: 5.50
            },
            {
                size: "M",
                price: 6.50
            },
            {
                size: "L",
                price: 7.50
            }
        ]
    },
    {
        type: "Macchiato",
        price: 4.25,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd5bba49",
        rating: 4.4,
        shortDesc: "Espresso 'stained' with milk",
        longDesc: "Meaning 'stained' in Italian, this drink features a shot of espresso with just a dollop of steamed milk or foam. Stronger than a latte but slightly mellowed compared to straight espresso.",
        cupSize: [
            {
                size: "S",
                price: 4.25
            },
            {
                size: "M",
                price: 5.25
            },
            {
                size: "L",
                price: 6.25
            }
        ]
    },
    {
        type: "Flat White",
        price: 5.00,
        image: "https://images.unsplash.com/photo-1593443320730-2ddec0e50c0a",
        rating: 4.5,
        shortDesc: "Velvety microfoam espresso",
        longDesc: "Originating from Australia/New Zealand, this drink features espresso with microfoam (steamed milk with small, fine bubbles). Similar to a latte but with a higher coffee-to-milk ratio and silkier texture.",
        cupSize: [
            {
                size: "S",
                price: 5.00
            },
            {
                size: "M",
                price: 6.00
            },
            {
                size: "L",
                price: 7.00
            }
        ]
    }
];

export const coffeeBeansArray = [
    {
        type: "Ethiopian Yirgacheffe",
        price: 10.56,
        image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff",
        rating: 4.7,
        shortDesc: "From Africa",
        longDesc: "A premium single-origin coffee with bright acidity and floral notes, featuring flavors of lemon, blueberry, and jasmine. Grown in the high altitudes of East Africa.",
        sizes: [
            {
                size: "250gm",
                price: 10.56
            },
            {
                size: "500gm",
                price: 12.56
            },
            {
                size: "1000gm",
                price: 14.00
            }
        ]
    },
    {
        type: "Colombian Supremo",
        price: 11.50,
        image: "https://images.unsplash.com/photo-1461988091159-192b6df7054f",
        rating: 4.6,
        shortDesc: "From South America",
        longDesc: "A well-balanced coffee with medium body and bright acidity, featuring notes of caramel, nuts, and citrus. Grown in the rich volcanic soil of the Andes mountains.",
        sizes: [
            {
                size: "250gm",
                price: 11.50
            },
            {
                size: "500gm",
                price: 13.50
            },
            {
                size: "1000gm",
                price: 15.50
            }
        ]
    },
    {
        type: "Kenyan AA",
        price: 14.25,
        image: "https://images.unsplash.com/photo-1462917882517-e150004895fa",
        rating: 4.8,
        shortDesc: "From Africa",
        longDesc: "A bold and complex coffee with vibrant acidity, featuring distinctive wine-like flavors and blackcurrant notes. Grown in the fertile highlands of East Africa.",
        sizes: [
            {
                size: "250gm",
                price: 14.25
            },
            {
                size: "500gm",
                price: 16.25
            },
            {
                size: "1000gm",
                price: 18.25
            }
        ]
    },
    {
        type: "Sumatra Mandheling",
        price: 13.75,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213",
        rating: 4.5,
        shortDesc: "From Asia",
        longDesc: "A full-bodied coffee with low acidity and earthy flavors, featuring notes of dark chocolate, spice, and cedar. Grown in the lush rainforests of Southeast Asia.",
        sizes: [
            {
                size: "250gm",
                price: 13.75
            },
            {
                size: "500gm",
                price: 15.75
            },
            {
                size: "1000gm",
                price: 17.75
            }
        ]
    },
    {
        type: "Guatemalan Antigua",
        price: 13.50,
        image: "https://images.unsplash.com/photo-1524350876685-274059332603",
        rating: 4.6,
        shortDesc: "From Central America",
        longDesc: "A rich and complex coffee with medium acidity, featuring flavors of cocoa, caramel, and a hint of smoke. Grown in the volcanic valleys of Central America.",
        sizes: [
            {
                size: "250gm",
                price: 13.50
            },
            {
                size: "500gm",
                price: 15.50
            },
            {
                size: "1000gm",
                price: 17.50
            }
        ]
    },
    {
        type: "Costa Rican Tarrazú",
        price: 12.25,
        image: "https://images.unsplash.com/photo-1522992319-0365e5f11656",
        rating: 4.4,
        shortDesc: "From Central America",
        longDesc: "A clean and bright coffee with lively acidity, featuring notes of honey, citrus, and brown sugar. Grown in the high-altitude regions of Central America.",
        sizes: [
            {
                size: "250gm",
                price: 12.25
            },
            {
                size: "500gm",
                price: 14.25
            },
            {
                size: "1000gm",
                price: 16.25
            }
        ]
    },
    {
        type: "Jamaican Blue Mountain",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
        rating: 4.9,
        shortDesc: "From Caribbean",
        longDesc: "A rare and exquisite coffee with mild acidity and smooth body, featuring delicate floral notes and a sweet, nutty finish. Grown in the mountainous Caribbean region.",
        sizes: [
            {
                size: "250gm",
                price: 24.99
            },
            {
                size: "500gm",
                price: 26.99
            },
            {
                size: "1000gm",
                price: 28.99
            }
        ]
    }
];

export const paymentTypeArray = [
    {
        name: "Credit Card",
        image: require('../assets/images/visa.png'),
    },
    {
        name: "Wallet",
        image: require('../assets/images/wallet.png'),
    },
    {
        name: "Google Play",
        image: require('../assets/images/googlepay.png'),
    },
    {
        name: "Apple Pay",
        image: require('../assets/images/apple.png'),
    },
    {
        name: "Amazon Pay",
        image: require('../assets/images/amazon.png'),
    },
    
]