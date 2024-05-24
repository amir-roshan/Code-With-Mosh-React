/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

interface ListGroupProps {
  items: string[];
  header: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, header, onSelectItem }: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleEvent = (e: React.MouseEvent) => {
    console.log(e);
  };

  const message = () => {
    return items.length === 0 && <p>There are no cities in the list</p>;
  };
  return (
    <>
      <h1>{header}</h1>
      {message()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
