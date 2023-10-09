import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./App.css";

const App = () => {
  const [showText, setShowText] = useState(false);
  const [showWhishes, setShowWhishes] = useState(false);

  useEffect(() => {
    document.title = "Happy Valentine's Day";
  }, []);
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Roboto&display=swap"
        rel="stylesheet"
      />

      <div className="App">
        <header className="App-header">
          <div className="text-container">
            <TypeAnimation sequence={["Hi there!", 1000]} cursor={false} />
            {showText && (
              <TypeAnimation
                sequence={["Happy Valentine's Day!", 1000]}
                cursor={false}
                style={{ marginTop: "12px" }}
              />
            )}
          </div>
          <div className="wishes-container">
            {showWhishes && (
              <TypeAnimation
                sequence={[
                  "I wish for you to have a day filled with love and happiness.",

                  1000,
                  "I wish for you to feel loved and appreciated by those around you.",
                  1000,
                  "I wish for you to receive a thoughtful gesture or gift from someone special in your life.",
                  1000,
                  "I wish for you to be able to spend quality time with the people you care about.",
                  1000,
                  "I wish for you to know how much you are loved and how much you mean to those around you.",
                  1000,
                  "from: @ryanderon",
                  1000,
                ]}
              />
            )}
          </div>

          {!showText && (
            <button className="click-btn" onClick={() => setShowText(true)}>
              !
            </button>
          )}
          {!showWhishes && showText && (
            <button className="wish-btn" onClick={() => setShowWhishes(true)}>
              ?
            </button>
          )}
        </header>
      </div>
    </>
  );
};

export default App;
