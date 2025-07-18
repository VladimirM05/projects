import { useContext, FC } from 'react';
import { ConferenceContext } from '@/providers/ConferenceData';
import OrgComBack from '@/assets/images/orgcom.png';
import './OrgCom.pcss';

const OrgCom: FC = () => {
  const { committeeManagerOrg, committeeManagerProg } = useContext(ConferenceContext)!;
  const committeeDataOrg = committeeManagerOrg.getState();
  const committeeDataProg = committeeManagerProg.getState();

  return (
    <section className="orgcom">
      <div className="orgcom-container">
        <img className="orgcom-img" src={OrgComBack} alt="orgcom title" />
        <div className="orgcom-colomns">
          <div className='orgcom-left-part'>
          <h2 className="orgcom-title-h2">Орг-комитет</h2>
            <h3 className="orgcom-title-h3">Сопредставители</h3>
            <ul className="orgcom-members-list">
              {committeeDataOrg["So-predstaviteli"].map((member, index) => (
                <li key={index} className="orgcom-member">
                  <strong>{member.name}</strong> - {member.affiliation}
                </li>
              ))}
            </ul>
			      <h3 className="orgcom-title-h3">Члены комитета</h3>
            <ul className="orgcom-members-list">
              {committeeDataOrg["ComitetMembers"].map((member, index) => (
                <li key={index} className="orgcom-member">
                  <strong>{member.name}</strong> - {member.affiliation}
                </li>
              ))}
            </ul>
          </div>
          <div className='orgcom-right-part'>
          <h2 className="orgcom-title-h2">Программный комитет</h2>
		  		<h3 className="orgcom-title-h3">Почетный председатель</h3>
            <ul className="orgcom-members-list">
              {committeeDataProg["ImportantMember"].map((member, index) => (
                <li key={index} className="orgcom-member">
                  <strong>{member.name}</strong> - {member.affiliation}
                </li>
              ))}
            </ul>
            <h3 className="orgcom-title-h3">Сопредседатели</h3>
            <ul className="orgcom-members-list">
              {committeeDataProg["So-Predsedatel"].map((member, index) => (
                <li key={index} className="orgcom-member">
                  <strong>{member.name}</strong> - {member.affiliation}
                </li>
              ))}
            </ul>
            <h3 className="orgcom-title-h3">Заместитель председателя</h3>
            <ul className="orgcom-members-list">
              {committeeDataProg["PredsedatelSup"].map((member, index) => (
                <li key={index} className="orgcom-member">
                  <strong>{member.name}</strong> - {member.affiliation}
                </li>
              ))}
            </ul>
            <h3 className="orgcom-title-h3">Члены комитета</h3>
            <ul className="orgcom-members-list">
              {committeeDataProg["CommitteeMember"].map((member, index) => (
                <li key={index} className="orgcom-member">
                  <strong>{member.name}</strong> - {member.affiliation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { OrgCom };