import './../styles/analyze.css'
import './../util/util.css'
import Menu from './menu'
import CompNav from './company_nav'

export default function Analyze(){
    return(
        <div className='analyze'>
            <CompNav/>
            <div className='analyzeData'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Lat</th>
                            <th>Long</th>
                            <th>yaw angle</th>
                            <th>Wind speed</th>
                            <th>Vehicle speed</th>
                            <th>yaw angle</th>
                            <th>Recommend speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5,5,5,54,52,4,5,5,65,5,5,5,5,9,4,741,5,74,88,7,744,5,7].map((el,index)=>
                            <tr>
                                <td>{index+1}</td>
                                <td>85.56</td>
                                <td>65.6</td>
                                <td>36.56</td>
                                <td>10</td>
                                <td>52</td>
                                <td>25</td>
                                <td>40</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Menu/>
        </div>
    )
}