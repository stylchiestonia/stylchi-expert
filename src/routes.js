import Dashboard from "views/Dashboard.js";
import Bookings from "views/Bookings.js";
import Services from "views/Services.js";
import Settings from "views/Settings.js";
import Login from "views/Login.js";
import Registration from "views/Registration.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/bookings",
    name: "Bookings",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Bookings,
    layout: "/admin"
  },
  {
    path: "/services",
    name: "Services",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Services,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Settings",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Settings,
    layout: "/admin"
  },
  /*---------------------- Auth Routes ----------------------------*/
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/sign-up",
    name: "Registration",
    component: Registration,
    layout: "/auth"
  }
  
];
export default routes;
