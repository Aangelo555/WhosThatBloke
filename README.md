Who's That Bloke?

A football quiz game where you identify Manchester United players from their photos. Type the player's full name, get instant feedback, and see your final score at the end of 8 rounds.

Live demo: Coming soon

Welcome screen

Features
8 rounds of guessing players from their photos
Instant feedback after every guess, showing the correct name
Live score and progress tracking
Full-name answer checking that ignores capital letters and extra spaces
Final score screen with a message based on how well you did
Play again without refreshing the page
Responsive layout that works on desktop and mobile
Tech Stack
React for the UI and game logic
Vite for the development setup and build
CSS for styling (no UI libraries)
How It Works

The app is split into 3 screens, each in its own component:

Component	What it does
WelcomeScreen	Start page with the title and Start button
GameScreen	Shows each player photo, handles guesses and keeps the score
ResultsScreen	Shows the final score and a Play Again button

App.jsx keeps track of which screen is showing using useState, and switches between them. The score is passed from GameScreen back up to App when the game ends, then down to ResultsScreen as a prop.

Player data (names and photo paths) is kept in a separate file, src/data/players.js, so adding or swapping players doesn't need any changes to the game code.

Project Structure
src/
├── components/
│   ├── WelcomeScreen.jsx
│   ├── GameScreen.jsx
│   └── ResultsScreen.jsx
├── data/
│   └── players.js
├── App.jsx
├── App.css
└── main.jsx
public/
└── players/        player photos
Run It Locally
bash
git clone https://github.com/Aangelo555/WhosThatBloke.git
cd WhosThatBloke
npm install
npm run dev

Then open http://localhost:5173 in your browser.

What I Learned
Building a React app from scratch with Vite
Splitting a UI into reusable components
Managing state with useState and passing data between components with props
Handling user input and checking answers
Conditional rendering to switch between screens
Future Improvements
Blur effect on the photo that clears up with each wrong guess
Timer for each round
Difficulty modes (current squad vs club legends)
Online leaderboard with a backend and database
Shuffle the player order each game
Credits

Player photos are used for educational and portfolio purposes only. All rights belong to their original owners.