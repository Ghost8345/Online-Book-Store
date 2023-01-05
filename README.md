# Online Book Store
---
![alt text]()
Online Book Store is a simple online bookstore implementation using Angular, Springboot, and MySQL JDBC as a project for Database Systems CSE 371, University of Alexandria.
## Features
There are two types of system users: **Normal User** and **Manager**. Each can do the following:
  - Login/Register on the site.
  - View Books.
  - Search for books by different categories.
  - Adding books to a cart.
  - Checkout and buy books in your cart.
---
In addition to what user can do, a **manager** can do the following:
  - Add books to the system.
  - Edit books in the system.
  - Add publishers to the system.
  - Promote users.
  - View urgent book orders.
  - Show site statistics.

---
## How To Run
### Front-End
Required to have any release of [Node.js](https://nodejs.org/en/download/) and [Angular](https://angular.io/quick-start) (would be preferrable to have the latest releases).\
Run the following lines in the frontend directory:\
`npm install`\
`ng serve`
### Front-End
Required to have the latest release of [Java](https://www.java.com/en/download/).\
Run `LibrarySystemApplication.java` on any IDE that runs java.
### Database
Create a MySQL workbench connection with the specified details in `application.properties` and run the SQL script in `library_schema_ddl.sql`.
