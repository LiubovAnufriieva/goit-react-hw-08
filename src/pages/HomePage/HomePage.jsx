import { GiNotebook } from "react-icons/gi";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "../HomePage/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <GiNotebook className={css.icon} size="100px" />
      <PageTitle className={css.title}>Phonebook App</PageTitle>
    </div>
  );
};

export default HomePage;
