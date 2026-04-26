import SvgIcon from "@mui/material/SvgIcon";

type IconProps = {
  name: "arrow-left" | "arrow-right";
  className?: string;
};

export default function Icon({ name, className = "size-4" }: IconProps) {
  const paths = {
    "arrow-left":
      "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
    "arrow-right":
      "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  };

  return (
    <SvgIcon
      className={className}
      fontSize="small"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </SvgIcon>
  );
}
