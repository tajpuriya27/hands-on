declare module "react-google-recaptcha" {
  import * as React from "react";

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
    size?: "compact" | "normal" | "invisible";
    theme?: "light" | "dark";
    badge?: "bottomright" | "bottomleft" | "inline";
    tabindex?: number;
  }

  export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    reset(): void;
    execute(): void;
    executeAsync(): Promise<string | null>;
  }
}
