// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangename = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangename} placeholder={"이름"} />
      </div>
      <div>
        <input value={birth} type="date" onChange={onChangeBirth} />
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {country}
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio}></textarea>
        {bio}
      </div>
    </div>
  );
};
export default Register;