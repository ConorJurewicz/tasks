import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface BttnProperties {
    setDhValue: (newDhValue: number) => void;
    currDhValue: number;
}

function Doubler({ setDhValue, currDhValue }: BttnProperties): JSX.Element {
    return <Button onClick={() => setDhValue(2 * currDhValue)}>Double</Button>;
}

function Halver({ setDhValue, currDhValue }: BttnProperties): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * currDhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [currDhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{currDhValue}</span>
            </div>
            <Doubler
                setDhValue={setDhValue}
                currDhValue={currDhValue}
            ></Doubler>
            <Halver setDhValue={setDhValue} currDhValue={currDhValue}></Halver>
        </div>
    );
}
