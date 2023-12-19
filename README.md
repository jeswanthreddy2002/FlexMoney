**Description**
The Admission Form web application enables users to enroll for admission by providing their personal details such as name, email, age (restricted between 18 to 65), and preferred batch timing among four available slots: 6-7AM, 7-8AM, 8-9AM, and 5-6PM. Upon enrollment, users are directed to a payment page to complete the admission process.
### Logic

#### Problem

- There are a total of 4 batches a day, namely 6-7AM, 7-8AM, 8-9AM, and 5-6PM.
- The participants can choose any batch in a month and can move to any other batch next month. 
- Participants can shift from one batch to another in different months, but in the same month, they need to be in the same batch.

#### Solution Implemented

- I have used the **Signup** and **Login** pages to implement the functionality.
- When a user signs up, their data is stored in the MongoDB database along with the signup date.
  - While making the payment, if the difference between the user's enrolled date and the signup date is less than 30 days (within a month), the option to change the batch preference will be disabled.
- If the user was already enrolled and logs in again:
  - The system checks the difference between the previously enrolled date and the current date. If it's greater than 30 days, the batch preference change button will be made available.
- Upon successful payment:
  - The enrollment date will be updated in the database. Any changes in batch preferences will also be updated.
- For managing user enrollment date retrieval, updating, and batch preference changes, I uniquely identify users in the database using their **Email ID**.
 

- Features
  - Enrollment form for admission with user details.
  - Batch preference selection for available time slots.
  - Login and signup pages for user authentication.
  - Dynamic display of change batch preference button based on difference between enrollment date and current date.
  - Payment gateway integration for admission fee processing.
  - MongoDB integration to store user data securely and to update the Batch preference.
  - Used EmailId of the users to uniquely identify the user to update the Batch preference.
- Technologies Used
  - HTML
  - CSS
  - React Js
  - Node Js
  - Express Js
  - MongoDB
  - REST API
