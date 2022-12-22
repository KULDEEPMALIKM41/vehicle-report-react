import React from 'react'
import InfoBox from './InfoBox'

export default function ColumnInfoCard({ heading, data }) {
    return (
        <div>
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0">{heading}</h6>
                <div className='row'>
                    <div className="col-md-3">
                        <InfoBox color={'#007bff'} title={"Total Items"} value={data['total_items']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#198754'} title={"Valid Items"} value={data['valid_items']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#198754'} title={"Valid Items(%)"} value={data['valid_items_per(%)']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#6f42c1'} title={"Total Unique Items"} value={data['total_unique_items']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#6f42c1'} title={"Total Unique Items(%)"} value={data['total_unique_items_per(%)']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#dc3545'} title={"Missing Items"} value={data['total_missing_items']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#dc3545'} title={"Missing Items(%)"} value={data['total_missing_items_per(%)']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#007bff'} title={"Most Frequent Item"} value={data['most_frequent_item']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#007bff'} title={"Most Frequent Item Count"} value={data['count_most_common_item']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#007bff'} title={"Most Frequent Item(%)"} value={data['most_frequent_item_per(%)']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#ffc107'} title={"Total Mismatched Items"} value={data['total_mismatched_item']} />
                    </div>
                    <div className="col-md-3">
                        <InfoBox color={'#ffc107'} title={"Total Mismatched Items(%)"} value={data['total_mismatched_item_per(%)']} />
                    </div>
                </div>
            </div>
        </div>
    )
}
