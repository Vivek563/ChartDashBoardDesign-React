import "./MainPanel.css";
import ChartBar from "./CharBar";
import SocialCard from "./SocialCard";
import TopProductBar from "./TopProductBar";
import Card from "./Card";

function MainPanel() {
  return (
    <div className="header">
      <div className="header-item">
        <div className="left">
          <h1>Dashboard</h1>
        </div>
        <div className="right">
          <div className="search">
            <input type="search" />
            <i className="ri-search-line"></i>
          </div>
          <i className="ri-notification-line"></i>
          <div className="profile-pic">
            <img
              src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="cards">
        <Card
          icon="src/assets/icon1.svg"
          title="Total revenues"
          price="$ 21,129,430"
          percentage={"+2.5%"}
        />
        <Card
          icon="src/assets/icon2.svg"
          title="Total Transaction"
          price="1,520"
          percentage={"+1.7%"}
        />
        <Card
          icon="src/assets/icon3.svg"
          title="Total revenues"
          price="9,721"
          percentage={"+1.4%"}
        />
        <Card
          icon="src/assets/icon4.svg"
          title="Total Users"
          price="9,721"
          percentage={"+.2%"}
        />
      </div>

      <div className="cards"></div>
      <div>
        <div className="chart">
          <ChartBar />
        </div>
      </div>

      <div className="bar-card">
        <div className="barcard-left">
          <div className="top-product">
            <h1>Top Products</h1>
            <h5>May-June 2021</h5>
          </div>
          <div>
            <div>
              <TopProductBar />
              <div>
                <div className="circle">
                  <h4>Basic Tees <br /><span>55%</span></h4>
                </div>
              </div>
              <div>
                <div className="circle-2">
                  <h4>Custom Short Pants <br/> 
                  <span>31%</span>
                  </h4>
                  
                </div>
              </div>
              <div>
                <div className="circle-3">
                  <h4>Super Hoodies<br /><span>14%</span></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="barcard-right">
            <SocialCard />
          </div>
        </div>
     
    </div>
  );
}

export default MainPanel;
