import { RedirectButtonProps } from '@models/redirectButton'

const RedirectButton: React.FC<RedirectButtonProps> = ({ ...props }) => {
    return (
        <button>
            {props.text}
        </button>
    )
}

export default RedirectButton
