import { useState } from 'react';
function useInput(validateValue) {
  const [value, setValue] = useState('');
  const [isEdited, setIsEdited] = useState(false);
  const isValid = validateValue(value);
  const hasError = !isValid && isEdited;
  const handleChange = (event) => {
    setValue(event.target.value);
  };
    const handleBlur = () => {
        setIsEdited(true);
    };
    const reset = () => {
        setValue('');
        setIsEdited(false);
    };
    return {
        value,
        isValid,
        hasError,
        handleChange,
        handleBlur,
        reset
    };
  
}
export default useInput;