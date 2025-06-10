import { RedirectButtonProps } from '@models/redirectButton'
import React from 'react'

const RedirectButton: React.FC<RedirectButtonProps> = ({ ...props }) => {
    return (
        <button>
            {props.text}
        </button>
    )
}

export default RedirectButton
