import { NavLink, useNavigate } from 'react-router-dom';

function News(props) {
    // const navigate = useNavigate();

    return (
        <>
            
            <h2>NEWS</h2>

            <div class='news-container'>
                
                <div class='news-post'>

                    <div class='news-title-date'>
                        <h3>New Artists Confirmed</h3>
                        <p>Tuesday, May 16, 2023 3:33PM</p> 
                    </div>
                    <div class='news-content'>
                    
                    <p>Three new artists have just officially confirmed they will join SlideOffTheEarth Music Festival this year!</p>
                        <ul>
                            <li>The Merge Conflicts</li>
                            <li>Export Modules</li>
                            <li>Error Handling</li>
                        </ul>

                    <p>For those of you who follow us on social media, you know how excited we are for all three of these bands!  Make sure you buy your tickets today before they sell out!</p>

                    </div>
                </div>

                <div class='news-post'>

                    <div class='news-title-date'>
                        <h3>Returning Artists Confirmed</h3>
                        <p>Saturday, May 13, 2023 2:46PM</p> 
                    </div>
                    <div class='news-content'>
                    
                    <p>Here are the artists that have confirmed their return to the SlideOffTheEarth Music Festival this year!</p>
                        <ul>
                            <li>Package JSON</li>
                            <li>Hello from the Server Side</li>
                            <li>KnowSQL</li>
                            <li>Runtime Error</li>
                            <li>Undefined</li>
                        </ul>

                    <p>Each artist has also confirmed a new set list for this year, so you won't want to miss it!</p>

                    </div>
                </div>

            </div>

        </>
    )

};

export default News;