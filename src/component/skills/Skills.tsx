import { JavaScript} from "../svg/JavaScript.tsx";
import { HTML } from "../svg/HTML.tsx";
import { CSS } from "../svg/CSS.tsx";
import { TypeScript } from "../svg/TypeScript.tsx";
import { React } from "../svg/React.tsx";
import { Redux } from "../svg/Redux.tsx";
import { AWS } from "../svg/AWS.tsx";
import { Git } from "../svg/Git.tsx";
import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skills-wrapper" id="skills">
      <h2 className="skills-title">SKILLS</h2>
      <ul className="skills-list">
        <li>
          <HTML />
        </li>
        <li>
          <CSS />
        </li>
        <li>
          <JavaScript />
        </li>
        <li>
          <TypeScript />
        </li>
        <li>
          <React />
        </li>
        <li>
          <Redux />
        </li>
        <li>
          <AWS />
        </li>
        <li>
          <Git />
        </li>
      </ul>
    </section>
  )
}