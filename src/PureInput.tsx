import React from 'react';
import { useForm } from 'react-hook-form';

export default function PureInput() {
  const {
    register, handleSubmit, formState,
  } = useForm();

  const submit = <T, >(value: T) => {
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="id">
          ID
          <input {...register('id')} />
        </label>
        <label htmlFor="password">
          P/W
          <input {...register('password')} />
        </label>
        <button type="submit">button</button>
      </form>
    </div>
  );
}
