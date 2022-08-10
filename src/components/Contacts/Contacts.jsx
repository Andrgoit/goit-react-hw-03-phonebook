import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  StyledContactList,
  StyledContactItem,
  StyledButtonDelite,
} from 'components/Contacts/Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <StyledContactList>
      {contacts.map(({ id, name, number }) => {
        return (
          <StyledContactItem key={id || nanoid()}>
            {name}: {number}
            <StyledButtonDelite onClick={() => onDeleteContact(id)}>
              Del
            </StyledButtonDelite>
          </StyledContactItem>
        );
      })}
    </StyledContactList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;
