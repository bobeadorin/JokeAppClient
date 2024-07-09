import "./ProfilePageStyles.css";
import UserDataCard from "./components/UserDataCard/UserDataCard";

export default function ProfilePage() {
  return (
    <div className="profilePage-wrapper">
      <section className="profilePage-section">
        <UserDataCard />
      </section>
    </div>
  );
}
