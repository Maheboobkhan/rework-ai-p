import axios from "axios";
import React, { useState } from "react";
import * as Yup from "yup";

const InputField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => (
  <div className="">
    <label className="font-Poppins font-normal block text-[15px] max-md:text-sm text-black">
      {label} <span className="text-red-600">*</span>
    </label>
    <input
      type={type}
      name={name}
      className="justify-center items-start p-2 w-full text-base max-md:text-sm whitespace-nowrap rounded-lg border border-solid bg-zinc-50 border-stone-300"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && <div className="text-red-500 text-xs">{error}</div>}
  </div>
);

const SelectField = ({
  label,
  name,
  options,
  placeholder,
  value,
  onChange,
  error,
}) => (
  <div className="">
    <label className="font-Poppins font-normal block text-[15px] max-md:text-xs max-sm:text-[15px] text-black">
      {label} <span className="text-red-600">*</span>
    </label>
    <select
      name={name}
      className="justify-center items-start p-2 w-full text-base max-md:text-xs whitespace-nowrap rounded-lg border border-solid bg-zinc-50 border-stone-300 appearance-none custom-select"
      value={value}
      onChange={onChange}
    >
      <option
        className="p-3 max-md:p-2 border border-solid border-stone-300 text-sm max-md:text-xs"
        value=""
        disabled
      >
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <div className="text-red-500 text-xs">{error}</div>}
  </div>
);

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    selectDomain: "",
    selectQualification: "",
    createPassword: "",
    confirmPassword: "",
    description: "",
  });

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^\+?[1-9]\d{1,14}$/, "Phone number is not valid")
      .min(10, "Phone number is too short")
      .max(15, "Phone number is too long"),
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    selectDomain: Yup.string().notOneOf([""], "Domain is required"),
    selectQualification: Yup.string().notOneOf(
      [""],
      "Qualification is required"
    ),
    createPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password should be atleast 8 characters."),
    confirmPassword: Yup.string()
      .oneOf([formValues.createPassword, null], "Password does not match")
      .required("Confirm password is required"),
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    validateField(name, value);
    console.log(formValues.firstName);
  };

  const validateField = (name, value) => {
    Yup.reach(validationSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
      })
      .catch((error) => {
        setFormErrors((currentErrors) => ({
          ...currentErrors,
          [name]: error.message,
        }));
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validationSchema.isValid(formValues);

    if (!isValid) {
      validationSchema
        .validate(formValues, { abortEarly: false })
        .catch((err) => {
          const errors = err.inner.reduce(
            (acc, current) => ({ ...acc, [current.path]: current.message }),
            {}
          );
          setFormErrors(errors);
        });
    } else {
      alert(JSON.stringify(formValues, null, 2));
      const firstName = formValues.firstName;
      const lastName = formValues.lastName;
      const phoneNumber = formValues.phoneNumber;
      const emailAddress = formValues.emailAddress;
      const selectDomain = formValues.selectDomain;
      const selectQualification = formValues.selectQualification;
      const description = formValues.description;
      const users = {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        selectDomain,
        selectQualification,
        description,
      };
      const response = await axios.post(
        "https://telent-finder.vercel.app/api/v1/create-user",
        {
          user: users,
        }
      );
      console.log(response.data.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={formValues.firstName}
          onChange={handleChange}
          error={formErrors.firstName}
        />
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Enter your lasr name"
          value={formValues.lastName}
          onChange={handleChange}
          error={formErrors.lastName}
        />
        <InputField
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={formValues.phoneNumber}
          onChange={handleChange}
          error={formErrors.phoneNumber}
        />
        <InputField
          label="Email Address"
          type="email"
          name="emailAddress"
          placeholder="Enter your email address"
          value={formValues.emailAddress}
          onChange={handleChange}
          error={formErrors.emailAddress}
        />
        <SelectField
          label="Domain you are looking for"
          name="selectDomain"
          placeholder="--Select Domain--"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
          value={formValues.selectDomain}
          onChange={handleChange}
          error={formErrors.selectDomain}
        />
        <SelectField
          label="Qualification"
          name="selectQualification"
          placeholder="-Select highest qualification-"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
          value={formValues.selectQualification}
          onChange={handleChange}
          error={formErrors.selectQualification}
        />
        <InputField
          label="Create a Password"
          type="password"
          name="createPassword"
          placeholder="Create a password"
          value={formValues.createPassword}
          onChange={handleChange}
          error={formErrors.createPassword}
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formValues.confirmPassword}
          onChange={handleChange}
          error={formErrors.confirmPassword}
        />
      </div>

      <label
        htmlFor="description"
        className="mt-2 text-base max-md:text-sm font-normal text-black"
      >
        Description
      </label>
      <textarea
        id="description"
        name="description"
        className="items-start h-24 max-md:h-24 p-4 mt-1 text-base max-md:text-sm whitespace-nowrap rounded-xl border border-solid bg-zinc-50 border-stone-300 text-neutral-500"
        placeholder="Write your description"
        value={formValues.description}
        onChange={handleChange}
        style={{ resize: "none" }}
      />
      {formErrors.description && (
        <div className="text-red-500 text-sm">{formErrors.description}</div>
      )}

      <button
        type="submit"
        className="font-Poppins mx-auto px-10 py-2 mt-4 max-md:px-10 max-md:py-2 max-md:mt-3 max-sm: w-[70%] max-sm:w-[95%] text-xl leading-7 border border-violet-900 max-md:leading-4 bg-violet-900 shadow-lg text-zinc-50 hover:text-violet-900 hover:bg-white max-sm:mb-4"
      >
        Register
      </button>
    </form>
  );
};

export default SignUpForm;
