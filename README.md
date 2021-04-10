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
Food Reads was built using Express for the server with a postgreSQL database. The back end structure utilizes RESTful convention and handles user requests through AJAX. Food Reads is session based and uses BCrypt to safely store user passwords and verify login credentials. 
### Front End
The front end was built using Pug and JavaScript. 
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
##### Session
Sessions are stored server side using Sequelize.js. For actions that require authorization, the server verifies that a cookie with a matching user id as the user exists in the storage. Upon verification that a session does exist for that user, the user is then allowed to perform CRUD operations. If no such session exists in the storage, then user is redirected to the login page.
##### AJAX
When the user makes a request, a fetch containing form data is made to our API. If the request is valid, changes are made in the database to reflect the user request. After completion of the user request, a script on the user side updates the browser to display these changes without refreshing the page or redirecting the user. 

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



