import React from 'react'

export default function ProductSpecsCard(props) {
    return (
        <tr className={`${props.gray? "gray_bg" : null}`}>
            <td className="border-right"><b>{props.title}</b></td>
            <td>{props.content}</td>
        </tr>
    )
}
