import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "outline" | "outline-accent" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    target?: string;
    rel?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classList = [
    styles.btn,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    fullWidth ? styles["full-width"] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {iconLeft && <span className={`${styles.icon} ${styles["icon-left"]}`}>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className={`${styles.icon} ${styles["icon-right"]}`}>{iconRight}</span>}
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel, ...rest } = props as ButtonAsLink;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    
    if (isExternal) {
      return (
        <a href={href} target={target} rel={rel} className={classList} {...rest}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classList} {...rest}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classList} {...buttonProps}>
      {content}
    </button>
  );
}
