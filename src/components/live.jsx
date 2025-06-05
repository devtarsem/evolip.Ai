import './../styles/live.css'
import './../util/util.css'
import Menu from './menu'
import CompNav from './company_nav'
import { useState } from 'react'

export default function Live(){

    const [liveSpeed, setLiveSpeed] = useState(true);

    function LiveSpeed(){
        setLiveSpeed(liveSpeed=> false);
    }

    return(
        <div className='live '>
            <div className='speedBox'>
                <CompNav/>
                <div className='speddin flex flex-2'>
                    {liveSpeed &&
                        <button onClick={LiveSpeed} className='desBox'>
                            Start
                        </button>
                    }
                    {!liveSpeed &&
                        <button className='desBox'>
                            40 <br/>Kmh
                        </button>
                    }
                </div>
            </div>
            <div className='menu_live'>
                <Menu/>
            </div>
        </div>
    )
}