import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../auth/redux/slices";

const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, token, loading, error } = useSelector(
    (state) => state.auth,
  );
  const logoutUser = () => {
    dispatch(logout());
  };
  return { isAuthenticated, user, token, loading, error, logoutUser };
};
export default useAuth;
