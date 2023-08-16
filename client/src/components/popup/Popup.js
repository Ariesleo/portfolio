import React from 'react';
import { PopupContainer, PopupContent, CloseButton } from './styles.js';

const Popup = ({ visible, onClose, children }) => {
  return (
    <PopupContainer visible={visible}>
      <PopupContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;

/* 

 const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };


<div>
        <h1>Popup Example</h1>
        <button onClick={openPopup}>Open Popup</button>
        <Popup visible={popupVisible} onClose={closePopup}>
          <h2>Popup Content</h2>
          <p>This is the content of the popup.</p>
        </Popup>
      </div>
    </div>

*/
