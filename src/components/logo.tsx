import * as React from "react";
import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 12h12v12H0V12ZM12 0h12v12H12V0Z" fill="currentColor" />
  </svg>
);

export default Logo;
