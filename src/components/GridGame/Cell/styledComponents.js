import styled from '@emotion/styled'

const CellDiv=styled.div`
background-color:${props=>props.cellColor};
height:${props=>props.cellHeightWidth}px;
width:${props=>props.cellHeightWidth}px;
display:flex;
margin:3px;
transition:all 0.3s ease
`

export {CellDiv}