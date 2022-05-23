import React from "react";
import { storiesOf } from "@storybook/react";
import withLoading from "../05/withLoading";
import Button from "../04/Button";

const TextWithLoading = withLoading("로딩 중!!!")(Text);
const ButtonWithLoading = withLoading(<Button disabled>로딩중...</Button>)(
  Button
);

storiesOf("WithLoading", module).addWithJSX("isLoading 예제", () => (
  <div>
    <ButtonWithLoading>안녕하세요</ButtonWithLoading>
    <br />
    <TextWithLoading>안녕하세요</TextWithLoading>
  </div>
));
