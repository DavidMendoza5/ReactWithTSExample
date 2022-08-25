

type InputProps = {
  value: string,
  inputName: string,
  inputType: 'text' | 'password',
  onChange: (text: string) => void;
}

export const FormInput = ({value, inputName, inputType, onChange}: InputProps) => {

  return (
    <input type={inputType} value={value} name={inputName} onChange={(e) => onChange(e.target.value)} className='form-control' />
  );
}