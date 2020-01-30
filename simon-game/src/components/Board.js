import React, { Component } from 'react';
import PropTypes from 'prop-types'


function BoardItem(props) {
    var classNames = "board-item"
    classNames += props.isActive ? "active" : "";
    classNames += !props.isEnabled ? "disabled" : "";
    return (
        <div
            className={classNames}
            id={props.itemId}
            onMouseDown={props.onMouseDown} />
    )
}

function Board(props) {
    var items = [0, 1, 2, 3].map(function (item) {
        var itemId = "board-item-" + item;
        return (
            <BoardItem
                key={item}
                itemId={itemId}
                isActive={props.activeItems[item]}
                isEnabled={props.isEnabled}
                />
        )
    });

    var classNames = "flex-item board text-center";
    classNames += props.isBlinking ? "blink" : "";
    return (
        <div className="flex-container">
            <div className={classNames}>
                {items}
            </div>
        </div>
    )
}



export default  Board;