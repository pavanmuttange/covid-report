import React,{useEffect,useState} from "react";
import './statewise.css'

const StateWise = () => {
    const [data,setData]=useState([]);

const getCovidData = async() => {
    try{
        const res=await fetch('https://data.covid19india.org/data.json');
        const actualData=await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }catch(err){
        console.log(err);
    }
}
    

    useEffect(() => {
       getCovidData();
    }, [])
    return(
        <div className="table"> 
        <p>COVID-19 INDIA STATEWISE</p>
        <div className="table-responsive">
        <table >
        <thead className="head"> 
        <tr>
        <th>State</th>
        <th>confirmed</th>
        <th>recovered</th>
        <th>deaths</th>
        <th>Active</th>
        <th>Last updated</th>

        </tr>
        </thead>
        <tbody>{
        data.map( (crrElem, ind) => {
            return( <tr>
                <th>{crrElem.state}</th>
                <th>{crrElem.confirmed}</th>
                <th>{crrElem.recovered}</th>
                <th>{crrElem.deaths}</th>
                <th>{crrElem.active}</th>
                <th>{crrElem.lastupdatedtime}</th>
        
                </tr>

            );
        })
    }
        </tbody>


        </table>
        </div>
        </div>
    );
}
export default StateWise;