import React from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import constants from '../include/constants.js';
import '../css/ui.css';

export default class CourtVision extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {
            timeline = ["INFO 449: iOS Development", "November - December, 2018", "3 weeks"],
            members = ["Aaron Nguyen", "Anirudh Subramanyam", "Tejveer Rai"],
            skills = ["Swift", "Firebase", "Wireframes", "Hi-fi Mockups"]
        } = this.props;

        return (
            <div>
                <Navbar pathname={constants.routes.Work} />
                <div>
                    <div className='header'>
                        <h3 className='text-center'>CourtVision</h3>
                        <p className='text-center'></p>
                    </div>
                    <div className='banner'>
                        <img src={constants.images.cvBanner} alt="banner" />
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
                        <p>In Progress!</p>
                    </div>
                    <div className='spacing'>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}