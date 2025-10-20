import { Button } from "@mui/material";

const CustomButton = ({
  isShadow = true,
  label = "Try it now",
  variant = "primary",
  onClick,
}: {
  isShadow?: boolean;
  label?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}) => {
  const basePurple = variant === "primary" ? "#5046e6" : "#ffffff";
  const lightPurple = variant === "primary" ? "#968CF2" : "#d2d2d2";

  return (
    <Button
      onClick={onClick}
      style={{
        background: `linear-gradient(120deg, ${basePurple},  ${lightPurple})`,
        ...(isShadow
          ? { boxShadow: "0 8px 40px -3px rgba(100, 50, 200, 0.7)" }
          : {}),
      }}
      className={`!rounded-full !transition-all !duration-300 !ease-in-out ${
        variant === "primary" ? "!text-white" : "!text-primary"
      } ${
        isShadow ? "hover:!shadow-[0_15px_60px_-6px_rgba(100,50,200,1)]" : ""
      }`}
      variant="contained"
    >
      {label}
    </Button>
  );
};

export default CustomButton;
