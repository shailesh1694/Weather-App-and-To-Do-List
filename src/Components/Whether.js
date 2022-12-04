import React,{useState,useEffect} from 'react'
import Wethercard from './Wethercard';

function Whether() {


    const [search, setSearch] = useState('bhavnagar')
    const [wheatherinfo, setWheatherinfo] = useState({})
       async function serchweatherdata (){
                    
                    try{
                        let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e23bd1e3129b7d41e21887c7ce4e11be&units=metric`);
                        let data = await url.json();
                        console.log(data);

                        const{temp,humidity,temp_min,temp_max}=data.main;
                        const{main:weathermood}=data.weather[0];
                        const{name}=data;
                       
                        const{country,sunrise,sunset}=data.sys;
                        const mynewwether={
                            temp,humidity,temp_min,temp_max,weathermood,name,country,sunrise,sunset
                        }
                        setWheatherinfo(mynewwether)
                    }
                   catch(error) {
                    console.log(error);
                   }

        }

useEffect(() => {
  serchweatherdata()
}, [])

  




    return (
        <div className='conatiner-fluid mx-auto' style={{ height: "400px", width: "600px", boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="d-flex">
                        <input className="form-control me-2" type="text" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search City" aria-label="Search" value={search}  />
                        <button className="btn btn-outline-success"  onClick={serchweatherdata}>Search</button>
                    </div>
                </div>
            </div>
           <Wethercard wheatherinfo={wheatherinfo} />
        </div>



    )
}

export default Whether