import React, { useState } from "react";

type Props = {
  name: string;
  children?: Props[];
};

const Entry = ({ entry, depth }: { entry: Props; depth: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      {entry.children ? (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "-" : "+"} &nbsp;
          {entry.name}
        </button>
      ) : (
        <div>{entry.name}</div>
      )}

      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Entry;
