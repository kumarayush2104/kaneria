import React from 'react'

export default function AboutContentCard1(props) {
    return (
        <div class="row">
            <div class="col-md-6">
                <div class="img_effect_w">
                    <img class="img_effect" src={props.image} alt="About Section" width="100%" />
                </div>
            </div>
            <div class="col-md-6">
                {props.content}
            </div>
        </div>
    )
}
