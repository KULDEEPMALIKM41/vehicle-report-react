import React, { useEffect, useState } from 'react'

export default function DataTable({ title, data }) {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        let newData = []
        let all_rows_no = Object.keys(data[Object.keys(data)[0]])
        for (let row of all_rows_no) {
            let complete_row = { row_no: row };
            for (let column of Object.keys(data)) {
                complete_row[column] = data[column][row];
            }
            newData.push(complete_row)
        }
        setListData(newData)
    }, [])

    return (
        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">{title}</h6>
            <div className="overflow-auto">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th className='text-secondary' scope="col">Row No.</th>
                            <th className='text-secondary' scope="col">Make</th>
                            <th className='text-secondary' scope="col">Model</th>
                            <th className='text-secondary' scope="col">Vehicle Class</th>
                            <th className='text-secondary' scope="col">Engine Size(L)</th>
                            <th className='text-secondary' scope="col">Transmission</th>
                            <th className='text-secondary' scope="col">Fuel Type</th>
                            <th className='text-secondary' scope="col">Fuel Consumption Comb (L/100 km)</th>
                            <th className='text-secondary' scope="col">CO2 Emissions(g/km)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <th className='text-secondary min-width-100px' scope="row">{item['row_no']}</th>
                                    <td className='text-secondary min-width-100px'>{item['Make']}</td>
                                    <td className='text-secondary min-width-100px'>{item['Model']}</td>
                                    <td className='text-secondary min-width-100px'>{item['Vehicle Class']}</td>
                                    <td className='text-secondary min-width-100px'>{item['Engine Size(L)']}</td>
                                    <td className='text-secondary min-width-100px'>{item['Transmission']}</td>
                                    <td className='text-secondary min-width-100px'>{item['Fuel Type']}</td>
                                    <td className='text-secondary min-width-100px'>{item['Fuel Consumption Comb (L/100 km)']}</td>
                                    <td className='text-secondary min-width-100px'>{item['CO2 Emissions(g/km)']}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
