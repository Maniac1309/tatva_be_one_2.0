# TatvaBeOne 2.0

TatvaBeOne 2.0 is a personalized wellness platform that helps users discover their unique wellness DNA and build healthier habits through gamified self-improvement experiences.

The platform combines interactive quizzes, virtual companions, and progress tracking to create an engaging wellness journey tailored to each user.

## Features

- **Wellness DNA Quiz** – Determines a user's wellness profile through an interactive questionnaire.
- **Personalized User Profiles** – Stores user progress, achievements, and wellness journey.
- **Virtual Wellness Pets** – Companion system that evolves as the user progresses.
- **Daily Wellness Activities** – Encourages consistent healthy habits.
- **Progress Tracking Dashboard** – Visualizes user improvement over time.
- **Achievement System** – Gamified milestones to motivate users.

## Tech Stack

**Frontend**
- React.js
- TypeScript
- Tailwind CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Authentication**
- JWT (JSON Web Tokens)

## Project Structure

```
tatvabeone/
├── client/                 # React frontend
├── server/                 # Node.js backend
├── shared/                 # Shared types and utilities
└── docs/                   # Documentation
```

## Project Status

This project is currently under development.  
Features and improvements are actively being added.

## Future Improvements

- Add AI-based wellness recommendations
- Improve gamification mechanics
- Deploy the platform on cloud infrastructure
- Add mobile responsive enhancements

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/tatvabeone.git
cd tatvabeone
```

2. Install dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables
```bash
# In server directory
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development servers
```bash
# Start backend server
cd server
npm run dev

# Start frontend server
cd ../client
npm run dev
```

## Hackathon

This project was developed during the BuildFest Hackathon sponsored by TatvaBeOne.

The goal was to create an engaging wellness platform that helps users discover their wellness DNA and improve their lifestyle through gamified experiences.
