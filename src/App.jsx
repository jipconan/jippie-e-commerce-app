import React from "react";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import {
  Home,
  Store,
  ContactPage,
  AboutUsPage,
  FaqPage,
  Keychains,
  Stickers,
  Pins,
} from "./Pages";
import { Header, Footer } from "./components";
import theme from "./utilities/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div>
          <header className="header">
            <Stack>
              <Header />
            </Stack>
          </header>
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/store">
                <Store />
              </Route>
              <Route exact path="/contact">
                <ContactPage />
              </Route>
              <Route exact path="/about-us">
                <AboutUsPage />
              </Route>
              <Route exact path="/faq">
                <FaqPage />
              </Route>
              <Route exact path="/store/keychains">
                <Keychains />
              </Route>
              <Route exact path="/store/stickers">
                <Stickers />
              </Route>
              <Route exact path="/store/pins">
                <Pins />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </main>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
