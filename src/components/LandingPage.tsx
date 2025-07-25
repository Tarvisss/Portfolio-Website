import Styles from "./landingPage.module.css";

function LandingPage() {
  return (
    <div className={Styles["page"]}>
      <div className={Styles["card-container"]}>
        <div className={Styles["text-area"]}>
          <p>
            Dedicated lifelong learner with a strong background in maintenance leadership, project management, and team collaboration. Now applying these strengths to solve problems and build impactful software. 👨🏼‍💻
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
