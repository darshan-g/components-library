import React from "react";
import { storiesOf } from "@storybook/react";
import Button from '@darshuslib/button';

storiesOf("Button", module).add("Default", () => (
    <Button onClick={() => { alert('You are the best buddy sir! =)')}}>Click me</Button>
));
