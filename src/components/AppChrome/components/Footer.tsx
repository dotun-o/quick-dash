import { type FC } from "react";

const Footer: FC<{ version: string, author: string }> = ({ version, author }) => {
  return (
    <footer>
      <ul className="flex-row no-bullet small-text faded-text">
        <li>Copyright &copy; {(new Date).getFullYear()} { author }</li>
        <li>Version: { version }</li>
      </ul>
    </footer>
  )

}

export default Footer;
