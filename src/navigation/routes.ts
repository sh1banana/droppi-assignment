/** COMMON */
import { RoutesName } from "~/const/enum/RoutesName";
/** SCREENS */
import ListAssignmentScreen from "~/screens/listAssignment";

const Routes = {
  authentication: {
    signIn: RoutesName.SignIn
  },
  main: {
    listAssignment: {
      name: RoutesName.ListAssignment,
      path: ListAssignmentScreen
    }
  }
 }

 export default Routes;
