import Styles from "./landingPage.module.css";

function LandingPage() {
  return (
    <div className={Styles["page"]}>
      <div className={Styles["card-container"]}>
        <div className={Styles["text-area"]}>
          <p>
            As a lifelong learner, I have built a strong foundation in leadership, project management, and team collaboration through my experience in maintenance operations and other fields. I am both software and mechanically-inclined. I find great satisfaction in seeing complex problems overcome through persistence and creative thinking. Let me solve problems for you. 👨🏼‍💻
          </p>
        </div>
      </div>

      <footer className={Styles["footer"]}>
        <p>Thanks for visiting!</p>
        
        {/* HitWebCounter Widget */}
        <a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=21239517&style=0036&nbdigits=5&type=page&initCount=0"
            alt="Visit Counter"
          />
        </a>
      </footer>
    </div>
  );
}

export default LandingPage;
