import { Toaster, toast } from 'react-hot-toast';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import Loader from '../../components/Loader/Loader';
import PageTitle from '../../components/PageTitle/PageTitle';
import ConfirmModal from '../../components/Modal/ConfirmModal';
import EditForm from '../../components/EditForm/EditForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "../ContactsPage/ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [isEditing, setIsEditing] = useState(false);
  const [currentContact, setIsCurrentContact] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleEdit = (contact) => {
    setIsCurrentContact(contact);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsCurrentContact(null);
    setIsEditing(false);
  };

  return (
    <div className={css.container}>
      <PageTitle>Your contacts</PageTitle>
      <Toaster position="top-center" />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {!error && !loading && (
        <>
          {isEditing ? (
            <EditForm contact={currentContact} onClose={handleCancelEdit} />
          ) : (
            <ContactForm />
          )}
          <SearchBox />
          <div>
            <ContactList onEdit={handleEdit} />
          </div>
          <ConfirmModal />
        </>
      )}
    </div>
  );
};

export default ContactsPage;
