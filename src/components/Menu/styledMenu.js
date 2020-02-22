import styled from 'styled-components';

export const ButtonAge = styled.div`
    background: #BFBFBF;
    appearance: none;
    border: 0px;
    color: #000000;
    height: 18px;
    font-size: 12px;
    font-family: sans-serif;
    font-weight: bold;
    float: right;
    margin: 0px 10px;
    padding: 5px 0px 0px 0px;
    text-align: center;
    width: 60px;
`;

export const ButtonDelete = styled.div `
    background: #830000;
    appearance: none;
    border: 0px;
    color: #FFFFFF;
    display: inline-block;
    height: 18px;
    font-size: 12px;
    font-family: sans-serif;
    font-weight: bold;
    margin: auto 10px;
    padding: 3px 0px 0px 0px;
    text-align: center;
    width: 60px;
`;

export const ButtonPress = styled.div `
    background: ${ ({ styleColor }) => styleColor };
    appearance: none;
    border: 0px;
    color: black;
    height: 16px;
    font-size: 13px;
    font-family: sans-serif;
    font-weight: bold;
    margin: auto;
    padding: 5px 0px 5px 0px;
    text-align: center;
    width: 145px;
`;

export const Data = styled.div `
    appearance: none;
    border: 0px;
    height: 16px;
    font-size: 13px;
    font-family: sans-serif;
    font-weight: bold;
    margin: inherit;
    padding: 5px 0px 5px 0px;
    width: fit-content;
`;

export const Details = styled.div `
    background: #000000;
    appearance: none;
    border: 0px;
    color: #FFFFFF;
    display: inline-block;
    height: 18px;
    font-size: 16px;
    font-family: monospace;
    font-weight: bold;
    margin: auto 10px;
    padding: 1px 5px 3px 4px;
    text-align: center;
    width: fit-content;
`;

export const DetailsAge = styled.div `
    background: #000000;
    appearance: none;
    border: double;
    color: #FFFFFF;
    height: 20px;
    font-size: 12px;
    font-family: monospace;
    font-weight: bolder;
    margin: auto 0px;
    padding: 8px 5px 3px 4px;
    text-align: center;
    width: fit-content;
`;

export const Filtered = styled.div `
    appearance: none;
    border: 0px;
    height: 20px;
    font-size: 12px;
    font-family: sans-serif;
    font-weight: bold;
    margin: auto;
    padding: 10px 0px 5px 10px;
    width: auto;
`;

export const List = styled.div `
    display: inline-block;
`;

export const Text = styled.div `
    color: #000000;
    font-size: 15px;
    font-family: sans-serif;
    text-align: center;
`;

export const Title = styled.div `
    color: #000000;
    font-size: 15px;
    font-family: sans-serif;
    text-align: center;
    padding: 0px 0px 20px 0px;
`;
