import styles from "./page.module.css";
import { addUser } from "@/app/lib/action";

const CreateNewUser = () => {
  return (
    <div>
      <form className={styles.form} action={addUser}>
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <div>
          <label htmlFor="isAdmin">Is Admin?</label>
          <input type="checkbox" name="isAdmin" id="isAdmin" />
        </div>
        <button type="submit">Add new user</button>
      </form>
    </div>
  );
};

export default CreateNewUser;
