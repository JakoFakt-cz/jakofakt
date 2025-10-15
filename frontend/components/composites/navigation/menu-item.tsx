import {Icon} from "@iconify/react";

const MenuItem = (props: {
    label: string,
    isMulti?: boolean,
}) => {
    return (
        <span
            className={`group/item text-primary font-semibold text-lg flex items-center gap-0.5 cursor-pointer`}
        >
            {props.label}
            {props.isMulti && <Icon icon={"mdi:chevron-down"} className={"text-2xl -translate-y-0.25"} />}
        </span>
    );
};

export default MenuItem;