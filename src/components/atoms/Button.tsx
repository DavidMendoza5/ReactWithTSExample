
type ButtonProps = {
  buttonText: string,
  buttonType: 'button' | 'submit' | 'reset',
  buttonClass?: string,
  onClick?: () => void;
}


export const Button = ({buttonType, buttonText, buttonClass, onClick}: ButtonProps) => {

  return (
    <button className={buttonClass ? buttonClass : `btn btn-success btn-block mt-2 mb-2`} type={buttonType} onClick={onClick}>{buttonText}</button>
  );
}