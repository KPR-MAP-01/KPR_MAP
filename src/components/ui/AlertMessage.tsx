import { XCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertMessageProps {
  type?: AlertType;
  message: string;
}

export default function AlertMessage({ type = "info", message }: AlertMessageProps) {
  const styles = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
    warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
    info: "bg-blue-100 border-blue-400 text-blue-700",
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };

  return (
    <div
      className={`flex items-center gap-2 border-l-4 p-3 rounded-lg shadow-sm ${styles[type]}`}
    >
      {icons[type]}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
