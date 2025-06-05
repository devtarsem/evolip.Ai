import './../styles/main.css'
import './../util.css'
import CompNav from './company_nav'
import Menu from './menu'
import { Link } from 'react-router'
import LineChart from './line_chart'

export default function Main(){
    return(
        <div className='main'>
            <div className='top'>
                <CompNav/>
            </div>
            <div className='mid pad16 flex flex-dir gap16'>
                <h2 className='head2 headmini'>Hey! Trasem singh</h2>
                <div className='mid1 pad16 flex flex-dir gap16' >
                    <h3 className='drive'>Let's start new drive.</h3>
                    <Link to='/' className='gotodrive'>Drive now</Link>
                    <hr/>
                    <div className='streak grid grid-3-col gap16'>
                        <div className='counter flex flex-2 pad16'>
                            <div className='inner flex flex-2 flex-dir'>
                                <p className='count'>55</p>
                                <p className='ct_'>drives</p>

                            </div>
                        </div>
                        <div className='others flex flex-1 gap16 pad16'>
                            <div className='flex flex-dir gap4 flex-2'>
                                <p className='ct ctnum'>43</p>
                                <p className='ct'>Data analyzed</p>
                            </div>
                            <div className='flex flex-dir gap4 flex-2'>
                                <p className='ct ctnum'>89%</p>
                                <p className='ct'>Battery saved</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mid2 pad16 flex flex-dir gap16'>
                    <h3 className='drive'>Your latest drive cycle.</h3>
                    <LineChart/>
                </div>
            </div>
            <div className='menubottom'>
                <Menu/>
            </div>
        </div>
    )
}
