import React from 'react'

export default React.createClass({

  propTypes: {
    children: React.PropTypes.node,
    onClick: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool.isRequired
  },

  render() {
    return (
      <button disabled={this.props.disabled} onClick={(e) => this.props.onClick(e)}>
        {this.props.children}
      </button>
    )
  }
})
