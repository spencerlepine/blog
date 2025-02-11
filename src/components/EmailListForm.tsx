import React from 'react';

interface EmailListFormProps extends React.PropsWithChildren, React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  name: string;
}

export function EmailListForm({ children, name, ...props }: EmailListFormProps) {
  return (
    <form action="https://public.herotofu.com/v1/8a20de80-e812-11ef-91ab-497918027bf8" method="post" accept-charset="UTF-8" name={name} {...props}>
      <input type="hidden" name="name" value={name} />
      <input type="hidden" name="message" value="You've got a new subscriber!" />
      {children}
    </form>
  );
}
