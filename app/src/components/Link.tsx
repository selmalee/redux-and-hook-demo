import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClickFunc}: LinkProps) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <span
      onClick={e => {
        e.preventDefault()
        onClickFunc()
      }}
    >{children}</span>
  )
}

// interface也能做到声明参数类型作用
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClickFunc: PropTypes.func.isRequired
}

export default Link
