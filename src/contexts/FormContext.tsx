import {
  createContext,
  useContext,
  ReactNode,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

type StateFormContext = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
};

const FormContext = createContext<StateFormContext>({} as StateFormContext);

interface FormProviderChildren {
  children: ReactNode;
}

function FormProvider({ children }: FormProviderChildren) {
  const [email, setEmail] = useState("");

  return (
    <FormContext.Provider value={{ email, setEmail }}>
      {children}
    </FormContext.Provider>
  );
}

function useRegister() {
  const context = useContext(FormContext);

  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { FormProvider, useRegister };
