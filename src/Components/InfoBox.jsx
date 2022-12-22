import React from 'react'

export default function InfoBox({ color, title, value }) {
    return (
        <div className="d-flex text-muted pt-3">
            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill={color} /><text x="50%" y="50%" fill={color} dy=".3em">32x32</text></svg>
            <p className="pb-3 mb-0 small lh-sm border-bottom">
                <strong dangerouslySetInnerHTML={{ __html: title }} className="d-block text-gray-dark" />
                {value}
            </p>
        </div>
    )
}
