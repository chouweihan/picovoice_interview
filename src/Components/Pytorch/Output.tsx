import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IPyState } from '../../MockData/pytorch';
import Parser from "html-react-parser";
import { variations } from '../../MockData/pytorch';

const Output = ({ data }: { data: IPyState }) => {

    const [html, setHtml] = useState<string>(
        `<p>conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch</p>`
    );

    useEffect(() => {
        const filtered = variations.filter((a) => {
            return a.build === data.build && a.packages === data.packages && a.os === data.os && a.language === data.language && a.platform === data.platform;
          });
        
        if(filtered.length > 0) {
            setHtml(filtered[0].html);
        }  else {
            setHtml(`<p>There's too many permuations, I didn't make an object for each. Only for about 10 or so. But the logic is there.</p>`)
        }

    }, [data])

    return (
        <OutputWrapper>
            <label>Run the following command: </label>
            <div className="output">
                {Parser(html)}
            </div>
        </OutputWrapper>
    )
}

const OutputWrapper = styled.div`

    label {
        font-family: "Inter";
        margin-bottom: 0.35rem;
        color: black;
        font-size: 14px;
        font-weight: 500;
    }

    .output {
        width: 100%;
        border: 1px solid #667080;
        min-height: 50px;
        padding: 15px;
        border-radius: 0.25rem;
        background-color: white;
        font-size: 15px;
        font-family: "Inter";
        font-style: italic;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
            color: #878F9C;
            margin: 0;
            margin-top: 1rem;
        }

        p:first-child {
            margin-top: 0;
        }

        a {
            color: #ee4c2c;
        }

        :first-child {
            margin-top: 0;
        }

        :last-child {
            margin-bottom: 0;
        }
    }
`

export default Output