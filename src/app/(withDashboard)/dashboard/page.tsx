import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
        Welcome To {session?.user?.name}
      </h1>
      <h1 className="text-4xl text-center mt-10">
        Logged-in user email:{session?.user?.email}
      </h1>
      <Image
        src={session?.user?.image}
        width={100}
        height={100}
        alt="user image"
        className="mx-auto"
      />
    </div>
  );
};

export default DashboardPage;
