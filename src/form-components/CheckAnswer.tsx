import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, changeAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        changeAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="getAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                    placeholder={"Input Answer here"}
                />
            </Form.Group>
            <p>{answer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
