// Naziya = "naziya"
import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.typ)}</strong>{props.alert.msg}
        </div>

    )
}
