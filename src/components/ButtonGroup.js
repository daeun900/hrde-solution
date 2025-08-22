import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import styled from 'styled-components';

const BtnWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
     @media(max-width:768px){
      grid-template-columns:1fr;
    }

`;

const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25),
              inset -2px -2px 2px 0px rgba(15, 48, 87, 0.25),
              inset 2px 2px 2px 0 rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  height: 100px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 0 10px;
  transition: all 0.3s ease;
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: #0057ff;
  }
      @media (max-width: 768px) {
        height: 80px;
    }   
`;

const Txt = styled.div`
  span {
    display: block;
    font-weight: 300;
  }
  p {
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
         @media (max-width: 768px) {
            font-size: 16px;
            line-height: 25px;
    }
  }
`;

const Icon = styled(DownloadIcon)`
  font-size: 30px;
`;

function ButtonGroup({ buttons }) {
  const handleDownload = (link) => {
    window.open(link, '_blank');
  };

  return (
    <BtnWrap>
      {buttons.map((button, index) => (
        <StyledButton key={index} onClick={() => handleDownload(button.link)}>
          <Txt>
            <span>{button.label}</span>
            <p>{button.description}</p>
          </Txt>
          <Icon />
        </StyledButton>
      ))}
    </BtnWrap>
  );
}

export default ButtonGroup;
