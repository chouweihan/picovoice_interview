import React from 'react'
import { Form } from 'react-bootstrap'
import { TBuild, TOS, TPackages, TLanguage, TPlatform, Choice, IPyState } from '../../MockData/pytorch'
import styled from "styled-components";

interface IInputGroups {
    options: string[],
    data: IPyState,
    setData: React.Dispatch<React.SetStateAction<IPyState>>,
    value: TBuild | TOS | TPackages | TLanguage | TPlatform,
    choice: Choice,
    label: string
}

const InputGroups = ({ options, setData, value, choice, label, data} : IInputGroups) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(choice === "language") {
            if(e.target.value === "C++/Java" && data.packages !== "LibTorch") {
                setData((prev) => {
                    return {
                        ...prev,
                        packages: "LibTorch",
                        [choice]: e.target.value
                    }
                })
            } else if(e.target.value === "Python" && data.packages === "LibTorch") {
                setData((prev) => {
                    return {
                        ...prev,
                        packages: "Conda",
                        [choice]: e.target.value
                    }
                })
            } else {
                setData((prev) => {
                    return {
                        ...prev,
                        [choice]: e.target.value
                    }
                })
            }
        } else if(choice === "packages") {
            if(e.target.value === "LibTorch" && data.language !== "C++/Java") {
                setData((prev) => {
                    return {
                        ...prev,
                        language: "C++/Java",
                        [choice]: e.target.value
                    }
                })
            } else if(e.target.value !== "LibTorch" && data.language === "C++/Java") {
                setData((prev) => {
                    return {
                        ...prev,
                        language: "Python",
                        [choice]: e.target.value
                    }
                })
            } else {
                setData((prev) => {
                    return {
                        ...prev,
                        [choice]: e.target.value
                    }
                })
            }
        } else {
            setData((prev) => {
                return {
                    ...prev,
                    [choice]: e.target.value
                }
            })
        }
    } 



    return (
    <InputGroupWrapper>
        <Form.Label>{label}</Form.Label>
        <Form.Select value={value} onChange={handleChange}>
            {options.map((option, index) => <option value={option} key={index}>{option}</option>)}
        </Form.Select>
    </InputGroupWrapper>
  )
}

const InputGroupWrapper = styled(Form.Group)`

    font-family: "Inter";
    label {
        font-size: 14px;
        font-weight: 500;
        color: #434B58;
        margin-bottom: 0.35rem;
    }

    .form-select {
        font-family: "Inter";
    }

    select {
        height: 47px;
        font-size: 16px;
        color: #667080;
        box-shadow: none;
        border: 1px solid #667080;
        :focus {
            border: 1px solid #667080;
            box-shadow: none;
        }
    }
`

export default InputGroups