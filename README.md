# 🎬 Movie Finder

A simple React application to search, browse, and save your favorite movies using the [TMDB (The Movie Database)](https://www.themoviedb.org/) API.  

## ✨ Features

- 🔍 **Search movies** by title using TMDB API  
- 📄 **View movie details** (poster, overview, rating, release year)  
- ❤️ **Add/Remove favorites** (saved in `localStorage`)  
- 📱 **Responsive design** for desktop, tablet, and mobile  
- ⏮️ **Pagination** to navigate through multiple search results  

---

## 🛠️ Technologies Used

- [React](https://reactjs.org/) (Functional components + Hooks)  
- [React Router](https://reactrouter.com/) for routing  
- [Axios](https://axios-http.com/) for API calls  
- [TMDB API](https://developers.themoviedb.org/3) for movie data  
- **LocalStorage** for persisting favorites  
- **CSS Grid & Flexbox** for layout and responsiveness  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/sawpaingchitmin/movie-finder.git
cd movie-finder
```

### 2. Install dependencies
```bash
npm install
```

### 3. Get a TMDB API Key
- Go to [TMDB API](https://www.themoviedb.org/documentation/api)  
- Sign up for a free account and generate an API key  
- Create a `.env` file in the project root and add your key:
```bash
VITE_API_KEY=your_api_key_here
```

### 4. Run the app
```bash
npm run dev
```

## 📂 Project Structure
```bash
src/
│── components/
│   ├── Header.jsx
│   ├── MovieCard.jsx
│   └── SearchBar.jsx
│
│── context/
│   └── FavoritesContext.jsx
│
│── pages/
│   ├── Favorites.jsx
│   ├── Home.jsx
│   ├── MovieDetails.jsx
│   └── PopularMovies.jsx
│
│── App.css
│── App.jsx
│── index.css
│── main.jsx
```

## 🌍 Live Demo
[Try it here](https://movie-finder-h71v.onrender.com/)  


