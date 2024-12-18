import { forwardRef, cloneElement } from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const ButtonPropTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  asChild: PropTypes.bool,
  variant: PropTypes.oneOf(['round-sm', 'round-md', 'rounded']),
  size: PropTypes.oneOf(['default', 'sm', 'md', 'lg']),
};

const Button = forwardRef(
  (
    {
      children,
      asChild = false,
      disabled = false,
      className = '',
      variant = 'round-md',
      type = 'button',
      size = 'default',
      ...props
    },
    ref
  ) => {
    const classes = [
      styles.button,
      styles[`button--${variant}`],
      styles[`button--${size}`],
      disabled && styles['button--disabled'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    if (asChild) {
      return cloneElement(children, {
        className: [classes, children.props.className]
          .filter(Boolean)
          .join(' '),
        ...props,
      });
    }

    return (
      <button
        type={type}
        disabled={disabled}
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
Button.propTypes = ButtonPropTypes;

export default Button;
