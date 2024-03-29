import React, { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import SupportPages from "./scenes/supportPages";
import LoginForm from "./scenes/login";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import ModalPopup from "./Components/ModalPopup";
// xxxxxxxxxxxxxxxxxxxxxx


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const isRootPath = window.location.pathname === '/';

  const handleLogin = () => {
    // Simulating a login, setLoggedIn(true) would be called after a successful login
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {isRootPath ? null : <Sidebar isSidebar={isSidebar} />}
          <main className="content">
          {isRootPath ? null : <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/supportPages" element={< SupportPages/>} />
              <Route path="/modalPopup" element={< ModalPopup/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;



// import React, { useState } from "react";
// import { ColorModeContext, useMode } from "./theme";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import SupportPages from "./scenes/supportPages";
// import LoginForm from "./scenes/login";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Form from "./scenes/form";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           <Sidebar isSidebar={isSidebar} />
//           <main className="content">
//             <Topbar setIsSidebar={setIsSidebar} />
//             <Routes>
//               <Route path="/" element={<LoginForm />} />
//               <Route path="/admin" element={<Dashboard />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/invoices" element={<Invoices />} />
//               <Route path="/form" element={<Form />} />
//               <Route path="/bar" element={<Bar />} />
//               <Route path="/pie" element={<Pie />} />
//               <Route path="/line" element={<Line />} />
//               <Route path="/faq" element={<FAQ />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/geography" element={<Geography />} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;