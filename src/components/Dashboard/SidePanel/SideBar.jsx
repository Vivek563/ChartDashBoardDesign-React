
import "./sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className='sidebar-item'>
            <div className="navigation">
            <h1>Board.</h1>
            <div className='menu'>
                <i className="ri-speed-up-line"></i>
                <p>Dashboard</p>
            </div>
            <div className='menu'>
                <i className="ri-exchange-funds-line"></i>
                <p>Transactions</p>
            </div>
            <div className='menu'>
                <i className="ri-speed-up-line"></i>
                <p>Schedules</p>
            </div>
            <div className='menu'>
                <i className="ri-user-line"></i>
                <p>Users</p>
            </div>
            <div className='menu'>
                <i className="ri-settings-3-line"></i>
                <p>Settings</p>
            </div>
            <div className="help">
                <p>Help</p>
                <p>Contact Us</p>            
            </div> 
            </div>
               
        </div>
    </div>
    
  )
}

export default Sidebar
