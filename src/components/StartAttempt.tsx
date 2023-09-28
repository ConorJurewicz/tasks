import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, editAttempts] = useState<number>(4);
    const [progress, editProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    editProgress(true);
                    editAttempts(attempts - 1);
                }}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() => {
                    editProgress(false); // Could be !inProgress
                }}
                disabled={!progress}
            >
                Stop Quiz
            </Button>

            <Button
                onClick={() => {
                    editAttempts(attempts + 1);
                }}
                disabled={progress}
            >
                Mulligan
            </Button>
            <p>{attempts}</p>
        </div>
    );
}
