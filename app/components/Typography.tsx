import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = Readonly<{
  className?: string;
  children?: ReactNode;
}>;

export function TypographyH1(props: Props) {
  return (
    <h1
      className={twMerge(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}

export function TypographyH2(props: Props) {
  return (
    <h2
      className={twMerge(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        props.className
      )}
    >
      {props.children}
    </h2>
  );
}

export function TypographyH3(props: Props) {
  return (
    <h3
      className={twMerge(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className
      )}
    >
      {props.children}
    </h3>
  );
}

export function TypographyH4(props: Props) {
  return (
    <h4
      className={twMerge(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        props.className
      )}
    >
      {props.children}
    </h4>
  );
}

export function TypographyP(props: Props) {
  return (
    <p
      className={twMerge(
        "leading-7 [&:not(:first-child)]:mt-6",
        props.className
      )}
    >
      {props.children}
    </p>
  );
}

export function TypographyLead(props: Props) {
  return (
    <p className={twMerge("text-xl text-muted-foreground", props.className)}>
      {props.children}
    </p>
  );
}

export function TypographyLarge(props: Props) {
  return (
    <div className={twMerge("text-lg font-semibold", props.className)}>
      {props.children}
    </div>
  );
}

export function TypographySmall(props: Props) {
  return (
    <small
      className={twMerge("text-sm font-medium leading-none", props.className)}
    >
      {props.children}
    </small>
  );
}

export function TypographyMuted(props: Props) {
  return (
    <p className={twMerge("text-sm text-muted-foreground", props.className)}>
      {props.children}
    </p>
  );
}
