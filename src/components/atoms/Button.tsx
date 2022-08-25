
type ButtonProps = {
  buttonText: string,
  buttonType: 'button' | 'submit' | 'reset',
  onClick?: () => void;
}


export const Button = ({buttonType, buttonText, onClick}: ButtonProps) => {

  return (
    <button className="btn btn-success btn-block mt-2 mb-2" type={buttonType} onClick={onClick}>{buttonText}</button>
  );
}