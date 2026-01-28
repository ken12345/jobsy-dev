import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type { IUserDeet } from "../../interfaces/UserState.interface";

const Home = () => {
  const deets: IUserDeet | null = useSelector((state: RootState) => state?.user?.userDetails);
  const [details, setDetails] = useState<IUserDeet | null>()

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