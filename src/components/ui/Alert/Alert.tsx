import { X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
import { AlertTypes } from "../../../../types";
interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}
const Alert = ({ type, icon, title, description, children }: IProps) => {
  return (
    <div className={type}>
      <div className="header">
        {icon}
        <h4>{title}</h4>
        <X className="x-icon" />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
