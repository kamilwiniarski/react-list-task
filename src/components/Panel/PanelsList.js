import { Panel } from "./Panel";
import { useState } from 'react';

const list = ["Panel A", "Panel B", "Panel C", "Panel D"];

export function PanelsList({maxOpened, initiallyOpened, panelMargin}) {

  const [opened, setOpened] = useState(initiallyOpened);

  // I'm aware that using title as unique identifier may not be a good idea. I left it to keep it simple
  const toggleOpen = (titleIdx) => {
    let copiedOpened = [...opened];
    if (opened.includes(titleIdx)) {
      copiedOpened = copiedOpened.filter(el => el !== titleIdx);
    } else if(opened.length < maxOpened) {
      copiedOpened.push(titleIdx);
    } else {
      copiedOpened.shift();
      copiedOpened.push(titleIdx);
    }
    setOpened(copiedOpened);
  }

    return (
        <ul>
          {list.map((panelTitle) => { return (
        <Panel 
          title={panelTitle} 
          key={panelTitle} 
          onClick={toggleOpen} 
          opened={opened}
          panelMargin={panelMargin}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste itaque perspiciatis rem rerum sit. A, accusantium aperiam cumque hic labore odio rem sunt voluptas? A architecto dolorem impedit magnam velit?
        </Panel>
          )
          })}
      </ul>
    )
}