import img from "../assets/images/icon-success.svg";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../contexts/FormContext";

function SubmitPage() {
  const { email } = useRegister();
  const navigate = useNavigate();

  function handleOnClick() {
    navigate(-1);
  }
  return (
    <div className="w-screen h-full p-[5vw] mt-[10vh] m-auto sm:w-[504px] sm:h-[520px] sm:bg-white sm:rounded-3xl sm:p-[64px] flex flex-col ">
      <img className="w-[64px] mb-[30px]" src={img}></img>
      <h1 className="text-[40px] mb-[15px] font-bold font-roboto leading-[130%] text-[#242742] ">
        Thanks for subscribing!
      </h1>
      <h3 className="text-[16px] mb-[50px] font-normal font-roboto text-[#242742]">
        A confirmation email has been sent to {email}. Please open it and click
        the button inside to confirm your subscription
      </h3>
      <button
        onClick={handleOnClick}
        className="
        mt-[60px] sm:mt-0 h-[56px] rounded-[8px] border-none
        bg-[#242742] text-[white] font-roboto text-[16px] font-bold
        hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-500 hover:shadow-lg
      "
      >
        Dismiss message
      </button>
    </div>
  );
}

export default SubmitPage;
