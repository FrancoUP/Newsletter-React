import { Image } from "../ui/Image";
import { Descipton } from "../ui/Descipton";
import { List } from "../ui/List";
// import { useRegister } from "../contexts/FormContext";
import { FormComponent } from "../features/FormComponent";

export type Inputs = {
  email: string;
};

export function FormPage() {
  const style =
    "w-full h-auto lg:mt-[50px] lg:bg-[white] lg:pt-[24px] lg:pb-[24px] lg:pl-[60px] lg:pr-[24px] lg:grid lg:grid-col-2 lg:w-[928px] lg:h-[641px] lg:m-auto lg:rounded-[36px]";

  return (
    <div className={style}>
      <Image />
      <Descipton>
        <List />
        <FormComponent />
      </Descipton>
    </div>
  );
}
