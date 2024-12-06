import "./App.css";
import Profile from "./components/Profile";
import "@fontsource/montserrat";
import "@fontsource/playfair-display";

function App() {
  return (
    <div class="app">
      <div class="header">
        <h1 class="h1">WE LOVE JOSH</h1>
      </div>
      <div class="description">
        <p class="p">Welcome to the homepage of Group 21's project for CISC 322.<br />
          This project is focused on recovering the conceptual and concrete architecture<br />
          and proposing an enhancement for program ScummVM and game engine SCI.</p>
      </div>
      <div class="subheader">
        <h2 class="h2">Assignments</h2>
      </div>
      <div class="assignmentcontainer">
        <div class="a1square">
          <p class="p">A1</p>
          <a class="a" href="/reports/21welovejosh_A1_Report.pdf" target="_blank" rel="noopener noreferrer">A1 Report</a><br />
          <a class="a" href="https://www.youtube.com/watch?v=FWSPBfmtl_c" target="_blank" rel="noopener noreferrer">A1 Presentation</a>
        </div>
        <div class="a2square">
          <p class="p">A2</p>
          <a class="a" href="/reports/21welovejosh_A2_Report.pdf" target="_blank" rel="noopener noreferrer">A2 Report</a><br />
          <a class="a" href="https://www.youtube.com/watch?v=x5I38w09E4Y" target="_blank" rel="noopener noreferrer">A2 Presentation</a>
        </div>
        <div class="a3square">
          <p class="p">A3</p>
          <a class="a" href="/reports/21welovejosh_A3_Report.pdf" target="_blank" rel="noopener noreferrer">A3 Report</a><br />
          <a class="a" href="https://www.youtube.com/watch?v=LZSIUQ5Yd0c" target="_blank" rel="noopener noreferrer">A3 Presentation</a>
        </div>        
      </div>
      <div class="subheader">
        <h2 class="h2">Group Members</h2>
      </div>
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
      <div class="subheader">
        <h2 class="h2">Documentation</h2>
      </div>
      <div class="docucontainer">
        <div class="docu1">
          <a class="a" href="https://docs.scummvm.org/" target="_blank" rel="noopener noreferrer">ScummVM Documentation</a><br />
        </div>
        <div class="docu2">
          <a class="a" href="https://github.com/scummvm/scummvm" target="_blank" rel="noopener noreferrer">ScummVM GitHub</a><br />
        </div>
        <div class="docu2">
          <a class="a" href="https://scicompanion.com/Documentation/" target="_blank" rel="noopener noreferrer">SCI Documentation</a><br />
        </div>
        <div class="docu1">
          <a class="a" href="https://wiki.scummvm.org/" target="_blank" rel="noopener noreferrer">ScummVM Wiki</a><br />
        </div>
      </div>
        <br /><br />
    </div>
  );
}

export default App;
