import React, { FormEvent, useState } from 'react';
import { FormField } from './FormField';
import { EmailListForm } from './EmailListForm';

export function SubscribeForm(): JSX.Element {
  const [message, setMessage] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    setMessage("You're subscribed!");
  }

  return (
    <>
      {message?.length > 0 && (
        <div className={`alert margin-vert--sm`} role="alert">
          {message}
        </div>
      )}
      <EmailListForm className="row" name="Blog Email List" onSubmit={submit} style={{ alignItems: 'center', marginBottom: '2em' }}>
        <div className="col col--9">
          <FormField containerClass="margin-vert--sm" name="email" placeholder="Email" required type="email" />
        </div>
        <div className="col col--3">
          <button className="button button--lg button--outline button--primary margin-horiz--auto margin-vert--sm" type="submit">
            Subscribe
          </button>
        </div>
      </EmailListForm>
    </>
  );
}
