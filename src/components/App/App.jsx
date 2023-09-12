import "./App.css";
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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isloggedIn, setLoggedIn] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorRegisterMessage, setRegisterErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormActivated, setFormActivated] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true);
    api
      .register({ name, email, password })
      .then((data) => {
        console.log(data);
        handleLogin( {email, password} )

      })
      .catch((err) => {
        console.log(err);
        setFormActivated(true);
        setRegisterErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    api
      .authorize(email, password)
      .then((data) => {
        if (data) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          checkToken();
          navigate("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getUser = () => {
    api
      .getProfile()
      .then((currentUser) => {
        setCurrentUser(currentUser);
      })
      .catch((err) => console.log(err));
  };

  const getSavedMovies = () => {
    api
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  };

  const checkToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api
        .getProfile()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            getUser();
            getSavedMovies();

            // const currentPath = localStorage.getItem('currentPath');
            // if (currentPath) {
            //   navigate(currentPath);
            // }
          }

          console.log('res');
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsPageLoading(false);
          console.log('here');
        });
      return;
    }
    setIsPageLoading(false);
  };
  useEffect(() => {
      checkToken();

  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("query");
    localStorage.removeItem("isShortFilm");
    localStorage.removeItem("searchResults");
    localStorage.removeItem("currentPath");
    setLoggedIn(false);
    navigate("/");
  };


  const getMovies = () => {
    MoviesApi.getMovies()
      .then((movies) => {
        setAllMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleSaveMovie = (movie) => {
    const isSaved = savedMovies.some((item) => item.movieId === movie.id);

    if (!isSaved) {
      api
        .saveMovie(movie)
        .then((savedMovie) => {
          setSavedMovies([...savedMovies, savedMovie.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const movieToDelete = savedMovies.find(
        (item) => item.movieId === movie.id
      );

      if (movieToDelete && movieToDelete._id) {
        const movieId = savedMovies.find(
          (item) => item.movieId === movie.id
        )._id;
        api
          .deleteMovie(movieId)
          .then(() => {
            setSavedMovies((movies) =>
              movies.filter((item) => item._id !== movieId)
            );
          })
          .catch((err) => {
            console.error("Ошибка при удалении фильма:", err);
          });
      } else {
        console.error("Не удалось найти _id фильма для удаления.");
      }

    }
  };

  function handleDeleteMovie(movie) {
    return api
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((savedMovies) =>
          savedMovies.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => {
        console.error("Ошибка при удалении фильма:", err);
      });
  }
  const handleUpdateUser = ({ name, email }) => {
    setIsLoading(true);
    api
      .udateProfile({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setFormActivated(false);
        setSuccessMessage("Профиль успешно обновлен");
        setErrorMessage("");
      })
      .catch((err) => {
        console.log(err.message);
        setFormActivated(true);
        setSuccessMessage("");
        setErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if(isErrorPage){
    return null;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header loggedIn={isloggedIn}  />
        <Routes>
          <Route path="*" element={<NotFound isErrorPage={isErrorPage} />} />
          <Route
            path="/"
            element={
              <>
                <Main />
              </>
            }
          />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={isloggedIn}
                currentUser={currentUser}
                movies={allMovies}
                savedMovies={savedMovies}
                onSave={handleSaveMovie}
                getMovies={getMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                movies={savedMovies}
                onDelete={handleDeleteMovie}
                loggedIn={isloggedIn}
                currentUser={currentUser}
                getSavedMovies={getSavedMovies}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                isLoading={isLoading}
                onUpdateUser={handleUpdateUser}
                errorMessage={errorMessage}
                successMessage={successMessage}
                isFormActivated={isFormActivated}
                setFormActivated={setFormActivated}
                loggedIn={isloggedIn}
                getUser={getUser}
                currentUser={currentUser}
                signOut= {handleSignOut}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Login
                  handleLogin={handleLogin}
                  errorMessage={loginErrorMessage}
                  isLoading={isLoading}
                />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Register
                  handleRegister={handleRegister}
                  errorMessage={errorRegisterMessage}
                  setErrorMessage={setRegisterErrorMessage}
                  isLoading={isLoading}
                />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
