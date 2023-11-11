import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHeartCrack
} from '@fortawesome/free-solid-svg-icons';

const Error = ({titulo, mensaje}) => {
    return (
        <div className="error">
            <FontAwesomeIcon icon={faHeartCrack} className="error-icon text-color-4"/>
            <h1 className="titulo">{titulo}</h1>
            <p className="parrafo text-color-3">{mensaje}</p>
        </div>
    )
}

export default Error;