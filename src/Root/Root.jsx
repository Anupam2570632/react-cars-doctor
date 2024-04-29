import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-play-fair">
            <Outlet/>
        </div>
    );
};

export default Root;