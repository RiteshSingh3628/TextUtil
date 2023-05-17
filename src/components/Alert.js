import React from 'react'

function Alert(props) {
  return (
    // at starting props.alert is null so it will show error 
    // && is used in place of if-else 
    // if first condition is false then next condition will not be checked 
    props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
        <strong>{props.alert.message}</strong>
    </div>
  )
}

export default Alert