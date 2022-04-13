import React, { useState, useEffect } from 'react'
import { IGoogle } from '../../MockData/google'
import styled from "styled-components"
import { Form } from 'react-bootstrap'
import { Option } from "react-bootstrap-typeahead/types/types"
import { Typeahead } from 'react-bootstrap-typeahead';

interface ISelectBar {
    setSelectedLanguage: React.Dispatch<React.SetStateAction<IGoogle>>,
    data: Array<IGoogle>
}

const SelectBar = ({ setSelectedLanguage, data } : ISelectBar) => {   
    const typeAheadOptions: Array<string> = data.map((option) => option.label);
    const [selectedValue, setSelectedValue] = useState<number>(0);
    const [selectedTypeahead, setSelectedTypeahead] = useState<string[]>([]);


    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(Number(e.target.value));
        setSelectedTypeahead([typeAheadOptions[Number(e.target.value)]]);
    }

    const handleTypeahead = (selected: Option[]) => {
        setSelectedTypeahead(selected as string[]);
        let index: number = typeAheadOptions.indexOf(selected[0] as string);
        if(index !== -1) {
            setSelectedValue(index);
        }
    }

    useEffect(()=> {
        setSelectedLanguage(data[selectedValue]);
    }, [selectedValue])
    

    return (
    <SelectBarWrapper>
        <Typeahead 
            id="language-typeahead"
            options={ typeAheadOptions } 
            placeholder="Choose a language..."
            size="sm"
            selected={selectedTypeahead}
            onChange={handleTypeahead}
        />
        <Form.Select size="sm" onChange={handleSelect} value={selectedValue} >
            {data.map((option, index) => {
                    return <option value={index} key={index}>{option.label}</option>
            })}     
        </Form.Select>
    </SelectBarWrapper>
    )
}

const SelectBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Noto Sans", sans-serif;
    padding: 0 10px;

    border-bottom: 1px solid #dadce0;

    .rbt-input {
        :focus {
            box-shadow: none;
        }
    }

    input {
        margin: 10px 0;
    }

    .dropdown-menu a {
        font-size: 14px;
    }

    select {
        max-width: 120px;
        margin: 10px 0;
        color: #3d4043;
        font-weight: 500;

        :focus {
          border: 1px solid #ced4da;
          box-shadow: none;
        }
    }

`

export default SelectBar