import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <h1>WE LOVE JOSH</h1>
      <h1>322 group project thumbs up emoji</h1>
      <div class="profilecontainer">
        <Profile
          gif="https://media.tenor.com/lCKwsD2OW1kAAAAi/happy-cat-happy-happy-cat.gif"
          alt="happy cat gif"
          name="Cynthia Wang"
          role="Group Leader"
          email="cynthia.w@queensu.ca"
          github="https://github.com/cynthiawang4/"
        />
        <Profile
          gif="https://static.wixstatic.com/media/5922a2_2aa12e874d5f432fa64f1eccab7f0d38~mv2.gif"
          alt="toilet cat gif"
          name="Ben Jacoby"
          role="Group Presenter"
          email="22bj@queensu.ca"
          github="https://github.com/Ben-Jacoby/"
        />
        <Profile
          gif="https://media1.tenor.com/images/dee2f9f29572393e39e886ffab9c18ec/tenor.gif?itemid=11663195"
          alt="Kristen"
          name="Kristen Lee"
          role="Group Presenter"
          email="21kl52@queensu.ca"
          github="https://github.com/kristenlee3553/"
        />
        <Profile
          gif="https://www.icegif.com/wp-content/uploads/icegif-342.gif"
          alt="eepy cat in bowl"
          name="Amanda Li"
          role="Group Member"
          email="amanda.li@queensu.ca"
          github="https://github.com/aamanda-li/"
        />
        <Profile
          gif="https://media.tenor.com/-VGV5Bo7CCcAAAAM/cat-attack-cat-tiktok.gif"
          alt="angy cat"
          name="Nathan Chow"
          role="Group Member"
          email="21nwc1@queensu.ca"
          github="https://github.com/NChow55/"
        />
        <Profile
          gif="https://media.tenor.com/kDSUi9rGACsAAAAM/cat-covering-ears-meme.gif"
          alt="mr fresh sad gif"
          name="Savannah Han"
          role="Group Member"
          email="21sh113@queensu.ca"
          github="https://github.com/Savannah-Han13/"
        />
      </div>
    </div>
  );
}

export default App;
