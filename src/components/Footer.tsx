import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

interface LinkProps {
  active: boolean,
  children: ReactNode,
  onClick: Function
}

const Link = ({ active, children, onClick}: LinkProps) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >{children}</a>
  )
}

// interface也能做到声明参数类型作用
Link.PropTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
