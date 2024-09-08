import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openModal } from '../../redux/modal/slice';


const Contact = (contact, onEdit) => {
  const dispatch = useDispatch(contact.id);
  const handleOpenModal = () => dispatch(openModal(contact.id));

  const handleEdit = () => {
    onEdit(contact);
  }

  return (
    <div className={css.container}>
      <div className={css.text}>
        <p>
          <FaUser className={css.contactIcon} />&nbsp;  {contact.name}
        </p>

        <p>
          <FaPhone className={css.contactIcon} /> &nbsp; {contact.number}
        </p>
      </div>
      <button 
      className={css.deleteBtn} 
      onClick={handleOpenModal}
      type="button">
        Delete
        <AiOutlineDelete />
      </button>
      <button className={css.editButton} type="button" onClick={handleEdit}>
          <GrEdit />
        </button>
    </div>
  );
};

export default Contact;
