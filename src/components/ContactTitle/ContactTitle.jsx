import { Title } from "./ContactTitle.style";
import PropTypes from 'prop-types';

export const ContactTitle=({title})=>{
return (
     <Title>
{title}
      </Title>
    
  );
};

export default ContactTitle;

ContactTitle.propTypes = {
     title: PropTypes.string.isRequired,
   };