const CardUi = ({color, width, height, background,className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 119 105"
      id="Card2Dark"
      width={width || "100%"}
      height={height || "100%"}
      filter="none"
      className={className}
    >
      <rect width="119" height="105" fill={background || "none"} rx="6" />
      <rect width="28" height="4" x="11" y="14" fill="#0085ff" rx="2" />
      <g fill={color||"#702dff"} opacity="0.5">
        <rect width="37" height="6" x="11" y="31" rx="3" />
        <rect width="17" height="6" x="53" y="31" rx="3" />
        <rect width="12" height="6" x="75" y="31" rx="3" />
      </g>
      <g fill={color||"#702dff"} opacity="0.2">
        <rect width="16" height="4" x="11" y="50" rx="2" />
        <rect width="26" height="4" x="40" y="50" rx="2" />
        <rect width="29" height="4" x="79" y="50" rx="2" />
        <rect width="28" height="4" x="11" y="61" rx="2" />
        <rect width="20" height="4" x="50" y="61" rx="2" />
        <rect width="27" height="4" x="81" y="61" rx="2" />
      </g>
      <g fill={color||"#702dff"} opacity="0.2">
        <circle cx="16" cy="86" r="5" />
        <rect width="26" height="3" x="27" y="84.5" rx="1.5" />
      </g>
      <rect
        width="118"
        height="104"
        x="0.5"
        y="0.5"
        stroke={color||"#702dff"}
        strokeOpacity="0.1"
        rx="5.5"
      />
    </svg>
  );
};

export default CardUi;
