import React, { useState } from 'react';

export default function ControlComponent() {
  const [value, setValue] = useState({ id: '', password: '' });

  console.log('제어 컴포넌트 재랜더링');

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { id, password } = value;
    const { name } = e.target;

    setValue({
      id,
      password,
      [name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="id">
          ID
          <input name="id" onChange={onChange} />
        </label>
        <label htmlFor="password">
          P/W
          <input name="password" onChange={onChange} />
        </label>
        <button type="submit">button</button>
      </form>
      <div>{value.id}</div>
      <div>{value.password}</div>
    </div>
  );
}
