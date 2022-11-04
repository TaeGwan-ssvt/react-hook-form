import React, { useRef } from 'react';

export default function NotControllComponent() {
  const inputRef = useRef({ id: '', password: '' });

  console.log('비제어 컴포넌트 재랜더링');

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef);
  };

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { id, password } = inputRef.current;
    const { name } = e.target;

    inputRef.current = {
      id,
      password,
      [name]: e.target.value,
    };
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
      <div>{inputRef.current.id}</div>
      <div>{inputRef.current.password}</div>
    </div>
  );
}
