import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";import { useDispatch } from "react-redux";
import { openModal } from '../../redux/modal/slice';


const Contact=({ contact, onEdit })=> {
  const dispatch = useDispatch(contact.id);

  const handleOpenModal = () => dispatch(openModal(contact.id));

  const handleEdit = () => {
    onEdit(contact);
  };

  return (
    <div className={css.container}>
      <div className={css.text}>        
          <p><FaUser className={css.icon} />&nbsp; {contact.name}</p>
          <p><FaPhone className={css.icon} />&nbsp; {contact.number}</p>
      </div>
      <div className={css.btn_container}>
        <button
          className={css.deleteBtn}
          type="button"
          onClick={handleOpenModal}
        >
          <MdDeleteForever className={css.icon}/>
        </button>
        <button className={css.editBtn} type="button" onClick={handleEdit}>
          <GrEdit className={css.icon}/>
        </button>
      </div>
    </div>
  );
}


export default Contact;