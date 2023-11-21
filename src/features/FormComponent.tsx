import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../contexts/FormContext";
import { Inputs } from "../pages/FormPage";

export function FormComponent() {
  const { setEmail } = useRegister();
  const { register, handleSubmit, reset, getValues, formState } =
    useForm<Inputs>();
  const { isSubmitting, isSubmitted } = formState;

  const navigate = useNavigate();

  useEffect(
    function () {
      if (isSubmitted) navigate("/thank-you");
    },
    [isSubmitted, navigate]
  );

  async function onSubmit() {
    setEmail(getValues("email"));
    reset();
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label
        className="mb-[10px] font-roboto font-bold text-[12px] text-[#242742]"
        htmlFor="email"
      >
        Email address
      </label>
      <input
        className="pl-[24px] mb-[25px] outline-none h-[56px] rounded-[8px] border-gray-400 border-[1px] cursor-pointer"
        disabled={isSubmitting}
        type="email"
        placeholder="Email"
        {...register("email")}
        required
      ></input>
      <button
        className="
        mb-[70px] h-[56px] rounded-[8px] border-none
        bg-[#242742] text-[white] font-roboto text-[16px] font-bold
        hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-500 hover:shadow-lg
      "
        type="submit"
        disabled={isSubmitting}
      >
        Subsribe to monthly newsletter
      </button>
    </form>
  );
}
