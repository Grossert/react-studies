import React from "react";
import style from './button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;

}

class Button extends React.Component<ButtonProps> {
    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;