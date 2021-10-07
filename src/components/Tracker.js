import work from "../images/icon-work.svg"
import ellipsis from "../images/icon-ellipsis.svg"



function Tracker(props){
    return (
        // add different second class to each element to render background with different colors
        <div className={`tracker ${props.bgColor}`}>
            <img className="work-img" src={require('../images/icon-work.svg')} alt="work-img"/>
            <div className="activity">
                <div className="activity-type">
                    <h5>{props.title}</h5>
                    <img className="ellipsis" src={ellipsis} alt="ellipsis-svg"/>
                </div>
                <div className="activity-stats">
                    <span className="current">{props.current}hrs</span>
                    <p>Last week - <span>{props.previous}</span>hrs</p>
                </div>
            </div>
        </div>
    )
}

export default Tracker;