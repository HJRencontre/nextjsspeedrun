import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input, Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';


function EmailForm() {
  const [state, handleSubmit] = useForm("mbjnbwoo");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:
      </label>
      <Input
        id="email"
        type="email" 
        name="email"
        required
        className="border-gray-800 p-2 rounded"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="subject">
        Subject:
      </label>
      <Input
        id="subject"
        type="text" 
        name="subject"
        required
        className="border-gray-800 p-2 rounded"
      />
      <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />
      <label htmlFor="message"
      >
        Message:
      </label>
      <Textarea
        id="message"
        name="message"
        required
        className="border-gray-800 p-2 rounded"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Button type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
}

export default EmailForm;