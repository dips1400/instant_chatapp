#Chat Application using InstantDB and IndexedDB

The whole app is built upon using instant DB, indexed DB, and Redux where instant db provides database you can subscribe to directly in the browser, indexed db persistently store data inside a user's browser, and redux helps to access data in any component. 

#This project implements a basic chat application with features like:

User registration and login
Contact list
Real-time message exchange
Local message storage using IndexedDB (for offline support)
State management using Redux

#Technologies Used:

React
Redux
IndexedDB
InstantDB

# Getting Started with Create React App

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Clone the repository: git clone <repository_url>
Navigate to the project directory: cd chat-app
Install dependencies: npm install
Run application: npm start

# Key features of this app are:

**User Authentication**: Allows users to register and log in.
**Contact List:** Displays a list of contacts.
**Offline Support:** It utilizes IndexedDB for local message storage, providing offline functionality.
**State Management:** Redux for efficient and organized state management.
**User Interface:** Includes a user-friendly interface with chat window, message input, and contact list.
**Use of custom hook:** Developed using custom hook for instant db and indexed db

# Further Improvements:

**Error Handling:** Implement robust error handling for network requests, database operations, and other potential issues.
**User Profiles:** Enhance user profiles with additional information (e.g.status).
**Group Chats:** Add support for group chats.
**Read Receipts:** Implement read receipts to indicate when messages have been read.
**Typing Indicators:** Display typing indicators to show when other users are typing.
**Mobile Support:** Optimize the application for mobile devices.
**Real-time Chat:** Enables real-time message exchange between users using WebSockets.

# Color theory

Primary : #fff,
Secondary (background) : rgba(67, 52, 117, 0.79)
Ternary (background) : rgba(64, 59, 127, 0.814)

