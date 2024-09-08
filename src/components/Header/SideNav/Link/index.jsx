import React from "react";
import { motion } from "framer-motion";
import { slide } from "../anim";
import { Link, useLocation } from "react-router-dom";

export default function Index({ data }) {
  const location = useLocation();

  const isActive = location.pathname === data.href;

  return (
    <motion.div custom={data.index} variants={slide} animate="enter" exit="exit" initial="initial" className="link">
      <Link to={data.href} className={`Link ${isActive ? "active" : ""}`}>
        {data.title}
      </Link>
    </motion.div>
  );
}
