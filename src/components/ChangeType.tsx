import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const TYPE_TRANSITION: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question"
};

export function ChangeType(): JSX.Element {
    const [qType, changeQType] = useState<QuestionType>(
        "short_answer_question"
    );
    return (
        <div>
            <Button
                onClick={() => {
                    const flippedType: QuestionType = TYPE_TRANSITION[qType];
                    changeQType(flippedType);
                }}
            >
                Change Type
            </Button>
            <p>
                {qType === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </p>
        </div>
    );
}
