import { HomeBanner } from "./component/homebanner.component";
import { Outlet } from "react-router-dom";

const HomePage = () => {  
    return (
      <>
       
        <HomeBanner />
        
      </>
    );
  };
  
export default HomePage