import Home from "@/components/views/Home";
import VolunteerAppointment from "@/components/views/VolunteerAppointment";

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/need-volunteer', name: 'volunteer-appointment', component: VolunteerAppointment}
]

export default routes