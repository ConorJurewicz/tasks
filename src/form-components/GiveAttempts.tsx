import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, changeAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);
    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>): void {
        !isNaN(parseInt(event.target.value))
            ? setRequestedAttempts(parseInt(event.target.value))
            : setRequestedAttempts(0);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attempts}</p>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Edit Attempts</Form.Label>
                <Form.Control type="number" onChange={updateAttempts} />
            </Form.Group>
            <Button
                onClick={() => changeAttempts(attempts - 1)}
                disabled={!attempts}
            >
                Use
            </Button>
            <Button
                onClick={() => changeAttempts(attempts + requestedAttempts)}
            >
                Gain
            </Button>
        </div>
    );
}
