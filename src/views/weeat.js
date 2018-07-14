import React from 'react';
import Navbar from '../components/navbar.js';
import Image from '../components/image.js';
import constants from '../include/constants.js';
import '../css/ui.css';

export default class WeEat extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        const {
            timeline = ["INFO 498: Rapid Prototyping", "March - May, 2018", "10 weeks"],
            members = ["Anushree Shukla", "Eric Jacobson", "Estelle Jiang", "Sangwoo Martin Song", "Yuliya Labaz", "Zhiqi ZK Lin"],
            skills = ["Wireframes", "Personas", "Competitive Analysis", "Hi-fi Prototypes"]
        } = this.props;

        return (
            <div>
                <Navbar />
                <div>
                    <div className='header'>
                        <h3 className='text-center'>Breez Mobile OS</h3>
                        <p className='text-center'>A language inspired by people and in harmony with nature</p>
                    </div>
                    <div>
                        <img src={constants.images.weEat} alt="banner" />
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
                        <h3 className='font-weight-light'>Discovery</h3>
                        <p>With increasing diversity of people in the Greater Seattle area, there is an increasing need to introduce better culturally diverse experiences similar to other global cities like San Francisco or New York Through our team’s experience, we realized that most ethnic restaurants in the city did not offer an wholesome authentic food experience. Instead of replying on commercial restaurants, we sought to utilize the skills and expertise of passionate home chefs to provide these experiences.</p>
                        <img className='pt-4' src="./img/weEat/benefits.png" alt="features" />
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>User Research</h3>
                        <div className='row'>
                            <div className='col-md-6 gutter'>
                                <img src="./img/weEat/user_research_i.svg" alt="stats" />
                                <p>of users surveyed in the Greater Seattle area attested that finding authentic cuisine was moderate to very difficult</p>
                            </div>
                            <div className='col-md-6 gutter'>
                                <img src="./img/weEat/user_research_ii.svg" alt="stats" />
                                <p>of local home chefs surveyed said they enjoyed cooking for others and are passionate about it</p>
                            </div>
                        </div>
                        <p className='pt-2'>During our interviews we discovered there are definitely users willing to pay for a dining experience connecting them to authentic cuisines. One user mentioned they would be interested in an application that could provide “more authentic foods than restaurants and cheaper prices”, which is what our service aimes to accomplish. However, other users were worried about the quality of food that the local chefs would be able to provide.</p>
                        <p>In terms of chefs, there were initial concerns regarding safety and willingness to invite others into their homes to dine. While our team recognized the legitimacy of these concerns, we felt that our research was conclusive enough to prove that a demand exists for such a service. Our service would draw parallels to other on-demand companies like Airbnb and Uber that leverage the share economy.</p>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Competitive Analysis</h3>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src="./img/weEat/bonappetour_i.jpg" alt="bonapp" />
                            </div>
                            <div className='col-md-3'>
                                <img src="./img/weEat/bonappetour_ii.jpg" alt="bonapp" />
                            </div>
                            <div className='col-md-3'>
                                <img src="./img/weEat/eatwith.jpg" alt="eatwith" /></div>
                            <div className='col-md-3'>
                                <img src="./img/weEat/yumso.jpg" alt="yumso" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <p className='caption'>BonAppetour presented severely limiting options in the Greater Seattle area. Additionally, the interface of the app relied heavily on textand had very little photos.</p>
                            </div>
                            <div className='col-md-3'>
                                <p className='caption'>Eatwith had good visuals and a stunning UI, but was targeted to market globally.</p></div>
                            <div className='col-md-3'>
                                <p className='caption'>Yumso! while based in Seattle, catered more specifically to the Chinese market.</p></div>
                        </div>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>User Flow</h3>
                        <img className='d-block ml-auto mr-auto pb-4'
                            src="./img/weEat/user_flow_user.png" alt="user_flow" />
                        <p className='caption text-center'>User Flow for Food Lovers</p>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Service Map</h3>
                        <img className='d-block ml-auto mr-auto pb-4'
                            src="./img/weEat/service_map_chef.png" alt="service_map" />
                        <p className='caption text-center'>Service Map for Home Chefs</p>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Wireframes</h3>
                        <img className='d-block ml-auto mr-auto pb-4'
                            src="./img/weEat/sketch.png" alt="sketches" />
                        <img src="./img/weEat/wireframes.png" alt="wireframes" />
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Usability Testing</h3>
                        <div className='row pb-4'>
                            <div className='col-md-8'>
                                <h5>Food Lover</h5>
                                <p>We were able to identify a handful of issues regarding the app’s details and flow. Aside from functional errors with the prototype, the general consensus was that the app currently felt too similar to other restaurant finding apps already on the market. Users expected many of the same functionality that other well known apps such as Yelp provided. Users did not picked up on the fact that events created by individual home chefs, and not commercial restaurants.</p>
                            </div>
                            <div className='col-md-4'>
                                <img src="./img/weEat/usability_i.jpg" alt="usability" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8'>
                                <h5>Home Chef</h5>
                                <p>Many users had difficulty understanding the navigation, and were unsure of where to go to complete certain tasks. Each had their own difficulty understanding the certain components, and were overwhelmed with the amount of information presented. Our taxonomy was unclear and participants had a hard time distinguishing an “event” from a “place”. We were able to find other small things that were unclear to the users, such as extra features that users did not find necessary in the application.</p>
                            </div>
                            <div className='col-md-4'>
                                <img src="./img/weEat/usability_ii.jpg" alt="usability" />
                            </div>
                        </div>
                    </div>
                    <Image title="Final Screens" link="./img/weEat/final.png" descr="hi-fi" />
                    <div className='spacing container pb-4'>
                        <h3 className='font-weight-light'>Reflection</h3>
                        <p>Multiple iterations of usability testing reinforced the importance of validating the need for a product with potential users. It was extremely helpful to work closely with users each sprint and adjusting designs based off the feedback we received. Our team also learned the values of working in a large group setting and understanding each other’s differences of opinion in design. Achieving the perfect balance between incorporating good ideas while tactfully declining those that didn’t quite work out, allowed us to create a final product that feels consistent and complete.</p>
                    </div>
                    <p className='text-center footer'>&#169;2018 Wynston Hsu. Created with React.js</p>
                </div>
            </div>
        );
    }
}