function baseProps(props) {
    return {
        width: 18,
        height: 18,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
    };
}

export function IconOverview(props) {
    return (
        <svg {...baseProps(props)}>
            <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
            <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
            <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
            <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
        </svg>
    );
}

export function IconCalendar(props) {
    return (
        <svg {...baseProps(props)}>
            <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
            <path d="M8 3v4M16 3v4M3.5 10h17" />
        </svg>
    );
}

export function IconUsers(props) {
    return (
        <svg {...baseProps(props)}>
            <circle cx="9" cy="8.5" r="3.2" />
            <path d="M3.5 20c0-3.4 2.5-5.7 5.5-5.7s5.5 2.3 5.5 5.7" />
            <path d="M16 8.2a3 3 0 0 1 0 5.9M20.5 20c0-2.7-1.7-4.7-4-5.4" />
        </svg>
    );
}

export function IconSparkle(props) {
    return (
        <svg {...baseProps(props)}>
            <path d="M12 3.5c.6 3.4 1.6 4.4 5 5-3.4.6-4.4 1.6-5 5-.6-3.4-1.6-4.4-5-5 3.4-.6 4.4-1.6 5-5Z" />
        </svg>
    );
}

export function IconTeam(props) {
    return (
        <svg {...baseProps(props)}>
            <circle cx="12" cy="7.5" r="3.4" />
            <path d="M5.5 20c0-3.9 2.9-6.5 6.5-6.5s6.5 2.6 6.5 6.5" />
        </svg>
    );
}

export function IconCheck(props) {
    return (
        <svg {...baseProps(props)}>
            <path d="M4.5 12.8 9 17.3 19.5 6.7" />
        </svg>
    );
}
