import { useState, useEffect } from "react";
import axios from "../api/axiosConfig";
import { Phone, Lock, Key, User } from "lucide-react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  const [mode, setMode] = useState("login"); // 'login' or 'register'
  const [step, setStep] = useState("mobile"); // mobile → otp
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // only for registration
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const reset = () => {
    setMobile("");
    setOtp("");
    setPassword("");
    setName("");
    setStep("mobile");
    setMessage("");
    setError("");
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      await axios.post(`users/send-otp`, { mobile });
      setStep("otp");
      setMessage("OTP sent to your mobile.");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtpAndRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await axios.post(`users/verify-otp`, {
        mobile,
        otp,
        name,
        password,
      });
      localStorage.setItem("userToken", res.data.token);
      setMessage("Registration successful. You're logged in.");
    } catch (err) {
      setError(err.response?.data?.error || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await axios.post(`users/login`, {
        mobile,
        password,
      });
      localStorage.removeItem("userToken");
      localStorage.setItem("userToken", res.data.token);
      setMessage("Login successful!");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed.");
    } finally {
      setLoading(false);
    }
  };
  const userToken = localStorage.getItem("userToken");
  useEffect(() => {
    if (userToken) {
      axios
        .get("/users/customerData", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          console.log(response)
          localStorage.setItem("userData", JSON.stringify(response.data));
          setUser(response.data.name);
          setTimeout(() => navigate("/"), 2000);
        })
        .catch((error) => {
          console.error(
            "Error fetching user data:",
            error.response?.data || error.message
          );
        });
    }
  }, [userToken, navigate]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h3 className="card-title">
                    {mode === "login" ? "Login" : "Register"}
                  </h3>
                  <p className="text-muted">
                    {mode === "login"
                      ? "Login using mobile and password"
                      : step === "mobile"
                      ? "Register your mobile"
                      : "Verify OTP & Set Password"}
                  </p>
                </div>

                {error && <div className="alert alert-danger">{error}</div>}
                {message && (
                  <div className="alert alert-success">{message}</div>
                )}

                {mode === "register" && step === "mobile" && (
                  <form onSubmit={sendOtp}>
                    <div className="mb-3">
                      <label className="form-label">Mobile</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <Phone size={16} />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="Enter mobile"
                          required
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? "Sending OTP..." : "Send OTP"}
                    </button>
                  </form>
                )}

                {mode === "register" && step === "otp" && (
                  <form onSubmit={verifyOtpAndRegister}>
                    <div className="mb-3">
                      <label className="form-label">OTP</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <Key size={16} />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter OTP"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <User size={16} />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Set Password</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <Lock size={16} />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Set a password"
                          required
                        />
                      </div>
                    </div>

                    <button
                      className="btn btn-success w-100"
                      disabled={loading}
                    >
                      {loading ? "Verifying..." : "Register"}
                    </button>
                  </form>
                )}

                {mode === "login" && (
                  <form onSubmit={login}>
                    <div className="mb-3">
                      <label className="form-label">Mobile</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <Phone size={16} />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="Enter mobile"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Password</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <Lock size={16} />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter password"
                          required
                        />
                      </div>
                    </div>

                    <button
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </button>
                  </form>
                )}

                <div className="mt-4 text-center">
                  {mode === "login" ? (
                    <p>
                      New user?{" "}
                      <button
                        className="btn btn-link p-0"
                        onClick={() => {
                          reset();
                          setMode("register");
                        }}
                      >
                        Register
                      </button>
                    </p>
                  ) : (
                    <p>
                      Already have an account?{" "}
                      <button
                        className="btn btn-link p-0"
                        onClick={() => {
                          reset();
                          setMode("login");
                        }}
                      >
                        Login
                      </button>
                    </p>
                  )}
                </div>
                {user && (
                  <div className="alert alert-success text-center">
                    Thanks for logging in, {user}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
