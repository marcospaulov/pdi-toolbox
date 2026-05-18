import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
}

export function Button({ 
  children, 
  className = '', 
  variant = 'primary',
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-lg transition-colors duration-200 font-medium'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'text-gray-700 hover:bg-gray-200'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
