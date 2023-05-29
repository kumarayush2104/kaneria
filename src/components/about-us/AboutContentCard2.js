import React from 'react'

export default function AboutContentCard2(props) {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
            {props.image ? (
                <div className="row">
                    <div className="col-lg-12">
                        <div className="img_effect_w">
                            <img className="img_effect" src={props.image} width="100%" alt="" />
                        </div>
                    </div>
                </div>
            ) : (
                null
            )}
        </>
    )
}
