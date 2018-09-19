import React from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import constants from '../include/constants.js';
import '../css/ui.css';

export default class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <Navbar pathname={this.props.location.pathname} />
                <div id='quote'>
                    <div className='spacing'>
                        <h2 className='text-center pb-4'>"If you aren't failing every now and then, you're probably playing it too safe."</h2>
                        <h5 className='text-center'>- Woody Allen</h5>
                    </div>
                    <div className='spacing container'>
                        <img className='gutter' src="./img/linkedin.jpg" alt="me" />
                        <h3 className='text-center p-4'>Wynston Hsu</h3>
                        <p className='gutter'>I am a Senior Informatics student at the University of Washington. While I am pursuing a degree focused on Human-Computer Interaction, I like to keep myself well-rounded by improving my development skills as well. In my free time I find myself looking for inspiration on Dribbble and Behance, as seeing other's creative work has always motivated me to push myself further. Currently, I am making my way through <a href="http://www.dailyui.co/">Daily UI</a>'s 100 Day Design Challenge (Although they aren't so daily these days).</p>
                        <p className='gutter'>Aside from my career and academics, I enjoy the outdoors especially going on hikes or visiting the beach. Most recently, I went camping at <a href='https://www.nps.gov/olym/planyourvisit/visiting-staircase.htm'>Staircase</a> Olympic National Park with my brother and friends.</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}