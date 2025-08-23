import React from "react";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

const typeStyles = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
};

const Notification: React.FC<NotificationProps> = ({ message, type = "info", onClose }) => (
  <div className={`fixed top-6 right-6 z-50 px-4 py-3 rounded shadow-lg text-white ${typeStyles[type]}`}>
    <div className="flex items-center gap-2">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 font-bold">×</button>
    </div>
  </div>
);

export default Notification;
