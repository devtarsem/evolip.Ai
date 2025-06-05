import { useEffect } from "react"
import homeStore from "../store/home.store"
const GOOGLE_KEY = ''
const WEATHER = ''
// import TrainingLoader from "../neural_nets_training/nets.training"
import './../styles/home.css'
import './../util.css'
import { Link } from "react-router"


export default function Home(){


    // useEffect(el=>{
    //     const fetchData = async()=>{
    //         navigator.geolocation.getCurrentPosition(async(pos)=>{
    //             const lat = pos.coords.latitude;
    //             const lon = pos.coords.longitude;
    //             const timestamp = Date.now();

    //             // Fetch weather data
    //             const weatherRes = await fetch(
    //                 `https://api.weatherapi.com/v1/current.json?key=${WEATHER}&q=${lat},${lon}`
    //             )

    //             const weather = await weatherRes.json();
    //             const windSpeed = weather.current.wind_kph / 3.6;
    //             const windDeg = weather.current.wind_degree;
    //             console.log(weather)
                

    //             // Elevation data
    //             // const elevationRes = await fetch(
    //             //     `https://maps.googleapis.com/maps/api/elevation/json?locations=${lat},${lon}&key=${GOOGLE_KEY}`
    //             // )

    //             // const elevationData = await elevationRes.json();
    //             // const elevation = elevationData.result[0].elevation;
    //             // console.log(elevationData)

    //             const record = {
    //                 lat,
    //                 lon,
    //                 timestamp,
    //                 windSpeed: windSpeed.toFixed(2),
    //                 windDeg,
    //                 // elevation,
    //             };

    //             localStorage.setItem('rideData', JSON.stringify(record));

    //         })

    //         // DeviceMotion for vibration/posture detection
    //         // window.addEventListener('devicemotion', (event) => {
    //         //     const acc = event.acceleration;
    //         //     console.log('Acceleration Data:', acc);
    //         // });
    //     }
    //     fetchData()
    // }, [])

    return(
        <div className="home flex flex-2 gap16 flex-dir">
            <Link to='/auth' className="heading">Evolip.ai</Link>
            {/* <Link to='/auth' className="link">Let's analyze your EV.</Link> */}
        </div>
    )
}
