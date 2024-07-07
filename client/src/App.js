import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes.js";
import SideBar from "./components/SideBar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Search from "./pages/Search.jsx";
import Favourite from "./pages/Favourite.jsx";
import Profile from "./pages/Profile.jsx";
import PodcastDetailsPage from "./pages/PodcastDetailsPage.jsx";
import DisplayPodcast from "./pages/DisplayPodcast.jsx";

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
function App() {
  //creating hooks for the web-app theme!
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen && (
            <SideBar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          )}
          <Frame>
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            Streamify
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="search" exact element={<Search />} />
              <Route path="/favourites" exact element={<Favourite />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route
                path="/podcast/:id"
                exact
                element={<PodcastDetailsPage />}
              />
              <Route
                path="/showpodcasts/:type"
                exact
                element={<DisplayPodcast />}
              />
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
