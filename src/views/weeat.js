import React from 'react';
import Navbar from '../components/navbar.js';
import Navbtns from '../components/navbtns.js';
import Image from '../components/image.js';
import Footer from '../components/footer.js';
import constants from '../include/constants.js';
import '../css/ui.css';

import Iframe from 'react-iframe';

export default class WeEat extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {
            timeline = ["INFO 498: Rapid Prototyping", "March - May, 2018", "10 weeks"],
            members = ["Anushree Shukla", "Eric Jacobson", "Estelle Jiang", "Sangwoo Martin Song",
             "Yuliya Labaz", "Zhiqi ZK Lin"],
            skills = ["Wireframes", "Personas", "Competitive Analysis", "Hi-fi Prototypes",
             "User Flows", "Usability Testing", "User Research"]
        } = this.props;

        return (
            <div>
                <Navbar pathname={constants.routes.Work} />
                <div>
                    {/* <div className='header'>
                        <h3 className='text-center'>WeEat</h3>
                        <p className='text-center'>An easy, convenient way to authentic cuisines provided
                            by experienced local chefs</p>
                    </div> */}
                    <Navbtns />
                    <div className='banner'>
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
                        <h3 className='font-weight-light'>Background</h3>
                        <p>WeEat is a service platform designed for the rapid prototyping course in the
                            Informatics department at the University of Washington. The product leverages
                            the two-way marketplace between foodies and home chefs to facilitate a
                            unique culinary experience through dining. The project was divided into five
                            sprints, with the final deliverable being a pitch deck and a prototype demo
                            to a panel of professional designers. As one of the five UX designers on
                            the team, I primarily worked on the home chef application.</p>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Discovery</h3>
                        <p>With a diversifying population in the Greater Seattle area, there is a growing
                            need to introduce more culturally immersive dining opportunities similar to
                            cities such as San Francisco or New York. From the collective understanding
                            of our team members, we have come to realize that most ethnic restaurants
                            in the city did not offer a complete authentic experience. Instead of
                            relying on commercial restaurants, we sought to utilize the skills and
                            expertise of passionate home chefs to provide these experiences.</p>
                        <img className='pt-4' src="./img/weEat/benefits.png" alt="features" />
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>User Research</h3>
                        <div className='row'>
                            <div className='col-md-6 gutter'>
                                <img src="./img/weEat/user_research_i.svg" alt="stats" />
                                <p>of users surveyed in the Greater Seattle area attested that finding
                                    authentic cuisine was moderate to very difficult</p>
                            </div>
                            <div className='col-md-6 gutter'>
                                <img src="./img/weEat/user_research_ii.svg" alt="stats" />
                                <p>of local home chefs surveyed said they enjoyed cooking for others
                                    and are passionate about it</p>
                            </div>
                        </div>
                        <p className='pt-2'>During our interviews we discovered there are definitely
                            users willing to pay for dining experiences connecting them to authentic
                            cuisines. One user mentioned they would be interested in an application that
                            could provide “more authentic foods than restaurants and cheaper prices”,
                            which is what our service aimed to accomplish. However, there were some
                            users worried about the quality of food that the local chefs would be
                            able to provide.</p>
                        <p>In terms of chefs, there were initial concerns regarding the safety and
                            willingness to invite others into their homes to dine. While our team
                            recognized the legitimacy of these concerns, we felt that our preliminary
                            research was sufficient to demonstrate a demand for such a service
                            exists. Our service would draw parallels to other on-demand companies
                            like Airbnb and Uber that leverage the share economy.</p>
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
                                <p className='caption'>BonAppetour presented severely limiting options
                                    in the Greater Seattle area. Additionally, the interface of the app
                                    relied heavily on textand had very little photos.</p>
                            </div>
                            <div className='col-md-3'>
                                <p className='caption'>Eatwith had good visuals and a stunning UI,
                                    but was targeted to market globally.</p></div>
                            <div className='col-md-3'>
                                <p className='caption'>Yumso! while based in Seattle, catered more
                                    specifically to the Chinese market.</p></div>
                        </div>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>User Flow</h3>
                        <img className='d-block ml-auto mr-auto pb-4'
                            src="./img/weEat/user_flow_user.png" alt="user_flow" />
                        <p className='caption text-center'>User Flow for Foodies</p>
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
                                <h5>Foodies</h5>
                                <p>We were able to identify a handful of issues regarding the app’s
                                    details and flow. Aside from functional errors with the prototype,
                                    the general consensus was that the app currently felt too similar
                                    to other restaurant finding apps already on the market. Users
                                    expected many of the same functionality that other well known
                                    apps such as Yelp provided. While the uniqueness of our
                                    application stemmed from each item in the search result being
                                    chef created events and not commercial restaurants, our users
                                    were not able to pick up on that fact from our prototypes.</p>
                            </div>
                            <div className='col-md-4'>
                                <img src="./img/weEat/usability_i.jpg" alt="usability" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8'>
                                <h5>Home Chef</h5>
                                <p>Many users had difficulty understanding the navigation, and were
                                    unsure of where to go to complete certain tasks. Many had their
                                    own difficulties understanding certain components, and were
                                    overwhelmed by the amount of information presented. Our taxonomy
                                    was unclear and participants had a hard time distinguishing
                                    an “event” from a “place”. We were able to find other small
                                    things that were unclear to the users, such as extra features
                                    that they found unnecessary in the application (namely
                                    sponsors and advertisements for restaurants and chefs).</p>
                            </div>
                            <div className='col-md-4'>
                                <img src="./img/weEat/usability_ii.jpg" alt="usability" />
                            </div>
                        </div>
                    </div>
                    <Image title="Final Screens" link="./img/weEat/final.png" descr="hi-fi" />
                    <div className="spacing container">
                        <h3 className='font-weight-light'>Prototypes</h3>
                        <div className='row'>
                            <div className='pb-4 col-md-6 text-center'>
                                <h5 className='text-center'>Foodie</h5>
                                {/* <a href="https://invis.io/A3N1N20KY2P" 
                                    target='_blank' alt="food lover prototype">Click here!</a> */}
                                <Iframe className="mr-auto ml-auto" 
                                    url="https://invis.io/A3N1N20KY2P" 
                                    height="900px" width="450px" 
                                    display="block" position="static" />
                            </div>
                            <div className='pb-4 col-md-6 text-center'>
                                <h5 className='text-center'>Home Chef</h5>
                                {/* <a href="https://invis.io/S6N2M3KF3KV" 
                                    target='_blank' alt="home chef prototype">Click here!</a> */}
                                <Iframe className="mr-auto ml-auto" 
                                    url="https://invis.io/S6N2M3KF3KV" 
                                    height="900px" width="450px" 
                                    display="block" position="static" />
                            </div>
                        </div>
                    </div>
                    <div className='spacing container'>
                        <h3 className='font-weight-light'>Reflection</h3>
                        <p>Multiple iterations of usability testing reinforced the importance of
                            validating the need for a product with potential users. It was extremely
                            helpful to work closely with users each sprint and adjust designs based
                            off the feedback we received. Our team also learned the values of
                            working in a large group setting and respecting each other’s differences
                            of opinion in design. By achieving a balance between incorporating
                            good ideas while tactfully declining those that didn’t quite work
                            out, we were able to create a final product that felt consistent
                            and complete.</p>
                        <p>Read more in detail on our <a href="./weeat_casestudy.pdf" target='_blank'>
                            Case Study</a></p>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}