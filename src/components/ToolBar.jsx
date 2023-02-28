import dropDown from '../assets/dropdown_icon.svg'
import { useState } from 'react'

const ToolBar = () => {
    const [currentFormat, setCurrentFormat] = useState('normal');
    const [currentFont, setCurrentFont] = useState('Arial');
    const [currentSize, setCurrentSize] = useState(12);

    const fonts = ['Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia'];
    const fontSizes = [12, 14, 16, 18, 20, 24, 28];

    const handleFormatChange = (format) => {
        setCurrentFormat(format);
    };

    const handleFontChange = (font) => {
        setCurrentFont(font);
    };

    const handleSizeChange = (size) => {
        setCurrentSize(size);
    };

    return (
        <div className="toolbar">
        <Dropdown
          options={fonts}
          currentOption={currentFont}
          onChange={handleFontChange}
        />
        <Dropdown
          options={fontSizes}
          currentOption={currentSize}
          onChange={handleSizeChange}
        />
        <Icon
          content={<b>B</b>}
          isActive={currentFormat === 'bold'}
          onClick={() => handleFormatChange('bold')}
        />
        <Icon
          content={<i>I</i>}
          isActive={currentFormat === 'italic'}
          onClick={() => handleFormatChange('italic')}
        />
        <Icon
          content={<u>U</u>}
          isActive={currentFormat === 'underline'}
          onClick={() => handleFormatChange('underline')}
        />
        <span className="icon no-phone">|</span>
        <Icon content="P" isExtra />
        <Icon content="H1" isExtra />
        <Icon content="H2" isExtra />
        <Icon content="H3" isExtra />
        <Icon content="..." isExtra />
      </div>
  );
};

const Icon = ({ content, isActive, isDropdown, onClick, isExtra }) => {
  const className = `icon ${isActive ? 'active' : ''} ${
    isExtra ? 'no-phone' : ''
  }`;

  return (
    <span className={className} onClick={onClick}>
      {content}
      {isDropdown && <img src={dropDown} />}
    </span>
  );
};

const Dropdown = ({ options, currentOption, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="dropdown">
      <span className="dropdown-button" onClick={toggleDropdown}>
        {currentOption}
        <img src = {dropDown} />
        </span>
        {isOpen && (
            <div className="dropdown-options">
                {options.map((option, index) => (
                    <span
                        key={index}
                        className="dropdown-option"
                        onClick={() => handleOptionChange(option)}
                    >
                        {option}
                    </span>
                ))}
            </div>
        )}
    </div>
    );
};

export default ToolBar;
