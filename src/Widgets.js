import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading,subtitle) =>{
        return (<div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>);
    }
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("React is back","Top NEWS - 9000 readers")}
            {newsArticle("Corona Virus - UK updates","Top NEWS - 900 readers")}
            {newsArticle("No jab No Office","Top NEWS - 700 readers")}
            {newsArticle("IT Jobs hotSpot","Top NEWS - 450 readers")}
        </div>
    )
}

export default Widgets
