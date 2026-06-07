import {Position} from 'reactflow';
import { BaseNode } from './baseNode';



export const ConditionNode = ({id,selected}) => {
    const handles = [
        {
            type: "target",
            position: Position.Left,
            id:`${id}-input`,
        },
        {
            type: "source",
            position: Position.Right,
            id:`${id}-true`,
            style: {top: "35%"},
        },
        {
            type: "source",
            position: Position.Right,
            id:`${id}-false`,
            style: {top: "70%"},
        },
    ];

    return (
      <BaseNode title="Condition" handles={handles} selected={selected}>
        <div
          style={{
            textAlign: "center",
            color: "#64748B",
            fontWeight: "500",
          }}
        >
          If / Else Logic
        </div>
      </BaseNode>
    );
}