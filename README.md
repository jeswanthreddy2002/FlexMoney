**Description**
The Admission Form web application enables users to enroll for admission by providing their personal details such as name, email, age (restricted between 18 to 65), and preferred batch timing among four available slots: 6-7AM, 7-8AM, 8-9AM, and 5-6PM. Upon enrollment, users are directed to a payment page to complete the admission process.
- **Logic**
  - **Problem** There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The participants can choose any batch in a month and can move to any other batch next month. I.e. participants can shift from one batch to another in different months but in the same month, they need to be in the same batch.
  - **solution Implimented**
        - I have used the Signup and the Login pages to implement the functionality. If any user signup his data is stored inside the Mongodb database along with the Date. 
          While making the payment the difference between the user enrolled date and the signup date is less than 30 days (within a month) hence the option to change the 
          batch preference will be disabled.
        - I the user was already enrolled he will directly login and now again the difference between the previously enrolled date and the current date is checked and if >30 
          days then the Batch preference change button will be made available.
        - Upon making the payment the Enrollment date will be updated inside the database and if any Batch preference changes are there they also will be updated in the 
          database.
        - For the user Enrollment Date retrieval, updation, and Batch preference updation I have used the "EmaiId" of the user to uniquely identify the user inside the 
          database. 

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
