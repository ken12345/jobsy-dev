import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Home = () => {
  const deets = useSelector((state: RootState) => state?.user?.userDetails);
  const [details, setDetails] = useState<any>(null)

  useEffect(() => {
    setDetails(deets)
  }, [deets]);


  return (
    <>
      <div>Home page</div>
      <div>Welcome: {details?.fullname}</div>
    </>
  )
}

export default Home;