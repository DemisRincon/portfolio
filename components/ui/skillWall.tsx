import React, { FC } from "react";
interface SkillWallProps {
  skillList: string[];
}
const SkillWall: FC<SkillWallProps> = ({ skillList }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {skillList.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1.5 text-sm font-medium bg-secondary-200 text-coal-700 rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillWall;
