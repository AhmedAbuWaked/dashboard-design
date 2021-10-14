import React from 'react';
import Logo from '../../assets/logo.png';
import DashboardIcon from '../svg/DashboardIcon';
import AppointmentsIcon from '../svg/AppointmentsIcon';
import DoctorIcon from '../svg/DoctorIcon';
import DepartmentsIcon from '../svg/DepartmentsIcon';
import PatientsIcon from '../svg/PatientsIcon';
import PaymentsIcon from '../svg/PaymentsIcon';
import HelpIcon from '../svg/HelpIcon';
import './dashboard.scss';
import { Divider } from 'antd';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <aside>
        <div className='logo'>
          <img src={Logo} alt='test' />
        </div>
        <div className='sidebar-tabs'>
          <p>MEDICINE</p>
          <ul>
            <li>
              <DashboardIcon />
              Dashboard
            </li>
            <li>
              <AppointmentsIcon />
              Appointments
            </li>
            <li>
              <DoctorIcon />
              Doctors
            </li>
            <li>
              <DepartmentsIcon />
              Departments
            </li>
            <li>
              <PatientsIcon />
              Patients
            </li>
            <li>
              <PaymentsIcon />
              Payments
            </li>
          </ul>
        </div>
        <hr />
        <div className='help'>
          <HelpIcon /> Help
        </div>
      </aside>
      <div className='main-panel'>
        <div className='container'>
          <header>H1</header>
          <div className='dashboard-content'>This is Content</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
