# Nexus Anime Database

## Overview
Nexus Anime is a comprehensive anime database web application built with React and Tailwind CSS. It provides users with an intuitive interface to search, explore, and learn about various anime series. The application leverages the Jikan API to fetch detailed information about anime, including episodes, airing status, and more.

## Features

### 🏠 Homepage
- Welcoming landing page with engaging background
- Quick access to search functionality
- Responsive design for all devices

### 🔍 Search Functionality
- Real-time anime search
- Grid layout display of search results
- Each anime card displays:
  - Title
  - Cover image
  - Basic information

### 📺 Anime Details
- Comprehensive information for each anime:
  - Title and synopsis
  - Release year
  - Airing status
  - Episode count
  - Episode list with air dates
- Responsive layout for both desktop and mobile viewing

### 📱 Mobile Responsive
- Fully responsive design
- Optimized for various screen sizes
- Touch-friendly interface

## Technologies Used

- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Routing:** React Router
- **API:** Jikan API (v4)
- **Build Tool:** Vite

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn


## Project Structure

```
nexus-project/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Animecard.jsx   # Anime card component
│   │   └── Navigation.jsx  # Navigation component
│   ├── pages/              # Page components
│   │   ├── Homepage.jsx    # Landing page
│   │   ├── Searchpage.jsx  # Search functionality
│   │   ├── Detailpage.jsx  # Anime details
│   │   └── About.jsx       # About page
│   ├── services/           # API services
│   │   └── jikanApi.js     # Jikan API integration
│   ├── store/              # State management
│   │   └── store.js        # Zustand store
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── public/                # Static assets
└── index.html            # HTML template
```

## API Integration

The application uses the Jikan API v4 for fetching anime data. Key endpoints used:

- `/anime?q={query}` - Search anime
- `/anime/{id}/full` - Get detailed anime information
- `/anime/{id}/episodes` - Get episode list

## State Management

Zustand is used for state management with the following stores:

- Search state (query, results, loading)
- Anime details state
- Episode list state

## Styling

The project uses Tailwind CSS for styling with:

- Responsive design principles
- Custom color schemes
- Mobile-first approach
- Hover and transition effects

## Features in Detail

### Homepage
The homepage welcomes users with a visually appealing background and a clear call-to-action to start exploring anime. The responsive design ensures a great experience across all devices.

### Search Page
Users can search for any anime using the search bar. Results are displayed in a responsive grid layout with smooth animations and hover effects. Each card provides quick access to more detailed information.

### Detail Page
When selecting an anime, users get access to:
- High-quality cover image
- Detailed synopsis
- Release information
- Episode list with air dates
- Current status

### About Page
Provides information about Nexus Anime and its mission to make anime information easily accessible to fans worldwide.


## Future Enhancements

- User authentication and profiles
- Favorite anime list
- Personalized recommendations
- Advanced filtering options
- Watch history tracking

Churchill
