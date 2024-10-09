import './Experience.css'

export default function Experience() {
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="timeline">
            {/* GithHub */}
            <li className="timeline-item">
              <div className="card border-1 bg-transparent mb-2">
                <div className="card-body">
                  <h4 className="card-title">Software Engineer I</h4>
                  <p className="float-end text-body-secondary">July 2022 - March 2024</p>
                  <h5 className="card-subtitle pb-3 ">GitHub</h5>
                  <p className="card-text">
                    <ul>
                      <li>
                        Worked as a full-stack software engineer in an agile, scrum environment under the secret scanning experiences team
                      </li>
                      <li>
                        Participated in scrum ceremonies such as daily standup meetings and bi-weekly sprint retros
                      </li>
                      <li>
                        Utilized Golang and Ruby to modify and update existing features for the secret scanning web experience
                      </li>
                      <li>
                        Assisted with transitioning the front-end web experience from using Ruby on Rails components to React components with TypeScript
                      </li>
                      <li>
                        Shortened the URLs returned by a feature that blocks pushes from the CLI onto GitHub when a secret isdetected in the push
                      </li>
                      <li>
                        Expanded coverage for an app that calls third-party public APIs to check validity of partner tokens and secrets leaked in content uploaded to GitHub repositories
                      </li>
                      <li>
                        Coordinated with product managers and designers to implement copy changes based on customer and internal feedback
                      </li>
                      <li>
                        Refactored the mailers sent by the secret scanning app, resulting in clearer emails and better code maintainability
                      </li>
                      <li>
                        Wrote and updated existing unit tests while working on code for feature work
                      </li>
                      <li>
                        Served as on-call to triage support escalations and any live-site issues, using Datadog, Sentry, and Splunk during shifts to monitor app performance, to investigate issues, and to debug errors and exceptions
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </li>

            {/* Bashpole */}
            <li className="timeline-item">
              <div className="card border-1 bg-transparent mb-2">
                <div className="card-body">
                  <h4 className="card-title">Intern for Intermediate Java and More for a Web App for Non-profits</h4>
                  <p className="float-end text-body-secondary">December 2021 - May 2022</p>
                  <h5 className="card-subtitle pb-3">Bashpole Software, Inc. </h5>
                  <p className="card-text">
                  <ul>
                      <li>
                        Worked in a team of full-stack Java software developer interns, supervised by a senior engineer
                      </li>
                      <li>
                        Created landing pages to be used in advertisements by non-profits using Java Server Pages (JSP), HTML, and CSS
                      </li>
                      <li>
                        Wrote SQL queries and used MySQL to store and manage data to be displayed
                      </li>
                      <li>
                        Created scripts in Google Workspace Apps using JavaScript to help business process such as creating a spreadsheet to track internship progress
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </li>


          {/* USF */}
          <li className="timeline-item">
              <div className="card border-1 bg-transparent mb-2">
                <div className="card-body">
                  <h4 className="card-title">University of South Florida</h4>
                  <p className="float-end text-body-secondary">May 2020 - May 2022</p>
                  <h5 className="card-subtitle pb-3 ">Bachelor of Science, major in Computer Science</h5>
                </div>
              </div>
            </li>

          {/* HCC */}
          <li className="timeline-item">
              <div className="card border-1 bg-transparent mb-2">
                <div className="card-body">
                  <h4 className="card-title">Hillsborough Community College</h4>
                  <p className="float-end text-body-secondary">August 2018 - December 2019</p>
                  <h5 className="card-subtitle pb-3 ">Associate in Arts, major in Computer Information Systems</h5>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}