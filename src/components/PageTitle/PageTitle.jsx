import css from "./PageTitle.module.css";

const PageTitle = ({ children }) => {
  return <h1 className={css.tile}>{children}</h1>;
};

export default PageTitle;
