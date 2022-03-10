import React from "react";
import { storiesOf } from "@storybook/react";
import Button from '@darshsk/button';

storiesOf("Button", module).add("Default", () => (
    <Button onClick={() => { alert('You are my best friend buddy! =)')}}>Click me</Button>
));
