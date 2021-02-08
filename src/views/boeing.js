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
                                    <p className='montserrat'>How might we engage managers to adopt
                                     and leverage a new software system in order to reduce the amount
                                      of time spent on daily planning activities?</p>
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>Background</h3>
                                    <p>As part of the company’s vision to modernize their ways of 
                                        manufacturing operations management, Boeing has invested in 
                                        a COTS product from Dassault Systèmes comprising a number of 
                                        different web browser applications. I was brought on as the 
                                        lead designer to assess and improve the usability of one of 
                                        the product’s core application called the Production Monitoring 
                                        Console (PMC), which is used to account for the management of 
                                        daily planning activities such as attendance, job assignments, 
                                        and resource allocation.
                                    </p>
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>Project Goal</h3>
                                    <p>In its original and off-the-shelf design, PMC was planned for 
                                        use in a specific business unit of the company. My team was 
                                        directed to evaluate and adjust the existing capabilities of 
                                        PMC, in order to tailor the application as a viable solution 
                                        for supporting the flight line and field delivery operations.
                                    </p>
                                    <p>The business also wanted to eliminate any additional expenses from
                                        having to maintain numerous different legacy applications or services
                                        used for daily planning currently, by consolidating all existing 
                                        software needs into a one-stop-shop solution with PMC.
                                    </p>
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>Problem Discovery</h3>
                                    <p>I began my research with a few contextual inquiries to better 
                                        understand the current planning process. I then scheduled 
                                        semi-structured interviews to follow-up on outstanding 
                                        questions and validate observed assumptions. Lastly I conducted
                                        several usability tests on the original PMC application to 
                                        better understand where the current design fell short, and 
                                        utilized System Usability Scale surveys to capture a quantifiable
                                        baseline to measure our progress against.
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
                                    <p className='forty-eight'>My primary users were operations managers at the Seattle Delivery 
                                        Center (SDC), with quality managers as a secondary group. While I 
                                        made sure to include a sample of managers across all shifts to account
                                        for any potential differences in context and needs, I tailored my 
                                        user persona and journey map towards first shift managers as they 
                                        most often had to handle high-complexity scenarios compared to others.
                                    </p>
                                </div>
                                <div className='break'>
                                    {/* <img src='http://drive.google.com/uc?export=view&id=1lnDId0nNWeogOSAbtzYQFGMIWJiDdZSj' /> */}
                                    <img src='./img/boeing/cPersona.png' alt='operations manager persona'/>
                                </div>
                                <div className='break'>
                                    <img src='user-journey.png' alt='user journey map' />
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>Top Challenges</h3>
                                    <p className='label'>FRAGMENTED INFORMATION SOURCES</p>
                                    <p>In its original and off-the-shelf design, PMC was planned for 
                                        use in a specific business unit of the company. My team was 
                                        directed to evaluate and adjust the existing capabilities of 
                                        PMC, in order to tailor the application as a viable solution 
                                        for supporting the flight line and field delivery operations.
                                    </p>
                                    <div className='forty-eight'></div>
                                    <p className='label'>NEED FOR REAL-TIME COLLABORATION</p>
                                    <p>Managers had several issues with Excel’s co-authoring feature,
                                        and at the top was the lag that came with the file being hosted
                                        on a shared server. Managers found themselves waiting for 
                                        changes to be reflected, and on top of that the file itself 
                                        was prone to crashing without means of recovery. To better 
                                        ensure success in planning, managers would come in office 
                                        an hour prior to their designated start time. For an activity 
                                        that should only take about fifteen minutes to complete, 
                                        it made little sense for the company to be expending so much 
                                        of a manager’s time.
                                    </p>
                                    <div className='forty-eight'></div>
                                    <p className='label'>DIFFERING BUSINESS CONTEXT</p>
                                    <p>Through the various usability tests, it became clear that the 
                                        original PMC application did not share the same frame of reference 
                                        to what managers were used to working with. At the SDC, managers 
                                        needed visibility of various moving pieces at a high-level. In 
                                        contrast, the original product design required users to drill 
                                        down to focus on lower-level details that managers weren’t 
                                        typically worried about. This meant that instead of reducing 
                                        the burden of the existing process, the product would actually 
                                        be creating more work.
                                    </p>
                                    <div className='forty-eight'></div>
                                    <p className='label'>BONUS: RELIANCE ON PAPER PRINTOUTS</p>
                                    <p>The final output of the process was a single sheet printout 
                                        that could be shared with all employees of the SDC. Since 
                                        not all employees had access to stable internet or mobile 
                                        devices while performing work on airplanes out in the field, 
                                        a print copy of the plan was crucial for managers to be able 
                                        to communicate the daily plan. Since my team was not budgeted 
                                        to devise a strategy for factory mobile devices, we decided 
                                        this particular challenge was outside the project scope.
                                    </p>
                                </div>
                                <div className='break'>
                                    <h3 className='section-title'>Solution Framing</h3>
                                    <p>The business had initially planned for our team to provide 
                                        incremental enhancements to the PMC application in order to 
                                        bridge any functional gaps with our user’s needs — an approach 
                                        that quickly failed after a few sessions of user testing. 
                                        Being a COTS product, it was difficult to balance the needs 
                                        of my users with what was technical feasible for my developers. 
                                        Despite my efforts to work with the original application’s 
                                        limitations, most users still felt that PMC wasn’t designed 
                                        for their context, and did not want to use something that 
                                        would actually increase the amount of work they had to do.
                                    </p>
                                    <p className='montserrat forty-eight'>Managers need a one-stop-shop that 
                                        consolidates relevant information for planning and responds 
                                        quickly to user input.
                                    </p>
                                    <p className='forty-eight'>After presenting the research insights with business stakeholders,
                                         we were given an opportunity to re-think the current design 
                                         with less emphasis on being constrained to the existing 
                                         application. Based on my research, I focused on three key 
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
                                    <h3 className='section-title'>Core Experiences</h3>
                                    <p className='label'>STEP I: TRACKING LABOR</p>
                                    <p>Before creating the daily plan, managers first needed to know
                                        which individuals on the team were available to be assigned 
                                        work. To do so, managers relied on a mix of emails, phone 
                                        calls, text messages, and HR systems to stay informed. Since 
                                        the Excel file was not linked to any particular tool, managers 
                                        were expected to understand the macros put in place to 
                                        accurately reflect the day’s attendance.
                                    </p>
                                    <p>The Excel macros were scripted in a way that made users to have 
                                        to scroll extensively up and down the sheet, and at times even 
                                        navigate to different sheets entirely, in search for needed 
                                        information. Once found, users would then have to get back to 
                                        their original spot within the file and recall the information 
                                        while manually entering it. There was no way to validate the 
                                        correct employee entity, check for spelling errors, or provide 
                                        notice for duplicate records.
                                    </p>
                                    <img className='forty-eight' src="./img/boeing/wireframe_MyTeam.svg" alt="wireflow for My Team" />
                                    <p className='forty-eight'>The most straight forward solution was for PMC to integrate 
                                        directly with the company’s attendance systems. This would 
                                        remove concerns around manual employee verification, and 
                                        automate the attendance tracking process entirely. With this 
                                        approach, I could then focus on designing the interaction 
                                        for making manual adjustments to the attendance information. 
                                        My design goals were to:
                                    </p>
                                    <p>• Reduce the frequency of manual data entry</p>
                                    <p>• Remove the barrier to entry from needing to know Excel macros</p>
                                    <p>• Improve information way finding by simplifying navigation </p>
                                    <img className='forty-eight' src="./img/boeing/MyTeam_main.png" alt="hi-fi of My Team page" />
                                    <p className='forty-eight'>I used a single-page view here, as it most effectively combines 
                                        multiple actions without the need to navigate away to other 
                                        pages of the application. Employees are added into the system 
                                        via ID look up, and once added users would drag and drop the 
                                        entity to one of the four categories: present, absent, loaned, 
                                        or certifying. No manual data entry is required.
                                    </p>
                                    <img className='forty-eight' src="./img/boeing/MyTeam_config.png" alt="hi-fi of My Team configuration page" />
                                    <p className='forty-eight'>Employee configurations such as 
                                        certifications and skill sets are accessed by selecting a name 
                                        from the left side sheet. The side sheet always persist in view 
                                        to ensure better discoverability of the employee configurations. 
                                        Depending on the item selected the right-side view would then 
                                        change accordingly, a common pattern taken from many popular chat 
                                        room applications. For better form readability I split the view 
                                        further into two halves: the left for the user to focus on data 
                                        entry, and the right for reference while inputting information. 
                                        Lastly, I added the multi-selection of employees as an accelerator 
                                        to configuration of multiple individuals at once.
                                    </p>
                                </div>
                                <div className='break'>
                                    <p className='label'>STEP II: MANAGING THE PLAN</p>
                                    <p>Managers needed to have clear visibility and ease of access 
                                        to various moving pieces of information in order to be ready 
                                        to respond at a moments notice. When usability testing the 
                                        original PMC application, many users expressed frustrations 
                                        around having to navigate to different pages in order to find 
                                        information or make edits. Even though everything was encapsulated 
                                        into one application, the burden of having to know where to 
                                        go to access information in a new environment meant it was not 
                                        much better than the existing process. Similar to taking 
                                        attendance, users still had to deal with the same Excel macros 
                                        and navigation issues from before.
                                    </p>
                                    <p>This particular step in the process contained many sub-tasks 
                                        that do not follow a predictable order. Managers have to account 
                                        for the matters such as the assignments of airplanes, employees, 
                                        as well as determining the statements of work for the day — any 
                                        of which could be adjusted in reaction to schedule delays, weather 
                                        conditions, or insufficient labor. The complex nature of the tasks 
                                        at hand also meant the view was packed with information that was 
                                        not very easy to find. This was especially noticeable if managers 
                                        have a busy day, as the lack of information hierarchy resulted in 
                                        an intimidating cluster of text that made the file difficult to 
                                        use effectively.
                                    </p>
                                    <img className='forty-eight' src="./img/boeing/layout-design.svg" alt="wireframe options for My Plan" />
                                    <p className='forty-eight'>The three key principles I kept in mind when designing this view were:</p>
                                    <p>• Provide better information organization and hierarchy</p>
                                    <p>• Consolidate the segmentation of information sources</p>
                                    <p>• Maintain visibility to key information</p>
                                    <p className='forty-eight'>I tested a few different layout variations, 
                                        with the goal of determining the most effective way to organize 
                                        the information in a clear hierarchy. The 4 column grid-layout 
                                        that I went with made the most sense, as stall numbers would 
                                        the unique identifier users scan for when first beginning any 
                                        assignment. Like with the attendance screen, I used a single-page 
                                        view — this time with a tabbed side sheet — to support having 
                                        many possible actions on the page without needing to navigate away.
                                    </p>
                                    <p>Inside the side sheet contained airplane and employee information 
                                        on cards. I wanted to provide immediate visibility to available 
                                        resources in order to help users establish a clear mental model 
                                        of where to look for assignable items, as opposed to making users 
                                        expand a dropdown list.
                                    </p>
                                    <p>To make the ‘assign’ task an easily learnable interaction, I 
                                        wanted users to be able to visualize the associations being 
                                        made as they moved items across the screen. These were three 
                                        main interactions I considered:
                                    </p>
                                    <img src='./img/boeing/interaction-design.png' alt='pros and cons of different interaction options' />
                                    <p className='forty-eight'>Ultimately, I went with dragging and dropping the resource cards 
                                        onto the corresponding column for a particular stall (rows). 
                                        Since the main goal is for users to be able to quickly understand 
                                        how to move objects to different areas on the screen, this 
                                        interaction would draw from my user’s existing understanding and 
                                        familiarity with Windows (especially in regard to how file 
                                        management works). To account for the drawbacks of this interaction,
                                        such as the lack of precision, I made sure to follow best practices
                                        ensuring ease of use.
                                    </p>
                                    <img src='./img/boeing/drag-drop_guide.png' alt='best practices when using drag and drop interactions' />
                                    <p className='forty-eight'>Trello provides a similar use case, where an item is assigned by drag &amp; drop to different target areas.</p>
                                    <img src='./img/boeing/trello.png' alt='screen shot of Trello application' />
                                    <p>Some additional features to further improve the ease of access to information include:</p>
                                    <p>1. Re-arranging stalls with shared resources next to each other 
                                        on the screen. This eliminates the need to use small, often 
                                        indistinguishable icons to indicate resource-sharing or ‘grouped’ 
                                        stalls, and saves the user time by not having to play a memory 
                                        game each time to get this information.
                                    </p>
                                    <p>2. Incorporating airplane schedule information graphically as 
                                        part of PMC, allowing for a more streamlined planning experience 
                                        by eliminating the need for users to go and search for that 
                                        information in another system.
                                    </p>
                                    <p>3. Highlighting employee skill sets and specialties, so that 
                                        managers have an easier time determining who should be assigned 
                                        to a particular job — again without having to open a separate 
                                        system.
                                    </p>
                                    <p>4. Integrating with the real-time airplane tracker system, 
                                        so that the only planes being displayed in the system are 
                                        the ones that currently have jobs that need to be completed.
                                    </p>
                                    <p>5. Column searches for users looking for specific information, 
                                        and filters for those who wish to simplify the view to 
                                        information pertaining to themselves.
                                    </p>
                                    <img src='./img/boeing/MyPlan.png' alt='hi-fi of My Plan page'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}