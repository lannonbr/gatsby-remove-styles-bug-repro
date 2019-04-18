import React from 'react'

const Layout = (props) => (
  <React.Fragment>
    <div style={{ border: `1px solid red`}}>Test</div>
    <div style={{ border: `1px solid blue` }}>{props.children}</div>
  </React.Fragment>
)

export default Layout