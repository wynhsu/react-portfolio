import React from 'react';
import Navbar from '../components/navbar.js';
import Image from '../components/image.js';
import Footer from '../components/footer.js';
import constants from '../include/constants.js';
import '../css/ui.css';

export default class EcoSnap extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {
            timeline = ["INFO 448: Android Development", "May - June, 2018", "3 weeks"],
            members = ["Aaron Nguyen", "Bao Dinh", "Eric Jacobson"],
            skills = ["Kotlin", "Tensorflow", "Firebase", "Hi-fi Mockups"]
        } = this.props;

        return (
            <div>
                <Navbar pathname={constants.routes.Work} />
                <div>
                    <div className='header'>
                        <h3 className='text-center'>EcoSnap</h3>
                        <p className='text-center'>Environmentally conscious Android application that utilizes
                         Deep Learning to classify whether an object is recyclable or non-recyclable.</p>
                    </div>
                    <div className='banner'>
                        <img src={constants.images.esBanner} alt="banner" />
                    </div>
                    <div className='spacing container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='ml-auto mr-auto'>
                                    <h5 className='text-center'>TIMELINE</h5>
                                    {
                                        timeline.map((item) => {
                                            return (
                                                <p className='text-center'>{item}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='ml-auto mr-auto'>
                                    <h5 className='text-center'>MEMBERS</h5>
                                    {
                                        members.map((member) => {
                                            return (
                                                <p className='text-center'>{member}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='ml-auto mr-auto'>
                                    <h5 className='text-center'>SKILLS</h5>
                                    {
                                        skills.map((skill) => {
                                            return (
                                                <p className='text-center'>{skill}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Project Description</h3>
                        <p>This application was created for our Android Mobile Development course to
                            serve as the final product to demonstrate our proficiency with the Android
                            ecosystem. Initially our group wanted to recreate Not Hotdog, the famous
                            mobile app from HBO’s hit show Silicon Valley, but was later influenced
                            by a greater cause. A greater cause coming in the form of a group member
                            that had minimum knowledge on how to recycle. We wanted to create a
                            solution that benefitted those who share the same lack of knowledge
                            on recycling. This resulted in us pivoting to create an app that
                            allowed users to utilize the camera on their phone to distinguish
                            between objects that may or may not be recyclable.</p>
                    </div>

                    <div className='spacing container'>
                        <div>
                            <h3 className='font-weight-light'>Purpose</h3>
                            <p> •  Help people learn what is and isn’t recyclable.</p>
                            <p> •  Streamline the recycling process to reduce uncertainty and
                                     incovenience.</p>
                            <p> •  Increase awareness and promote the importance of recycling.</p>
                            <p> •  Aim towards making a positive impact on our environment.</p>
                        </div>
                    </div>

                    <div className='spacing container'>
                        <div>
                            <h3 className='font-weight-light'>Target Users</h3>
                            <p> •  People who want to make more environmentally conscious decisons
                                     and recycle properly.</p>
                            <p> •  People who aren’t completely knowledgeable or familiar in the
                                     area of recycling.</p>
                            <p> •  Everyone. We only have one Earth and it is everyone’s responsibility
                                     to take care of it!.</p>
                        </div>
                    </div>

                    <div className="spacing container">
                        <img className='pt-4' src="./img/coding/ecosnap/benefits.png" alt="features" />
                    </div>

                    <div className="spacing container">
                        <h3 className='font-weight-light'>Design</h3>
                        <p>Since this was not a design course, I did not dwell on typical design deliverables
                            when approaching this project. Instead, I took a Lean approach and completed the
                            components I needed in order to guarantee successful hand off to my team of coders
                            for development. After establishing the core features and user stories as a team,
                            I began sketching out initial screens for wireframes. As we only had 3 weeks to 
                            complete this project, time constraint was a big factor when considering the design
                            decisions of the app. I opted to stick with Material Design guidelines, and utilized
                            the Material component library as much as possible so my team and I would not have to
                            spend additional time create custom components ourselves. Before transitioning to hi-fi
                            mockups, I quickly established a style guide containing guidelines for our color and
                            typography usage in order to ensure consistency in the development phase. Lastly,
                            I also drew up a custom logo for the application.</p>
                    </div>

                    {/* placeholder */}
                    {/* <div className="spacing container">
                        <h3 className='font-weight-light'>Final Screens</h3>
                        <p>In Progress!</p>
                    </div> */}
                    <Image title="Final Screens" link="./img/coding/ecosnap/all_screens.png" descr="hi-fi" />

                    <div className="spacing container">
                        <h3 className='font-weight-light'>Takeaways</h3>
                        <p>Overall, this was a pretty large task to be completed in 3 weeks. On top of
                            spearheading the entire design of the application, I also took care of
                            portions of the front-end UI as well as handling basic functionalities
                            for user interaction. Besides training the image classification model
                            which took a decent amount of time, my team and I struggled the most
                            with organizing data collection and transfer between different Fragments
                            and Activities within a complex Android project structure. Additionally,
                            we also ran into trouble where large quantities of images in the
                            History view would drastically slow down the performacne of our
                            app. To remedy this, we had to optimize the RecyclerView and
                            Adapter to better handle the mass quantity of images users could
                            potentially have.</p>
                        <p className="topSpacer">This project shows a lot of potential, as it derives from an actual
                            problem space and has an applicable daily use. Some future updates we
                            could implement if we had the time include integrating with social
                            media options, maintaining user data on our own backend servers,
                            running a Native build to support both Android and iOS platforms,
                            which will in turn warrent a UI redesign of the app to have a
                            less Material feel. Of course, our classification model could
                            alwasy be further refiend for accuracy. With enough training,
                            the application could even go beyond just recycling or not,
                            and identify additional criteria such as garbage and compost
                            as well.</p>
                    </div>

                    <div className='spacing'>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}