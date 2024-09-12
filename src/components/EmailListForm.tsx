import React from 'react';

interface EmailListFormProps extends React.PropsWithChildren, React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  name: string;
}

export function EmailListForm({ children, name, ...props }: EmailListFormProps) {
  return (
    <form action="https://public.herotofu.com/v1/aae45b10-27cb-11ed-9d54-c9f9d2b00e7b" method="post" accept-charset="UTF-8" name={name} {...props}>
      <input type="hidden" name="name" value={name} />
      <input type="hidden" name="message" value="You've got a new subscriber!" />
      {children}
    </form>
  );
}
