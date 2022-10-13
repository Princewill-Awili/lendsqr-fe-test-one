 ![logo](./src/assets/lendsqr.png)

# Lendsqr Admin Dashboard

This project was created using React and SASS.


In the project directory, you can run:
### `npm start`

### DESCRIPTION
This is an interactive admin dashboard template to handle Lendsqr users information. 
It enables the admin to filter through lists of users.

## GENERAL USAGE

### LOGGING IN
Log into the app using an email and password of your choice. 
PLEASE NOTE: ** Email and Password fields should not be left blank. **

### TABLE
The table is easy to use. It shows several key information about each user in the columns.
Information such as
- Organization
- Username
- Email
- Phone Number
- Date joined
- Status

### FILTER FORM
Clicking on any of the column headers or filter icon ![filter icon](./src/assets/arrowDown.png) opens up a filter form that filters
users by the above mentioned parameters. Currently users can be filtered by orgnization,username,email, phone number and by date joined.
After filling in the desired fields clicking the "FILTER" button displays all possible filter results on the table.
Clicking the "RESET" button clears out the previously filtered results and returns the full list of users.

### USER DETAILS PAGE
Clicking on the dotted menu icon ![menu icon](./src/assets/more.svg) opens up a pop up menu. Clicking on the view 
details tab will take you to the User details page of that particular user.This page displays all the necessary information about the user. You can return to the previous page by clicking the "<--Back to users" button.

### LOGGING OUT
Logging out of the dashboard is easy. Click on the drop down arrow ![dropDownArrow](./src/assets/SidebarTopIcons/arrow.png).This returns you to the log in page.

## PROJECT DIRECTORY STRUCTURE

```
lendsqr
|    README.md
|    package.json
|    gitignore
|    package-lock.json
|    
|____node_modules
|            
|____Public
|        index.html
|        webfontkit
|
|____src
     |____App.js
     |____index.js
     |____main.scss
     |____assets...
     |
     |____utils
     |       |
     |       context.js
     |       dummyData.js
     |         
     | 
     |
     |____components
     |              |
     |              Filter
     |                 |   Filter.jsx
     |                 |   filter.css
     |                 |
     |                 InfoTabs
     |                 |   InfoTabs.jsx
     |                 |   infotab.scss
     |                 |
     |                 Main
     |                 |   Main.jsx
     |                 |  
     |                 |
     |                 Navbar
     |                 |   Navbar.jsx
     |                 |   navbar.scss
     |                 |
     |                 Sidebar
     |                 |   Sidebar.jsx
     |                 |   sidebar.scss
     |                 |
     |                 UsersTable
     |                 |   UsersTable.jsx
     |                 |   usersTable.css
     |                 |
     |                 UserSubSections
     |                     UserSubSections.jsx
     |                     usersubsections.css
     |                 
     |______pages
                |
                Login
                |   Login.jsx
                |   login.scss
                |
                Users
                |    Users.jsx
                |    users.scss
                |
                UserDetails
                    UserDetails.jsx
                    userdetails.scss
                    
```
                
### AUTHOR
Awili Princewill (c)2022

Cheers :) :) :)
