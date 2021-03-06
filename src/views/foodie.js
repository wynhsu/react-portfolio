import React from 'react';
import Navbar from '../components/navbar.js';
import Image from '../components/image.js';
import Navbtns from '../components/navbtns.js';
import Footer from '../components/footer.js';
import constants from '../include/constants.js';
import '../css/ui.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class Foodie extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {
            timeline = ["INFO 330: Information Architecture", "January - March, 2018", "10 weeks"],
            members = ["Calvin Chen", "Luke Allen", "Solayman Yousuf", "Tyler Treat"],
            skills = ["Wireframes", "Information Personas", "Storyboard", "Business Case", "Site Map",
                "User Flow", "Hi-fi Mockups"]
        } = this.props;

        return (
            <div>
                <Navbar pathname={constants.routes.Work} />
                <div>
                    <div className='header'>
                        <h3 className='text-center'>Foodie Fanatic</h3>
                        <p className='text-center'>Bridging the gap between users and company through
                         culinary satisfaction</p>
                    </div>
                    <Navbtns />
                    <div className='banner'>
                        <img src={constants.images.foodie} alt="banner" />
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
                        <p>Foodie Fanatic is a mock client created by Professor Mike Doane for the
                            intro to information architecture course in the Informatics department
                            at the University of Washington. As a design team we have been tasked
                            with analyzing the current pain points on the client’s website and
                            redesign it based on our knowledge as professionals in the field of IA.
                            We were given a series of documents containing information regarding
                            the client, including the company's business objective, vision, and
                            current issues. This project was divided into six core deliverables,
                            with the final being presentation to the client. I was mainly
                            responsible as a UX designer and content strategist.</p>
                    </div>
                    <div className='pt-5 text-center'>
                        <img id='splash' src='./img/foodie/splash.png' alt="splash" />
                    </div>
                    <div className='spacing container'>
                        <div className='row'>
                            <div className='col-md-9'>
                                <h3 className='font-weight-light'>Problem</h3>
                                <p>Current issues mainly stem from two factors: One is the convoluted
                                    nature of the site's IA, resulting in difficulty navigating hidden
                                    or nested content. The second is caused by low level of relevance
                                    of search results, as well as the overwhelming number of irrelevant
                                    options currently offered.</p>
                            </div>
                        </div>
                    </div>
                    <div className='spacing container'>
                        <div>
                            <h3 className='font-weight-light'>Content Strategy</h3>
                            <p> •  Ease of use and access, focusing on mobile first.</p>
                            <p> •  Clarity and relevance to what the users are looking for.</p>
                            <p> •  A sense of community and social interaction between users.</p>
                            <p> •  Involvement and inclusion of all users with diverse skills,
                                    backgrounds, and experiences.</p>
                        </div>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Information Personas</h3>
                        <Carousel>
                            <div>
                                <img src="./img/foodie/valerie.png" alt="persona1" />
                            </div>
                            <div>
                                <img src="./img/foodie/deborah.png" alt="persona2" />
                            </div>
                            <div>
                                <img src="./img/foodie/riz.png" alt="persona3" />
                            </div>
                        </Carousel>
                    </div>
                    <Image title='User Flow' link='./img/foodie/user_flow.png' descr='user_flow' />
                    <Image title='Site Map' link='./img/foodie/sitemap.png' descr='site_map' />
                    <Image title='Wireframes' link='./img/foodie/wireframe.png' descr='wireframes' />
                    <Image title='Final Screens' link='./img/foodie/final.png' descr='hi-fis' />
                    <div className='spacing container'>
                        <p>Read more in detail on our <a href="./ff_appendix.pdf" target='_blank'>Appendix</a></p>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}
