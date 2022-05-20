import React from 'react'

function Main(props) {
  return (
      <React.Fragment>
          <div className="">Nav</div>
          {props.children}
          <div className="">Footer</div>
      </React.Fragment>    
  )
}

export default Main