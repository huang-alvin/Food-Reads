# Food-Reads
Food Reads is a web app that connects food lovers by allowing them to review cook books.
### Home Page 
![image of home](https://github.com/huang-alvin/Food-Reads/blob/main/resources/home-page.png)
### Splash Page
![image of splash](https://github.com/huang-alvin/Food-Reads/blob/main/resources/splash-page.png)
### Bookshelf
![image of bookshelf](https://github.com/huang-alvin/Food-Reads/blob/main/resources/bookshelf.png)
### Confirmation to delete book from bookshelf
![image of book deletion confirmation](https://github.com/huang-alvin/Food-Reads/blob/main/resources/delete-book.png)
### Book page
![image of book deletion confirmation](https://github.com/huang-alvin/Food-Reads/blob/main/resources/book.png)
# Structure
### Back End
Food Reads was built using Express for the server with a postgreSQL database. The back end structure utilizes RESTful convention and handles user requests through our API and modifies the browser through AJAX. Food Reads is session based and uses BCrypt to safely store user passwords and verify login credentials. 
### Front End
The front end was built using Pug to render the pages with JavaScript and AJAX to make the pages dynamic.
### List of Technologies
* Express
* BCrypt
* PostgreSQL
* Heroku
* Pug

### Core Features
* Add/ delete shelves
* Add/delete book from shelves
* Add comments and reviews to books
##### User Authorization
User authentication is handled in JavaScript using BCrypt to hash passwords for storage. To authenticate users, the submitted password is hashed and then compared to the hashed password stored in the database.
````
router.post(
  "/",
  loginValidator,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const validationErrors = validationResult(req);

    let errors = [];
    if (validationErrors.isEmpty()) {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        validPassword = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );
        if (validPassword) {
          loginUser(req, res, user);
          return req.session.save((err) => {
            if (err) next(err);
            else {
              return res.redirect("/home");
            }
          });
        }
      }
````
In order for the user to log in, we first check to see if the inputs are valid, with invalid inputs redirecting the user to the login page where the validation errors will be made visible. Then, we find the user in the database based on their email. If we are able to find a user, then we hash their input password and compare it to the hashed password stored in the server. Finally, if the hashed input password matches the stored hashed password, the user is logged in with their session persisted and redirected to home page.
##### Session
Sessions are stored server side using Sequelize.js. For actions that require authorization, the server verifies that a cookie with a matching user id as the user exists in the storage. Upon verification that a session does exist for that user, the user is then allowed to perform CRUD operations. If no such session exists in the storage, then user is redirected to the login page.
##### AJAX
When the user makes a request, a fetch containing form data is made to our API. If the request is valid, changes are made in the database to reflect the user request. After completion of the user request, a script on the user side updates the browser to display these changes without refreshing the page or redirecting the user. 

````
if (document.querySelector("#addToShelf")) {
  document
    .querySelector("#addToShelf")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      const form = new FormData(document.querySelector("#shelf-form"));
      const shelfId = form.get("shelfId");
      const bookId = form.get("bookId");

      const res = await fetch("https://food-reads.herokuapp.com/shelf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shelfId, bookId }),
      });

      if (res.ok) {
        const shelfAdd = document.querySelector(".shelf-add-div");
        shelfAdd.innerText = "This book is now in your shelf";
      }
    });
}
````
This script runs on the client end and grabs the form data and sends it to the server. By not submitting the form, the page does not need to be refreshed to display the updates. Upon a successful response, changes are made only to the parts of the window document that need updating. One thing we had to take into consideration was adding a conditional statement to verify that the submit button existed on the web page. Without that conditional statement, the script would hit an error on pages where the button had been replaced by text to signify that the book had been added to the user shelf and fail to execute.
#### To Do
Allow users to: 
1. update profile information such as their email
2. update ratings and comments
3. delete ratings and comments
4. add a new book to the site
5. reply to other comments
6. upvote/downvote comments
7. perform searches
8. tags



