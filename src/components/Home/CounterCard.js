import CountUp from 'react-countup';

export default function CounterCard(props) {
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="counter-item">
                <h3><span><CountUp end={props.number} enableScrollSpy={true}/></span></h3>
                <p>{props.title}</p>
            </div>
        </div>
    );
}
