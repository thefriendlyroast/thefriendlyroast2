/* ============================================================
   the friendly roast — coffee data
   THIS IS THE ONLY FILE YOU EDIT to change the website's coffees.

   HOW TO ADD A NEW COFFEE (when a new coffee starts roasting):
     1. Add the new coffee's painting to the images folder
        (e.g. images/newcoffee.jpg).
     2. Add a new coffee object at the TOP of the list below,
        with "status": "roasting".
     3. In the OLD coffee's object, change "status" to "archive"
        and update its "availability" to the full range,
        e.g. "July 2026 - March 2027".

   Everything else updates automatically: clicking the bag opens
   the new current coffee, and the archive shows the old one.
   ============================================================ */

var COFFEES = [

  {
    status: "roasting",
    name: "Mukunga",
    image: "images/mukunga.jpg",
    availability: "July 2026 - present",
    origin: "Mukunga Estate, Kiambu County, Kenya",
    altitude: "1850 M.A.S.L.",
    varietal: "Ruiru and SL28",
    process: "Washed",
    description: [
      "The estate lies between 1,800 and 1,850 meters above sea level, in the coffee-tea transition zone. Soils are red volcanic and well-drained, with reliable bimodal rainfall exceeding 1,400 mm per year (long rains March-May, short rains October-December). The estate was started in 1970, and approximately 90% of the trees are older varieties (Ruiru), 10% newer plantings (SL28). The lot is processed as a Washed coffee.",
      "Harvest occurs in October to January. Selectively handpicked cherries are de-pulped, then dry-fermented for 24 hours in open tanks before being washed, and submerged in clean water for another 24 hours. The wet parchment is then dried on raised beds for 10 to 18 days, depending on the weather."
    ]
  },

  {
    status: "archive",
    name: "Las Perlitas",
    image: "images/las-perlitas.jpg",
    availability: "May 2025 - July 2026",
    origin: "Smallholder farms in Huila, Colombia",
    altitude: "1600-2000 M.A.S.L.",
    varietal: "Pink Bourbon",
    process: "Washed",
    description: [
      "In Spanish, Las Perlitas means \u201cLittle Pearls\u201d and throughout the harvest, it\u2019s quite common that small-holders in Colombia produce lots that aren\u2019t large enough to be exported on their own. However, the quality is often just as good (or better) than samples received from larger lots. A dutch coffee importer \"The Coffee Quest\" holds coffee competitions in the region. They find smallholders with high quality, bundle them together and sell them to dutch roasters. With the amount of Pink Bourbon being planted in Huila these days, these lots are often very heavily weighted with that variety!",
      "Side note; I have spent some weeks in Huila and found it enchanting beyond the coffee seeing the monolithic head statues carved in volcanic rock."
    ]
  },

  {
    status: "archive",
    name: "Nensebo",
    image: "images/nensebo.jpg",
    availability: "Nov 2024 - May 2025",
    origin: "Nensebo, Wucheru, Ethiopia",
    altitude: "1800-2000 M.A.S.L.",
    varietal: "Heirloom",
    process: "Natural",
    description: [
      "This lot is grown by a farmer called Kasim, a very young farmer based in Nensebo in West Arsi.",
      "Nensebo is in the Woreda (Amharic word for a district of Ethiopia) called Wucheru - a high altitude area known for good quality coffee.",
      "The beans are Enat Buna Wucheru (Amharic meaning native coffee plant to Wucheru - the coffee industry term is heirloom) and are from the December 2023 harvest.",
      "These beans were imported by Bette Buna, who take pride in transparency, and have shared the coordinates of the farm 6.690724, 39.214399.",
      "We recommend this bean as a pour over."
    ]
  },

  {
    status: "archive",
    name: "Taferi Kela",
    image: "images/taferi-kela.jpg",
    availability: "Sep 2024 - Jan 2025",
    origin: "Taferi Kela, Sidama, Ethiopia",
    altitude: "2100 M.A.S.L.",
    varietal: "Heirloom",
    process: "Washed",
    description: [
      "The beans, harvested in December 2023, are a mix of 74112 & Enat Buna D\u2019ara Otilicho grown at 2100 masl. They were grown by Bette Buna on their Taferi Kela farm, this is how they describe the coffee:",
      "From Addis Ababa south is the city Hawassa. After a short coffee stop near lake Hawassa, continue your road south. Around the first curve you enter the landscape of Sidama. From lowlands at 1300 masl to green highlands at 2.500 masl. Covered by tropical fruits trees, you can identify the first coffee trees 5 minutes from Hawassa.",
      "In the city Yirgalem you will continue either your road to the more famous Sidamo Bensa coffee zones or follow the road to the green highlands in the direction of Yirgacheffe region. The road curves a bit and after 8 kilometers of gravel road from the main asphalt you will find the coffee community of Taferi Kela.",
      "A woreda typed by its majority of Hadicho people, mixed with refugees that were displaced over hundred years ago to this region. With a local population of 450.000 people with more than 50% under the age of 25, the Taferi Kela coffee community belongs to one of the poorest of the coffee zones in Ethiopia.",
      "Surrounded by green mountain tops and just two mountains away from the region of Yirgacheffe Bette Buna now grow and process coffee in many ways. Although their farm is located on an altitude between 1850 and 2000 meter above sea level, during the day the sun can get pretty strong.",
      "This cup has a classic profile of Ethiopian Sidama washed coffee with great balance and notes of marzipan, bergamot and rooibos."
    ]
  },

  {
    status: "archive",
    name: "Megadu",
    image: "images/megadu.jpg",
    availability: "July 2024 - Sep 2024",
    origin: "Megadu, Guij, Ethiopia",
    altitude: "1800 - 2200 M.A.S.L.",
    varietal: "Heirloom",
    process: "Extended Natural",
    description: [
      "This coffee comes from Bette Buna, more than just an exporter or importer. When Hester is not busy trying to sell, export or import her coffees, she actually works her a** off with her boots in the mud on the fields where she lives with her family in Ethiopia.",
      "The cherries are a mix of 74112, 74110 & Enat Buna Megadu. Enat Buna is a term that means the coffee trees that have been growing there for a long time. Most coffee growing regions have planted specific varieties at some point in the last few hundred years or less. It\u2019s less common in Ethiopia.",
      "The cherries come from Dawit & Hester\u2019s farm at a high altitude 1800-2200MASL. They are processed extended natural; the ripe cherries are picked, placed on raised beds and dried for 8 weeks in shade, except for the first 3 days where they are dried more intensively, placed out in the high sun. This quickly reduces the moisture content to avoid over fermentation and the formation of mould.",
      "For the remainder of the drying over those 8 weeks there is a lot of careful management of moisture and shade, this is managed by stacking the cherries to capture moisture and raking them to release it, as well as using different levels of shade cover. It is a laborious process that involves a lot of supervision.",
      "A very beautiful and subtle coffee. The delicate flavour stretches evenly throughout the extraction. We recommend a higher water to coffee ratio than usual, 360g water to 20g coffee. If you run more water through it you will find that the last extraction tranche remains sweet and smooth."
    ]
  },

  {
    status: "archive",
    name: "Gloria",
    image: "images/gloria.jpg",
    availability: "Mar 2024 - July 2024",
    origin: "Sakami, Trans-Nzoia County, Kenya",
    altitude: "1800 M.A.S.L.",
    varietal: "Ruiru 11, Batian, SL28, K7",
    process: "Washed",
    description: [
      "We drink it 1-4 weeks after roast date",
      "Gloria gave up her career as a beauty expert, came back to her hometown and decided to dedicate her life solely to coffee. She had several goals: to offer great quality coffee, bring about prosperity in the region, nourish an abundant agroforestry system and change certain paradigms. Being that the North Rift Valley (The Bread Basket) is, since colonial times, a region recognized mainly for maize, Gloria also wanted to make the region recognized for coffee.",
      "The coffee growing conditions \u2013the wind, the altitude, and the land\u2013 are near perfect. So when she and her husband Jarmo bought their farm in Trans Nzoia County, they were pleasantly surprised to discover they stood on one of the oldest coffee estates in the region.",
      "They named their coffee estate Sakami, inspired by their daughters\u2019 names: Sheila, Saar, and Nakami.",
      "Today, Sakami Ranches Ltd. is a trademark. Coffee grows intermingled with macadamia, avocado, dairy, and vegetables.",
      "Her coffee is reaching exciting corners of the world, and with it, the reputation of Kenya and women in coffee positively spread. She works very closely with the farmers, encouraging them to grow their own trees and taste their coffee. \u201cMost farmers in the region didn\u2019t even know how their own coffee tasted,\u201d says Gloria, \u201cand that\u2019s one of the first things I did when we started working together.\u201d",
      "We bought small quantities of the natural and washed process coffees that Gloria grew and processed. We find it complex, the flavours evolve in the mouth and the cup."
    ]
  },

  {
    status: "archive",
    name: "Don Mayo",
    image: "images/don-mayo.jpg",
    availability: "Nov 2023 - Mar 2024",
    origin: "La Ladera, Tarrazu, Costa Rica",
    altitude: "1850 M.A.S.L.",
    varietal: "Catuai",
    process: "Anoxic Natural",
    description: [
      "We like it most at 2-4 weeks after roast date.",
      "This lot of Catuai coffee underwent Anaerobic Natural processing at Don Mayo Micromill. Coffee cherries were first washed before being sealed into airtight tanks where they were fermented for 36 hours. The fermented cherries were then dried in the mill\u2019s slow drying area for eight days before being finished on drying patios for 10 or more days.",
      "We bought this coffee from a German importer, Ally Coffee, at a competitive price. It\u2019s a 2022 crop that was vacuum sealed, from the flavours we think very little oxidation occurred.",
      "fun fact: anoxic is actual the correct term of what many (including us) call anaerobic. Because fermentation itself is always anaerobic, meaning it occurs under conditions without oxygen. However, if the environment is changed, it will result in a different speed/kind of fermentation. The environment being without oxygen is called anoxic, not anaerobic.",
      "Both terms are fine but we choose to say anoxic because it fits better on the label."
    ]
  }

];
