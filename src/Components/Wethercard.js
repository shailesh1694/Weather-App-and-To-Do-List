import React from 'react'

function Wethercard({wheatherinfo}) {

    const{temp,humidity,temp_min,temp_max,weathermood,name,country,sunrise,sunset}= wheatherinfo;

    
        

  return (
    <>
     <div className='row'>
                <div className='col-md-12' >
                    <h1 style={{ textAlign: "center" }} >{weathermood }</h1>
                </div>
            </div>
            {/* third row */}
            <div className='row'>
                <div className='col-auto' style={{boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>
                    {/* here divide two row for temprature and whether city name and country name  */}
                    <div className='row align-items-center'>
                        <div className='col-auto text-center' >
                            <span>{temp} &deg;</span><br />
                            <span>Temprature</span>
                        </div>
                        <div className='col-auto text-center'>
                            <div>{name}</div>
                        <div>{country}</div>
                        </div>
                    </div>

                </div>
                        {/* date and time section */}
                <div className='col-auto text-center' style={{boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>
                    <div>{new Date().toDateString()}</div>
                    <div>{new Date().toLocaleTimeString()}</div>
                </div>
            </div>

                {/* four th row and four  divide section in row*/}

            <div className='row my-5'>
                {/* temprature */}
                <div className='col-auto text-center' style={{boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>
                    <span>{humidity}&deg;</span><br />
                    <span>Humidity</span>

                </div>
                <div className='col-auto text-center' style={{boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>
                    <span>{temp_max}&deg;</span><br />
                    <span>Max.temp</span>
                </div>
                <div className='col-auto text-center' style={{boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>
                    <span>{temp_min}&deg;</span><br />
                    <span>Min.temp</span>
                </div>
                <div className='col-auto text-center' style={{boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>
                    <span>{new Date(sunrise*1000).getHours()}:{new Date(sunrise*1000).getHours()} </span><br />
                    <span>Sunrise</span>
                </div>
                <div className='col-auto text-center' style={{boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>
                    <span>{new Date(sunset*1000).getHours()} :{new Date(sunset*1000).getMinutes()}</span><br />
                    <span>Sunset</span>
                </div>

            </div>



    
    </>
  )
}

export default Wethercard;