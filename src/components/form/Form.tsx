import { FC, ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

interface Props {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: () => void;
}

const Form: FC<Props> = ({ children, methods, onSubmit }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} noValidate autoComplete="off">
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
