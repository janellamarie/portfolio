import './Experience.css'

let work = [ 
  {
    "company": "GitHub",
    "title": "Software Engineer",
    "date": "July 2022 - March 2024",
    "description": "Worked as a full-stack software engineer under an agile scrum team called Secret Scanning Experiences—making updates and changes to GitHub's Secret Scanning app from the front-end, to the back-end.",
    "skills": [
      "Go", "Ruby", "Ruby on Rails", "TypeScript", "Datadog", "Git", "GitHub", "Splunk", "Sentry", "MySQL"
    ]
  },
  {
    "company": "Bashpole Software, Inc.",
    "title": "Intern for Intermediate Java and More for a Web App for Non-profits",
    "date": "December 2021 - June 2022",
    "description": "Worked as a full-stack software engineering intern creating landing pages used in advertisements for non-profits",
    "skills": [
      "Java", "Java Server Pages (JSP)", "MySQL", "JavaScript"
    ]
  }
]

function Header({title, subtitle, date}) {
  return (
    <div className="header">
      <h4 className="card-title fw-bold text-primary">{title}</h4>
      <p className="mb-3">
        <span className="float-end text-body-secondary ms-2">{date}</span>
        <h5 className="card-subtitle pb-3 text-secondary">{subtitle}</h5>
      </p>
    </div>
  ) 
}

export default function Experience() {
  return(
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <ul className="timeline">
            <h4 className="fw-bold">Work</h4>
            {
              work.map((w, i) => (
                <li className="timeline-item" key={i}>
                  <div className="card border-1 bg-transparent mb-2">
                    <div className="card-body">
                      <Header 
                        title={w.title} 
                        subtitle={w.company} 
                        date={w.date} 
                      />
                      <p className="card-text">
                        <span>{w.description}</span>
                      </p>
                    </div>
                  </div>
                </li>
              ))
            }

          <h4 className="fw-bold pt-3">Education</h4>

          <li className="timeline-item">
            <div className="card border-1 bg-transparent mb-2">
              <div className="card-body">
                <Header 
                  title={"University of South Florida"} 
                  subtitle={"Bachelor of Science, major in Computer Science"}
                  date={"May 2020 - May 2022"}
                />
              </div>
              <h5 className="ms-3 projects-header">Projects</h5>
              <p className="card-text">
                <ul className="school-projects">
                  <li className="school-projects-name">
                    <span>
                      <i className="bi bi-folder2 me-2 text-secondary" />
                      COP-3331 (Object-Oriented Software Design) Flex Project
                    </span>
                    <span className="float-end me-3">
                      <a href="https://github.com/janellamarie/cop3331-flex-project" target="_blank">
                        <i className="bi bi-github"/>
                      </a>
                    </span>
                    <p>
                      <ul className="school-projects-description">
                        <li>
                          <i className="bi bi-code-slash me-2 text-secondary" />
                          Programming Language(s): C++
                        </li>
                        <li>
                          <i className="bi bi-info-square me-2 text-secondary" />
                          CLI-based program simulating a CRUD app using data from the game &quot;Genshin Impact&quot;
                        </li>
                      </ul>
                    </p>
                  </li>
                </ul>
              </p>
            </div>
          </li>

          {/* HCC */}
          <li className="timeline-item">
            <div className="card border-1 bg-transparent mb-2">
              <div className="card-body">
                <Header 
                  title={"Hillsborough Community College"} 
                  subtitle={"Associate in Arts, major in Computer Information Systems"} 
                  date={"August 2018 - December 2019"} 
                />
              </div>
            </div>
          </li>

          </ul>
        </div>
      </div>
    </div>
  )
}