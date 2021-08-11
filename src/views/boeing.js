import React from 'react';
import Navbar from '../components/navbar.js';
import Image from '../components/image.js';
import Footer from '../components/footer.js';
import constants from '../include/constants.js';
import '../css/casestudy.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class Boeing extends React.Component {
    render() {
        return (
            <div>
                <Navbar pathname={constants.routes.Work} />
                <div>
                    <div className='title container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <p>Boeing's Enterprise Solution to Daily Planning</p>
                                <h1>Production Monitoring Console</h1>
                            </div>
                            <div className='col-md-6'>
                                <div className='title-spacer'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <p className='label'>COMPANY</p>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>Boeing</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <p className='label'>ROLE</p>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>Product Designer</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <p className='label'>TIMELINE</p>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>December 2019 - 2020</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <p className='label'>TYPE</p>
                                        </div>
                                        <div className='col-md-9'>
                                            <p>Web Application Redesign</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='banner'>
                        <img src={constants.images.boeing} alt="PMC case study banner" />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                            {/* Nav menu goes here */}
                            </div>
                            <div className='col-md-8'>
                                <div className='break'>
                                    <p className='montserrat'>How might we help operations managers 
                                    reduce the amount of time spent on daily planning activities?</p>
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>Background</h3>
                                    <p>As part of the company’s vision to modernize factory operations, 
                                        Boeing invested in a COTS software to handle its manufacturing 
                                        operations management (MOM). One of applications in the suite 
                                        was Production Monitoring Console (PMC), used for the management 
                                        of daily planning activities such as attendance, job assignments, 
                                        and resource allocations.
                                    </p>
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>The Mission</h3>
                                    <p>As a cost savings initiative, the business wants to eliminate the 
                                        maintenance of disparate software systems by consolidating all 
                                        existing applications and services into a one-stop-shop. My team 
                                        was directed to evaluate and adjust the existing capabilities of 
                                        PMC, in order to tailor the application as a viable solution for 
                                        supporting flight line and delivery operations.
                                    </p>
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>My Role</h3>
                                    <p>I was brought on as the sole designer to assess software gaps to 
                                        the business process, and to make usability improvements on the 
                                        application. Aside from leading team through an end-to-end design 
                                        process from user research to visual design, I also worked very 
                                        closely with product management on strategy and vision towards 
                                        scaling the solution at an enterprise level.
                                    </p>
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>My Users</h3>
                                    <p>My primary users were first line managers from operations. I 
                                        included a sample of managers across all shifts as part of my 
                                        research to account for any potential differences in context 
                                        and needs, but ultimately chose to focus on first shift managers 
                                        as they most frequently handled scenarios with high-complexity 
                                        (airplane moves, emergent flights, larges staff, etc.).
                                    </p>
                                    <p>My goal was to learn about how daily planning was conducted under 
                                        current process, and identify opportunities where PMC could be 
                                        leveraged to improve the planning experience.
                                    </p>
                                    <div className='row forty-eight'>
                                        <div className='col-md-1 stats'>
                                            3
                                        </div>
                                        <div className='col-md-2'>
                                            Contextual Inquiries
                                        </div>
                                        <div className='col-md-1 stats'>
                                            8
                                        </div>
                                        <div className='col-md-2'>
                                            User Interviews
                                        </div>
                                        <div className='col-md-1 stats'>
                                            20
                                        </div>
                                        <div className='col-md-2'>
                                            Usability Tests
                                        </div>
                                        <div className='col-md-1'>
                                            +
                                        </div>
                                        <div className='col-md-2'>
                                            SUS Surveys
                                        </div>
                                    </div>
                                </div>
                                <div className='row forty-eight'>
                                    <img className='col-md-4 align-middle' 
                                        src='./img/boeing/Persona.png' 
                                        alt='operations manager persona'/>
                                    <div className='col-md-8'>
                                        <p className='label'>GOALS</p>
                                        <p>Maintain structure and order on day-to-day operations by planning ahead.</p>
                                        <p>Ensure timely delivery of aircrafts through work optimization and resource prioritization.</p>
                                        <p>Enable team members by providing accurate information and making on-the-spot decisions.</p>
                                        <p className='forty-eight label'>NEEDS</p>
                                        <p>Visibility of airplane location, crew assignments, and statement of work for each day.</p>
                                        <p>Flexibility in planning to accommodate for emmergent variables like capacity and issues.</p>
                                        <p>Better way to manage and update information on a daily basis.</p>
                                    </div>
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>Top Problems</h3>
                                    <p className='label'>FRAGMENTED INFORMATION SOURCES</p>
                                    <p>Managers were frustrated with having to search through various 
                                        applications to piece together  information when coming up with 
                                        a plan. Not only was it burdensome to have to remember what each 
                                        application entailed, the lack of documentation meant brand new 
                                        manager would require significant additional hours of training 
                                        to onboard.
                                    </p>
                                    <div className='forty-eight'></div>
                                    <p className='label'>NEED FOR REAL-TIME COLLABORATION</p>
                                    <p>The performance and stability of the existing software was very 
                                        poor and did not support live collaboration. Managers found 
                                        themselves sitting idle waiting for changes to be reflected in 
                                        the system, only for it to crash without any means of recovery. 
                                        Many opted to come in the office an hour prior to their designated 
                                        start times in anticipation of such software failures.
                                    </p>
                                    <div className='forty-eight'></div>
                                    <p className='label'>DIFFERING BUSINESS CONTEXT</p>
                                    <p>Usability testing PMC as a COTS product provided insights to my 
                                        user’s mindset. Instead of presenting information at a high-level, 
                                        PMC required users to drill down to focus on details that managers 
                                        weren’t typically worried about. This meant that instead of reducing 
                                        the burden of the existing process, the product would actually be 
                                        creating more work.
                                    </p>
                                    <div className='forty-eight'></div>
                                    <p className='label'>OUT OF SCOPE - RELIANCE ON PAPER PRINTOUTS</p>
                                    <p>Since not all employees had access to stable internet or mobile 
                                        devices while performing work on airplanes in the flight line, 
                                        a printed paper copy was crucial for managers to be able to 
                                        communicate the daily plan. This particular challenge is part 
                                        of a greater effort to enable mobile devices on the factory floor, 
                                        and thus was not prioritized by our team.
                                    </p>
                                </div>
                                <div className='forty-eight'>
                                    <img src='user-journey.svg' alt='user journey map' />
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>The Approach</h3>
                                    <p>After presenting the research insights to my product management 
                                        and business stakeholders, the team was given an opportunity to 
                                        re-think the original PMC design. 
                                    </p>
                                    <p className='montserrat forty-eight'>Managers need a one-stop-shop that 
                                        consolidates relevant information for planning and responds 
                                        quickly to user input.
                                    </p>
                                    <p className='forty-eight'>Based on my research, I focused on three key 
                                         design goals:
                                    </p>
                                    <div className='row forty-eight'>
                                        <div className='col-md-3'>
                                            <img src="./img/boeing/collaboration.svg" alt="collaboration icon" />
                                            <p className='icon-text'>Improve Planning <em className='text-highlight'>Efficiency</em> Through Real-Time Collaboration</p>
                                        </div>
                                        <div className='col-md-1'></div>
                                        <div className='col-md-3'>
                                            <img src="./img/boeing/system.svg" alt="system icon" />
                                            <p className='icon-text'>Provide <em className='text-highlight'>Contextual Information</em> With System Integrations</p>
                                        </div>
                                        <div className='col-md-1'></div>
                                        <div className='col-md-3'>
                                            <img src="./img/boeing/learning.svg" alt="learning icon" />
                                            <p className='icon-text'>Increase <em className='text-highlight'>Ease of Use</em> Through a Learnable Design</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>The Experience</h3>
                                    <p className='font-italic'>PMC is Boeing proprietary software, as such I’m unable to 
                                        display the actual finished designs at this time.
                                    </p>
                                    <p className='label forty-eight'>STEP I: TRACKING LABOR</p>
                                    <p>In order to begin planning, managers first needed to know which 
                                        employees were present and available to be assigned work for 
                                        the day. The current design forced users to scroll extensively 
                                        in search of information, occasionally even needing to navigate 
                                        to a different page completely. Once found, users would then have 
                                        to find their way back to their original place and recall the 
                                        information while manually inputting it. There was no way to 
                                        validate the correct employee entity, check for spelling errors, 
                                        or have awareness of duplicate records another manager may have 
                                        already entered. 
                                    </p>
                                    <p className='forty-eight'>My design goals for improving the manual adjustment of daily attendance were to:</p>
                                    <p>• Reduce the frequency of manual data entry</p>
                                    <p>• Remove the barrier to entry from needing to know Excel macros</p>
                                    <p>• Improve information way finding by simplifying navigation </p>
                                    <p className='forty-eight'>I decided to go with a single-page view 
                                        as it was effective at consolidating the user’s information needs 
                                        and common tasks into one cohesive experience. Most importantly, 
                                        it removed the burden of navigation to other pages. Employees can 
                                        be added via ID look up that’s integrated with the Boeing HR system, 
                                        at which point managers would simply drag and drop each entity to one 
                                        of the four attendance statuses. No manual data entry or prior 
                                        familiarity with the roster is needed.
                                    </p>
                                    <img className='forty-eight' 
                                        src="./img/boeing/assign-attendance.png" 
                                        alt="wireflow for assigning employee attendance" />
                                    <p className='forty-eight'>Using a side panel layout similar to 
                                        many dashboard and chat room applications, users can select one 
                                        or more employees to configure their personal information. The 
                                        selected employee profiles would display on the main section view 
                                        of the screen while the side panel stays in view, allowing users 
                                        to quickly go between screens without having to wait for page reloads.
                                    </p>
                                    <img className='forty-eight' 
                                        src="./img/boeing/configure-employee.png" 
                                        alt="wireframe for employee configurations" />
                                </div>
                                <div className='break'>
                                    <p className='label'>STEP II: MANAGING THE PLAN</p>
                                    <p>Managers needed to have clear visibility to various moving pieces 
                                        out on the flight line in order to be ready to respond at a moments 
                                        notice. When baseline usability testing the original design, many 
                                        users expressed frustrations around having to navigate to different 
                                        pages in order to find information or make edits. Despite everything 
                                        being encapsulated into one application, the information architecture 
                                        failed to match the user’s process and mental model.
                                    </p>
                                    <p>This particular step in the process also contained many sub-tasks 
                                        that do not follow a predictable order of precedence. Managers 
                                        have to account for the location of airplanes, assignment employees, 
                                        as well as determining the statements of work for the day — any of 
                                        which could be adjusted in reaction to schedule delays, weather 
                                        conditions, or insufficient labor resources. The complex nature of 
                                        the tasks at hand also meant the view was packed with information 
                                        that was not very easy to find. This was especially noticeable if 
                                        managers have a busy day, as the lack of information hierarchy 
                                        resulted in an intimidating cluster of text that made the application 
                                        difficult to use effectively.
                                    </p>
                                    <p className='forty-eight'>The three key principles I kept in mind when designing this view were:</p>
                                    <p>• Provide better information organization and hierarchy</p>
                                    <p>• Consolidate the segmentation of information sources</p>
                                    <p>• Maintain visibility to key information</p>
                                    <p className='forty-eight'>I tested a few different layout variations, 
                                        with the goal of determining the best way to organize the information 
                                        in a clear hierarchy. In the end, I went with the 4 column grid-layout 
                                        as it was most effective when it came to finding information. Stall 
                                        numbers are listed as the first column for users scan through when 
                                        first beginning an assignment. Once users has identified the stall 
                                        they need to work with, the rest of the information follows naturally 
                                        from left to right.
                                    </p>
                                    <img className='forty-eight' 
                                        src="./img/boeing/layout-design.png" 
                                        alt="wireframe options for plan management interface" />
                                    <p className='forty-eight'>Like with the attendance screen, I used a 
                                        single-page view to support having many actionables on the page without 
                                        needing to navigate away. Using a side panel, I hoped to provide users 
                                        with immediate visibility to the assignable items, as opposed to guessing 
                                        what options are available in a dropdown list like the original design.
                                    </p>
                                    <p>To make the ‘assign’ task an easily learnable interaction, I wanted users 
                                        to be able to visualize the associations of entities as changes were being 
                                        made on the screen. These were three main interactions I explored and tested:
                                    </p>
                                    <img className='forty-eight' 
                                        src='./img/boeing/interaction-design.png' 
                                        alt='pros and cons of different interaction options' />
                                    <p className='forty-eight'>I went with the drag and drop interaction as it 
                                        tested the best with users. Since the main goal is for users to be able to 
                                        quickly understand how to move objects to different areas on the screen, 
                                        it made sense why this interaction was the most well received as it drew 
                                        from most manager’s existing understanding and familiarity with Windows 
                                        (particularly in regard to how file management works). To account for 
                                        the drawbacks of this interaction such as the lack of precision, I made 
                                        sure to follow practices that promoted better ease of use.
                                    </p>
                                    <img className='forty-eight' 
                                        src='./img/boeing/drag-drop-guidance.png' 
                                        alt='best practices when using drag and drop interactions' />
                                </div>
                                <div className='break'>
                                    <p className='label'>STEP III: DISTRIBUTING THE PLAN</p>
                                    <p>The final step in the planning process is for managers to print and 
                                        distribute the plan to the team. As I mentioned earlier, it was out 
                                        of our team’s budget and scope to enable a paper-free process at this 
                                        time. Nevertheless, we still hoped to lessen some of the burdens in 
                                        this step of the process.
                                    </p>
                                    <p>Despite one of their top challenges being the struggle to fit all the 
                                        relevant information onto a sheet of paper while keeping the page legible, 
                                        managers were adamant about keeping the current font and paper size. This 
                                        put me in an interesting predicament...
                                    </p>
                                    <img className='forty-eight' src='./img/boeing/math-lady-meme.png' alt='confused math lady meme' />
                                    <p className='forty-eight'>Jokes aside, I had a few thoughts on how to improve the printout:</p>
                                    <p>• Improve the overall readability without drastically changing the current format</p>
                                    <p>• Allow for flexibility in the amount of content that can be fitted onto the page</p>
                                    <p>• Tailor the reading experience to the users that are consuming the information</p>
                                    <p className='forty-eight'>I wanted the printout to have best reading experience 
                                        for it’s intended audience – which are workers out in the delivery fields. 
                                        Unlike their managers, field workers did not always have easy access to software, 
                                        and the printout is often all that they have. Upon receiving the printout at the 
                                        shift start meeting, an employee’s thought process would typically be as follows:
                                    </p>
                                    <img className='forty-eight' src='./img/boeing/reading-flow.svg' alt='reading flow of airplane mechanics' />
                                    <p className='forty-eight'>While some workers may go a step further to 
                                        glance at their statement of work or verify the airplane they are assigned 
                                        to, most just thought about heading to their assigned area and getting started. 
                                        To better adjust the printout to follow the worker’s mental model, I re-arranged 
                                        the columns so that employee names showed first, as opposed to starting with 
                                        airplane information which better suits the need of managers. I also re-organized 
                                        the hierarchy of information, placing the more emphasis on the stall number so 
                                        that workers can spot it quicker on the page.
                                    </p>
                                    <p>To address overflow content, I enable users to make decisions on what information 
                                        would make it onto the printout. By displaying the PDF preview of the printout, 
                                        users could then decide for themselves what elements on the page to show or hide 
                                        in order to get everything fitted onto a single sheet of paper. 
                                    </p>
                                    <img className='forty-eight' 
                                        src='./img/boeing/configure-print.png' 
                                        alt='wireframe for print configurations' />
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>Reflection</h3>
                                    <p>As a new designer at Boeing I was privied to many unique challenges to overcome, 
                                        one of which was working with the company’s various business requirements and 
                                        manufacturing processes that ensure compliance with aviation standards. In order 
                                        to keep up with the specialized workforce that made up my stakeholders and 
                                        end-users, I needed to quickly grasp basic manufacturing concepts while also 
                                        learning specific contexts and scenarios that were unique at Boeing. It was 
                                        more important than ever that I facilitated each interaction with a beginner’s 
                                        mindset, balancing respect for the experts in the field while being inquisitive 
                                        when discovering problems and opportunities.
                                    </p>
                                    <p>Over the course of this project, I’ve also matured my ability to demonstrate 
                                        and advocate for the value that user-centered design brings to software 
                                        development. Being the only designer on the team at a company in its early 
                                        stages of adopting UCD, it was up to me to make sure that we focused on solving 
                                        real problems for end-users and not be pushing out unvalidated features to code. 
                                    </p>
                                    <p>Whether it’s designing for consumer or enterprise, the basis for a good product 
                                        will always be measured by the value it brings to its user. Through this project 
                                        I have further solidified my belief in the importance of grounding a product 
                                        around user problems. While it may still be in a company’s interest to keep up 
                                        with competitors or the latest in the industry, a product cannot not stand by 
                                        building features without delivering value to users. 
                                    </p>
                                    <p className='montserrat break'>“Don’t find customers for your products, find products for your customers.” — Seth Godin</p>
                                    <div className='break'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}