import styles from "./Nav.module.css";
import MailIcon from "@suid/icons-material/GridViewSharp";
import Badge from "@suid/material/Badge";

const Nav = ({ setView, view }) => {
  const menuOptions = ["dashboard", "tables", "query", "settings"];

  return (
    <section class={styles.Nav}>
      {menuOptions.map((option) => (
        <div style="display: block ruby">
          <Badge sx={{ color: "white" }}>
            <MailIcon color="info" />
          </Badge>
          <button
            style={{ "font-weight": `${view() === option ? `bold` : ""}` }}
            onClick={() => setView(option)}
          >
            {option}
          </button>
        </div>
      ))}
    </section>
  );
};

export default Nav;
