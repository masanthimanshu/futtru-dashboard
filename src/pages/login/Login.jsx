import { useState } from "react";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Button,
  TextField,
  IconButton,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

export const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin@gmail.com" && pass === "admin@1234") {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <section className={style.main_sec}>
      <div className={style.left}></div>
      <div className={style.right}>
        <div className={style.inner}>
          <img src="/logo.png" alt="Logo" style={{ height: 250 }} />
          <br />
          <br />
          {showAlert ? (
            <Alert severity="error" sx={{ mb: 2 }}>
              Incorrect Username or Password
            </Alert>
          ) : (
            <></>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              value={user}
              sx={{ mb: 2 }}
              label="Username"
              placeholder="Enter Your Username"
              onChange={(e) => setUser(e.target.value)}
              fullWidth
            />
            <FormControl sx={{ mb: 4 }} fullWidth>
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                value={pass}
                label="Password"
                placeholder="Enter Your Password"
                type={showPass ? "text" : "password"}
                onChange={(e) => setPass(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPass(!showPass)}>
                      {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              LOGIN
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
