import React from 'react';
import Navbar from '../components/navbar.js';
import Image from '../components/image.js';
import Navbtns from '../components/navbtns.js';
import Footer from '../components/footer.js';
import constants from '../include/constants.js';
import '../css/ui.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class Breez extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {
            timeline = ["INFO 365: Mobile Application Design", "September - December, 2017", "10 weeks"],
            members = ["Brent Gruenke", "Cynthia Richey", "Eduardo Rojas", "Mike Eacker", "Sangwoo Martin Song"],
            skills = ["Wireframes", "Personas", "Competitive Analysis", "Hi-fi Mockups"]
        } = this.props;

        return (
            <div>
                <Navbar pathname={constants.routes.Work} />
                <div>
                    <div className='header'>
                        <h3 className='text-center'>Breez Mobile OS</h3>
                        <p className='text-center'>A language inspired by people and in harmony with nature</p>
                    </div>
                    <Navbtns />
                    <div className='banner'>
                        <img src={constants.images.breez} alt="banner" />
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
                        <h3 className='font-weight-light'>Background</h3>
                        <p>The Breez mobile operating system was designed for the mobile application
                            design course in the Informatics department at the University of Washington.
                            The project's focus was to design a new and original OS along with 14 core
                            applications. The project was divided into six sprints, with the final grade
                            being awarded based on a deliverable and app review by seven professional
                            designers.</p>
                    </div>
                    <div className='spacing container'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div className='pt-4'>
                                    <h3 className='font-weight-light'>Problem</h3>
                                    <p>Social disconnect stemming from convenient and prevalent access
                                        to technology has become a major problem of the century. We
                                        observed an upsizing of phone screens in current market trends
                                        leading to difficulties of usage, especially for one hand.</p>
                                </div>
                                <div className='pt-4'>
                                    <h3 className='font-weight-light'>Approach</h3>
                                    <p>Create an OS that minimized the amount of clutter, noise, and
                                        distractions. Focus on the utilization of natural and intuitive
                                        gestures to accommodate one-hand use.</p>
                                </div>
                            </div>
                            <div className='col-md-4 pt-5'>
                                <img src="./img/breez/ideation.jpg" alt="ideation" />
                                <p className='caption'>We began our design process with an affinity
                                    diagram of what our team like or disliked about current mobile
                                    environments on the market.</p>
                            </div>
                        </div>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Design Language</h3>
                        <div className='row pt-2'>
                            <div className='col-md-4'>
                                <div className='ml-auto mr-auto'>
                                    <h5>FOCUSED</h5>
                                    <p>Minimize distraction in the form of colors, motion, and noise.
                                        Encourage productivity and mindful usage.</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='ml-auto mr-auto'>
                                    <h5>RESPONSIVE</h5>
                                    <p>Adapts and evolves, to become the extension of one's body and mind.
                                        Utilize motion and form to provide a natural experience.</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='ml-auto mr-auto'>
                                    <h5>CONVENIENT</h5>
                                    <p>Facilitate the needs of the user without embellishing or distracting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Personas</h3>
                        <Carousel>
                            <div>
                                <img src="./img/breez/persona_Brian.png" alt="persona1" />
                            </div>
                            <div>
                                <img src="./img/breez/persona_Samantha.png" alt="persona2" />
                            </div>
                        </Carousel>
                    </div>
                    <div className='spacing container'>
                        <div className='row'>
                            <div className='col-md-9'>
                                <h3 className='font-weight-light'>System and Gestures</h3>
                                <p>Our intention was to design for maximum comfort and functionality,
                                    through the utilization of natural human motions and gestures.
                                    We adopted this heat map illustrating the reachable zones on
                                    screen during one-hand use as a core focus, and designed our
                                    interactions around the 'natural' zones on screen.</p>
                                <img src="./img/breez/gestures.svg" alt="gestures" />
                            </div>
                            <div className='col-md-3'>
                                <img src="./img/breez/heat_map.png" alt="heatmap" />
                            </div>
                        </div>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Competitive Analysis</h3>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src="./img/breez/netflixui.jpg" alt="netflix" />
                                <img src="./img/breez/appletvui.png" alt="appletv" />
                                <p className='caption'>The Assistive Reach feature of our design was
                                    inspired by the selection indicators from both Apple TV and Netflix.
                                    Using either highlighting or change in size, the two allow users
                                    to navigate among items similar to a cursor.</p>
                            </div>
                            <div className='col-md-6'>
                                <img className='pt-5 pb-5' src="./img/breez/iphone.png" alt="iphone" />
                                <img className='pb-5' src="./img/breez/android.png" alt="android" />
                                <p className='caption'>Our OS global controls were inspired by qualities
                                    that can be found from both Android and iPhones. Combining the features
                                    we found best on both devices, we were able to create for something
                                    that resonated with our design language.</p>
                            </div>
                        </div>
                    </div>
                    <Image title="Concept Wireframes" link="./img/breez/wireframes.svg" descr="wireframes" />
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Process and Iteration</h3>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h5>Action Orbiter</h5>
                                <p>Inspired by Google's Material Design, our team decided to incorporate
                                    many of what we thought were the best components into Breez. We
                                    utilized Material's color palette, as well as its flat design
                                    look and feel. Additionally, we drew inspiration from the floating
                                    action button present in many of Google's applications. The
                                    Action Orbiter - as we call it, would provide prominent
                                    functionalities on the screen and allows users to easily
                                    access them with one hand.</p>
                            </div>
                            <div className='col-md-6'>
                                <img src="./img/breez/orbiter.png" alt="orbiter" />
                            </div>
                        </div>
                        <div>
                            <img src="./img/breez/iteration.png" alt="iteration" />
                        </div>
                        <p>Through our iterations, we would come to eventually abandon the idea of
                            the orbiter. This decision was made due to many factors regarding
                            feasibility and time constraint. It was illuminated to us during
                            critique by professional designers that while the Action Orbiter
                            provided access to features during one hand usage, it was at the
                            cost of keeping said features hidden from the users. In addition
                            to being hidden, the features within the orbiter differed depending
                            on the app, which added another layer of complexity as it left
                            users guessing what options were possible on each screen.</p>
                        <p className="topSpacer">In our final development version, we were able to implement
                            an alternative solution to the orbiter using a bottom-oriented bar that contained
                            the core features on a given screen. While this version of our approach did not
                            provide full one-hand access to all functions, we believed that it would
                            still accomplish our intention for the majority.</p>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Final Screens</h3>
                        <div className='pb-4'>
                            <h5 className='text-center'>Systems</h5>
                            <img src="./img/breez/systems.png" alt="systems" />
                        </div>
                        <div className='pb-4'>
                            <h5 className='text-center'>Communication &amp; Productivity</h5>
                            <img src="./img/breez/combined.png" alt="communication productivity" />
                        </div>
                        <div className='pb-4'>
                            <h5 className='text-center'>Media</h5>
                            <img src="./img/breez/media.png" alt="media" />
                        </div>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Reflection</h3>
                        <p>Designing the Breez OS was one of the most intensive processes I’ve experienced,
                            and I was able to learn a lot from it as a designer. Working in a large team with
                            such a diverse group of designers had both its benefits and drawbacks. On one
                            hand, we were able to efficiently accomplish the goals for each sprint by dividing
                            and conquering the work. It was also a great learning opportunity for me being
                            exposed to many different design perspectives and approaches. However, this also
                            meant that differences in opinions were sometimes difficult to settle. This was
                            especially true during deliverable reviews, where we would showcase our designs
                            to be combined with the rest of the team’s, in order to ensure the delivery
                            of a comprehensive and cohesive system.</p>
                        <p>My key takeaway from this project would be to utilize a design system or style guide
                            earlier on in the project. While our team did eventually have one, it was finalized
                            too late in the design process, which meant we had to go back and clean up a lot of
                            the earlier work. Having a clearly established design system would allow each team
                            member to refer back to it when designing their own portions of the project, and
                            save a lot of time when deliberating the design decisions made. </p>
                        <p>Read more in detail on our <a href="./breez_appendix.pdf" target='_blank'>
                            Appendix</a></p>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}