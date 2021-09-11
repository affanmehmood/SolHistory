import React from 'react'
import Typical from 'react-typical'

export default (props) => {
  return (<Typical
    className="m-0 p-0 typical-size"
        steps={props.steps}
        loop={Infinity}
        wrapper="text"
      />)
}