import { useState } from "react";
import { Nav } from "react-bootstrap";
import TabContext from "./TabContext";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const Ani = styled.div`
  .ani-enter {
    opacity: 0;
  }
  .ani-enter-active {
    opacity: 1;
    transition: all 500ms;
  }
`;

const Tab = () => {
  const [tab, setTab] = useState(0);
  const [switchs, setSwitch] = useState(false);

  return (
    <div>
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSwitch(false);
              setTab(0);
            }}
            eventKey="link-0"
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSwitch(false);
              setTab(1);
            }}
            eventKey="link-1"
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Ani>
        <CSSTransition
          in={switchs}
          setSwitch={setSwitch}
          classNames="ani"
          timeout={500}
        >
          <TabContext tab={tab} />
        </CSSTransition>
      </Ani>
    </div>
  );
};

export default Tab;
