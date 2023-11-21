import imgCeck from "../assets/images/icon-success.svg";

export function List() {
  return (
    <ul className=" mb-[10px] mt-[10px]">
      <li className=" flex flex-row justify-start gap-[16px] mb-[30px] lg:mb-[15px]">
        <img className=" w-[21px]" src={imgCeck} />
        <p className="font-roboto font-normal text-base text-[#242742]">
          Product discovery and building what matters
        </p>
      </li>

      <li className=" flex flex-row justify-start gap-[16px] mb-[30px] lg:mb-[15px]">
        <img className="w-[21px]" src={imgCeck} />
        <p className="font-roboto font-normal text-base text-[#242742]">
          Measuring to ensure updates are a success
        </p>
      </li>

      <li className=" flex flex-row justify-start gap-[16px] mb-[20px] lg:mb-[15px]">
        <img className="w-[21px]" src={imgCeck} />
        <p className="font-roboto font-normal text-base text-[#242742]">
          And much more!
        </p>
      </li>
    </ul>
  );
}
