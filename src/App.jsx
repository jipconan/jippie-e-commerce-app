import React from "react";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import {
  Home,
  StorePage,
  ContactPage,
  AboutUsPage,
  FaqPage,
  MerchantPage,
  KeychainsPage,
  StickersPage,
  PinsPage,
  ProductDataPage,
} from "./Pages";
import { Header, Footer } from "./components";
import { theme } from "./utilities";

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
                <StorePage />
              </Route>
              <Route exact path="/contact">
                <ContactPage />
              </Route>
              <Route exact path="/faq">
                <FaqPage />
              </Route>
              <Route exact path="/merchant">
                <MerchantPage />
              </Route>
              <Route exact path="/store/keychains">
                <KeychainsPage />
              </Route>
              <Route exact path="/store/stickers">
                <StickersPage />
              </Route>
              <Route exact path="/store/pins">
                <PinsPage />
              </Route>
              <Route exact path="/productdatapage">
                <ProductDataPage />
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
