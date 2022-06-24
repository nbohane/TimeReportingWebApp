import {colors} from "./config";
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from "./services/users-api";
import TaskList from "./components/task-list";

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: colors.white,
  }
}

function App() {

  let user = {
    email: 'j@b.com',
    password: 'password2',
    displayName: 'Jay Baffino',
    hourlyRate: 50,
    isAdmin: false,
  }

  // createUser(user)
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error(error));

  // getAllUsers()
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error(error));

  // getUserById(5)
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error(error));

  // updateUser(user)
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error(error));

  // deleteUser(7)
  //     .then((response) => console.log("SUCCESS"))
  //     .catch((error) => console.log("FAILURE"));

  return (
    <div style={styles.app}>
      <TaskList />
    </div>
  );
}

export default App;
