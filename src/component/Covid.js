import React, { useEffect, useState } from 'react';
import './Covid.css';

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            console.log(res);
            const actualData = await res.json();
            console.log(actualData);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <h1>Covid 19 Tracker </h1>

            {/* <ul>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>OUR</span> COUNTRY</p>
                            <p className="card_tital card_small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>OUR</span> COUNTRY</p>
                            <p className="card_tital card_small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>OUR</span> COUNTRY</p>
                            <p className="card_tital card_small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>OUR</span> COUNTRY</p>
                            <p className="card_tital card_small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>OUR</span> COUNTRY</p>
                            <p className="card_tital card_small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>OUR</span> COUNTRY</p>
                            <p className="card_tital card_small">INDIA</p>
                        </div>
                    </div>
                </li>
            </ul> */}

            <div className="card text-center">
                <div className="card-header">
                    our COUNTRY
                </div>
                <div className="card-body">
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                    TOTAL RECOVERED
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.recovered}</h5>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                TOTAL CONFIRMED
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.confirmed}</h5>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                TOTAL DEATHS
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.deaths}</h5>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                    TOTAL ACTIVE
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.active}</h5>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                    LAST UPDATE
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.lastupdatedtime}</h5>
                </div>
            </div>
        </>
    )
}

export default Covid