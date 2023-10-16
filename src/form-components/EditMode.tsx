import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const updateEditMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditMode(event.target.checked);
    };
    const updateIsStudent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            {isEditMode ? (
                <>
                    <Form.Group controlId="formEditMode">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                        <Form.Check
                            type="checkbox"
                            id="isStudentCheck"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    </Form.Group>
                </>
            ) : (
                <>
                    <p>
                        {name} is {isStudent ? "" : "not"} a student
                    </p>
                </>
            )}
            <Form.Check
                type="switch"
                id="isEditCheck"
                label="Edit mode"
                checked={isEditMode}
                onChange={updateEditMode}
            />
        </div>
    );
}
