import React from "react";
import { storiesOf } from "@storybook/react";

import Input from "../04/InputWithStyles";

storiesOf("InputWithStyle", module)
  .addWithJSX("기본 설정", () => <Input name="name" />)
  .addWithJSX("label 예제", () => <Input name="name" label="라벨" />)
  .addWithJSX("value 예제", () => <Input name="name" label="라벨" value="값" />)
  .addWithJSX("errorMessage 예제", () => (
    <Input name="name" label="라벨" errorMessage="이름을 입력해주세요" />
  ));
