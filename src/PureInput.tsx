import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submit = <T, >(value: T) => {
    console.log(value);
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor="id">
        ID
        <input {...register('id')} />
      </label>
      <label htmlFor="password">
        P/W
        <input {...register('password', {
          required: 'Password Error',
          minLength: {
            value: 4,
            message: 'minLength Error',
          },
        })}
        />
      </label>
      <button type="submit">button</button>
    </form>
  );
}
