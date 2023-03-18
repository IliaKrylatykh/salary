import classes from './buttonBlack.module.scss'

const ButtonBlack = (props) => {
    return (
        <button className={classes.button}>
            {props.children}
        </button>
    );
};

export default ButtonBlack;