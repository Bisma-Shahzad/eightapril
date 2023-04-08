import { Button } from "@mui/material";

function BSButton (props) {
    const { variant, title, color, onClick, size, align, type } = props;

    return <>
    <Button variant={variant} color={color} onClick={onClick} size={size} align={align} type={type}>{title}</Button>
    </>
}

export default BSButton;

// For pass component

// <BSButton title="Open" variant="outlined" size="small" />