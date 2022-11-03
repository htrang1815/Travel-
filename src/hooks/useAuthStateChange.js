import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLogin } from "../store/auth/slice";

export default function useAuthStateChanged() {
  const dispatch = useDispatch();
  const { isLogin, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getIsLogin());
  }, [dispatch]);
  return {
    isLogin,
    user,
  };
}
