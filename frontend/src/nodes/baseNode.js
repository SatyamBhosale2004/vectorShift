import {Handle} from "reactflow";

export const BaseNode = ({
    title,
    handles,
    children
}) => {

    return (
    <div style ={{width: 200 , minHeight: 80, border: "1px solid black", padding: 10, position: "relative"}}>
        {
            handles?.map((handle) => (
                <Handle
                key={handle.id}
                type={handle.type}
                position={handle.position}
                id={handle.id}
                style={handle.style}/>
            ))
        }

        <div>
            <span>{title}</span>
        </div>
        <div>{children}</div>
    </div>
    );
};

