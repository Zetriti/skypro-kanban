import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import { useEffect, useState } from "react";
import { GlobalStyles, LoadingContainer } from "./GlobalStyles.styled";
import "./other.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <main className="main">
        <div className="container">
          <LoadingContainer>
            <div className="loading-spinner"></div>
            <p className="loading-text">Данные загружаются...</p>
          </LoadingContainer>
        </div>
      </main>
    );
  }

  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        {/* pop-up start */}
        <div className="pop-exit" id="popExit">
          <div className="pop-exit__container">
            <div className="pop-exit__block">
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form className="pop-exit__form" id="formExit" action="#">
                <div className="pop-exit__form-group">
                  <button className="pop-exit__exit-yes _hover01" id="exitYes">
                    <a href="modal/signin.html">Да, выйти</a>
                  </button>
                  <button className="pop-exit__exit-no _hover03" id="exitNo">
                    <a href="main.html">Нет, остаться</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <PopNewCard />
        <PopBrowse />
        {/* pop-up end */}

        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
