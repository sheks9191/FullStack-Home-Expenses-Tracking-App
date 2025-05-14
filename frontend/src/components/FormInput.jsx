

const FormInput = ({name,type,label,...props}) => {
  return (
    <div className="form-row">
          <label htmlFor={name} className="form-label">{label || name}</label>
          <input type={type} id={name} className="form-input" name={name} required {...props}/>
    </div>
  )
}

export default FormInput