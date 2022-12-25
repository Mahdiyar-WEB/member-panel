import {
  Tabs,
  Tab,
  Box,
  Card,
  CardContent,
  Avatar,
  CardHeader,
  Typography,
} from "@mui/material";
import { memo, useState } from "react";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import styles from "../styles/signup-login.module.css";
import logo from "../public/logo.jpg";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const Login_SignUp = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className="container pb-5">
          <div className={`row d-flex ${styles.contentContainer}`}>
            <div
              className={`col-md-9 col-10 d-flex bg-white mx-auto p-2 rounded rounded-4 ${styles.content}`}
            >
              <div
                className="col-lg-5 text-white px-4 py-3 d-none d-lg-flex flex-column  rounded rounded-4"
                style={{ background: "#3C37FE" }}
              >
                <div>Memeber Panel</div>
                <div className="h2 mt-5">Start your journey with us.</div>
                <Card
                  className="mt-auto text-white"
                  sx={{ backgroundColor: "#2520E3", borderRadius: 4 }}
                >
                  <CardContent
                    className="pb-0"
                    sx={{ color: "#ccc", fontSize: ".9rem" }}
                  >
                    Simply unbelievable! i'm really satisfied with my projects
                    and business. this is absolutely wonderful!
                  </CardContent>
                  <CardHeader
                    avatar={<Avatar alt="logo" src={logo} />}
                    title="Member Panel"
                    subheader={
                      <Typography sx={{ color: "#ccc", fontSize: "0.8rem" }}>
                        admin
                      </Typography>
                    }
                  />
                </Card>
              </div>
              <div className="col-12 p-0 col-lg-7 pt-4">
                <Tabs
                  centered
                  value={value}
                  className="d-flex align-items-center"
                  onChange={handleChange}
                >
                  <Tab
                    sx={{ fontSize: 17, fontWeight: "bold" }}
                    label="Login"
                  />
                  <Tab
                    sx={{ fontSize: 17, fontWeight: "bold" }}
                    label="Sign up"
                  />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <Login />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <SignUp />
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default memo(Login_SignUp);
