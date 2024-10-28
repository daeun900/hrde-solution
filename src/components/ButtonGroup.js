import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';

function ButtonGroup({ buttons }) {
  const handleDownload = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="btn_wrap">
      {buttons.map((button, index) => (
        <button key={index} onClick={() => handleDownload(button.link)}>
          <div className="txt">
            <span>{button.label}</span>
            <p>{button.description}</p>
          </div>
          <DownloadIcon className="icon" />
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
