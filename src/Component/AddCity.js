import './AddCity.css'
import DisplayWeather from './DisplayWeather'
import {useState} from 'react'
const AddCity = (props)=>{
    const APIKEY="2f03d3d4dbebe5e30f86aaa194cce549";
    const [city,setcity]=useState('')
    const country="india"
    const [weatherdata,setdata]=useState([])
    async function weatherData(e){
        e.preventDefault();
        if(city===''){
            alert("ADD VALUE");
        }
        else{
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
                ).then((res) => res.json())
                 .then((data) => data);
                 
            setdata({data: data});
        }

    }

    const changeHandler = (e)=>{
        setcity(e.target.value);
    }

    return(

        

        <div className="popup-box">
        
        <form onSubmit={weatherData}>
        <div className="box">
            <label>WEATHER DETAILS</label><br/><br/>
            <input type="text" placeholder="Enter the City" onChange={changeHandler} />
            <br/>
            <input  type="submit" />
        </div>
        </form>


        {weatherdata.data !== undefined ? (
        <div>
          <DisplayWeather data={weatherdata.data} />
        </div>
      ) : null}
        </div>

        
    
    )

}
export default AddCity;