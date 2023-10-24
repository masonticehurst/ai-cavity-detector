import React from 'react'

export default function Xray(props) {

    // Let's assume we get a JSON object  from props
    // that contains the model output
    // we can parse that data and generate the appropriate number of 
    // p-tags to display the x-ray analysis info

    // props
    //      xrayImage - link to xray image from model
    //      xrayData - data produced by model 

    return(
        <div id='xray-container'>
            <img id='xray-image' src="" alt="xray image" />
            <div>
                <p>xray data goes here</p>
            </div>
        </div>
    )
}