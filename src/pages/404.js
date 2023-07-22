import { useRouter } from "next/router";

const NotFountPage = () => {

  const router = useRouter()

  setTimeout(()=>{
    router.push("/")
  },5000)

  return (
    <div>
      <img
        src="https://w7.pngwing.com/pngs/336/743/png-transparent-error-404-404-error.png"
        alt=""
        width="100%"
      />
    </div>
  );
};

export default NotFountPage;
