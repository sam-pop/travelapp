import React from 'react'
import PropTypes from 'prop-types'
import '@material/fab/dist/mdc.fab.css'
import { Fab } from '@rmwc/fab'

const Button = ({ onClick }) => (
    <Fab icon="+" className="fab" onClick={() => onClick()} />
)

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button
