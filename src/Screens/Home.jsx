import React, { useEffect, useState } from 'react'
import logo from '../assets/img/40de0ce1.png'
import ColumnInfoCard from '../Components/ColumnInfoCard';
import Loader from '../Components/Loader';
import OverviewCard from '../Components/OverviewCard';
import report from '../DataSource/report.json'

export default function Home() {
    const [data, setData] = useState(null);
    const loadData = () => {
        setData(report)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <main className="container">
                <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
                    <img className="me-3" src={logo} alt="" width="48" height="38" />
                    <div className="lh-1">
                        <h1 className="h6 mb-0 text-white lh-1 mb-1">Vehicle Report</h1>
                        <small>By Kuldeep Mali</small>
                    </div>
                </div>
                {data ?
                    <>
                        <OverviewCard data={data.overview} />
                        
                        <h6 className="border-bottom bg-info text-white p-2 mb-0 rounded">Per Column Details</h6>
                        {Object.keys(data).map((item, index) => {
                            return (
                                <div key={index}>
                                    {item !== 'overview' && <ColumnInfoCard heading={item} data={data[item]} />}
                                </div>
                            )
                        })}
                    </>
                    : <div className='text-center mt-5 pt-5'>
                        <Loader />
                    </div>}
            </main>
        </div>
    )
}
