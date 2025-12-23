import { motion } from "framer-motion";

const MetricBadge = ({
  children,
  icon,
  gradient = "from-red-600/20 to-red-500/20",
  border = "border-red-500/30",
  className = ""
}) => {
  return (

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring" }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradient} backdrop-blur-sm border ${border} ${className}`}
    >
      
      {icon && icon}
      <span className="text-sm font-semibold tracking-wide text-white">
        {children}
      </span>
    </motion.div>
  );
};

export default MetricBadge;
