// import "../css/App.css";
// import React from "react";
// import BasicTable from "./managerPage";
// import { UserPage } from "./userPage";
// import HomePage from "./homePage";
// import { Provider } from 'react-redux'
// import Store from '../Redux/store'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import MainPage from "./MainPage";
// import { useState } from "react";
// import UserMessages from "./userMessages";
// import ManagerMessagse from "./managerMessagse";
// import { FcManager, FcBusinesswoman, FcBusinessman } from 'react-icons/fc';
// import { AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai';
// import { useEffect } from "react";
// import Offcanvas from 'react-bootstrap/Offcanvas';

// export default function App() {
//   const [kindOfUser, setKindOfUser] = useState(JSON.parse(localStorage.getItem('kind-of-user')));
//   const currentUser = JSON.parse(localStorage.getItem('user-details'));
//   const [defaultActivity, setDefaultActivity] = useState('home');

//   // useEffect(() => {
//   //   viewTabs()
//   // }, [defaultActivity]);

//   const logoutUser = () => {
//     localStorage.clear()
//     setDefaultActivity("home")
//     setKindOfUser(JSON.parse(localStorage.getItem('kind-of-user')))
//   }

//   const loginUser = () => {
//     setDefaultActivity("login")
//   }

//   const viewTabs = () => {
//     return (
//       <Tabs
//         defaultActiveKey="home"
//         // id="uncontrolled-tab-example"
//         className=""
//       >
//         <Tab eventKey="home" title="Home">
//           <MainPage />
//         </Tab>
//         {kindOfUser == 'manager' && <Tab eventKey="manager" title="Manager Page">
//           <BasicTable />
//         </Tab>}
//         {kindOfUser == 'manager' && <Tab eventKey="managerMessagse" title="Manager Messagse">
//           <ManagerMessagse />
//         </Tab>}
//         {kindOfUser == 'simpleUser' && <Tab eventKey="user" title="My Work">
//           <UserPage />
//         </Tab>}
//         {kindOfUser == 'simpleUser' && <Tab eventKey="user-messages" title="Messages From Manager">
//           <UserMessages />
//         </Tab>}
//       </Tabs>
//     )
//   }

//   function OffCanvasExample({ name, ...props }) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);

//     return (
//       <>

//         <Offcanvas className="login-canvas" show={defaultActivity == "login"} onHide={handleClose} {...props}>
//           <Offcanvas.Header closeButton>
//           </Offcanvas.Header>
//           <Offcanvas.Body className="offcanvas-body-login">
//             <HomePage setDefaultActivity={setDefaultActivity} setKindOfUser={setKindOfUser} />

//           </Offcanvas.Body>
//         </Offcanvas>
//       </>
//     );
//   }


//   return (
//     <div>
//       <Provider store={Store}>
//         <div className="header-main">
//           <div className="welcome-title">{kindOfUser === 'manager' ? <FcManager style={{ fontSize: '28px' }} /> : kindOfUser === 'simpleUser' ? <FcBusinesswoman style={{ fontSize: '28px' }} /> : <FcBusinessman style={{ fontSize: '28px' }} />}{kindOfUser === 'simpleUser' ? `Welcome ${currentUser?.firstName + ' ' + currentUser?.lastName}` : kindOfUser === 'manager' ? "Welcom Manager" : 'Welcome guest'}</div>
//           {kindOfUser === null ?
//             <button onClick={() => loginUser()} className="btn-login">
//               Login <AiOutlineLogin />
//             </button> :
//             <button className="btn-logout" onClick={() => logoutUser()}>
//               Logout <AiOutlineLogout />
//             </button>}
//           <OffCanvasExample placement="end" name="end" />
//         </div>
//         {defaultActivity}
//         {viewTabs()}
//       </Provider>
//     </div>

//   );
// };