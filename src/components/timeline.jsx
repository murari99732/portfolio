import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer TietoEvry (Leading Nordic Comapny)  <span>2019-present</span></h2>
                        <p>Virtual Account Management( Banking Application) </p> 
					<p>	Used to implement and design different complex business logic
using Java , Hibernate, JPA ,Spring frameworks, data structure to
provide different functionalities like Credit/Debit, XML and JSON
statement processing(CAMT & MT file)
Full responsible and ownership for modular distributed
development of application with unit & integration tests (
deployment & writing test cases) of API in payment transaction statement
module to handle daily activity using real time batch processing</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>(Bachelor of Engineering ) at Pune University<span>2015-2019</span></h2>
                        <p>Sinhgad Academy of Engineering (Pune University)  Information Technology   June 2015- May 2019 CGPA: 7.49</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2015</span></h2>
                        <p>St Karen's Secondary High School (CBSE) (12TH)   July 2013- May 2015 Percentage: 73.3%</p>
                        <p> St Paul's High School (ICSE) (10TH)  May 2012- May 2013 Percentage: 89.2%</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
