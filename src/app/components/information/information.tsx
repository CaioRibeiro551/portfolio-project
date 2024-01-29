import { SectionTitle } from '../sectionTitle/section-title';
import './information.scss';

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Análise e desenvolvimento de Sistemas Anhembi Morumbi</span>
      </div>
    </div>
  );
}
