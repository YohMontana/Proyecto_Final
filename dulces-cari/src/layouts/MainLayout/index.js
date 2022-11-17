import { useNavigate, Outlet } from "react-router-dom"



const MainLayout = ()=>{
    const history = useNavigate();

    return (
        <div>
          <Outlet />
        </div>
      );
}

export default MainLayout;