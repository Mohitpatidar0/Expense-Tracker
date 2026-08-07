import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { UserContext } from "../context/UserContext";

export const useNotifications = () => {
  const { user } = useContext(UserContext);
  const intervalRef = useRef(null);
  const [isExpenseTurn, setIsExpenseTurn] = useState(true); // toggle between expense & income

  useEffect(() => {
    // console.log("here");
    if (!user) return; // run only after login

    const fetchNotification = async () => {
      try {
        if (isExpenseTurn) {
          const expenseRes = await axiosInstance.get(
            API_PATHS.NOTIFICATION.MONTHLY_EXPENSE_NOTIFICATION
          );
          toast(expenseRes.data.notification,{style:{
            border : "1px dotted #FF6900",
          }});
          console.log(`Expense notification fetched at: ${new Date().toLocaleTimeString()}`);
        } else {
          const incomeRes = await axiosInstance.get(
            API_PATHS.NOTIFICATION.MONTHLY_INCOME_NOTIFICATION
          );
          toast(incomeRes.data.notification,{style:{
            border : "1px dotted #FA2C37",
          }});
          // print time on console for debugging purposes
          // console.log(`Income notification fetched at: ${new Date().toLocaleTimeString()}`);
        }

        // toggle for next call
        setIsExpenseTurn((prev) => !prev);
      } catch (err) {
        console.error("Notification error:", err.message);
      }
    };

    // run alternately every 10 seconds
    intervalRef.current = setInterval(fetchNotification, 10000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isExpenseTurn]);
};
