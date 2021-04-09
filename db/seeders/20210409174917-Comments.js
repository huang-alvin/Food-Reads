'use strict';

const { Book, Review, User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const reviewsObj = {
      3: [
        `I ordered this book thinking it would be some lightened up recipes that are healthy.Most of the book is about a lifestyle change, and weird ultraviolet saunas.Maybe 1 out of 3 of the book is actually recipes and none that I would actually want to make(Quinoa pancakes ? !).It’s not what I was looking for`
        , `I’m really disappointed in this book.I thought I was purchasing a healthy cookbook with delicious recipes, but instead I got a book about what we should and shouldn’t eat.....but then the following recipes include some of the “do not eat” foods.Confused and underwhelmed! The recipes are not creative and some just don’t look very good.Sorry, but it’s a no for me.`
        , `I have all of Giada's cookbooks, and was looking forward to this one. I think she's run out of recipes to write about.Just another change your lifestyle book with pages of planned weekly menus.Not interested.`
        , `Recipes are great and love the batching and meal planning.Overall is a great book and I'm happy I pre-ordered it!`
        , `I really wanted to like this book so much, but returned it. I think it really is for a beginner cook. Recipes were just very basic which was the point I guess. Would make a great starter cookbook.`
        , `They are some things that are better unchange. When I pay for a book, I really love to have pictures with the recipes. Something is missing, I regret my purchase. Having a picture for the cream cheese celery (super simple...) but no picture for the eggplant dip, the grille tuna salad, the curry stew.... I am at page 65 and ready feel like I won't reach out for this book often.`
        , `The recipes are simple BUT most of the ingredients are not every day items in your pantry. You'd need to read the recipe and plan a shopping trip to the store. There are better cook's books out there.`
      ],
      4: [
        `I love most of it! Yummy and fairly easy recipes. However the recipe for the one pictured doesn't have all the instructions.`
        , `Love the book. But I also have page 78 missing. So weird!!.`
        , `I love Katie Biegel. The recipes in this book look amazing and not complicated as the title implies. Beautifully photographed also. That said, I feel like every entree requires cooking in a skillet, which invariably trips my smoke alarm, so I can’t make a lot of these recipes as I live in an apartment. I also don’t have a grill. I wish she had included some alternative cooking options.`
        ,
      ],
      5: [
        `Full disclosure, I have always been a huge fan of Giada’s show & cookbooks. I always found her recipes easy to make & her demeanor so kind and relatable. As a woman also in Giada’s age group who has suffered from some autoimmune scares, hormones changing & also dealing with stress - this book addresses lifestyle changes incorporated with delicious recipes that are wonderful! Food is love but food is also medicine. If you are someone looking to feel better and eat deliciously, this book is for you! Giada hit this one out of the park. Gorgeous photos in this as well which are a must for me in a cookbook. This book was worth the wait.`,
        `I'm loving this book so far, but it's definitely a wellness/lifestyle book versus a cookbook. You won't get a lot of inspired culinary creations, but you will get a wonderful collection of recipes geared at making you feel really good. Intuitive eating has taught me that filling up on nutrient dense foods really does impact how you feel, and it doesn't mean you can't still eat everything else you love. I have every single one of Giada's cookbooks and I still plan to try and cook my way through all of them!! But this new book offers some great ideas for nutrient packed meals and recipes. Although the recipes are simple, I appreciate having someone else put meal ideas together for me. Even simple recipes feel inspiring since I don't always have a creative mind when it comes to cooking tasty food. I've enjoyed what I've made so far and definitely recommend this book for easy and healthful recipes. If you know what you're buying, you won't be disappointed!`,
        `Lovely book, I own all of her cookbooks and I love that this one has a lot of advices in how to stay healthy. With how the world is today and the obesity rates, I think is great she gives advices about balance and healthy food along with exercise and meditation.`,
        `These recipes look great and seem very simple to make. For those complaining about the pasta recipe missing instructions on page 78: Katie was on Good Morning America and made that exact dish, and they posted the recipe. Just google it! It was never addressed but it makes me think she’s aware of the problem and chose that specific recipe to make it available!`,
        `This is a great book for both the novice and the seasoned cook. The recipes are creative, yet practical in that they don't have hard-to-find ingredients or take hours to make. This is a great addition to any cook's library. I can't remember a time when I looked through a new cookbook and literally wanted to make EVERY SINGLE RECIPE in it. And I intend to do exactly that. I highly recommend this book to anyone with a love of good food and easy entertaining. This one hits a home run.`,
        `A really great cookbook for every day cooking. I already made one recipe for dinner and it was so simple and delicious. The ingredients are all pantry items yet the recipes remain elegant. I already have tons of these pages marked and can see this cookbook coming out again and again.`
      ]
    }

    const books = await Book.findAll({
      include: Review,
    })

    const comments = [];

    books.forEach(book => {

      for(let i=0; i<3; i++) {
        const review = book.Reviews[i]

        const rating = review.rating;
        const reviewsArr = reviewsObj[rating];
        const reviewIdx = review.id % reviewsArr.length

        const oneComment = {
          userId: review.userId,
          bookId: book.id,
          comment: reviewsArr[reviewIdx],
          createdAt: review.createdAt,
          updatedAt: new Date(),
        };
        comments.push(oneComment)
      }
    });


    return queryInterface.bulkInsert('Comments', comments, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
