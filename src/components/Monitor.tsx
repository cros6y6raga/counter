import React from 'react';

type MonitorPropsType = {
    score: number
}

export const Monitor = (props: MonitorPropsType) => {
    return (
        <h1>{props.score}</h1>
    );
};