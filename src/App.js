import {colors} from "./config";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "./services/tasks-api";
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from "./services/users-api";

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

  let task = {
    isPaid: false,
    startTime: 1656079200000,
    endTime: 1656082800000,
    description: "clean my car",
    owner: 8
  }

  // createUser(user)
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error(error));
     
  // createTask(task)
  //       .then((response) => console.log(response))
  //       .catch((error) => console.log(error));

  // getAllUsers()
  //     .then((response) => console.table(response.data))
  //     .catch((error) => console.error(error));

  // getAllTasks()
  //     .then((response) => console.table(response.data))
  //     .catch((error) => console.error(error));

  // getUserById(5)
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error(error));

    // getTaskById(1)
    //       .then((response) => console.log(response))
    //       .catch((error) => console.error(error));

  // updateUser(user)
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error(error));

  // updateTask(task)
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error(error));
  // deleteUser(7)
  //     .then((response) => console.log("SUCCESS"))
  // //     .catch((error) => console.log("FAILURE"));
  // deleteTask(9)
  //     .then((response) => console.log("SUCCESS"))
  //     .catch((error) => console.log("FAILURE"));

  return (
    <div style={styles.app}>

    </div>
  );
}

export default App;
