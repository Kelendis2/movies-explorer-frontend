// import App from "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import { api } from "../../utils/MainApi";
import { MoviesApi } from "../../utils/MoviesApi";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { get } from "react-scroll/modules/mixins/scroller";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const handleRegister = ({ name, email, password }) => {
    api
      .register({ name, email, password })
      .then((data) => {
        console.log(data);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogin = ({ email, password }) => {
    api
      .authorize(email, password)
      .then((data) => {
        if (data) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Проверка токена
  const checkTocken = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getProfile()
        .then((res) => {
          setLoggedIn(true);
          navigate("/movies");
          if(res){
            getUser();
            getSavedMovies();
          }
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    checkTocken();
  }, []);

  const getUser = () => {
    api.getProfile()
    .then((currentUser) => {
      setCurrentUser(currentUser);
    })
    .catch((err) => console.log(err));
  };

  const getSavedMovies = () =>{
    api.getSavedMovies().then((movies) => {
      setSavedMovies(movies);
      console.log(movies);
    })
    .catch((err) => console.log(err));
  }

  const getMovies = () => {
    MoviesApi.getMovies()
      .then((movies) => {
        setAllMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleSaveMovie = (movie) => {
    const isSaved = savedMovies.some((item) => item.movieId === movie.movieId);

    if (!isSaved) {
      api
      .saveMovie(movie)
      .then((savedMovie) => {
        console.log("Фильм успешно сохранен:", savedMovie);
        return savedMovie;
      })
      .catch((error) => {
        // Обработка ошибки при сохранении фильма
        console.error("Ошибка при сохранении фильма:", error);
        throw error;
      });
    } else {
      const movieToDelete = savedMovies.find((item) => item.movieId === movie.movieId);

    if (movieToDelete && movieToDelete._id){
      const movieId = savedMovies.find((item) => item.movieId === movie.id)._id;
      api
        .deleteMovies(movieId)
        .then(() => {
          setSavedMovies((movies) => movies.filter((item) => item._id !== movieId));
        })
        .catch((err) => {
          console.error("Ошибка при удалении фильма:", err);
        })
      }
      else {
        console.error("Не удалось найти _id фильма для удаления.");
      }
    }
  };

  function handleDeleteMovie(movie) {
    return api
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((movies) =>
          movies.filter((item) => item._id !== movie._id)
        );
      })
      .catch((error) => {
        // Обработка ошибки при удалении фильма
        console.error("Ошибка при удалении фильма:", error);
        throw error;
      });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Header />
                <Movies
                  movies={allMovies}
                  getMovies={getMovies}
                  savedMovies={savedMovies}
                  onSave={handleSaveMovie}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header />
                <SavedMovies
                  movies={savedMovies}
                  onDelete={handleDeleteMovie}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Header />
                <Login handleLogin={handleLogin} />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header />
                <Register handleRegister={handleRegister} />
              </>
            }
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
