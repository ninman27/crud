import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/action";

const SingleUserPage = async ({ params }: any) => {
  const { id } = params;
  const user = await fetchUser(id);
  console.log(user);
  return (
    <div>
      <form action={updateUser}>
        <input type="hidden" name="id" value={user._id.toString()} />
        <input type="text" name="username" defaultValue={user.username} />
        <input type="email" name="email" defaultValue={user.email} />
        <button>Update user</button>
      </form>
    </div>
  );
};

export default SingleUserPage;
