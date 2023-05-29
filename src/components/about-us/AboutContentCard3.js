import React from 'react'

export default function AboutContentCard3(props) {
    return (
        <div className="col-lg-6 text-center">
            <div>
                <div className="img_effect_w">
                    <img className="img_effect" src={props.image} width="100%" />
                </div>
            </div>
            <h5 className="m-2">{props.title}</h5>
            <h5 className="m-2">&nbsp;</h5>
        </div>
    )
}
