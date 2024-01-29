import Image from 'next/image';
import { SectionTitle } from '../sectionTitle/section-title';

import './experience.scss';
import { Skill } from '../skill/skill';

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Sobre mim" />
      <p>
        Atualmente em transição de carreira , procuro minha primeira
        oportunidade na tecnologia.
      </p>
      <div className="experience-time">
        <Skill image="/react.png" measure={1} years="1 year" />
        <Skill image="/angular.png" measure={1} years="In progress" />
        <Skill image="/post3.png" measure={2} years="1 year" />
        <Skill image="/ts.png" measure={1} years="In progress" />
        <Skill image="/js.png" measure={2} years="1 year" />
        <Skill image="/node1.png" measure={2} years="1 year" />
      </div>
    </div>
  );
}
