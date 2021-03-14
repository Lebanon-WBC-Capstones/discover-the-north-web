import img from './a.png';
export const responsive_data = [
  {
    type: 'activity',
    name: 'Hiking',
    image:
      'https://www.lebanontraveler.com/lebanontraveler/Library/Images/Uploaded%20Images/2018/Lebanon%20Traveler/Whats%20Trending/HikersFavorites/ghada-el-khelly.jpg',
    width: '45%',
    height: '200px',
  },
  {
    type: 'activity',
    name: 'Biking',
    image:
      'https://img.redbull.com/images/c_crop,x_0,y_0,h_3840,w_4800/c_fill,w_650,h_520/q_auto,f_auto/redbullcom/2020/4/29/ereaaopn5xjdzt3nsgdr/kenny-belaey-discovers-the-lebanon-mountain-trail-from-border-to-border',
    width: '45%',
    height: '200px',
  },
  {
    type: 'city',
    name: 'Tripoli',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RJiZWVAsA4YkYFlxCyft5uI_pfDnW-41zg&usqp=CAU',
    width: '95%',
    height: '250px',
    id: 0,
  },
];

export const gems = [
  {
    name: 'Tripoli - Old Souks',
    imgSrc:
      'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2019/05/17/1586651-2067772589.jpg?itok=lYkxwC8F',
    id: 22,
  },
  {
    name: 'Danniye - Bridge',
    imgSrc:
      'https://blogbaladi.com/wp-content/uploads/2019/07/donnieh1-973x1200.jpg',
    id: 142,
  },
  {
    name: 'Batroun - Nabu Museum',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCaR3f1pqBRs_61t3ePZnzSyzYrEdlfk1NlGtbP-gUkrrV60S_NDHMSz8o_d47ghSEzo&usqp=CAU',
    id: 231,
  },
  {
    name: 'Qammouaa - Ezer Forest',
    imgSrc:
      'https://images-lebtivity.s3.amazonaws.com/content/versions/68819/960-640-0-0/hiking_at_qammouaa_valley_ezer_forest_akkar_district.jpg',
    id: 181,
  },
];

