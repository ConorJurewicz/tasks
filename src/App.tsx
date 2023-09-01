import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Conor Jurewicz
            </header>
            <div>
                <h1>Header 1</h1>
                <div>
                    <Container>
                        <Row>
                            <Col>Left</Col>
                            <Col>Right</Col>
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
                    <Button onClick={() => console.log("I was clicked.")}>
                        BREAK ME!
                    </Button>
                </div>
            </div>
            <div>
                <ul>
                    <li>Bullet</li>
                </ul>
                <></>
                <ol>
                    <li>Numbers</li>
                </ol>
                This is <span style={{ color: "pink" }}> colored text</span>
            </div>
            <img
                src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1286283054.jpg"
                alt="A cute orange cat_1"
                width="500"
                height="350"
            />
        </div>
    );
}

export default App;
