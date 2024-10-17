import './Experience.css'

let work = [ 
  {
    "company": "GitHub",
    "title": "Software Engineer",
    "date": "July 2022 - March 2024",
    "description": "Worked as a full-stack software engineer under the Secret Scanning Experiences team; making updates and changes to GitHub's Secret Scanning feature from the front-end, to the back-end.",
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
    <div className="container">
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
                      <p className="card-text text-break">
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
                <h5 className="ms-3">Projects</h5>
                <p className="card-text">
                <ul>
                  <li>
                    <p className="float-end me-3"> 
                        <a href="https://github.com/janellamarie/cop3331-flex-project" target="_blank"> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github mx-2" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                          </svg>
                        </a>
                      </p>
                      <h6>COP-3331 (Object-Oriented Software Design) Flex Project</h6>
                      <p>
                        <ul>
                          <li>Programming Language(s): C++</li>
                          <li>CLI-based program simulating a CRUD app using data from the game &quot;Genshin Impact&quot;</li>
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