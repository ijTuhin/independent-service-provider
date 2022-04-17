import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? '#8e44ad' : '', textDecoration: match ? "underline" : "", textDecorationThickness: match ? "2px" : "", textUnderlineOffset: match ? "5px" : "", fontWeight: match ? "500" : "" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;