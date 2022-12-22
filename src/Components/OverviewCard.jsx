import React from 'react'
import DataTable from './DataTable'
import InfoBox from './InfoBox'

export default function OverviewCard({ data }) {
    return (
        <>
            <h6 className="border-bottom bg-info text-white p-2 mb-0 rounded">Overview</h6>
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                <div className='row'>
                    <div className="col-md-3">
                        <InfoBox color={'#007bff'} title={"Total Rows"} value={data['total_rows']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#007bff'} title={"Total Attributes(Columns)"} value={data['total_vehicle_attributes(columns)']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#ffc107'} title={"Total Duplicate Rows"} value={data['total_duplicate_rows']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#198754'} title={"Max Mileage"} value={data['max_mileage']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#dc3545'} title={"Min Mileage"} value={data['min_mileage']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#dc3545'} title={"Max CO<sub>2</sub> Emissions"} value={data['max_co2_emissions']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#198754'} title={"Min CO<sub>2</sub> Emissions"} value={data['min_co2_emissions']} />
                    </div>
                </div>
            </div>
            <DataTable title={"Max Mileage Vehicle Details"} data={data['max_mileage_vehicle_details']}/>
            <DataTable title={"Min Mileage Vehicle Details"} data={data['min_mileage_vehicle_details']}/>
            <DataTable title={"Max CO2 Emissions Details"} data={data['max_co2_emissions_vehicle_details']}/>
            <DataTable title={"Min CO2 Emissions Details"} data={data['min_co2_emissions_vehicle_details']}/>
        </>
    )
}
