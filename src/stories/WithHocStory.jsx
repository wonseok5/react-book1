import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../04/Button";
import Text from "../04/Text";
import withHoC from "../05/withHOC";

const ButtonWithHoc = withHoC(Button);
const TextWithHoc = withHoC(Text);

storiesOf("withHoC", module)
  .addWithJSX("기본 설정", () => (
    <div>
      <ButtonWithHoc>안녕하세요</ButtonWithHoc>
      <br />
      <TextWithHoc>안녕하세요</TextWithHoc>
    </div>
  ))
  .addWithJSX("large 예제", () => (
    <div>
      <ButtonWithHoc large>안녕하세요</ButtonWithHoc>
      <br />
      <TextWithHoc large>안녕하세요</TextWithHoc>
    </div>
  ));
