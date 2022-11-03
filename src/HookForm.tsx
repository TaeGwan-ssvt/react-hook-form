import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';

export default function HookForm() {
  const { control, handleSubmit, getValues } = useForm();
  const logger = <T, >(value: T) => {
    console.log(value);
  };

  // Controller 컴포넌트의 ruels가 동작을 안함
  return (
    <form onSubmit={handleSubmit((a) => logger(a))}>
      <Controller
        control={control}
        name="name"
        rules={{ required: '메세지' }}
        render={({ field: { value, ...rest } }) => {
          console.log(value, rest);
          return (
            <TextField
              label="name"
              type="text"
              fullWidth
              variant="outlined"
                // required
              disabled={false}
              {...rest}
            />
          );
        }}
      />

      <button type="submit">asdf</button>
    </form>
  );
}
