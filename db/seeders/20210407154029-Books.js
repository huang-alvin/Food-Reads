"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Books",
      [
        {
          name: "#EATMEATLESS: Good for Animals, the Earth & All",
          author: "Jane Goodall",
          publisher: "Weldon Owen ",
          date_published: new Date("2021-03-23"),
          pages: "168",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/61s-40ILLmL.jpg",
          description:
            "Every day, slowly but surely, we the people are helping to change the world. For the health of humankind, the environment, and the animals that inhabit it, the Jane Goodall Institute presents this collection of recipes to illustrate the how and why of plant-based eating. Crafted especially for curious consumers looking to incorporate healthier dietary practices, those interested in environmental sustainability and animal welfare, and for fans of Jane Goodalls work, this collection of 80 vegan, accessible recipes gives home cooks the tools they need to take charge of their diet and take advantage of their own ability to make a difference in their communities and beyond. Along with colorful food photography, quotes from Dr. Goodall interspersed throughout transform this plant-based staple into an inspiring guide to reclaiming our broken food system: for the environment, for the animals, and for ourselves.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "A Table: Recipes for Cooking and Eating the French Way",
          author: "Rebekah Peppler",
          publisher: "Chronicle Books; Illustrated edition ",
          date_published: new Date("2021-04-06"),
          pages: "304",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51lujAx5QmL.jpg",
          description:
            "REBEKAH PEPPLER is a Paris-based food writer, stylist, and author. She is the author of the James Beard Award-nominated Apritif: Cocktail Hour the French Way and Honey, a Short Stack Edition. She is a regular contributor to the New York Times. Her recipes and food writing appear widely, including in Vanity Fair, Bon Apptit, Real Simple, Food Network, and more. When she's not working, you can find Rebekah cooking, eating, and drinking with friends in the 18th arrondissement.\n" +
            "\n" +
            "Joann Pai is a food and travel photographer based in Paris. Her work has been featured in esteemed publications such as Saveur magazine, Cond Nast Traveler, and the New York Times.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "At Home in the Kitchen: Simple Recipes from a Chef's Night Off [A Cookbook]",
          author: "David Kinch",
          publisher: "Ten Speed Press ",
          date_published: new Date("2021-03-23"),
          pages: "304",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51Aa8OK2LGL.jpg",
          description:
            "David Kinch is the internationally recognized chef and co-owner of Manresa, Manresa Bread, The Bywater, and Mentone. Manresa has attained three stars from the MICHELIN Guide (its highest honor), is an esteemed member of the prestigious Relais & Chteaux and Les Grandes Tables du Monde organizations, and is frequently cited as one of the worlds best restaurants. David is consistently acknowledged as a leader in the culinary industry, with his peers voting him into the Top 25 of the Worlds Best Chefs 2020 via Le Chef magazine. David is also the author of the New York Times bestseller Manresa: An Edible Reflection, and he won an Emmy Award for his role in the PBS series The Mind of a Chef. He enjoys spending time outside surfing and sailing along the California coast.\n" +
            "\n" +
            "Devin Fuller is a writer and San Francisco Bay Area native who started her culinary career begging for kitchen shifts at a Hawaiian plate lunch chain while studying anthropology at the University of Oregon. She has been in the restaurant industry ever since, working everywhere from bars and coffee shops to casual restaurants before returning to California to work at Manresa. Partial to both the city and the ocean, she currently lives in San Franciscos Outer Sunset district.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bad Manners: The Official Cookbook: Eat Like You Give a F*ck: A Vegan Cookbook",
          author: "Michelle Davis",
          publisher: "Rodale Books",
          date_published: new Date("2021-02-23"),
          pages: "240",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51WI14sw+zL.jpg",
          description:
            "Bad Manners blew up the Internet back in 2012, when they first began blogging. Their first cookbook was a #1 New York Times bestseller. They are based in Los Angeles, California.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bake from Scratch (Vol 5): Artisan Recipes for the Home Baker (Bake from Scratch, 5)",
          author: "Brian Hart Hoffman",
          publisher: "83 Press ",
          date_published: new Date("2021-03-23"),
          pages: "400",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51kZaWh3VkL.jpg",
          description:
            "Meet the cookbook for bakers, by bakers. This new recipe collection from the brilliant minds behindBake from Scratchmagazine is a triumph of dough and batter.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Forks Over Knives 100 Best Plant-Based Recipes",
          author: "The Editors of Forks Over Knives",
          publisher: "Forks Over Knives ",
          date_published: new Date("2021-01-29"),
          pages: "99",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51vBvdQ-ZZL.jpg",
          description:
            "After five inspiring years of innovative recipes, travel, and the celebration of bakers and cultures worldwide, we bring you this dazzling collection of more that 650 new recipes. From towering layer cakes to simple stir-together brownies, this cookbook offers something for every kind of baker, from novice to expert. Showcasing fresh, seasonal ingredients and celebrating tradition and history this cookbook will provide the ultimate inspiration for baking.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Forks Over Knives Spring 2021",
          author: "The Editors of Forks Over Knives",
          publisher: "Forks Over Knives ",
          date_published: new Date("2021-03-12"),
          pages: "99",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51Pgjbu7Z4L.jpg",
          description:
            "With gorgeous photography accompanying each baked good, youll find a wealth of visual inspiration and step-by-step tutorials to guide you from beginning to bake. All recipes have been tested and retested with the home baker in mind, formulated to be both accessible and exciting. Celebrate the joy of artisanal baking while you master yeasted breads, layer cakes, cookies and more.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "hot for food all day: easy recipes to level up your vegan meals [A Cookbook]",
          author: "Lauren Toyota",
          publisher: "Ten Speed Press ",
          date_published: new Date("2021-03-16"),
          pages: "256",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51x7Y-6Gk2L.jpg",
          description:
            "Lauren Toyotais the author of the bestselling cookbook Vegan Comfort Classics: 101 Recipes to Feed Your Face. Shes been named one of Canadas most influential vegans and has appeared on many national television programs sharing her expertise for making vegan food fast and fun. Laurens channel and blog, hot for food, have amassed millions of views and devoted fans. Lauren is from Toronto, Canada",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "How to Make Anything Gluten-Free: Over 100 recipes for everything from home comforts to fakeaways, cakes to dessert, brunch to bread!",
          author: "Becky Excell",
          publisher: "Quadrille Publishing ",
          date_published: new Date("2021-02-23"),
          pages: "224",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51RrIZpSoBL.jpg",
          description:
            "Are you avoiding gluten but yearn for fresh bread, all your favorite takeaways or a naan bread with your curry? And for your sweet tooth do you crave jam doughnuts, bakery-style cookies and classic cakes?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hungry Girl Fast & Easy: All Natural Recipes in 30 Minutes or Less",
          author: "Lisa Lillien",
          publisher: "St. Martin's Griffin; 1st edition ",
          date_published: new Date("2021-01-12"),
          pages: "384",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51jPoYkoUcL.jpg",
          description:
            "The next cookbook from the #1 New York Times bestselling author behind the Hungry Girl brand!\n" +
            "\n" +
            "Lisa Lillien is back with her fastest and easiest recipes ever -- each one is ready in 30 minutes or less! With full-color photos of every recipe, Hungry Girl Fast & Easy consists of quick and simple meals & snacks made with everyday ingredients. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "It's Always Freezer Season: How to Freeze Like a Chef with 100 Make-Ahead Recipes [A Cookbook]",
          author: "Ashley Christensen",
          publisher: "Ten Speed Press ",
          date_published: new Date("2021-04-06"),
          pages: "272",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51UO5i1-DmL.jpg",
          description:
            'How to Make Anything Gluten-Free is the first cookbook that shows you how to unlock all the food you truly miss eating  but nothing tastes or looks "gluten-free".',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marvel Comics: Cooking with Deadpool",
          author: "Marc Sumerak",
          publisher: "Insight Editions; Illustrated edition ",
          date_published: new Date("2021-02-02"),
          pages: "144",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51nBYoYjKaL.jpg",
          description:
            "Deadpool brings his inimitable style, foul-mouthed humor, and notorious skill with a blade to the kitchen in this hilarious take on a traditional cookbook, featuring classic recipes with a Deadpool spin and a whole lotta chimichangas.\n" +
            "\n" +
            "No super hero takes food quite as seriously as Deadpool. In this gorgeously designed cookbook that paid reviewers have described as glorious and the best cookbook Ive ever read, Deadpool offers his take on a curated collection of epicurean classics. Narrated by the wisecracking super hero (and sexy master chef) himself, this book also incudes recipes inspired by some of his closest friends/enemies (Heres lookin at you, Spidey) and his favorite meals, including chimichangas, tacos, pancakes, and hamburgers with no pickles.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "My Pesach Kitchen",
          author: "Faigy Murray",
          publisher: "Mesorah Publications Ltd. ",
          date_published: new Date("2021-02-25"),
          pages: "288",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51Vh1wcrgQL.jpg",
          description:
            "Becky Excell has spent years developing delicious dishes and sharing them with her followers on Instagram. She is here to show you that a gluten-free life can be exciting and easy, without having to miss out on your favorite foods ever again. Why restrict yourself to the obvious soups, salads and fruit? What you really want are the recipes that you think you can't eat! From proper chicken chow mein to pad thai, doughnuts to lemon drizzle cake, cheesecake to profiteroles, French baguettes to pizza, plus dairy-free, vegan, veggie and low FODMAP options, Becky gives you all the recipes you'll ever need with tips and advice on how to make absolutely anything gluten-free.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plat du Jour: French Dinners Made Easy",
          author: "Susan Herrmann Loomis",
          publisher: "Countryman Press ",
          date_published: new Date("2021-01-12"),
          pages: "352",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51lEUuBjUrL.jpg",
          description:
            "Faigy Murray, a popular recipe developer and food blogger, wants to make sure that this Pesach, your food is spectacular and delicious and you are relaxed and able to enjoy it! In My Pesach Kitchen, she guides you through the process of making, prepping, and cooking for Pesach so it's pressure free for you.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rice: a Savor the South cookbook (Savor the South Cookbooks)",
          author: "Michael W. Twitty",
          publisher: "The University of North Carolina Press ",
          date_published: new Date("2021-03-01"),
          pages: "120",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51EzUI9l-IL.jpg",
          description: `In Rice, culinary historian Michael W. Twitty, who knows so much about Gullah culture, shares the story of the ascent of rice cookery, which has been around for centuries. His unique offerings of Gullah rice recipes, dishes that continue to grace many tables today, reflect the motherland of Sierra Leone and other West African countries."Sallie Ann Robinson, author of Gullah Home Cooking the Daufuskie Way and Sallie Ann Robinson's Kitchen`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spicebox Kitchen: Eat Well and Be Healthy with Globally Inspired, Vegetable-Forward Recipes",
          author: "Linda Shiue MD",
          publisher: "Hachette Go ",
          date_published: new Date("2021-03-16"),
          pages: "352",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51BtC79iN9L.jpg",
          description:
            "Linda Shiue is a physician, chef and founder of a teaching kitchen for patients. She believes that the best medicine is prevention. Her cooking classes showcase seasonal produce, lavishly flavored with spices and fresh herbs. Her food writing has been published widely and she has been interviewed frequently on television and in print. Dr. Shiue has served as faculty at the University of California, San Francisco (UCSF) and Stanford University and serves on the board of the San Francisco-Marin Food Bank. She is a graduate of Brown University, San Francisco Cooking School, UCSF and the kitchen of Michelin-starred restaurant, Mourad, in San Francisco. She also has a Certificate in Plant Based Nutrition from Cornell University.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Arabesque Table: Contemporary Recipes from the Arab World",
          author: "Reem Kassis",
          publisher: "Phaidon Press ",
          date_published: new Date("2021-04-07"),
          pages: "256",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51clhZWjW-L.jpg",
          description:
            "Reem Kassis is a Palestinian writer whose work focuses on the intersection of food with culture, history and politics. You can find some of her writings in The Wall Street Journal, The Washington Post and the LA Times and various academic journals. She is the author of Phaidon's acclaimed cookbook The Palestinian Table, which won the Guild of Food Writers First Book award and a Gourmand World Cookbook award and was a James Beard Best International Cookbook award finalist and NPR Best Book. Her second book, The Arabesque Table is a one-of-a-kind collection of contemporary recipes tracing the rich history of Arab cuisine. She grew up in Jerusalem, then lived in the US, France, Germany, Jordan, and the UK. She now lives in Philadelphia.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Chicken Bible: Say Goodbye to Boring Chicken with 500 Recipes for Easy Dinners, Braises, Wings, Stir-Fries, and So Much More",
          author: "America's Test Kitchen",
          publisher: "America's Test Kitchen ",
          date_published: new Date("2021-02-02"),
          pages: "544",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/61eI7Xv6P3L.jpg",
          description:
            "Poultry enthusiasts unite!\n" +
            "ATK has you covered from the basic to the spectacular with 500 recipes that deliver low-key dinners, game-day favorites, simple sandwiches, special-occasion showstoppers, and beyond.\n" +
            "\n" +
            "You can call chicken a lot of things. Blank canvas, weeknight go-to, lean protein, we've heard it all. But boring? That's where we draw the line. Sure, it might have started to feel a bit redundant. But that's not the chicken's fault. ATK is here with the inspiration you need. It's time those chicken pieces in your freezer got the respect they deserve.\n" +
            "\n" +
            "Chicken is the go-anywhere, eat-with-anything, highly transformable crowd favorite that always fills the bill. Find exactly what you're looking for (and more!) with a wide breadth of themed chapters, including Easy Dinners, Classic Braises, Breaded and Fried, Pasta and Noodles, Savory Pies and Casseroles, and appliance-specific recipes. There's even a dedicated chapter of recipes for cooking for two. And with an introduction detailing how to prep any chicken part, from pounding breasts and preparing cutlets, to whole bird skills like butterflying or breaking down a chicken, you'll be a poultry pro in no time. Cozy up to succulent roast chickens with sauces made from pan drippings, sink your teeth into the crispiest, crunchiest fried chicken you've ever had, try your hand at sous vide for unbelievably moist chicken, or fire up the grill for anything from kebabs to beer can chicken. Feel like wingin' it? Us too. Our favorite is our game-changing Korean Fried Chicken Wings, double-fried so they stay extra-crispy under their blanket of spicy, salty, slightly-sweet sauce. With over 500 recipes, you could eat chicken every night and never tire of it. (And yes, that's a challenge.)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Easy Diabetes Cookbook: Simple, Delicious Recipes to Help You Balance Your Blood Sugars",
          author: "Mary Ellen Phipps",
          publisher: "Page Street Publishing; 1st edition ",
          date_published: new Date("2021-01-26"),
          pages: "152",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51uFfv5UZwL.jpg",
          description:
            "Mary Ellen Phipps is a registered dietitian nutritionist and the founder of Milk & Honey Nutrition. She lives in Texas with her husband and two daughters.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Food of Oaxaca: Recipes and Stories from Mexico's Culinary Capital",
          author: "Alejandro Ruiz",
          publisher: "Knopf ",
          date_published: new Date("2021-03-16"),
          pages: "256",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51YcWMa0pWL.jpg",
          description:
            "ALEJANDRO RUIZ is the chef and owner of the Casa Oaxaca restaurants (El Restaurante, Caf & Restaurante, and the Casa Oaxaca hotel) and Oaxacalifornia, in Oaxaca, Mexico, as well as of Guzina Oaxaca in Mexico City. He is widely known as an ambassador for Oaxacan gastronomy and has represented this celebrated cuisine around the world. He lives in Oaxaca.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Twisted Soul Cookbook: Modern Soul Food with Global Flavors",
          author: "Deborah VanTrece",
          publisher: "Rizzoli ",
          date_published: new Date("2021-03-16"),
          pages: "208",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/81RTFft6u0L.jpg",
          description:
            "Chef Deborah VanTrece opened the acclaimed Twisted Soul Cookhouse and Pours in 2014, and since then, the award-winning soul food restaurant has appeared on numerous Best Of lists, including features in the New York Times, the Atlanta Journal-Constitution, Thrillist, Buzzfeed, Kitchn, and Food & Wine magazine, winning acclaim for her mastery of imported cooking techniques and delicious globally informed cuisine. Chef VanTrece is included in 2020's Tasty Pride: Recipes and Stories from the Queer Food Community; this is her first cookbook.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Trout Water: A Year on the Au Sable",
          author: "Josh Greenberg",
          publisher: "Melville House ",
          date_published: new Date("2021-03-23"),
          pages: "176",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51AgBHl4GJL.jpg",
          description:
            "Josh Greenberg is the owner of the famous Gates Au Sable Lodge, and writes a popular, on-line fishing report that draws as many as 40,000 hits a month. He has contributed to several magazines, including Fly, Rod & Reel and Fly Fisherman. He is the author of Rivers of Sand: Fly Fishing Michigan and the Great Lakes Region.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wild Sweetness: Recipes Inspired by Nature",
          author: "Thalia Ho",
          publisher: "Harper Design ",
          date_published: new Date("2021-03-23"),
          pages: "240",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51Ygxu1peYL.jpg",
          description:
            "From the creator of the award-winning food blog, Butter and Brioche, comes a unique and beautifully designed full-color cookbook that brings wild flavors to desserts as told through the seasons. \n" +
            "\n" +
            "In Wild Sweetness, Thalia Ho captures the essence of the wild, and re-imagines it on the plate. She guides us through a tale of six distinct seasons and the flavors inspired by them: of bright, herbaceous new life in spring, to the aromatic florals that follow, of bursting summer berries, over-ripe fruit, warmth and spice in fall, then ending with winter and its smolder.\n" +
            "\n" +
            "In more than 95 recipes, Thalia opens our eyes and taste buds to a celebration of what the wild has to offera world of sweet escapism, using flavor to heighten our experience of food. Enthralling, unique, and inspired recipes youll want to cook over and over again.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Books", null, {});
  },
};
