import './../styles/menu.css'
import './../util/util.css'
import { Link } from 'react-router'
import { useState } from 'react'

export default function Menu(){

    const [navAct, setNacAct] = useState(0);

    function Live(){
        setNacAct(navAct=> 1)
    }
    function data(){
        setNacAct(navAct=> 2)
    }
    function cycle(){
        setNacAct(navAct=> 3)
    }
    function battery(){
        setNacAct(navAct=> 4)
    }

    return(
        <div className='menu pad16 flex flex-1 gap16'>
            <Link onClick={Live} to='/live' className={navAct === 1 ? 'menulink flex flex-dir flex-2 gap4 menuLinkAct' : 'menulink flex flex-dir flex-2 gap4'} >
                <svg className={navAct === 1 ? "icon iconActive" : "icon"} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <title>ic_fluent_live_24_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_live_24_filled" className={navAct === 1 ? "icon iconActive" : "icon"} fill-rule="nonzero"> <path d="M6.34277267,4.93867691 C6.73329697,5.3292012 6.73329697,5.96236618 6.34277267,6.35289047 C3.21757171,9.47809143 3.21757171,14.5450433 6.34277267,17.6702443 C6.73329697,18.0607686 6.73329697,18.6939336 6.34277267,19.0844579 C5.95224838,19.4749821 5.3190834,19.4749821 4.92855911,19.0844579 C1.02230957,15.1782083 1.02230957,8.84492646 4.92855911,4.93867691 C5.3190834,4.54815262 5.95224838,4.54815262 6.34277267,4.93867691 Z M19.0743401,4.93867691 C22.9805896,8.84492646 22.9805896,15.1782083 19.0743401,19.0844579 C18.6838158,19.4749821 18.0506508,19.4749821 17.6601265,19.0844579 C17.2696022,18.6939336 17.2696022,18.0607686 17.6601265,17.6702443 C20.7853275,14.5450433 20.7853275,9.47809143 17.6601265,6.35289047 C17.2696022,5.96236618 17.2696022,5.3292012 17.6601265,4.93867691 C18.0506508,4.54815262 18.6838158,4.54815262 19.0743401,4.93867691 Z M9.3094225,7.81205295 C9.69994679,8.20257725 9.69994679,8.83574222 9.3094225,9.22626652 C7.77845993,10.7572291 7.77845993,13.2394099 9.3094225,14.7703724 C9.69994679,15.1608967 9.69994679,15.7940617 9.3094225,16.184586 C8.91889821,16.5751103 8.28573323,16.5751103 7.89520894,16.184586 C5.58319778,13.8725748 5.58319778,10.1240641 7.89520894,7.81205295 C8.28573323,7.42152866 8.91889821,7.42152866 9.3094225,7.81205295 Z M16.267742,7.81205295 C18.5797531,10.1240641 18.5797531,13.8725748 16.267742,16.184586 C15.8772177,16.5751103 15.2440527,16.5751103 14.8535284,16.184586 C14.4630041,15.7940617 14.4630041,15.1608967 14.8535284,14.7703724 C16.384491,13.2394099 16.384491,10.7572291 14.8535284,9.22626652 C14.4630041,8.83574222 14.4630041,8.20257725 14.8535284,7.81205295 C15.2440527,7.42152866 15.8772177,7.42152866 16.267742,7.81205295 Z M12.0814755,10.5814755 C12.9099026,10.5814755 13.5814755,11.2530483 13.5814755,12.0814755 C13.5814755,12.9099026 12.9099026,13.5814755 12.0814755,13.5814755 C11.2530483,13.5814755 10.5814755,12.9099026 10.5814755,12.0814755 C10.5814755,11.2530483 11.2530483,10.5814755 12.0814755,10.5814755 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
                Live
            </Link>
            <Link onClick={data} to='/analyze' className={navAct === 2 ? 'menulink flex flex-dir flex-2 gap4 menuLinkAct' : 'menulink flex flex-dir flex-2 gap4'} >
                <svg className={navAct === 2 ? "icon iconActive icondata" : "icon icondata"} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M30 10H10v20h20V10zM16.667 21.667h-3.334v5h3.334v-5zm1.666-8.334h3.334v13.334h-3.334V13.333zm8.334 5h-3.334v8.334h3.334v-8.334z" className={navAct === 2 ? "icon iconActive icondata" : "icon icondata"} fill-rule="evenodd"></path></g></svg>                
                Analyze
            </Link>
            <Link onClick={cycle} to='/main' className={navAct === 3 ? 'menulink flex flex-dir flex-2 gap4 menuLinkAct' : 'menulink flex flex-dir flex-2 gap4'} >
                <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" className={navAct === 3 ? "icon iconActive " : "icon "}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path d="M16.8,7.7c0.9,0,1.8,0.4,2.4,1.1c0.6,0.7,1.5,1.1,2.5,1.1c1,0,1.9-0.4,2.5-1.1c0.6-0.7,0.8-1.5,0.7-2.4 C24.7,5,23.2,3.9,21.4,4c-1.7,0.1-3.3,0.7-4.5,1.8l-0.7,0.7C16,6.7,15.9,7,16.1,7.3C16.2,7.6,16.5,7.7,16.8,7.7z"></path> <path d="M17.5,19.2l-3.7-2.3l4.6-4l1.9,1.9c0.2,0.2,0.4,0.3,0.7,0.3h5c0.6,0,1-0.4,1-1s-0.4-1-1-1h-4.6l-2.9-2.9 c-1.4-1.4-3.6-1.5-5.1-0.2l-3.5,3C9.3,13.4,9,14.2,9.1,15c0.1,0.8,0.5,1.5,1.2,2l5.6,3.5l-1.8,5.3c-0.2,0.5,0.1,1.1,0.6,1.3 c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.8-0.3,0.9-0.7l2-6C18.1,19.9,17.9,19.4,17.5,19.2z"></path> <path d="M6,18c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S9.3,18,6,18z M6,25c-0.6,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S6.6,25,6,25z"></path> <path d="M26,18c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S29.3,18,26,18z M26,25c-0.6,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S26.6,25,26,25z"></path> </g> </g></svg>                
                Drive cycle
            </Link>
            <Link onClick={battery} to='/main' className={navAct === 4 ? 'menulink flex flex-dir flex-2 gap4 menuLinkAct' : 'menulink flex flex-dir flex-2 gap4'} >
                <svg className={navAct === 4 ? "icon iconActive" : "icon"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2H14V5H16V11H14V14H0V2ZM12 4H7V12H12V4Z" className={navAct === 4 ? "icon iconActive" : "icon"}></path> </g></svg>
                Live
            </Link>
        </div>  
    )
}