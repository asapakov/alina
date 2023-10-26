import { type ILink } from '../../components/Sidebar/interface';
import dashboard from '../../assets/images/dashboard.svg';
import newRequest from '../../assets/images/new-request.svg';
import myRequests from '../../assets/images/my-requests.svg';
import acceptedRequests from '../../assets/images/accepted-requests.svg';
import rejectedRequests from '../../assets/images/rejected-requests.svg';
import Dashboard from '../../pages/Dashboard';
import NewRequest from '../../pages/NewRequest';
import MyRequests from '../../pages/MyRequests';
import AcceptedRequests from '../../pages/AcceptedRequests';
import RejectedRequests from '../../pages/RejectedRequests';

export const links: ILink[] = [
  {
    route: '/',
    title: 'dashboard',
    icon: dashboard,
    header: 'dashboardHeader',
    element: Dashboard,
  },
  {
    route: '/new',
    title: 'newRequest',
    icon: newRequest,
    header: 'newRequestHeader',
    element: NewRequest,
  },
  {
    route: '/my',
    title: 'myRequests',
    icon: myRequests,
    header: 'myRequestsHeader',
    element: MyRequests,
  },
  {
    route: '/accepted',
    title: 'acceptedRequests',
    icon: acceptedRequests,
    header: 'acceptedRequestsHeader',
    element: AcceptedRequests,
  },
  {
    route: '/rejected',
    title: 'rejectedRequests',
    icon: rejectedRequests,
    header: 'rejectedRequestsHeader',
    element: RejectedRequests,
  },
];

export const requestFields = [
  {
    id: 'request-name',
    label: 'Название заявки',
    placeholder: 'Напишите название заявки',
    variant: 'standard',
    required: true,
    fullWidth: true,
  },
];

export const RequestTypes = {
  classic: 'classic',
};

export const Cities = ['Almaty', 'Astana', 'Aktau'];
