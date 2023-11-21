import imgSfondoMobile from "../assets/images/illustration-sign-up-mobile.svg";
import imgSfondo from "../assets/images/illustration-sign-up-desktop.svg";

export function Image() {
  return (
    <div className=" lg:h-[593px] w-full mb-4 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
      <img
        src={window.innerWidth >= 1024 ? imgSfondo : imgSfondoMobile}
        alt="img-sfondo-mobile"
        className=" w-full max-h-[300px] sm:max-h-[400px] lg:h-[593px] lg:max-h-[593px] object-cover lg:w-[400px] lg:rounded-[16px] rounded-b-[16px]"
      />
    </div>
  );
}
