require('dotenv').config()
module.exports = {
    email: process.env.USEREMAIL,
    password: process.env.USERPASSWORD,
    baseUrl: 'https://www.shopltk.com/',
    categoryTitles: [
        'Gift Guides', 'Holiday',
        'Winter Trends', 'LTK-U',
        'Home', 'Deal Alert',
        'Under $50', 'Under $100',
        'Style Tips', 'Beauty',
        'Fitness', 'Curves',
        'Shoppable Video', 'Workwear',
        'Swim', 'Travel',
        'Shoe Crushes', 'It Bags',
        'Baby', 'Bump',
        'Kids', 'Family',
        'Mens', 'Weddings',
        'Europe', 'Brasil'
    ]

}