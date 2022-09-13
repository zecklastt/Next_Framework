import React from 'react';

const LinkEstilizado = React.forwardRef(({ onClick, href, children }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} style={{ color: 'black', textDecoration: 'blink' }}>
            {children}
        </a>
    );
});

export default LinkEstilizado;