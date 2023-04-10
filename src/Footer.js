import React from 'react'
import './Footer.css'

function Footers() {
    return (
        <div className='footerContainer'>
            <div className='footer'>
                <div style={{marginTop: '10px'}}>Time course of the biodegradation of the implant.</div>
                <div><sup>a</sup>{`All ocular treatment-emergent adverse events (TEAEs) in study eyes that reported in ≥2% of subjects in any treatment group within 2 days or after 2 days following administration are listed.`}<sup>20</sup></div>
                <div><sup>b</sup>{`Any ocular TEAE in the study eye.`}<sup>20</sup></div>
                <div><sup>c</sup>{`Error bars show the standard erro of the mean`}<sup>20.</sup> {` The blue arraw indicated the timing of bimatoprost implant adminstration`}<sup>20</sup></div>
                <div>{`Bimatoprost implant is under investigation. The safety and efficacy of this product have not been established`}</div>
                <div style={{marginTop:"15px"}}>{`References:`}</div>
                <div >{`20. Medeiros FA, et ak. Ophthalmology. 2020;127(12):1627-1641.`}</div>
                </div>
        </div>
    )
}

export default Footers