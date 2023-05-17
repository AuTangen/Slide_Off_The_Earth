import { NavLink, useNavigate } from 'react-router-dom';

function News(props) {
    // const navigate = useNavigate();

    return (
        <>
            
            <h2>NEWS</h2>

            <div className='add-artist-container'>
                <div className="section-title"><h2>News</h2></div>

<div className="news-wrap">
<ol class="dark:border-gray-700">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-white">Tuesday, May 16, 2023 3:33PM</time>
        <h3 class="text-lg font-semibold text-white">New Artists Confirmed</h3>
        <p class="mb-4 text-base font-normal text-white pl-4"><ul className="leading-relaxed">Three new artists have just officially confirmed they will join SlideOffTheEarth Music Festival this year!
                            <li><span className="bg-black p-1">The Merge Conflicts</span></li>
                            <li><span className="bg-black p-1">Export Modules</span></li>
                            <li><span className="bg-black p-1">Error Handling</span></li>
                        </ul>

                    <p>For those of you who follow us on social media, you know how excited we are for all three of these bands!  Make sure you buy your tickets today before they sell out!</p></p>
        
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-white">Saturday, May 13, 2023 2:46PM</time>
        <h3 class="text-lg font-semibold text-white">Returning Artists Confirmed</h3>
        <p class="mb-4 text-base font-normal text-white pl-4"><ul className="leading-relaxed">Here are the artists that have confirmed their return to the SlideOffTheEarth Music Festival this year!
                            <li>Package JSON</li>
                            <li>Hello from the Server Side</li>
                            <li>KnowSQL</li>
                            <li>Runtime Error</li>
                            <li>Undefined</li>
                        </ul>

                    <p>Each artist has also confirmed a new set list for this year, so you won't want to miss it!</p></p>
        
    </li>
    
</ol>

</div>
                </div>


        </>
    )

};

export default News;