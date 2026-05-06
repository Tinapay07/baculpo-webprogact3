import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    contactNumber: '',
    age: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    if (!String(value).trim()) {
      return 'This field is required.';
    }

    switch (name) {
      case 'username':
        if (/\s/.test(value)) {
          return 'Username must not contain spaces.';
        }
        break;
      case 'contactNumber':
        if (value && !/^\d{11}$/.test(value)) {
          return 'Contact number must be exactly 11 digits.';
        }
        break;
      case 'age':
        if (value && !/^\d+$/.test(value)) {
          return 'Age must contain numbers only.';
        }
        break;
      case 'password':
        if (value.length < 8) {
          return 'Password must be at least 8 characters.';
        }
        break;
      default:
        break;
    }

    return '';
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = Object.entries(formData).reduce((accumulator, [name, value]) => {
      const error = validateField(name, value);

      if (error) {
        accumulator[name] = error;
      }

      return accumulator;
    }, {});

    setErrors(nextErrors);
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Sign Up</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Create your account with the same monochrome layout pattern and shared button treatment.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-zinc-700">
              First Name
            </label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Placeholder"
              required
              className={inputClasses}
            />
            {errors.firstName ? (
              <p className="mt-2 text-xs font-medium text-red-600">{errors.firstName}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-zinc-700">
              Last Name
            </label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Placeholder"
              required
              className={inputClasses}
            />
            {errors.lastName ? (
              <p className="mt-2 text-xs font-medium text-red-600">{errors.lastName}</p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="signup-username" className="text-sm font-medium text-zinc-700">
            Username
          </label>
          <input
            id="signup-username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Placeholder"
            required
            className={inputClasses}
          />

          <p className={`mt-2 text-xs leading-5 ${errors.username ? 'text-red-500' : 'text-zinc-500'}`}>
            Username must not contain spaces.
          </p>
          {errors.username ? (
            <p className="mt-1 text-xs font-medium text-red-600">{errors.username}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Placeholder"
            required
            className={inputClasses}
          />
          {errors.email ? <p className="mt-2 text-xs font-medium text-red-600">{errors.email}</p> : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-number" className="text-sm font-medium text-zinc-700">
              Contact Number
            </label>
            <input
              id="contact-number"
              name="contactNumber"
              type="text"
              inputMode="numeric"
              maxLength={11}
              value={formData.contactNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="11 digits"
              required
              className={inputClasses}
            />
            {errors.contactNumber ? (
              <p className="mt-2 text-xs font-medium text-red-600">{errors.contactNumber}</p>
            ) : (
              <p className="mt-2 text-xs leading-5 text-zinc-500">
                Enter exactly 11 digits.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="age" className="text-sm font-medium text-zinc-700">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="text"
              inputMode="numeric"
              value={formData.age}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Numbers only"
              required
              className={inputClasses}
            />
            {errors.age ? (
              <p className="mt-2 text-xs font-medium text-red-600">{errors.age}</p>
            ) : (
              <p className="mt-2 text-xs leading-5 text-zinc-500">Use numbers only.</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="signup-password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Placeholder"
            required
            className={inputClasses}
          />

          {errors.password ? (
            <p className="mt-2 text-xs font-medium text-red-600">{errors.password}</p>
          ) : (
            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Use at least 8 characters.
            </p>
          )}
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Create Account
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        Already have an account?{" "}
        <Link to="/auth/signin" className="font-semibold text-zinc-900 transition hover:text-zinc-700">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
