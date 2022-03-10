import React from "react";
import { storiesOf } from "@storybook/react";
import Button from '@audnavlib/button';

storiesOf("Button", module).add("Default", () => (
    <Button onClick={() => { alert('You are the best friend! =)')}}>Click me</Button>
));
