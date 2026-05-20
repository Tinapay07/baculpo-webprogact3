import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import { loginUser } from "../../services/UserService";
import { normalizeRole, setAuth } from "../../services/AuthService";

const inputClasses =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignInPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.password) {
      setStatus({
        loading: false,
        error: "Please enter both email and password.",
        success: "",
      });
      return;
    }

    setStatus({ loading: true, error: "", success: "" });

    try {
      const data = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      // Backend may return token and user fields in different shapes.
      const token = data?.token || data?.accessToken || null;
      const user = data?.user || {
        type: data?.type,
        firstName: data?.firstName,
        email: data?.email,
      };

      // Block viewer accounts client-side if backend allowed them through
      if (normalizeRole(user?.type || user?.role || data?.type) === "viewer") {
        setStatus({
          loading: false,
          error: "Viewer accounts are not allowed to log in here.",
          success: "",
        });
        return;
      }

      if (token) {
        setAuth({ token, user });
      } else if (user) {
        // in case backend returns user info and no token (dev mode), still persist user minimally
        setAuth({ token: null, user });
      }

      setStatus({
        loading: false,
        error: "",
        success: "Login successful. Redirecting...",
      });
      const destination = location.state?.from?.pathname || "/dashboard";
      setTimeout(() => {
        navigate(destination, { replace: true });
      }, 600);
    } catch (error) {
      setStatus({
        loading: false,
        error: error.message || "Unable to log in.",
        success: "",
      });
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Log In
      </h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Access your account using the same monochrome wireframe language used
        across the site.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label
            htmlFor="signin-email"
            className="text-sm font-medium text-zinc-700"
          >
            Email Address
          </label>
          <input
            id="signin-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signin-password"
            className="text-sm font-medium text-zinc-700"
          >
            Password
          </label>
          <input
            id="signin-password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="current-password"
            className={inputClasses}
          />

          <p className="mt-2 text-xs leading-5 text-zinc-500">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 accent-zinc-900"
            />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            className="font-medium text-zinc-700 transition hover:text-zinc-900"
          >
            Forgot Password?
          </button>
        </div>

        {status.error ? (
          <p className="text-sm text-red-600">{status.error}</p>
        ) : null}
        {status.success ? (
          <p className="text-sm text-emerald-600">{status.success}</p>
        ) : null}

        <Button
          type="submit"
          variant="primary"
          className={actionButtonClassName}
          disabled={status.loading}
        >
          {status.loading ? "Logging In…" : "Log In"}
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Log In with Google
          </Button>
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        No account yet?{" "}
        <Link
          to="/auth/signup"
          className="font-semibold text-zinc-900 transition hover:text-zinc-700"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
