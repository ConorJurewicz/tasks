import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { Quizzer } from "./quizzer/Quizzer";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Conor Jurewicz
            </header>
            <Quizzer></Quizzer>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <div>
                <h1>Header 1</h1>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <div
                                    style={{
                                        width: "200px",
                                        height: "100px",
                                        backgroundColor: "red"
                                    }}
                                >
                                    <Col>Left</Col>
                                </div>
                            </Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            >
                                <Col>Right</Col>
                            </div>
                        </Row>
                    </Container>
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Hello World.
                </p>
                <div style={{ border: "3px solid pink", padding: "1px" }}>
                    <p>Pink!</p>
                </div>
                <div>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                </div>
            </div>
            <div>
                <ul>
                    <li>Bullet 1</li>
                    <li>Bullet 2</li>
                    <li>Bullet 3</li>
                </ul>
                This is <span style={{ color: "pink" }}> colored text</span>
            </div>
            <img
                src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1286283054.jpg"
                alt="A cute orange cat_1"
                width="500"
                height="350"
            />
            <hr></hr>
            {<DoubleHalf></DoubleHalf>}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
