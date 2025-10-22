import { Button } from "@mui/material";

const CustomButton = ({
  isShadow = true,
  label = "Try it now",
  variant = "primary",
  size = "medium",
  gradient = false,
  onClick,
}: {
  isShadow?: boolean;
  label?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  gradient?: boolean;
  onClick?: () => void;
}) => {
  // Use CSS variable for primary color
  const basePurple = variant === "primary" ? "var(--color-primary)" : "#ffffff";
  const lightPurple = variant === "primary" ? "#968CF2" : "#d2d2d2";

  const getBackground = () => {
    if (gradient) {
      return `linear-gradient(120deg, ${basePurple}, ${lightPurple})`;
    }
    return basePurple;
  };

  return (
    <Button
      onClick={onClick}
      size={size}
      style={{
        background: getBackground(),
        ...(isShadow
          ? { boxShadow: "0 8px 40px -3px rgba(100, 50, 200, 0.7)" }
          : {}),
      }}
      className={`!rounded-2xl !transition-all !duration-300 !ease-in-out ${
        variant === "primary" ? "!text-white" : "!text-primary"
      } ${
        isShadow ? "hover:!shadow-[0_15px_60px_-6px_rgba(100,50,200,1)]" : ""
      } ${
        size === "large" ? "!px-8 !py-4 !text-xl !font-semibold" : ""
      }`}
      variant="contained"
    >
      {label}
    </Button>
  );
};

export default CustomButton;
