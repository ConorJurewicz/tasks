import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answer, invertAnswer] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => invertAnswer(!answer)}>Reveal Answer</Button>
            {answer && <p>42</p>}
        </div>
    );
}
