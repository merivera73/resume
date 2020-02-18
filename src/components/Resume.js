
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6'>
                    <h1>Manuel <br />Rivera</h1>
                </div>
                <div className='col-6'>
                    <p>Email: <a href='mailto:merivera73@gmail.com'>merivera73@gmail.com</a></p>
                    <p>Mobile: <a href='tel:13234434544'>323-443-4544</a></p>
                    <p>LinkedIn: <a href='https://www.linkedin.com/in/manuel-rivera-23889228/' target='_blank'>Manuel-Rivera</a></p>
                </div>
            </div>
            <hr/>
            <div className='row'>
                <div className='col-12'>
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#toolsTech" aria-expanded="true" aria-controls="collapseOne">
                                    Tool and Technologies
                                    </button>
                                </h2>
                            </div>
                            <div id="toolsTech" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <strong>Tools:</strong> Visual Studio Code, Dreamweaver CC, PhotoShop CC, Adobe Creative Cloud, Postman<br />
                                    <strong>Front-End:</strong> HTML, CSS, JavaScript<br />
                                    <strong>Server &amp; DB:</strong> Node.js, MongoDB, MySQL<br />
                                    <strong>FrameWorks:</strong> Bootstrap, JQuery, React.js, Django, Express.js, Nunjucks, GreenSock<br />
                                    <strong>Languages:</strong> Python, Perl, PHP5<br/>
                                    <strong>Business Tools:</strong> Office 365, SharePoint2013, SharePoint 365
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#experience" aria-expanded="true" aria-controls="collapseOne">
                                    Experience
                                    </button>
                                </h2>
                            </div>
                            <div id="experience" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <strong>Senior Front-End Developer</strong> | <em>William Lea Tag</em>
                                    <p>2019 Feb &ndash; Aug 2019</p>
                                    <ul>
                                        <li>Created outgoing emails for different campaigns</li>
                                        <li>Builted sites for different pharmaceutical products using Nunjucks templating</li>
                                        <li>Made updates to existing sites</li>
                                        <li>Used GreenSock for banner animation</li>
                                        <li>Developed XGEVA’s website which is live, was the main Dev on this site handled all the changes and updates performed on it while I was 
                                            there. Hand coded all HTML, CSS, also touched up or sized images on the site with PhotoShop. While working on the the site locally on my 
                                            workstation with Node.js</li>
                                    </ul>
                                    <p className="textind"><strong>Technologies used:</strong></p>
                                    <p className="textind">HTML, CSS, JavaScript, Nunjucks, BitBucket, Git, GreenSock, JQuery</p>
                                    <br />

                                    <strong>Web Developer</strong> | <em>Keck Medical Center of USC</em>
                                    <p>2012 May &ndash; Feb 2019</p>
                                    <ul>
                                        <li>Maintained Keck Hospital of USC intranet updated with Hospital events</li>
                                        <li>Design and develop websites for each hospital department</li>
                                        <li>Utilizing industry standard HTML, CSS, W3C Compliance</li>
                                        <li>Setup SharePoint environment for each site</li>
                                        <li>Manage access to each SharePoint site</li>
                                        <li>Used SharePoint Designer to create our intranet SharePoint site for our medical departments as well to create forms and workflow processes. 
                                            Helped our departments streamline workflow for forms submissions were possible. Also created online forms for new processes.</li>
                                    </ul>
                                    <p className="textind"><strong>Technologies used:</strong></p>
                                    <p className="textind">HTML, JavaScript, CSS, Bootstrap, JQuery</p>
                                    <p className="textind">Office 365: Power Bi, Power Apps, Planner, SharePoint Designer</p>
                                    <br />
                                    <strong>Web Content and Front-End Developer</strong> | <em>Herbalife North American Region</em>
                                    <p>2011 March &ndash; 2012 May</p>
                                    <ul>
                                        <li>Maintained 4 website 2 in the U.S. and 2 in Canada</li>
                                        <li>Update products, events information, product information, event pictures</li>
                                        <li>Use CMS (Content Management System) Team Site.</li>
                                        <li>Test websites daily to ensure that the site is accessible to our end user.</li>
                                        <li>Post weekly announcements and ensure links work.</li>
                                        <li>Worked on developing our distributors individual website, also maintain existing websites and created new ones, worked on the extravaganza 
                                            Herbalife sites for both English and Spanish site. Work on both Mobile and Desktop websites.</li>
                                    </ul>
                                    <p className="textind"><strong>Technologies used:</strong></p>
                                    <p className="textind">Hand code HTML, CSS, JavaScript and PHP</p>
                                    <br />
                                    <strong>HTML, CSS Developer</strong> | Trailer Park
                                    <p>2010 Nov &ndash; 2011 Feb</p>
                                    <ul>
                                        <li>Used HTML and CSS to convert books to e-books.</li>
                                        <li>Quality assurance testing of web pages to ensure content reflected book content.</li>
                                        <li>Responsible for uploading completed pages to the server.</li>
                                        <li>Worked in a team environment to solve issues with alignments, matching fonts correctly and any other problems that we encounter.</li>
                                        <li>Made pixel perfect ebook versions of hardcopy books, Trailer Park had a contract with Apple to convert books to ebook. Used HTML, and 
                                            CSS for page layout and JavaScript for functionality to make the page flip as if it was a hardcopy book</li>
                                    </ul>
                                    <p className="textind"><strong>Technologies used:</strong></p>
                                    <p className="textind">JavaScript, HTML and CSS</p>
                                    <br />
                                    <strong>HTML, CSS Specialist</strong> | Intranet Brand, locally
                                    <p>2009 Mar &ndash; 2010 Oct</p>
                                    <ul>
                                        <li>Responsible for maintaining and testing clients' websites by ensuring all links work properly and images were clean.</li>
                                        <li>Responsible for ensuring CSS and HTML code meets W3C Compliance.</li>
                                        <li>Modified graphics using Photoshop.</li>
                                        <li>Updated websites using HTML Editor.</li>
                                        <li>Thoroughly test websites to ensure content quality across all browsers.</li>
                                        <li>Work on multiple sites, hand coded sites from the ground up from Mockup used HTML, CSS, JavaScrip and Perl.</li>
                                    </ul>
                                    <p className="textind"><strong>Technologies used:</strong></p>
                                    <p className="textind">HTML, CSS, JavaScript, Perl</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#education" aria-expanded="true" aria-controls="collapseOne">
                                    Education
                                    </button>
                                </h2>
                            </div>
                            <div id="education" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <strong>Coding Dojo</strong> &mid; Burbank, CA
                                    <p>2019 Oct &ndash; Jan 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Resume;