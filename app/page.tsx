import Link from "next/link";
import { fetchUsers } from "./lib/data";
import { deleteUser } from "./lib/action";

const Home = async () => {
  const users = await fetchUsers();
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>UserName:</td>
            <td>Email:</td>
            <td>IsAdmin:</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? "Admin" : "User"}</td>
                <td>
                  <Link href={`/users/${user._id}`}>
                    <button>Update user</button>
                  </Link>
                  <form action={deleteUser}>
                    <input
                      type="hidden"
                      name="id"
                      value={user._id.toString()}
                    />
                    <button>Delete user</button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link href="/users/create-new">
        <button>Create new user</button>
      </Link>
    </>
  );
};

export default Home;
