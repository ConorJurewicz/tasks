import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🌊" | "🎃" | "🐱" | "🇨🇳" | "🎄";
// Beach, Halloween, Cat Day, China, Christmas!
/*
const TYPE_TRANSITION: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question"
};
*/
const LETTER_TRANSITION: Record<Holiday, Holiday> = {
    "🌊": "🎃",
    "🎃": "🐱",
    "🐱": "🇨🇳",
    "🇨🇳": "🎄",
    "🎄": "🌊"
};

const DATE_TRANSITION: Record<Holiday, Holiday> = {
    "🐱": "🎃",
    "🎃": "🎄",
    "🎄": "🇨🇳",
    "🇨🇳": "🌊",
    "🌊": "🐱"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, editHoliday] = useState<Holiday>("🌊");
    return (
        <div>
            <Button
                onClick={() => {
                    const newHoliday: Holiday = LETTER_TRANSITION[holiday];
                    editHoliday(newHoliday);
                }}
            >
                Advance by Alphabet
            </Button>

            <Button
                onClick={() => {
                    const newHoliday: Holiday = DATE_TRANSITION[holiday];
                    editHoliday(newHoliday);
                }}
            >
                Advance by Year
            </Button>

            <p>Holiday: {holiday}</p>
        </div>
    );
}
