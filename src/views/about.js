import React from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import constants from '../include/constants.js';
import '../css/ui.css';

export default class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Navbar pathname={this.props.location.pathname} />
                <div id='quote'>
                    <div className='spacing'>
                        <h4 className='text-center pb-4'>"If you aren't failing every now and then,
                         you're probably playing it too safe."</h4>
                        <h6 className='text-center'>Woody Allen</h6>
                    </div>
                    <div className='spacing container'>
                        <div className='gutter'>
                            <img className='gutter' src="./img/linkedin.jpg" alt="me" />
                        </div>
                        <h3 className='text-center p-4'>Wynston Hsu</h3>
                        <p className='gutter'>I am a senior Informatics student at the University of Washington.
                            While my area of focus is on Human-Computer Interaction, I like to keep myself
                            well-rounded by also improving upon my coding skills. My passion for design
                            stems from empathy and creativity. I find it extremely rewarding to create
                            designs that are not only useful to others, but also delightful to interact
                            with. While I take pride in the products I design, I also find beauty in
                            the collaborating with others as I think different perspectives allow us to grow
                            as individuals.</p>
                        <p className='gutter'>In my free time I find myself looking for inspiration on
                            Dribbble and Behance, or reading Medium articles on the latest in design.
                            Seeing other's creative work has always motivated me to push myself further.
                            Currently, I am making my way through <a href="http://www.dailyui.co/">Daily UI</a>'s
                            100 Day Design Challenge.</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}