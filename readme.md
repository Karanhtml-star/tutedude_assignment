# Service Booking Web App

A responsive service booking web application built using HTML, CSS, and JavaScript. Users can browse available laundry services, add services to a cart, view the total cost, and submit a booking request.

## Features

### Service Browser

* Displays services one at a time in a card layout.
* Shows service image, name, and price.
* "Skip" button allows users to browse through available services.
* Automatically loops back to the first service after reaching the last one.

### Add to Cart

* Add selected services to the cart using the "Add Item" button.
* Prevents duplicate services from being added.
* Automatically updates the cart contents.
* Displays service serial number, name, and price.

### Cart Management

* Shows an empty state when no services are added.
* Hides the empty state once items are added.
* Calculates and displays the total cost of all selected services.
* Updates dynamically whenever services are added.

### Booking Form

* Collects:

  * Full Name
  * Email Address
  * Phone Number
* Uses placeholders to guide users while entering data.

### Booking Validation

* Displays a warning message when attempting to book without any selected services.
* Shows a success message when at least one service has been added to the cart.

### User Interface

* Clean two-column layout.
* Responsive design for smaller screens.
* Visual feedback using colored information icons:

  * Blue: General information
  * Red: Warning
  * Green: Success

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

## Project Structure

```text
project/
│
├── index.html
├── style.css
├── script.js
│
├── img.jpg
├── img1.jpg
├── img2.jpg
├── img3.jpg
├── img4.jpg
├── img5.jpg
│
├── add-circle.svg
├── remove.svg
├── i.svg
├── i-red.svg
├── i-green.svg
├── i-blue.svg
└── logOut.svg
```

## Future Improvements

* Remove items from cart.
* Store cart data using Local Storage.
* Form validation for email and phone number.
* Backend integration for real booking requests.
* User authentication and login system.
* Service search and filtering.
* Booking history dashboard.

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a browser.
4. Browse services, add them to the cart, and test the booking workflow.

## Author

Karan Singh Rawat
Computer Science Student
Gurukul Kangri University
