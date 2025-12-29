import { ChangeEvent, FC, FocusEvent, useEffect, useRef, useState } from "react";
import styles from "./input.module.css";

interface IInput {
  type?: string;
  mode?: string
  name: string;
  onKeyDown?: any;
  placeholder?: string;
  onChange?: any;
  value?: string | number;
  label?: string;
  isLabel?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: any;
  onReset?: any;
  handleOnBlur?: (e: any) => void;
  maxLength?: number;
  autocomplete?: string;
  defaultValue?: any;
  id?: string;
  error?: string;
  onCopy?: any;
  onSelect?: any;
  reference?: any;
  refInput?: any;
  onPaste?: any;
  readOnly?: boolean;
  rows?: number;
  onlyNumbers?: boolean;
  item?: string;
  searching?: boolean;
  autoFocus?: boolean
}

const InputCustom: FC<IInput> = ({
  type = "text",
  name,
  mode,
  searching,
  item,
  autoFocus,
  isLabel,
  placeholder,
  onChange,
  value,
  onClick,
  error,
  onReset,
  handleOnBlur,
  autocomplete,
  label,
  disabled,
  className,
  defaultValue,
  onKeyDown,
  reference,
  refInput,
  onPaste,
  readOnly,
  rows,
  id,
  maxLength,
  onCopy,
  onSelect,
  onlyNumbers,
}) => {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onlyNumbers && !/^\d*$/.test(newValue)) return; // Validación de solo números
    onChange?.(e); // Propagar el cambio al componente padre
  };

  const handleFocus = () => setIsFocused(true); // Cambiar a defaultValue al enfocar
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false); // Volver a value al perder foco
    handleOnBlur?.(e); // Propagar blur al padre si es necesario
  };
  const renderInput = () => {
    const commonProps: any = {
      name,
      placeholder,
      id,
      autoComplete: autocomplete,
      autoFocus,
      onClick,
      searching,
      disabled,
      maxLength,
      onReset,
      className,
      ref: inputRef,
      onPaste,
      rows,
      onSelect,
      error,
      onKeyDown,
      readOnly,
      onCopy,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onChange: handleInputChange,
      value: value ?? "",
    };

    const handleKeyPress = (e: any) => {
      const isControlKey =
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Tab" ||
        ((e.ctrlKey || e.metaKey) &&
          (e.key.toLowerCase() === "c" || e.key.toLowerCase() === "x" || e.key.toLowerCase() === "v")); // Permite copiar, cortar y pegar

      if (onlyNumbers && !isControlKey && !/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    };

    if (type === "text" && onlyNumbers) {
      return (
        <input
          onPaste={onPaste}
          onKeyDown={handleKeyPress}
          maxLength={maxLength}
          onSelect={onSelect}
          name={name}
          id={id}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          autoComplete={autocomplete}
          onBlur={handleOnBlur}
          value={value}
          onClick={onClick}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          ref={refInput}
        />
      );
    }

    if (item === "numberOfSerieState" && type === "text") {
      return (
        <input
          className={className}
          onSelect={onSelect}
          name={name}
          id={id}
          autoComplete={autocomplete}
          x-webkit-speech
          autoFocus
          onBlur={handleOnBlur}
          /* readOnly={searching} */ value={value}
          onClick={onClick}
          disabled={disabled}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={handleKeyPress}
          ref={reference}
          onKeyPress={(e) =>
            !/^[0-9]*[.,]?[0-9]*$/.test(e.key) && e.preventDefault()
          }
        />
      );
    }

    switch (type) {
      case "textarea":
        return (
          <textarea
            {...commonProps}
            ref={reference}
          />
        );
      case "text":
      case "date":
      case "email":
      case "password":
      case "number":
        return (
          <input
            type={type}
            {...commonProps}
            ref={reference}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper__input}>
      <div className={mode === "flex" ? styles.wrapper__flex : ""}>
        <div className={styles.content__input}>
          {isLabel && <label className={styles.label}>{label}</label>}
        </div>
        {renderInput()}
      </div>
      {error && <p className="text-[#D35130] font-medium text-[15px] mt-1">{error}</p>}
    </div>
  );
};

export default InputCustom;
