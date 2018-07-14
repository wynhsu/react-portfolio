import React from 'react';
import Navbar from '../components/navbar.js';
import constants from '../include/constants.js';
import '../css/ui.css';

export default class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div id='quote'>
                    <div className='spacing'>
                        <h2 className='text-center pb-4'>"If you aren't failing every now and then, you're probably playing it too safe."</h2>
                        <h5 className='text-center'>- Woody Allen</h5>
                    </div>
                    <div className='spacing container'>
                        <img className='gutter' src="./img/linkedin.jpg" alt="me" />
                        <h3 className='text-center pt-4'>Wynston Hsu</h3>
                        <p className='gutter'>I am a Senior Informatics student at the University of Washington. While I am pursuing a degree focus in Human-Computer Interaction, I like to keep myself well-rounded by improving my development skills as well. Creative freedom is something I value deeply, and seeing other's creative work has always inspired me to push myself and do the same. On my own time, I enjoy tackling personal graphics design projects.</p>
                        <p className='gutter'>Aside from my career and academics, I am a man of the outdoors and enjoy going on hikes or trips to the beach. With my hometown being in Camas Washington, my favorite spots to go are along the Columbia River Gorge. Most recently, I visited <a href='https://gorgefriends.org/hike-the-gorge/falls-creek-falls.html'>Falls Creek Falls</a> and <a href='https://gorgefriends.org/hike-the-gorge/panther-creek-falls.html'>Panther Creek Falls</a> with my family.</p>
                    </div>
                </div>
                <p className='text-center footer'>&#169;2018 Wynston Hsu. Created with React.js</p>
            </div>
        );
    }
}