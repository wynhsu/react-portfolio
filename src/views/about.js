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
                        {/* <h4 className='text-center pb-4'>"If you aren't failing every now and then,
                         you're probably playing it too safe."</h4>
                        <h6 className='text-center'>Woody Allen</h6> */}
                    </div>
                    <div className='spacing container'>
                        <div className='gutter'>
                            <img className='gutter' src="./img/profile.JPG" alt="me" />
                        </div>
                        <h3 className='text-center p-4'>Hey there! Thanks for stopping by</h3>
                        <p className='gutter text-center p-3'>My name is Wynston - and yes, that's with a 'y' 
                            <span role="img" aria-label="sheep"> 😎</span>
                        </p>
                        <p className='gutter'>I'm a product designer with a passion for environmental
                            sustainability and positive social change. I currently work at Boeing,
                            where I have the unique opportunity to impact the daily lives of its employees
                            by improving upon enterprise software and manufacturing processes.
                        </p>
                        <p className='gutter'>What I love most about being a designer is the chance to
                            practice empathy and creativity on a daily basis. I find it extremely 
                            rewarding to create designs that are not only useful to others, but also 
                            delightful to interact with. While I am an introvert at heart, I value
                            collaboration with others and see differences in perspectives as opporunities
                            for us to grow as individuals.
                        </p>
                        <p className='gutter'>In my free time I enjoy immersing myself in works of fiction,
                            whether it be movies, shows, or games. I am also learning to be a better cook
                            by expanding my repertoire of vegetarian recipes.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}