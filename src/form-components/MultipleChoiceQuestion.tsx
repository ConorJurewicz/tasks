import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [option, setOption] = useState<string>(options[0]);
    function changeOption(event: React.ChangeEvent<HTMLSelectElement>): void {
        setOption(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formMultiChoice">
                <Form.Label>You answered: </Form.Label>
                <Form.Select value={option} onChange={changeOption}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <>{option === expectedAnswer ? "✔️" : "❌"}</>
        </div>
    );
}
