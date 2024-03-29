import React from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import constants from '../include/constants.js';
import '../css/ui.css';
import '../css/wwf.css';

export default class WWF extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {
            timeline = ["INFO 343: Client-Side Web Development", "November - December, 2017", "3 weeks"],
            members = ["Charlye Castro", "Christian Hahn", "Ian Figon"],
            skills = ["React.js", "Firebase", "Bootstrap"]
        } = this.props;

        return (
            <div>
                <Navbar pathname={constants.routes.Work} />
                <div>
                    <div className='header'>
                        <h3 className='text-center'>Words With Friendz</h3>
                        <a className='btn mr-auto ml-auto glass' role="button"
                            href='https://wynhsu.github.io/words-with-friends/#/'
                            target='_blank'>Play!</a>
                    </div>
                    <div className='banner'>
                        <img src={constants.images.wwfBanner} alt="banner" />
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
                        <p>We replicated the popular game - Words with Friends, used the Oxford
                             Dictionary API to determine whether the players use valid words. In
                              addition to maintaining and integrating the code base, I oversaw the
                               application's overall UI &amp; UX designs. This web app uses the
                                React js framework, and Firebase servers to host user data.</p>
                    </div>
                    <div className='spacing'>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}