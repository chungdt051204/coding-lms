import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";
import { createNotification } from "../../stores/features/notificationSlice";
import { socket } from "../../../socket";

export const AdminPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleAccountReview = (data) => {
      dispatch(createNotification(data));
    };
    const handleCourseReview = (data) => {
      dispatch(createNotification(data));
    };
    socket.on("account-review", handleAccountReview);
    socket.on("course-review", handleCourseReview);
    return () => {
      socket.off("account-review", handleAccountReview);
      socket.off("course-review", handleCourseReview);
    };
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row lg:justify-between pt-20">
        <div className="w-full lg:w-[20%]">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[78%]">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default AdminPage;
