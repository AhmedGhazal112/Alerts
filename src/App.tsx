import { BadgeCheck, Ban, Bell, CircleAlert } from "lucide-react";
import "./App.css";
import Alert from "./components/ui/Alert/Alert";
const App = () => {
  return (
    <div style={{ margin: "2rem" }}>
      <Alert
        type="default-alert"
        icon={<Bell className="icon" />}
        title="Upgrade your plan"
      >
        <p>ahmed</p>
      </Alert>
      <Alert
        type="info-alert"
        icon={<CircleAlert className="icon" />}
        title="Note"
        description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut corrupti
      libero fugit laboriosam consequatur beatae ratione animi ullam unde?"
      />
      <Alert
        type="success-alert"
        icon={<BadgeCheck className="icon" />}
        title="Your settings has been changed successfully"
        description=""
      />
      <Alert
        type="error-alert"
        icon={<Ban className="icon" />}
        title="Something went wrong"
        description=""
      />
      <Alert
        type="warning-alert"
        icon={<Ban className="icon" />}
        title="Tips & Tricks"
        description=""
      />
    </div>
  );
};

export default App;
