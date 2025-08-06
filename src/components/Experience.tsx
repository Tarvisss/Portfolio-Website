import Styles from "./experienceCard.module.css"


function Experience() {
    return (
     <div className={Styles["page"]}>
      <h1>Experience</h1>
      <br />
      <div className={Styles["card-container"]}>
        <div className={Styles["text-area"]}>
          <div className={Styles["text"]}>
            <div>
              <h2>Springboard</h2>
              <h3>Student</h3>
              <p>Completing 830+ hours of hands-on course material, with 1:1 industry expert mentor oversight, and completion of 4 in-depth portfolio projects.</p>
              <p>Mastering skills in front-end and back-end web development, databases, and data structures and algorithms.</p>
            </div>
            <hr />
            <div>
              <h2>Superior Silica Sands</h2>
              <h3>Maintenance Supervisor</h3>
              <p>Directed plant maintenance operations with up to 30 employees. including electricians, welders and equipment operators</p>
                <p>Trained employees in proper maintenance protocols across the entire project lifecycle, including issue diagnosis, inventory management, lock-out/tag-out procedures, and executing the necessary steps to complete tasks efficiently.</p>
            </div>
            <hr />
            <div>
              <h2>All My Sons</h2>
              <h3>Crew lead</h3>
              <p>Led teams of up to eight movers, coordinating tasks and maintaining workflow on-site. Managed customer communication to ensure smooth moves and saving the customer money.</p>
            </div>
            <hr />
            <div>
              <h2>Black Mountian sands</h2>
              <h3>Maintenance Technician III</h3>
              <p>Collaborated with other technicians to maintain safe and consistent plant operations.
                Implemented new CMMS procedures to maintain uniformity among other technicians.
                My responsibilities included but not limited to: welding and fabrication, poly fusion, conveyor patches and replacement, rotary kiln repairs, bearing replacement, fan alignment, wash and dry plant maintenance.
              </p>
            </div>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="aae6384c-cbfa-4bbb-991f-b08bba55138a" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
          </div>
        </div>
      </div>
        <div className={Styles["closing-statement"]}>
          <p>Please feel free to reach out. I'm always looking to better myself and connect with like minded individuals. </p>
          
        </div>
        <footer className={Styles["footer"]}>
        <p>Thanks for visiting!</p>
      </footer>
    </div>
  );
}

export default Experience;