export const activities = [
  {
    id: 141,
    name: 'Hiking',
    image:
      'https://www.lebanontraveler.com/lebanontraveler/Library/Images/Uploaded%20Images/2018/Lebanon%20Traveler/Whats%20Trending/HikersFavorites/ghada-el-khelly.jpg',
    width: '100%',
    height: '500px',
  },
  {
    id: 264,
    name: 'Biking',
    image:
      'https://img.freepik.com/free-photo/cedar-forest-mountains-lebanon_134785-1958.jpg?size=626&ext=jpg',
    width: '100%',
    height: '280px',
  },
  {
    id: 222,
    name: 'Skiing',
    image:
      'https://img.redbull.com/images/c_crop,x_0,y_0,h_3840,w_4800/c_fill,w_650,h_520/q_auto,f_auto/redbullcom/2020/4/29/ereaaopn5xjdzt3nsgdr/kenny-belaey-discovers-the-lebanon-mountain-trail-from-border-to-border',
    width: '100%',
    height: '280px',
  },
  {
    id: 221,
    name: 'Beach',
    image:
      'https://www.lebanoninapicture.com/Prv/Images/Pages/Page_121594/walking-along-the-beach-palmisland-palmislands--7-7-2017-8-58-59-am-l.jpg',
    width: '100%',
    height: '200px',
  },
];
export const TourGuideData = [
  {
    id: 20,
    city: 'Tripoli',
    type: 'Outdoor Activity',
    name: 'lost in tripoli',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipNstISUhmPHqoPivlOHqWExHqFIT-vjpjD0DAhi=w408-h243-k-no',
    address: '',
    address_coordinates: [34.42103319559394, 35.85085183676758],
    icon: '',
    description:
      "Get the chance to walk in the narrow streets and admire the architecture of the well preserved Mamluks city while tasting Tripolitan's street food and its famous sweets.",
    related_tags: ['bike tours', 'guided tour', 'friends', 'good for kids'],
    price: '10$',
    rating: 5.0,
    tour_guides: [
      {
        id: 40,
        image:
          'https://www.headshotsprague.com/wp-content/uploads/2019/07/Headshots_Prague-emotional-portrait-of-a-smiling-entrepreneur-1.jpg',
        name: 'Wael Haidar',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: [
          'Tourist Guide',
          'archaeologist',
          'cultured',
          'translator',
        ],
      },
    ],
  },
  {
    id: 21,
    city: 'Tripoli',
    type: 'Outdoor Activity',
    name: 'Palm Islands',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipM55BmP9ixWdO8yDnb0I62HhNLTKQvIYHbuGCDE=w408-h408-k-no',
    address: '',
    address_coordinates: [34.49477495027462, 35.77202402551256],
    icon: '',
    description:
      'The Palm Islands Nature Reserve consists of three flat, rocky islands of eroded limestone and the surrounding sea area, located 5.5 kilometres (3.4 mi) offshore and northwest of the city of Mina, to the west of Tripoli.',
    related_tags: ['beaches', 'island', 'trip', 'fun', 'suits the family'],
    price: '25$',
    rating: 4.5,
    tour_guides: [
      {
        id: 41,
        image: img,
        name: 'Alia Tayba',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: [
          'Boat Driver',
          'life guard',
          'swimmer',
          'waterboarding',
        ],
      },
    ],
  },
  {
    id: 22,
    city: 'Tripoli',
    type: 'Historique',
    name: "Citadel Saint Gilles (Qal'at Sinjil)",
    image:
      'https://lh5.googleusercontent.com/p/AF1QipNzlMwHF2ZinKW-iI5WaX20pqVuz7V6COiBllSA=w420-h240-k-no',
    address: '',
    address_coordinates: [34.433585059650255, 35.84448288215495],
    icon: '',
    description:
      "The Citadel of Raymond de Saint-Gilles, also known as Qala'at Sanjil and Qala'at Tarablus in Arabic, is a citadel and fort on a hilltop in Tripoli.",
    related_tags: ['history plaques', 'good for kids', 'city views', 'rampart'],
    price: '3$',
    rating: 4.5,
    tour_guides: [
      {
        id: 42,
        image:
          'https://www.brisbaneheadshots.com.au/images/galleries/women-corporate/Casual-business-headshots.jpg',
        name: 'Sarah Rifai',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Translator', 'cultured', 'archaeologist'],
      },
    ],
  },
  {
    id: 23,
    city: 'Tripoli',
    type: 'Beach',
    name: 'El Mina Port',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMv6l6dUjrXdUyPaZpyOMT7nzCM6_oH-QCrwHqQ=w408-h408-k-no',
    address: '',
    address_coordinates: [34.45197829161598, 35.81087690553403],
    icon: '',
    description:
      'The Port of Tripoli is the second port in Lebanon after the Port of Beirut. It has an approximate area of Three Million m2, with a water area of  2,200,000 m2, a land area of 320,000 m2, and a 420,000 m2 dump area adjacent to the current port, reserved for the futur Container Terminal and Free Market Zone.',
    related_tags: ['phoenician city', 'sea', 'coastal town'],
    price: 'FREE',
    rating: 4.2,
    tour_guides: [
      {
        id: 43,
        image:
          'https://i.pinimg.com/originals/ac/aa/cc/acaacc0e1dd9fdfca03ab16a02b91918.jpg',
        name: 'Rana Assoum',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: [
          'Swimmer',
          'life guard',
          'waterboarding',
          'translator',
        ],
      },
    ],
  },
  {
    id: 24,
    city: 'Tripoli',
    type: 'Historical landmark',
    name: 'Sultan AbdulHamid Clocktower',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipPfYHXZZAh7bh1oDstkB4ic4IJu5Stk5uSszS5w=w408-h306-k-no',
    address: '',
    address_coordinates: [34.441790698210575, 35.83703730417864],
    icon: '',
    description:
      'Al Tal city square is a 19-20th century development with its most historic buildings commissioned by the Ottomans. It has Ottoman and European influenced buildings on account of the Ottoman Empire and subsequent French Colonization.',
    related_tags: ['history', 'al manchiyeh park', 'ancient', 'old buildings'],
    price: '2$',
    rating: 4.5,
    tour_guides: [
      {
        id: 44,
        image:
          'https://www.headshotsprague.com/wp-content/uploads/2019/07/Headshots_Prague-emotional-portrait-of-a-smiling-entrepreneur-1.jpg',
        name: 'Jescar Mata',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Tour Escort', 'cultured', 'translator'],
      },
    ],
  },
  {
    id: 25,
    city: 'Tripoli',
    type: 'Historical landmark',
    name: 'Souk Al-Haraj',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipP8a8VGiKMx0SZboNi1MJrKwqyBpAqyPTyyAOo6=w408-h306-k-no',
    address: '',
    address_coordinates: [34.43733904315993, 35.84622081099138],
    icon: '',
    description:
      'Situated in the Hadeed district midway between the Mallaha and Dabbaghah districts, the Haraj Souq has a total area of 2,300 square meters and is made up of two floors. This covered 14th century Mamlouk bazaar has a high vaulted ceiling, which is supported by granite columns that may have originally been part of a Roman or Byzantine structure.',
    related_tags: ['history', 'antiquites', 'old buildings'],
    price: 'FREE',
    rating: 4.1,
    tour_guides: [
      {
        id: 45,
        image:
          'https://static.wixstatic.com/media/7fa9fc_31c59cea7f1c4606a84e6833da6142df~mv2.jpg/v1/fill/w_387,h_580,al_c,q_85/7fa9fc_31c59cea7f1c4606a84e6833da6142df~mv2.jpg',
        name: 'Hoda El Zain',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Museum Guide', 'Tour Coordinator', 'archaeologist'],
      },
    ],
  },
  {
    id: 26,
    city: 'Tripoli',
    type: 'Public bath',
    name: 'Hammam al-Jadid',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipOIP9mOpgy7_viXqefooXyDnkclrPknCRFGjXP3=w408-h240-k-no-pi-0-ya243.33041-ro0-fo100',
    address: '',
    address_coordinates: [34.43239886216246, 35.84163791099128],
    icon: '',
    description:
      'One of the most important tourist sites in Tripoli, located a few meters after the hanging mosque, which is one of the most beautiful and luxurious baths that bear the character of Islamic architecture in Lebanon. Its gate is decorated with a huge stone chain and interlocking all of it from one stone, and in the center of it is a pool from the Mamluk era, and it was built by the Ottoman Governor Ibrahim Pasha Al-Azim between the years 1721 and 1730 AD.',
    related_tags: ['public bath', 'Islamic architecture', 'old buildings'],
    price: 'FREE',
    rating: 3.5,
    tour_guides: [
      {
        id: 46,
        image:
          'https://www.brisbaneheadshots.com.au/images/galleries/women-corporate/Casual-business-headshots.jpg',
        name: 'Dana Hajj',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Translator', 'cultured', 'archaeologist'],
      },
    ],
  },

  {
    id: 61,
    city: 'Koura',
    type: 'Historical landmark',
    name: 'Qasr Naous',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipONpP2gVvLgSThByI8MLxc27QA9u4xbxPf1pLVT=w408-h306-k-no',
    address: '',
    lat: 34.28961677753156,
    long: 35.84573198400449,
    address_coordinates: [34.28961677753156, 35.84573198400449],
    icon: '',
    description:
      'Qasr Naous is the vestige of two Roman Temples situated on a hilltop, some 600 meters above the sea in the village of Ain Aakrine, Koura.The first temple, the one in the east, has survived pretty well.',
    related_tags: ['history', 'temples', 'roman', 'ancient'],
    price: '11$',
    rating: 4.5,
    tour_guides: [
      {
        id: 81,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvpuNoI06nScwFAhJgWlCwEDO1tsBTWw_rgt-6ahuXzex6C9OT_bjXV6Gs-IFO1bPRao&usqp=CAU',
        name: 'Nassim Saleh',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: [
          'Tour Coordinator',
          'translator',
          'archaeologist',
          'Museum Guide',
        ],
      },
    ],
  },

  {
    id: 101,
    city: 'Zgharta',
    type: 'Cliff',
    name: 'Rock Climbing',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMWFAaSL8SBGqVNUc1omsUSpJKVz0BnvVVY7VMp=w408-h306-k-no',
    address: 'Horsh Ehden',
    address_coordinates: [34.30879751001373, 35.98275459749624],
    icon: '',
    description:
      'Rock climbing is a sport in which participants climb up, down or across natural rock formations or artificial rock walls. The goal is to reach the summit of a formation or the endpoint of a usually pre-defined route without falling.',
    related_tags: ['adventure', 'nature', 'wildlife', 'green lands'],
    price: '15$',
    rating: 4.5,
    tour_guides: [
      {
        id: 121,
        image:
          'https://www.brisbaneheadshots.com.au/images/galleries/women-corporate/Casual-business-headshots.jpg',
        name: 'Lina Suleiman',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: [
          'Rock Climber',
          'Hiker',
          'runner',
          'Tour Coordinator',
        ],
      },
    ],
  },
  {
    id: 102,
    city: 'Zgharta',
    type: 'Outdoor Activity',
    name: 'Abseiling',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipN_XSnsYGj_LOtWDZAhQqtTK6dm1yC24aDSEvky=w426-h240-k-no',
    address: 'Ehden',
    address_coordinates: [34.295525332935014, 35.95901771098702],
    icon: '',
    description:
      'Abseiling, also known as rappelling, is a controlled descent off a vertical drop, such as a rock face, using a rope.',
    related_tags: ['adventure', 'mountain', 'team', 'sport'],
    price: '5$',
    rating: 3.9,
    tour_guides: [
      {
        id: 122,
        image:
          'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
        name: 'Mousa Eisaa',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Hiking Guide', 'courage', 'zip line trainer'],
      },
    ],
  },
  {
    id: 103,
    city: 'Zgharta',
    type: 'Outdoor Activity',
    name: 'Hiking',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipOoNanMr94a2-RVsQ-7GRliA3Mvxa_SafQOmh3u=w408-h306-k-no',
    address: 'Ehden',
    address_coordinates: [34.29529454819847, 35.96234361203648],
    icon: '',
    description:
      'Hiking, walking in nature as a recreational activity. Especially among those with sedentary occupations, hiking is a natural exercise that promotes physical fitness, is economical and convenient, and requires no special equipment.',
    related_tags: ['adventure', 'fun', 'sport', 'good for kids'],
    price: 'FREE',
    rating: 4.8,
    tour_guides: [
      {
        id: 123,
        image:
          'https://www.headshotsprague.com/wp-content/uploads/2019/07/Headshots_Prague-emotional-portrait-of-a-smiling-entrepreneur-1.jpg',
        name: 'Omar Deeb',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Hiker', 'rock climber', 'runner'],
      },
    ],
  },
  {
    id: 104,
    city: 'Zgharta',
    type: 'Outdoor Activity',
    name: 'ATV',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipPC3fffCBg2TWWVRYiu8yfZFKSJ-6eZ4Vy4TIit=w426-h240-k-no',
    address: 'Ehden ATV',
    address_coordinates: [34.290232826727234, 35.913585735081476],
    icon: '',
    description: '',
    related_tags: ['riding', 'adventure', 'fun', 'friends'],
    price: '30$',
    rating: 5.0,
    tour_guides: [
      {
        id: 124,
        image:
          'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
        name: 'Ahmed Karam',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Buggy Driver', 'runner', 'man of sport'],
      },
    ],
  },
  {
    id: 106,
    city: 'Zgharta',
    type: 'Outdoor Activity',
    name: 'Ehden Adventures',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipOVhUNQIDimxbsHlpXdTw86UWfzxP2Nn8qymQMF=w408-h306-k-no',
    address: 'Ehden',
    address_coordinates: [34.30688563750308, 35.973467542496955],
    icon: '',
    description:
      'Ehden Adventures is an establishment for outdoor activities since 2007. We provide all sort of outdoor activities for all ages and levels.',
    related_tags: ['nature', 'camping', 'views', 'fun'],
    price: '50$',
    rating: 5.0,
    tour_guides: [
      {
        id: 126,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvpuNoI06nScwFAhJgWlCwEDO1tsBTWw_rgt-6ahuXzex6C9OT_bjXV6Gs-IFO1bPRao&usqp=CAU',
        name: 'Murad Jaber',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Camper', 'Tour Escort', 'runner'],
      },
    ],
  },
  {
    id: 141,
    city: 'El Danniye',
    type: 'Outdoor Activity',
    name: 'Hiking',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipNdqQ5zKeBbwlGLYmEmu3Bd3pCSfLrpJWyGLHxW=w426-h240-k-no',
    address: 'Sir El Danniye',
    address_coordinates: [34.38779600566557, 36.0294445594675],
    icon: '',
    description:
      'In Nature the birds serenade us, and the fresh air electrifies more than coffee ever could. The vibrancy of the trees and flowers overwhelms our eyes; while the deep blue of the sky inspires. All our senses are awakened when we spend time in Nature.',
    related_tags: ['nature', 'hiking', 'wildlife'],
    price: 'FREE',
    rating: 3.8,
    tour_guides: [
      {
        id: 161,
        image:
          'https://www.headshotsprague.com/wp-content/uploads/2019/07/Headshots_Prague-emotional-portrait-of-a-smiling-entrepreneur-1.jpg',
        name: 'Samy Farhat',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Rock Climber', 'Hiker', 'runner', 'courage'],
      },
    ],
  },
  {
    id: 181,
    city: 'Qammoua',
    type: 'Outdoor Activity',
    name: 'Hiking',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipO63mr-kAC_T_9MsCG8i4Q_3rg4C3hjfC-_nOI=w408-h272-k-no',
    address: 'Qammoua',
    address_coordinates: [34.49053093876484, 36.224740930516674],
    icon: '',
    description:
      'Hiking helps connect us with our roots to this Earth, giving us a feeling of responsibility to protect and preserve its sacredness. It’s a way to get reacquainted with our personal passions.',
    related_tags: ['nature', 'snow tours', 'white lands', 'cedars'],
    price: '10$',
    rating: 5.0,
    tour_guides: [
      {
        id: 201,
        image:
          'https://i.pinimg.com/originals/ac/aa/cc/acaacc0e1dd9fdfca03ab16a02b91918.jpg',
        name: 'Faten Haddad',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Hiker', 'rock climber', 'runner'],
      },
    ],
  },
  {
    id: 182,
    city: 'Qoubaiyat',
    type: 'Church',
    name: 'Notre Dame Chahlo',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipPrIq-R9lb9hGl4hW-pGDamgL8-xa4yFO1Z4zic=w426-h240-k-no',
    address: '',
    address_coordinates: [34.573502270172696, 36.277723491529564],
    icon: '',
    description: '',
    related_tags: ['church', 'phoenician', 'greek piece'],
    price: 'FREE',
    rating: 3.4,
    tour_guides: [
      {
        id: 202,
        image:
          'https://static.wixstatic.com/media/7fa9fc_31c59cea7f1c4606a84e6833da6142df~mv2.jpg/v1/fill/w_387,h_580,al_c,q_85/7fa9fc_31c59cea7f1c4606a84e6833da6142df~mv2.jpg',
        name: 'Yasmine Haddad',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: [],
      },
    ],
  },
  {
    id: 221,
    city: 'Batroun',
    type: 'Beach',
    name: 'Bonita Bay',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipNpxUjUslZGWfG39Zeq1MjJQ8Dw8h8joMt6FD7q=w426-h240-k-no',
    address: '',
    address_coordinates: [34.21763520016477, 35.64271412744678],
    icon: '',
    description:
      'Located on a large pebble beach, this place has an attractive swimming pool and a seaside bar and seafood restaurant.',
    related_tags: ['waves', 'friends', 'clean water', 'suits the family'],
    price: '35$',
    rating: 5.0,
    tour_guides: [
      {
        id: 241,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvpuNoI06nScwFAhJgWlCwEDO1tsBTWw_rgt-6ahuXzex6C9OT_bjXV6Gs-IFO1bPRao&usqp=CAU',
        name: 'Kamal Kamel',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Waterboarding Guide', 'swimmer', 'life guard'],
      },
    ],
  },
  {
    id: 222,
    city: 'Batroun',
    type: 'Outdoor Activity',
    name: 'Routes',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMIAYs-MX1YdHj3Qiq_lxnI3LY6TIh6VzQ9Cv6B=w408-h408-k-no',
    address: '',
    address_coordinates: [34.2494411224377, 35.6606257840032],
    icon: '',
    description:
      'To be fit and healthy you need to be physically active. Regular physical activity can help protect you from serious diseases such as obesity, heart disease and arthritis. Riding your bicycle regularly is one of the best ways to reduce risks',
    related_tags: ['bike tours', 'safe', 'fun', 'friends', 'good for kids'],
    price: '5$',
    rating: 4.5,
    tour_guides: [
      {
        id: 242,
        image:
          'https://www.brisbaneheadshots.com.au/images/galleries/women-corporate/Casual-business-headshots.jpg',
        name: 'Maya Jdid',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['rider', 'Tour Coordinator', 'runner'],
      },
    ],
  },
  {
    id: 223,
    city: 'Batroun',
    type: 'Outdoor Activity',
    name: 'Bchaaleh Trails',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipO3fPSxikF8gQSuUJ009xKK9nak8qLFB5tvmpwI=w426-h240-k-no',
    address: '',
    address_coordinates: [34.215238438761396, 35.824268169748315],
    icon: '',
    description:
      'Bchaaleh Trails Project is an integration between wild, agriculture and rural scenery of a traditional Lebanese village.',
    related_tags: ['hiking', 'camping', 'village'],
    price: '40$',
    rating: 5.0,
    tour_guides: [
      {
        id: 243,
        image:
          'https://www.headshotsprague.com/wp-content/uploads/2019/07/Headshots_Prague-emotional-portrait-of-a-smiling-entrepreneur-1.jpg',
        name: 'Shady Tony',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Hiker', 'runner', 'rock climber', 'translator'],
      },
    ],
  },
  {
    id: 224,
    city: 'Batroun',
    type: 'Outdoor Activity',
    name: 'Bchaaleh Trails',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipNmJy-jhKoBe5PHBaEmYeM1d7j-sdQ2vSIBoxec=w408-h544-k-no',
    address: '',
    address_coordinates: [34.21239934852468, 35.824268169748315],
    icon: '',
    description:
      'Join “Bchaaleh Trails” in an amazing hiking adventure where hiking experience will be mixed with fun, relaxation and lots of sightseeing and discovery of hidden gems.',
    related_tags: ['nature', 'wildlife', 'sea view'],
    price: '30$',
    rating: 5.0,
    tour_guides: [
      {
        id: 244,
        image:
          'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
        name: 'Tony Eid',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Hiker', 'runner', 'rock climber', 'translator'],
      },
    ],
  },
  {
    id: 225,
    city: 'Batroun',
    type: 'Diving',
    name: 'Dive The Med Club',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMz14xmJ1EYGc7wJ8nRfFzUbeUWJ5UIifAoht4f=w408-h272-k-no',
    address: '',
    address_coordinates: [34.24878129810056, 35.65837291283952],
    icon: '',
    description:
      'Blessed with 210 kilometres of shoreline and a pleasant Mediterranean climate, Lebanon boasts a multitude of water sports and activities that can be enjoyed throughout the year.',
    related_tags: ['scuba', 'snorkeling', 'diving'],
    price: '19$',
    rating: 4.5,
    tour_guides: [
      {
        id: 245,
        image:
          'https://www.headshotsprague.com/wp-content/uploads/2019/07/Headshots_Prague-emotional-portrait-of-a-smiling-entrepreneur-1.jpg',
        name: 'Jamal El Ali',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Swimmer', 'waterboarding', 'life guard'],
      },
    ],
  },
  {
    id: 227,
    city: 'Batroun',
    type: 'Diving',
    name: 'Deep Sea Diving Center',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipNQpRR2KGE3LP2lYxT0V9meTS8pDRu0F4WSDmr-=w408-h272-k-no',
    address: '',
    address_coordinates: [34.25804493315201, 35.65822918400355],
    icon: '',
    description:
      'Whether you are a first-timer or an experienced diver, fun is always guaranteed!',
    related_tags: ['boat tours', 'diving', 'blue water'],
    price: '60$',
    rating: 4.5,
    tour_guides: [
      {
        id: 247,
        image:
          'https://i.pinimg.com/originals/43/44/07/434407e3ed12a226ccae8f0486fc0ee5.jpg',
        name: 'Rima El Waleed',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: [
          'Diver',
          'scuba diver',
          'waterboarding',
          'life guard',
        ],
      },
    ],
  },
  {
    id: 229,
    city: 'Batroun',
    type: 'Outdoor Activity',
    name: 'Leave No Trace Lebanon',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMZrYeD2ZvdtSotvmoBwBYf-c7689SxYGsRDhZt=w408-h707-k-no',
    address: '',
    address_coordinates: [34.2499075907232, 35.66428487416486],
    icon: '',
    description: '',
    related_tags: ['ski tours', 'snow tours', 'white lands', 'cedars'],
    price: 'FREE',
    rating: 3.0,
    tour_guides: [
      {
        id: 249,
        image:
          'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
        name: 'Jeanpaul Fadel',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Ski Trainer', 'skier', 'snowboarder'],
      },
    ],
  },
  {
    id: 230,
    city: 'Batroun',
    type: 'Beach',
    name: 'Joining Beach',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipORYIeVe9kCiXRFjv-FLIm9B-5EATZV36bt2kTW=w426-h240-k-no',
    address: '',
    address_coordinates: [34.237152179096846, 35.65695771335906],
    icon: '',
    description:
      '“Joining Beach” in Kfarabida, Batroun, featuring amazing caves, rare fauna, fresh water and huge turtles, became a famous place for all water bouldering lovers.',
    related_tags: [
      'beaches',
      'snorkeling',
      'rocks',
      'suits the family',
      'friends',
    ],
    price: '25$',
    rating: 3.0,
    tour_guides: [
      {
        id: 250,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvpuNoI06nScwFAhJgWlCwEDO1tsBTWw_rgt-6ahuXzex6C9OT_bjXV6Gs-IFO1bPRao&usqp=CAU',
        name: 'khaled Bilal',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Swimmer', 'life guard', 'waterboarding'],
      },
    ],
  },
  {
    id: 232,
    city: 'Batroun',
    type: 'Diving',
    name: 'NORTHCOAST DIVERS',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipM_ly3_xSocNc1TG26Cb7zDuO2iALyq6WWhOb-a=w408-h341-k-no',
    address: '',
    address_coordinates: [34.311620106766995, 35.69524324568596],
    icon: '',
    description:
      'Diving is the sport of jumping or falling into water from a platform or springboard, usually while performing acrobatics.',
    related_tags: ['scuba', 'snorkeling', 'into the blue', 'clean water'],
    price: '10$',
    rating: 4.0,
    tour_guides: [
      {
        id: 252,
        image:
          'https://static.wixstatic.com/media/7fa9fc_31c59cea7f1c4606a84e6833da6142df~mv2.jpg/v1/fill/w_387,h_580,al_c,q_85/7fa9fc_31c59cea7f1c4606a84e6833da6142df~mv2.jpg',
        name: 'Tina Eid',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: [
          'Scuba Diver',
          'waterboarding',
          'life guard',
          'waterboarding',
        ],
      },
    ],
  },
  {
    id: 261,
    city: 'Bcharre',
    type: 'Outdoor Activity',
    name: 'Qadisha Valley',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipPezUrJtYSAyTJBi63xuMCbOoFUluLf2blv1NHo=w408-h306-k-no',
    address: '',
    address_coordinates: [34.25519370760075, 35.955289881508776],
    icon: '',
    description:
      'Kadisha Valley, also romanized as the Qadisha Valley and also known as the Kadisha Gorge or Wadi Kadisha, is a gorge that lies within the Becharre and Zgharta Districts of the North Governorate.',
    related_tags: ['bike tours', 'monastery', 'nature', 'hiking'],
    price: 'FREE',
    rating: 4.0,
    tour_guides: [
      {
        id: 281,
        image:
          'https://www.brisbaneheadshots.com.au/images/galleries/women-corporate/Casual-business-headshots.jpg',
        name: 'Sana Hussein',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Rider', 'runner', 'Tour Coordinator'],
      },
    ],
  },
  {
    id: 262,
    city: 'Bcharre',
    type: 'Outdoor Activity',
    name: 'The Lake House',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipN9g7TncBLSERZ1Dd2beVWydO-Zy7k_5931iODy=w408-h406-k-no',
    address: 'Arz',
    address_coordinates: [34.22647120223404, 36.034359998022026],
    icon: '',
    description:
      'Unique and impressive camping site located by a valley lake and surrounded by the natural scenery of the Northern Lebanese mountains. Bring your tent and enjoy lake dips, sunset skies, bonfire nights and endless smiles!',
    related_tags: ['calm', 'camping', 'hiking', 'cedars'],
    price: '10$',
    rating: 4.0,
    tour_guides: [
      {
        id: 282,
        image:
          'https://i.pinimg.com/originals/43/44/07/434407e3ed12a226ccae8f0486fc0ee5.jpg',
        name: 'Elza Hanna',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Camper', 'rock climber', 'Tour Coordinator'],
      },
    ],
  },
  {
    id: 264,
    city: 'Bcharre',
    type: 'Ski',
    name: 'Cedars Ski Resort',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipNZYA0eApuSAxOXt2xrK89wyyPvuaSSwk9ZHCK1=w408-h306-k-no',
    address: 'Arz',
    address_coordinates: [34.250551688883384, 36.06788389181477],
    icon: '',
    description:
      'Cedars Ski Resort Bsharri is a located in the Bsharri mountains of north Lebanon. The natural area known as Cedars of God is nearby. Ariz (or Arz) means cedar in Arabic, and is sometimes used to refer to the area.',
    related_tags: ['skiing', 'snowboarding', 'suits the family'],
    price: '36$',
    rating: 5.0,
    tour_guides: [
      {
        id: 284,
        image:
          'https://i.pinimg.com/originals/ac/aa/cc/acaacc0e1dd9fdfca03ab16a02b91918.jpg',
        name: 'Aline Ghofran',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Ski Trainer', 'snowboarder', 'skier'],
      },
    ],
  },
  {
    id: 265,
    city: 'Bcharre',
    type: 'Church',
    name: 'The good shepherd',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipPUP-d2sSZ9o1l--ByCceui2Rw8xVeJKDmem3CP=w408-h306-k-no',
    address: 'Beit Menzer',
    address_coordinates: [34.2618891210701, 35.91516838410202],
    icon: '',
    description:
      'The Good Shepherd Camp was originally founded by Rev. Richard Hester in 1971. It is located on a 10,000 square meter pine covered hillside in Beyt Mounzer, Bchareh district in North Lebanon.',
    related_tags: ['canyoning', 'rappelling tours', 'camping'],
    price: 'FREE',
    rating: 3.5,
    tour_guides: [
      {
        id: 285,
        image:
          'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
        name: 'Hussein Hanna',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Camper', 'Hiker', 'man of sport', 'rock climber'],
      },
    ],
  },
  {
    id: 266,
    city: 'Bcharre',
    type: 'Outdoor Activity',
    name: 'Pools of Sahna',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipPjhQbITpDq7ba3P8l9lHMJFFPTMNwwifsraJui=w408-h306-k-no',
    address: 'Hasroun',
    address_coordinates: [34.219625577040404, 35.969341163373436],
    icon: '',
    description:
      'Agricultural water ponds in the Sahna area in Jardh Hasroun town, used for irrigation of agricultural lands.',
    related_tags: ['hiking', 'camping', 'agricultural water'],
    price: '35$',
    rating: 3.9,
    tour_guides: [
      {
        id: 286,
        image:
          'https://static.wixstatic.com/media/7fa9fc_31c59cea7f1c4606a84e6833da6142df~mv2.jpg/v1/fill/w_387,h_580,al_c,q_85/7fa9fc_31c59cea7f1c4606a84e6833da6142df~mv2.jpg',
        name: 'Maya Issa',
        email: 'discover.north.lebanon@gmail.com',
        summary: '',
        speciality_tags: ['Hiker', 'runner'],
      },
    ],
  },
];
