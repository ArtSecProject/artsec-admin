
import { icons } from "../constant/icon"


// input field style
export const Input = ({ name, type, placeholder, width, ...rest }) => {
  return (
    <input type={type} placeholder={placeholder} name={name} {...rest} className='w-full p-2 border border-gray-300 outline-none rounded-md' />
  )
}



// select input field
export const Select = ({ name, id, children, ...rest }) => {
  return (
    <select id={id} name={name} {...rest} className='w-full px-2 py-[9.5px] border border-gray-300 outline-none rounded-md'>
      {children}
    </select>
  )
}


// input label
export const Label = ({ children }) => {
  return (
    <label className="w-full py-3">
      {children}
    </label>
  )
}


// heading caption
export const Heading = ({ title, desc }) => {
  return (
    <div className='space-y-2 pt-10'>
      <h2 className='app-color font-bold text-2xl'>{title}</h2>
      <p className='app-text font-normal text-[15px]'>{desc}</p>
    </div>
  )
}


// button 
export const Button = ({ type, icon, desc, bgColor, color, customFunc, width, padding, ...rest }) => {
  return (
    <button type={type} onClick={customFunc} className={`flex ${width} justify-center items-center ${padding} rounded-md ${bgColor} ${color}`} {...rest}>
      {icon}
      {desc}
    </button>
  )
}


// box border 
export const BorderBox = ({ children }) => {
  return (
    <div className='w-full border border-gray-400 rounded-md p-2' >
      {children}
    </div>
  )
}


// card box
export const CardDetails = ({ bankLogo, bankName, cardPan, cardType, width }) => {
  return (
    <>
      <div className={`flex ${width} justify-between items-center border border-gray-300  rounded-lg p-2 hover:bg-slate-100 cursor-pointer`}>
        <div className='flex justify-center items-center space-x-2'>
          <img src={bankLogo} alt="bank_logo" />
          <div className='text-[#1B1F28] text-sm'>
            <p>{bankName}</p>
            <span>{cardPan}</span>
          </div>
        </div>
        <div><img src={cardType} alt="card_type" /></div>
      </div>
    </>
  )
}



export const AccountBox = ({ itemImg, title, user, desc, current_value, children, rate, rate_charts, rate_level, bgColor }) => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex space-x-2'>
          <img src={itemImg} alt="" className='w-[43px] h-[41px]' />
          <div>
            <h2 className='app-color text-[15px] font-semibold'>{title}</h2>
            <p className='app-text-secondary'>By {user}</p>
            <p>{desc}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">$ {current_value}</h2>
          <p className='app-text-secondary'>Current Value</p>
        </div>
      </div>

      <div className='block sm:block md:block lg:flex space-y-2 justify-between  pt-3'>
        <div className='block sm:block md:block lg:flex space-y-2 items-center space-x-2'>
          {children}
        </div>

        <div className={`${bgColor} p-2 rounded-md`}>
          <p className='flex items-center text-green-700'>{rate_level}
            <span className='text-black text-[15px] font-normal'>{rate}</span>
          </p>
          {rate_charts}
        </div>
      </div>
    </>
  )
}



export const ToggleSwitch = ({ isToggled, handleChange }) => {
  return (
    <label className="toggle__switch">
      <input type="checkbox" checked={isToggled} onChange={handleChange} />
      <span className="slider"></span>
    </label>
  );
};


export const SocialBox = ({ children }) => {
  return (
    <div className='bg-white p-2 rounded-md shadow cursor-pointer'>
      {children}
    </div>
  )
}





export const AmountInput = ({ name, type, placeholder, icon, ...rest }) => {
  return (
    <div className='flex justify-center text-center items-center px-2 py-1 border border-gray-300 rounded-md space-x-2'>
      {icon} <icons.ArtSecCurrencyLineIcon />
      <input type={type} name={name} placeholder={placeholder} {...rest} className='w-full border-none focus:outline-none focus:ring-0 bg-transparent' />
    </div>
  )
}


export const CheckBoxInput = ({ label, name, type, customFunc, bgColor, pad, padx, ...rest }) => {
  return (
    <div className={`block relative space-x-3 ${bgColor} rounded-lg ${pad} checkbox-input ${padx}`}>
      <input name={name} type={type} onClick={customFunc} {...rest} />
      <label>{label}</label>
    </div>
  )
}



// fund card box
export const FundCardBox = ({ id, icon, type, placeholder, cardTypeIcon, width, onChange, control, validation, ...rest }) => {
  return (
    <>
      <div className={`${width} justify-between items-center border border-gray-300  rounded-lg px-2 hover:bg-slate-100 cursor-pointer`}>
        <div className='flex justify-center items-center space-x-2'>
          {cardTypeIcon}
          <div className='text-[#1B1F28] text-sm w-full'>
            <input type={type} placeholder={placeholder} onChange={onChange} id={id} inputmode="numeric" pattern="[0-9\s]{13,19}"
              {...rest}
              className="w-full border-none outline-none pr-2 pl-1 py-3 bg-transparent" />
          </div>
          <div>{icon}</div>
        </div>
      </div>
    </>
  )
}


// error

export const Error = ({ children }) => {
  return (
    <span className="text-red-500">{children}</span>
  )
}