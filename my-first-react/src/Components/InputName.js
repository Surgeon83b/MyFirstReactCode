import {LabelName} from './LabelName'
import React, { useState } from 'react';

export function InputName() {
    const [textShow, setTextShow] = useState("");
    return (
      <div>
        <input placeholder="Введите ваше имя" id="textbox" onChange={(evt) => setTextShow(evt.target.value)}></input>
        {textShow && <LabelName text={textShow}/>}
      </div>
    );
  }
