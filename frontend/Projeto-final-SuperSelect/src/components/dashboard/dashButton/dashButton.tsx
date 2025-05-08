import { IDashButtonProps } from '../../../customTypes';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const dashButtonDefaults: IDashButtonProps = {
  iconName: 'bi-airplane-fill',
  buttonLabel: 'Button Label',
  navLink: "/"
};

export function DashButton(props: IDashButtonProps) {
  // Merge props with defaults
  const { iconName, buttonLabel, navLink } = { ...dashButtonDefaults, ...props };

  const iconClasses = `dashboardButtonIcon bi ${iconName} ms-3 text-ss-blue`;

  return (
    <Nav.Link to={navLink!} as={NavLink}>
      <div className='dashboardButton mx-auto mt-3 p-0 rounded-pill d-flex justify-content-start align-items-center'>
        <div className='dashboardButtonSeparator pe-2'>
          <i className={iconClasses}></i>
        </div>
        <div className='dashboardButtonText ms-2'>{buttonLabel}</div>
      </div>
    </Nav.Link>
  );
}
