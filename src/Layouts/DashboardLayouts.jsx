import { NavLink, Outlet } from "react-router-dom";

const DashboardLayouts = () => {
  return (
    <div className="flex px-12 bg-gray-300">
      <div className="w-[250px] pt-6 bg-sky-300 min-h-screen ">
        <ul className="space-y-2 menu">
          {
            <>
              <li>
                <NavLink to="/dashboardLayout/dashboard"> Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/dashboardLayout/products"> All Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboardLayout/add-products">
                  {" "}
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
            </>
          }

          <div className="w-[200px] pl-[18px] menu ">
            <p className="border "></p>
          </div>
        </ul>
      </div>
      <div className="flex-1 pl-12 mt-5 ">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayouts;
