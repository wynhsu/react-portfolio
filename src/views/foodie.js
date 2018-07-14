import React from 'react';
import Navbar from '../components/navbar.js';
import Image from '../components/image.js';
import constants from '../include/constants.js';
import '../css/ui.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class Foodie extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        const {
            timeline = ["INFO 330: Information Architecture", "January - March, 2018", "10 weeks"],
            members = ["Calvin Chen", "Luke Allen", "Solayman Yousuf", "Tyler Treat"],
            skills = ["Wireframes", "Information Personas", "Storyboard", "Business Case", "Site Map", "Hi-fi Prototypes"]
        } = this.props;

        return (
            <div>
                <Navbar />
                <div>
                    <div className='header'>
                        <h3 className='text-center'>Foodie Fanatic</h3>
                        <p className='text-center'>Bridging the gap between users and company through culinary satisfaction</p>
                    </div>
                    <div>
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
                        <div className='row'>
                            <div className='col-md-9'>
                                <h3 className='font-weight-light'>Background</h3>
                                <p>Foodie Fanatic is a mock client created by Professor Mike Doane for the course INFO330 Information Architecture. As a design team we have been given a series of information from the client, including the company's business objective, vision, and current issues.</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <img od='splash' src='./img/foodie/splash.png' alt="splash" />
                    </div>
                    <div className='spacing container'>
                        <div className='row'>
                            <div className='col-md-9'>
                                <h3 className='font-weight-light'>Problem</h3>
                                <p>Current issues mainly stem from two factors: One is the convoluted nature of the site's IA, resulting in difficulty navigating hidden or nested content. The second is caused by low level of relevance of search results, as well as the overwhelming number of irrelevant options currently offered.</p>
                            </div>
                        </div>
                    </div>
                    <div className='spacing container'>
                        <div className='row'>
                            <div className='col-md-9'>
                                <h3 className='font-weight-light'>Content Strategy</h3>
                                <p> •  Ease of use and access, focusing on mobile first.</p>
                                <p> •  Clarity and relevance to what the users are looking for.</p>
                                <p> •  A sense of community and social interaction between users.</p>
                                <p> •  Involvement and inclusion of all users with diverse skills, backgrounds, and experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Information Personas</h3>
                        <Carousel>
                            <div>
                                <img src="./img/foodie/valerie.png" alt="persona1" />
                            </div>
                            <div>
                                <img src="./img/foodie/deborah.png" alt="persona1" />
                            </div>
                            <div>
                                <img src="./img/foodie/riz.png" alt="persona1" />
                            </div>
                        </Carousel>
                    </div>
                    <Image title='User Flow' link='./img/foodie/user_flow.png' descr='user_flow' />
                    <Image title='Site Map' link='./img/foodie/sitemap.png' descr='site_map' />
                    <Image title='Wireframes' link='./img/foodie/wireframe.png' descr='wireframes' />
                    <Image title='Final Screens' link='./img/foodie/final.png' descr='hi-fis' />
                    <p className='text-center footer'>&#169;2018 Wynston Hsu. Created with React.js</p>
                </div>
            </div>
        );
    }
}
