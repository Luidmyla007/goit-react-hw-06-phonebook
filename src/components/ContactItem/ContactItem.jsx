import PropTypes from 'prop-types';
import { ListItem } from './ContactItem.styled';


const ContactItem = ({ id, name, number, onClick }) => {
    return (
        <ListItem  key={id}>
            <span>
                {name}: {number}
            </span>
            <button  type="button" onClick={() => onClick(id)}>
                Delete
            </button>
        </ListItem>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default ContactItem;