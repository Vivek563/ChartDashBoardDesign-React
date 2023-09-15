import MainPanel from "../../components/Dashboard/DisplayPanel/MainPanel";
import Sidebar from "../../components/Dashboard/SidePanel/Sidebar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <MainPanel />
    </div>
  );
}

export default Home;
