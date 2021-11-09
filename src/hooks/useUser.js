import { useDispatch, useSelector } from "react-redux";
import loginUserThunk from "../redux/thunk/userThunks";

function useUser() {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const loginUser = (user) => {
    dispatch(loginUserThunk(user));
  };

  return { user, loginUser };
}

export default useUser;
