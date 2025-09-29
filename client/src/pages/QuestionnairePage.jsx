import {Link} from 'react-router-dom';
import './QuestionnairePage.css';

function QuestionnairePage() {
  return (
    <div id="survey_superdiv">

        <div className="left-aligned">
          <Link to="/">
              <button>
                &lt; Quit Survey
              </button>
          </Link>
        </div>

        <div className="center-aligned"> -----progress bar here-----</div>

        <div className="left-aligned heading"> Question 1: Anxiety</div>
        <div className="left-aligned subheading"> Over the last two weeks, have you felt nervous, anxious, or on edge? </div>

        <div className="center-aligned flex-container">
          <div className="face-cam">face-cam</div>
          <div className="input-widgets">
            <input type="radio" id="not_at_all" name="answer" value="Not at all"></input>
            <label for="not_at_all">Not at all</label><br></br>

            <input type="radio" id="rarely" name="answer" value="Rarely"></input>
            <label for="rarely">Rarely</label><br></br>

            <input type="radio" id="sometimes" name="answer" value="Sometimes"></input>
            <label for="sometimes">Sometimes</label><br></br>

            <input type="radio" id="most_of_the_time" name="answer" value="Most of the time"></input>
            <label for="most_of_the_time">Most of the time</label><br></br>

            <input type="radio" id="all_the_time" name="answer" value="All the time"></input>
            <label for="all_the_time">All the time</label><br></br>
          </div>
        </div>

          
        

        <div className="center-aligned flex-container">
          <button>
              &lt; Previous
          </button>

          <Link to="/completion">
            <button>
                Submit Survey
            </button>
          </Link>

          <button>
              Next &gt;
          </button>
        </div>

    </div>
  );
}

export default QuestionnairePage;