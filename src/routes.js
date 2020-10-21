import Dashboard from "views/Dashboard.js";
import Bookings from "views/Bookings.js";
import Services from "views/Services.js";
import Settings from "views/Settings.js";
import Login from "views/Login.js";
import Notifications from "views/Notifications.js";
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/bookings",
    name: "Bookings",
    icon: "tim-icons icon-atom",
    component: Bookings,
    layout: "/admin"
  },
  {
    path: "/services",
    name: "Services",
    icon: "tim-icons icon-atom",
    component: Services,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "tim-icons icon-atom",
    component: Settings,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-atom",
    component: Notifications,
    layout: "/admin"
  },
  /*---------------------- Auth Routes ----------------------------*/
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth"
  }
  
];
export default routes;
