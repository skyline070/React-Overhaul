import React from "react";
import ReactDOM from "react-dom/client"

// # Header
//  - Logo
//  - Nav Items
// # Body
//  - Search
//  - Restaurant Container
//   - Restaurant Card
//    - Dish Name
//    - Image
//    - Restaurant Name
//    - Rating
//    - Cuisines
//    - Time to Deliver
// # Footer
//  - Copyright
//  - Links
//  - Address
//  - Contact

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://plus.unsplash.com/premium_photo-1724711440750-759f3a6ce510?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => { 
  const {resData} = props

  const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.info;
  return(
    <div className="res-card" style={{background: "#f0f0f0"}}>
      <img className="res-logo"
      alt="res-logo"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" +
          cloudinaryImageId
         }
        />
      <h3>{name}</h3>
      <h4>{cuisines.join (",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

const resList = [
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
  "id": "595193",
  "name": "Pizza Hut",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/dc343dba-aba9-4c35-b862-74e6ae56c0f7_595193.JPG",
  "locality": "Buddhi Vihar",
  "areaName": "Budh Bazar",
  "costForTwo": "₹350 for two",
  "cuisines": [
    "Pizzas"
  ],
  "avgRating": 4.2,
  "parentId": "721",
  "avgRatingString": "4.2",
  "totalRatingsString": "1.7K+",
  "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 3.6,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "3.6 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2026-04-14 01:00:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
        "description": "Best in Pizza"
      }
    ]
  },
  "isOpen": true,
  "aggregatedDiscountInfoV2": {
    
  },
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "Best in Pizza",
              "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
              "theme": ""
            }
          }
        ]
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "orderabilityCommunication": {
    "title": {
      
    },
    "subTitle": {
      
    },
    "message": {
      
    },
    "customIcon": {
      
    }
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {
    
  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
  "context": "seo-data-ecbd18ee-6516-401d-a525-e2619eb8c77c"
},
"cta": {
  "link": "https://www.swiggy.com/city/moradabad/pizza-hut-buddhi-vihar-budh-bazar-rest595193",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
  "id": "240170",
  "name": "KFC",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/3a2ddf49-ca46-4912-bb06-5c8f344dcd73_240170.JPG",
  "locality": "Prachin BalaJi Path",
  "areaName": "Budh Bazar",
  "costForTwo": "₹400 for two",
  "cuisines": [
    "Burgers",
    "Fast Food",
    "Rolls & Wraps"
  ],
  "avgRating": 4.3,
  "parentId": "547",
  "avgRatingString": "4.3",
  "totalRatingsString": "3.1K+",
  "sla": {
    "deliveryTime": 12,
    "lastMileTravel": 1.2,
    "serviceability": "SERVICEABLE",
    "slaString": "10-15 mins",
    "lastMileTravelString": "1.2 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2026-04-14 02:00:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "android/static-assets/icons/big_rx.png",
        "description": "bolt!"
      },
      {
        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
        "description": "Best in Burger"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "bolt!",
              "imageId": "android/static-assets/icons/big_rx.png"
            }
          },
          {
            "attributes": {
              "description": "Best in Burger",
              "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
              "theme": ""
            }
          }
        ]
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "discountTag": "FLAT DEAL"
  },
  "orderabilityCommunication": {
    "title": {
      
    },
    "subTitle": {
      
    },
    "message": {
      
    },
    "customIcon": {
      
    }
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {
    
  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
  "context": "seo-data-ecbd18ee-6516-401d-a525-e2619eb8c77c"
},
"cta": {
  "link": "https://www.swiggy.com/city/moradabad/kfc-prachin-balaji-path-budh-bazar-rest240170",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
  "id": "699429",
  "name": "Domino's Pizza",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/f50ad6aa-68ff-48d1-b182-29d975e22b78_699429.JPG",
  "locality": "Mission Compound",
  "areaName": "Peeli Kothi",
  "costForTwo": "₹400 for two",
  "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
  ],
  "avgRating": 4.1,
  "parentId": "2456",
  "avgRatingString": "4.1",
  "totalRatingsString": "822",
  "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 0.8,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "0.8 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2026-04-13 23:59:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "android/static-assets/icons/big_rx.png",
        "description": "bolt!"
      },
      {
        "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
        "description": "Best in Pizza"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "bolt!",
              "imageId": "android/static-assets/icons/big_rx.png"
            }
          },
          {
            "attributes": {
              "description": "Best in Pizza",
              "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
              "theme": ""
            }
          }
        ]
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹59"
  },
  "orderabilityCommunication": {
    "title": {
      
    },
    "subTitle": {
      
    },
    "message": {
      
    },
    "customIcon": {
      
    }
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {
    
  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
  "context": "seo-data-ecbd18ee-6516-401d-a525-e2619eb8c77c"
},
"cta": {
  "link": "https://www.swiggy.com/city/moradabad/dominos-pizza-mission-compound-peeli-kothi-rest699429",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
  "id": "651722",
  "name": "Burger King",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/91467047-13b5-4818-a594-c6588fbfe35f_651722.jpg",
  "locality": "Moradabad",
  "areaName": "Kanth Road",
  "costForTwo": "₹350 for two",
  "cuisines": [
    "Burgers",
    "American"
  ],
  "avgRating": 4.3,
  "parentId": "166",
  "avgRatingString": "4.3",
  "totalRatingsString": "5.0K+",
  "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 4.8,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "4.8 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2026-04-14 04:00:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
        "description": "Best in Burger"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "Best in Burger",
              "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
              "theme": ""
            }
          }
        ]
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹59"
  },
  "orderabilityCommunication": {
    "title": {
      
    },
    "subTitle": {
      
    },
    "message": {
      
    },
    "customIcon": {
      
    }
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {
    
  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
  "context": "seo-data-ecbd18ee-6516-401d-a525-e2619eb8c77c"
},
"cta": {
  "link": "https://www.swiggy.com/city/moradabad/burger-king-kanth-road-rest651722",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
  "id": "1290432",
  "name": "Honest Bowl",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/20/c0878710-299e-4483-bf98-a676f3fa6823_1290432.jpg",
  "locality": "Near Pili Kothi",
  "areaName": "Chauraha",
  "costForTwo": "₹200 for two",
  "cuisines": [
    "North Indian",
    "High Protein",
    "Biryani"
  ],
  "avgRating": 4.5,
  "parentId": "612552",
  "avgRatingString": "4.5",
  "totalRatingsString": "122",
  "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 1.1,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "1.1 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2026-04-13 23:59:00",
    "opened": true
  },
  "badges": {
    
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹110"
  },
  "orderabilityCommunication": {
    "title": {
      
    },
    "subTitle": {
      
    },
    "message": {
      
    },
    "customIcon": {
      
    }
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "isNewlyOnboarded": true,
  "restaurantOfferPresentationInfo": {
    
  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
  "context": "seo-data-ecbd18ee-6516-401d-a525-e2619eb8c77c"
},
"cta": {
  "link": "https://www.swiggy.com/city/moradabad/honest-bowl-near-pili-kothi-chauraha-rest1290432",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
  "id": "147161",
  "name": "Maheshwari Shudh Shakahari Bhojnalaya",
  "cloudinaryImageId": "bxfuj16ian6vkj89a3mu",
  "locality": "Rampur Road",
  "areaName": "Station Road",
  "costForTwo": "₹300 for two",
  "cuisines": [
    "North Indian",
    "Chinese",
    "Thali",
    "Tandoori",
    "Home Food",
    "Fast Food"
  ],
  "avgRating": 4.3,
  "veg": true,
  "parentId": "130247",
  "avgRatingString": "4.3",
  "totalRatingsString": "14K+",
  "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2026-04-14 01:55:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "android/static-assets/icons/big_rx.png",
        "description": "bolt!"
      },
      {
        "imageId": "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
        "description": "Best in North Indian"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "bolt!",
              "imageId": "android/static-assets/icons/big_rx.png"
            }
          },
          {
            "attributes": {
              "description": "Best in North Indian",
              "imageId": "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
              "theme": ""
            }
          }
        ]
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹5"
  },
  "orderabilityCommunication": {
    "title": {
      
    },
    "subTitle": {
      
    },
    "message": {
      
    },
    "customIcon": {
      
    }
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {
    
  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
  "context": "seo-data-ecbd18ee-6516-401d-a525-e2619eb8c77c"
},
"cta": {
  "link": "https://www.swiggy.com/city/moradabad/maheshwari-shudh-shakahari-bhojnalaya-rampur-road-station-road-rest147161",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
  "id": "143548",
  "name": "Mohindra's Sweetschilly Restaurant",
  "cloudinaryImageId": "nfxjxvrymi40pwib3p54",
  "locality": "GMD Road",
  "areaName": "Pat Pat Sarai",
  "costForTwo": "₹250 for two",
  "cuisines": [
    "North Indian",
    "Chinese",
    "South Indian",
    "Tandoor"
  ],
  "avgRating": 4.3,
  "veg": true,
  "parentId": "137860",
  "avgRatingString": "4.3",
  "totalRatingsString": "19K+",
  "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 0.4,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "0.4 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2026-04-13 22:30:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "android/static-assets/icons/big_rx.png",
        "description": "bolt!"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "bolt!",
              "imageId": "android/static-assets/icons/big_rx.png"
            }
          }
        ]
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
  },
  "orderabilityCommunication": {
    "title": {
      
    },
    "subTitle": {
      
    },
    "message": {
      
    },
    "customIcon": {
      
    }
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {
    
  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
  "context": "seo-data-ecbd18ee-6516-401d-a525-e2619eb8c77c"
},
"cta": {
  "link": "https://www.swiggy.com/city/moradabad/mohindras-sweetschilly-restaurant-gmd-road-pat-pat-sarai-rest143548",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
  "id": "1133270",
  "name": "Maheshwari Thali Special",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/28/3687ca41-cf2d-4390-85a7-b8bea7053058_1133270.jpg",
  "locality": "Budh Bazar",
  "areaName": "Budh Bazar",
  "costForTwo": "₹150 for two",
  "cuisines": [
    "Thalis",
    "Indian",
    "Grill",
    "Tandoor",
    "Snacks",
    "Healthy Food",
    "North Indian"
  ],
  "avgRating": 4.3,
  "veg": true,
  "parentId": "652832",
  "avgRatingString": "4.3",
  "totalRatingsString": "168",
  "sla": {
    "deliveryTime": 16,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2026-04-13 23:59:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "android/static-assets/icons/big_rx.png",
        "description": "bolt!"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "bolt!",
              "imageId": "android/static-assets/icons/big_rx.png"
            }
          }
        ]
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "65% OFF",
    "subHeader": "UPTO ₹120"
  },
  "orderabilityCommunication": {
    "title": {
      
    },
    "subTitle": {
      
    },
    "message": {
      
    },
    "customIcon": {
      
    }
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {
    
  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
  "context": "seo-data-ecbd18ee-6516-401d-a525-e2619eb8c77c"
},
"cta": {
  "link": "https://www.swiggy.com/city/moradabad/maheshwari-thali-special-budh-bazar-rest1133270",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}

]

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} 
        />))}
      </div>

    </div>
  );
};

const AppLayout = () => {
  return (
  
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(<AppLayout/>);

